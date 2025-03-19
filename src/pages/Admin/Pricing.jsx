import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 29,
      description: 'Perfect for small real estate agencies',
      features: [
        'Up to 50 property listings',
        'Basic analytics',
        'Email support',
        'Basic property search',
        'Single agent account',
      ],
      notIncluded: [
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access',
      ]
    },
    {
      name: 'Professional',
      price: 99,
      description: 'Ideal for growing agencies',
      features: [
        'Up to 200 property listings',
        'Advanced analytics',
        'Priority email support',
        'Advanced property search',
        'Up to 5 agent accounts',
        'Basic API access',
        'Custom branding',
      ],
      notIncluded: [
        '24/7 phone support',
        'White-label solution',
      ]
    },
    {
      name: 'Enterprise',
      price: 299,
      description: 'For large real estate companies',
      features: [
        'Unlimited property listings',
        'Full analytics suite',
        '24/7 priority support',
        'Advanced search with AI',
        'Unlimited agent accounts',
        'Full API access',
        'White-label solution',
        'Custom development',
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Pricing Plans</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
            Dashboard
          </Link>
          <span className="mx-2">›</span>
          <span>Pricing</span>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className="bg-white rounded-xl border border-red-500 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6 border-b border-red-500">
              <h2 className="text-xl font-semibold text-gray-800">{plan.name}</h2>
              <p className="text-gray-500 mt-2">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-medium text-gray-800 mb-4">Features included:</h3>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full mt-6 bg-red-500 text-white py-2.5 rounded-lg hover:bg-red-600 
                  transition-colors duration-300 font-medium"
              >
                Choose {plan.name} Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing; 