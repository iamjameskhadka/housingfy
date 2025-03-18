import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  HelpCircle,
  Book,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  ChevronDown,
  ChevronRight,
  PlayCircle,
  BookOpen,
  Download,
  ExternalLink
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const faqs = [
    {
      category: 'getting-started',
      items: [
        {
          id: 1,
          question: 'How do I create a new property listing?',
          answer: 'To create a new property listing, go to Properties > Add New Property. Fill in the required details including property information, photos, and pricing.'
        },
        {
          id: 2,
          question: 'How can I manage my agent accounts?',
          answer: 'Navigate to Agents section in the sidebar. Here you can add, edit, or remove agent accounts and manage their permissions.'
        }
      ]
    },
    {
      category: 'transactions',
      items: [
        {
          id: 3,
          question: 'How do I process a property transaction?',
          answer: 'Go to Transactions > New Transaction. Select the property and buyer, then follow the step-by-step process to complete the transaction.'
        },
        {
          id: 4,
          question: 'How can I generate transaction reports?',
          answer: 'In the Transactions section, use the Reports feature to generate custom reports based on date range and transaction type.'
        }
      ]
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started Guide',
      duration: '5 min',
      thumbnail: 'https://placehold.co/300x200',
      category: 'Basics'
    },
    {
      id: 2,
      title: 'Property Management',
      duration: '8 min',
      thumbnail: 'https://placehold.co/300x200',
      category: 'Advanced'
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaqs(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Help Center</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
            Real Estate
          </Link>
          <span className="mx-2">›</span>
          <span>Help</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 mb-8">
        <h2 className="text-white text-2xl font-medium mb-4 text-center">
          How can we help you today?
        </h2>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg focus:outline-none focus:ring-2
              focus:ring-white/50 bg-white/10 text-white placeholder-white/70"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-red-500 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <Book className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-medium">Documentation</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Detailed guides and documentation for all features
          </p>
          <Link to="#" className="text-red-500 hover:text-red-600 flex items-center gap-2">
            View Documentation
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 border border-red-500 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <MessageCircle className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-medium">Live Chat Support</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Chat with our support team in real-time
          </p>
          <button className="text-red-500 hover:text-red-600 flex items-center gap-2">
            Start Chat
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white rounded-xl p-6 border border-red-500 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <PlayCircle className="w-8 h-8 text-red-500" />
            <h3 className="text-lg font-medium">Video Tutorials</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Learn through our video tutorial series
          </p>
          <Link to="#" className="text-red-500 hover:text-red-600 flex items-center gap-2">
            Watch Tutorials
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-red-500 overflow-hidden">
            <div className="p-4 border-b border-red-500">
              <h3 className="font-medium text-gray-800">Categories</h3>
            </div>
            <nav className="p-2">
              {['getting-started', 'transactions', 'properties', 'agents', 'reports'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full px-4 py-2 rounded-lg text-left capitalize
                    ${activeCategory === category
                      ? 'bg-red-50 text-red-500'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="col-span-9">
          <div className="bg-white rounded-xl border border-red-500">
            {/* FAQs */}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs
                  .find(faq => faq.category === activeCategory)?.items
                  .map(faq => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-4 py-3 flex items-center justify-between text-left"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform
                            ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-4 pb-4 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Video Tutorials */}
            <div className="border-t border-red-500 p-6">
              <h2 className="text-xl font-semibold mb-6">Video Tutorials</h2>
              <div className="grid grid-cols-2 gap-6">
                {tutorials.map(tutorial => (
                  <div key={tutorial.id} className="group cursor-pointer">
                    <div className="relative mb-3">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50
                        transition-colors rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white" />
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/70 text-white
                        text-sm px-2 py-1 rounded">
                        {tutorial.duration}
                      </span>
                    </div>
                    <h3 className="font-medium group-hover:text-red-500 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-sm text-gray-500">{tutorial.category}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="border-t border-red-500 p-6">
              <h2 className="text-xl font-semibold mb-6">Need More Help?</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-red-500" />
                    <h3 className="font-medium">Email Support</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Get help via email. We typically respond within 24 hours.
                  </p>
                  <a href="mailto:support@example.com"
                    className="text-red-500 hover:text-red-600">
                    support@example.com
                  </a>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-red-500" />
                    <h3 className="font-medium">Phone Support</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Available Monday to Friday, 9AM-5PM EST
                  </p>
                  <a href="tel:+1234567890"
                    className="text-red-500 hover:text-red-600">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
