import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Lock,
  User,
  Mail,
  Phone,
  Globe,
  CreditCard,
  Shield,
  BellRing,
  Palette,
  Layout,
  Save,
  MessageSquare,
  Smartphone,
  Zap,
  Database,
  FileText,
  Languages,
  Clock,
  DollarSign,
  Calendar,
  Upload,
  Image,
  Monitor,
  Moon,
  Sun,
  Key,
  AlertTriangle,
  Activity,
  BarChart2,
  Cookie,
  Webhook
} from 'lucide-react';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    // Profile Settings
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    role: 'Administrator',
    bio: 'Senior Real Estate Administrator',
    location: 'New York, USA',
    website: 'www.johndoe.com',
    socialLinks: {
      twitter: '@johndoe',
      linkedin: 'linkedin.com/in/johndoe',
      facebook: 'facebook.com/johndoe'
    },

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    newsUpdates: true,
    propertyAlerts: true,
    transactionNotifications: true,
    messageNotifications: true,
    systemUpdates: true,

    // Appearance Settings
    theme: 'light',
    sidebarColor: 'default',
    fontSize: 'medium',
    colorScheme: 'default',
    compactMode: false,
    animationEnabled: true,
    borderRadius: 'medium',
    menuLayout: 'vertical',
    dashboardStyle: 'modern',

    // Security Settings
    twoFactorAuth: false,
    loginAlerts: true,
    passwordExpiry: '90days',
    sessionTimeout: '30mins',
    ipWhitelist: [],
    lastPasswords: [],
    securityQuestions: {
      question1: '',
      answer1: '',
      question2: '',
      answer2: ''
    },
    deviceHistory: [],

    // System Settings
    language: 'English',
    timeZone: 'UTC-5',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    measurementUnit: 'imperial',
    autoBackup: true,
    dataRetention: '12months',
    exportData: false,
    analyticsTracking: true,
    errorReporting: true,
    performanceMode: 'balanced',

    // Privacy Settings
    analyticsTracking: true,
    personalizedAds: false,
    performanceCookies: true,
    functionalCookies: true,
    marketingCookies: false,

    // Integration Settings
    webhooksEnabled: false,
    connectedServices: {
      googleCalendar: true,
      dropbox: false,
      slack: true,
      zoom: true
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (section) => {
    console.log(`Saving ${section} settings:`, formData);
    // Add your save logic here
  };

  // New functions for additional features
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecurityQuestion = (e, number) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      securityQuestions: {
        ...prev.securityQuestions,
        [`${name}${number}`]: value
      }
    }));
  };

  const handleBackupNow = () => {
    console.log('Initiating backup...');
    // Add backup logic here
  };

  const handleExportData = () => {
    console.log('Exporting data...');
    // Add export logic here
  };

  const handleResetSettings = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      // Add reset logic here
    }
  };

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/dashboard" className="hover:text-red-500 transition-colors">
            Real Estate
          </Link>
          <span className="mx-2">›</span>
          <span>Settings</span>
        </div>
      </div>

      {/* Settings Container */}
      <div className="bg-white rounded-xl shadow-sm border border-red-500">
        <div className="grid grid-cols-12 min-h-[600px]">
          {/* Enhanced Sidebar */}
          <div className="col-span-3 border-r border-red-500">
            <nav className="p-4 space-y-2">
              {/* Profile Section */}
              <div className="mb-6">
                <div className="flex items-center gap-3 px-3 py-2">
                  <img
                    src={formData.avatar}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">{formData.fullName}</h3>
                    <p className="text-sm text-gray-500">{formData.role}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              {[
                { id: 'profile', icon: <User size={20} />, label: 'Profile Settings' },
                { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications' },
                { id: 'appearance', icon: <Palette size={20} />, label: 'Appearance' },
                { id: 'security', icon: <Shield size={20} />, label: 'Security' },
                { id: 'system', icon: <Layout size={20} />, label: 'System' },
                { id: 'backup', icon: <Database size={20} />, label: 'Backup & Restore' },
                { id: 'privacy', icon: <Lock size={20} />, label: 'Privacy' },
                { id: 'integration', icon: <Zap size={20} />, label: 'Integrations' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
                    ${activeTab === item.id ? 'bg-red-50 text-red-500' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="col-span-9 p-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <img
                      src={formData.avatar}
                      alt="Profile"
                      className="w-20 h-20 rounded-full"
                    />
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      Change Avatar
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        readOnly
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="text-gray-500" />
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive email updates</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={formData.emailNotifications}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                        peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                        after:left-[2px] after:bg-white after:border-gray-300 after:border
                        after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-red-500">
                      </div>
                    </label>
                  </div>

                  {/* Add more notification settings similarly */}
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Appearance Settings</h2>
                <div className="space-y-6">
                  {/* Theme Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Theme Mode
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleChange({ target: { name: 'theme', value: 'light' } })}
                        className={`p-4 border rounded-lg flex items-center gap-3
                          ${formData.theme === 'light' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      >
                        <div className="w-10 h-10 bg-white border rounded-full"></div>
                        <div>
                          <p className="font-medium">Light Mode</p>
                          <p className="text-sm text-gray-500">Default light theme</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleChange({ target: { name: 'theme', value: 'dark' } })}
                        className={`p-4 border rounded-lg flex items-center gap-3
                          ${formData.theme === 'dark' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      >
                        <div className="w-10 h-10 bg-gray-900 border rounded-full"></div>
                        <div>
                          <p className="font-medium">Dark Mode</p>
                          <p className="text-sm text-gray-500">Easier on the eyes</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Font Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Font Size
                    </label>
                    <select
                      name="fontSize"
                      value={formData.fontSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  {/* Sidebar Color */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sidebar Color
                    </label>
                    <div className="grid grid-cols-4 gap-4">
                      {['default', 'blue', 'green', 'purple'].map((color) => (
                        <button
                          key={color}
                          onClick={() => handleChange({ target: { name: 'sidebarColor', value: color } })}
                          className={`h-12 rounded-lg border-2 capitalize
                            ${formData.sidebarColor === color ? 'border-red-500' : 'border-gray-200'}
                            ${color === 'default' ? 'bg-red-500' : `bg-${color}-500`}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  {/* Two Factor Authentication */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="text-gray-500" />
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        checked={formData.twoFactorAuth}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                        peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                        after:left-[2px] after:bg-white after:border-gray-300 after:border
                        after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-red-500">
                      </div>
                    </label>
                  </div>

                  {/* Login Alerts */}
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <BellRing className="text-gray-500" />
                      <div>
                        <h3 className="font-medium">Login Alerts</h3>
                        <p className="text-sm text-gray-500">Get notified of new logins</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="loginAlerts"
                        checked={formData.loginAlerts}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                        peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                        after:left-[2px] after:bg-white after:border-gray-300 after:border
                        after:rounded-full after:h-5 after:w-5 after:transition-all
                        peer-checked:bg-red-500">
                      </div>
                    </label>
                  </div>

                  {/* Change Password */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Lock className="text-gray-500" />
                      <h3 className="font-medium">Change Password</h3>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                          focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* System Settings */}
            {activeTab === 'system' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">System Settings</h2>
                <div className="grid grid-cols-2 gap-6">
                  {/* Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Language
                    </label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                  </div>

                  {/* Time Zone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <select
                      name="timeZone"
                      value={formData.timeZone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="UTC-5">Eastern Time (UTC-5)</option>
                      <option value="UTC-6">Central Time (UTC-6)</option>
                      <option value="UTC-7">Mountain Time (UTC-7)</option>
                      <option value="UTC-8">Pacific Time (UTC-8)</option>
                    </select>
                  </div>

                  {/* Date Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date Format
                    </label>
                    <select
                      name="dateFormat"
                      value={formData.dateFormat}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* New Backup & Restore Tab */}
            {activeTab === 'backup' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Backup & Restore</h2>
                <div className="space-y-6">
                  {/* Auto Backup Settings */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Database className="text-gray-500" />
                        <div>
                          <h3 className="font-medium">Automatic Backup</h3>
                          <p className="text-sm text-gray-500">Backup your data automatically</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="autoBackup"
                          checked={formData.autoBackup}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                          peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                          peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                          after:left-[2px] after:bg-white after:border-gray-300 after:border
                          after:rounded-full after:h-5 after:w-5 after:transition-all
                          peer-checked:bg-red-500">
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Manual Backup */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4">Manual Backup</h3>
                    <button
                      onClick={handleBackupNow}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600
                        transition-colors flex items-center gap-2"
                    >
                      <Database size={16} />
                      Backup Now
                    </button>
                  </div>

                  {/* Export Data */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4">Export Data</h3>
                    <button
                      onClick={handleExportData}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50
                        transition-colors flex items-center gap-2"
                    >
                      <FileText size={16} />
                      Export as CSV
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
                <div className="space-y-6">
                  {/* Data Collection */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <Shield className="text-gray-500" />
                      Data Collection & Usage
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Analytics Tracking</p>
                          <p className="text-sm text-gray-500">Allow us to collect usage data to improve our services</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="analyticsTracking"
                            checked={formData.analyticsTracking}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                            peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                            after:left-[2px] after:bg-white after:border-gray-300 after:border
                            after:rounded-full after:h-5 after:w-5 after:transition-all
                            peer-checked:bg-red-500">
                          </div>
                        </label>
                      </label>

                      <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Personalized Ads</p>
                          <p className="text-sm text-gray-500">Show personalized ads based on your interests</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="personalizedAds"
                            checked={formData.personalizedAds}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                            peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                            after:left-[2px] after:bg-white after:border-gray-300 after:border
                            after:rounded-full after:h-5 after:w-5 after:transition-all
                            peer-checked:bg-red-500">
                          </div>
                        </label>
                      </label>
                    </div>
                  </div>

                  {/* Cookie Preferences */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <Cookie className="text-gray-500" />
                      Cookie Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Essential Cookies</p>
                          <p className="text-sm text-gray-500">Required for the website to function</p>
                        </div>
                        <span className="text-sm text-gray-500">Always Active</span>
                      </div>

                      {['Performance', 'Functional', 'Marketing'].map((type) => (
                        <label key={type} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{type} Cookies</p>
                            <p className="text-sm text-gray-500">Used for {type.toLowerCase()} purposes</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              name={`${type.toLowerCase()}Cookies`}
                              checked={formData[`${type.toLowerCase()}Cookies`]}
                              onChange={handleChange}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                              peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                              peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                              after:left-[2px] after:bg-white after:border-gray-300 after:border
                              after:rounded-full after:h-5 after:w-5 after:transition-all
                              peer-checked:bg-red-500">
                            </div>
                          </label>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Data Deletion */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2 text-red-500">
                      <AlertTriangle className="text-red-500" />
                      Delete Account Data
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="px-4 py-2 bg-red-50 text-red-500 border border-red-200 rounded-lg
                      hover:bg-red-100 transition-colors">
                      Request Account Deletion
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Integrations Tab */}
            {activeTab === 'integration' && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Integrations</h2>
                <div className="space-y-6">
                  {/* Connected Services */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        name: 'Google Calendar',
                        icon: '🗓️',
                        status: 'connected',
                        description: 'Sync your property viewings'
                      },
                      {
                        name: 'Dropbox',
                        icon: '📁',
                        status: 'disconnected',
                        description: 'Store property documents'
                      },
                      {
                        name: 'Slack',
                        icon: '💬',
                        status: 'connected',
                        description: 'Team communication'
                      },
                      {
                        name: 'Zoom',
                        icon: '🎥',
                        status: 'connected',
                        description: 'Virtual property tours'
                      }
                    ].map((service) => (
                      <div key={service.name} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h3 className="font-medium">{service.name}</h3>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                          </div>
                          <button
                            className={`px-3 py-1 rounded-full text-sm
                              ${service.status === 'connected'
                                ? 'bg-green-100 text-green-600'
                                : 'bg-gray-100 text-gray-600'
                              }`}
                          >
                            {service.status === 'connected' ? 'Connected' : 'Connect'}
                          </button>
                        </div>
                        {service.status === 'connected' && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Last synced: 2 hours ago</span>
                            <button className="text-red-500 hover:text-red-600">Disconnect</button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* API Access */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <Key className="text-gray-500" />
                      API Access
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">API Key</p>
                          <p className="font-mono text-sm text-gray-500">••••••••-••••-••••-••••-••••••••••••</p>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600 text-sm">
                          Reveal
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200
                          transition-colors flex items-center gap-2">
                          <Key size={16} />
                          Generate New Key
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg
                          hover:bg-gray-50 transition-colors">
                          View Documentation
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Webhooks */}
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <Webhook className="text-gray-500" />
                      Webhooks
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Endpoint URL</p>
                          <p className="text-sm text-gray-500">https://api.yourwebsite.com/webhook</p>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600 text-sm">
                          Edit
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="webhooksEnabled"
                            checked={formData.webhooksEnabled}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                            peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                            after:left-[2px] after:bg-white after:border-gray-300 after:border
                            after:rounded-full after:h-5 after:w-5 after:transition-all
                            peer-checked:bg-red-500">
                          </div>
                        </label>
                        <span className="text-sm text-gray-500">Enable webhooks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleResetSettings}
                className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700
                  rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset to Default
              </button>
              <button
                onClick={() => handleSave(activeTab)}
                className="flex items-center gap-2 px-6 py-2.5 bg-red-500 text-white rounded-lg
                  hover:bg-red-600 transition-colors"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

