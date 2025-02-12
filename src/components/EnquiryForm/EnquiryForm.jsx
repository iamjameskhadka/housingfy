import { useState, useCallback } from "react";
import { X } from "lucide-react";

const PHONE_REGEX = /^(\+977|0)?[9][6-9]\d{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormField = ({ label, error, children, required = false }) => (
  <div>
    <label className="block text-gray-700 mb-2">
      {label}{required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    projectType: "",
    whatsappChecked: false,
    newsletterChecked: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Validate single field
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        return !value.trim() ? "Name is required" : "";
      case 'mobile':
        return !value.trim()
          ? "Mobile number is required"
          : !PHONE_REGEX.test(value)
            ? "Please enter a valid Nepali phone number"
            : "";
      case 'email':
        return !value.trim()
          ? "Email is required"
          : !EMAIL_REGEX.test(value)
            ? "Please enter a valid email address"
            : "";
      case 'projectType':
        return !value ? "Please select a project type" : "";
      default:
        return "";
    }
  }, []);

  // Handle field change with validation
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Validate field on change
    const error = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: '', message: '' });

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'whatsappChecked' && key !== 'newsletterChecked') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Form submitted successfully!'
        });
        setTimeout(onClose, 2000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error submitting form. Please try again.'
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full max-w-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-red-500">ENQUIRE NOW</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close form"
        >
          <X size={24} />
        </button>
      </div>

      {/* Status Message */}
      {submitStatus.message && (
        <div className={`mb-4 p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
          {submitStatus.message}
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <FormField label="Your Name" error={errors.name} required>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} 
              pb-2 focus:outline-none focus:border-red-500 transition-colors`}
            placeholder="Your Name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Mobile" error={errors.mobile} required>
          <div className="relative">
            <span className="absolute left-0 top-2 text-gray-600">🇳🇵 +977</span>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full border-b ${errors.mobile ? 'border-red-500' : 'border-gray-300'} 
                pb-2 pl-16 focus:outline-none focus:border-red-500 transition-colors`}
              placeholder="Your Mobile"
              autoComplete="tel"
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="whatsappChecked"
              checked={formData.whatsappChecked}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300"
            />
            <label className="ml-2 text-sm text-red-600">
              Do you have WhatsApp activated on this number?
            </label>
          </div>
        </FormField>

        <FormField label="Your Email" error={errors.email} required>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} 
              pb-2 focus:outline-none focus:border-red-500 transition-colors`}
            placeholder="Enter Your Email"
            autoComplete="email"
          />
        </FormField>

        <FormField label="Projects Type" error={errors.projectType} required>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full border-b ${errors.projectType ? 'border-red-500' : 'border-gray-300'} 
              pb-2 focus:outline-none focus:border-red-500 transition-colors`}
          >
            <option value="" disabled>Select Project Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
          </select>
        </FormField>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="newsletterChecked"
            checked={formData.newsletterChecked}
            onChange={handleChange}
            className="w-4 h-4 mt-1 rounded border-gray-300"
          />
          <label className="ml-2 text-sm text-red-600">
            Yes, I want to stay informed and receive newsletter and marketing updates.
          </label>
        </div>

        <p className="text-sm text-gray-600">
          By submitting this form you agree to the{" "}
          <a href="#" className="text-gray-800 font-semibold">Terms and Conditions</a>{" "}
          and{" "}
          <a href="#" className="text-gray-800 font-semibold">Privacy Policy</a>.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full  bg-white text-black py-3 rounded hover:bg-red-500 
            transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm; 