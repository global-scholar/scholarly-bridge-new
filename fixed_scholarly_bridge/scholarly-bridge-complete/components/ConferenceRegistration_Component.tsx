import React, { useState } from 'react';
import { Calendar, MapPin, Users, Zap, CheckCircle, AlertCircle, Download, Share2 } from 'lucide-react';

interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  researchField: string;
  registrationType: 'free' | 'student' | 'professional' | 'vip';
  dietaryRestrictions: string;
  agreeToTerms: boolean;
}

interface ConferenceDetails {
  id: string;
  title: string;
  subtitle: string;
  dates: { start: string; end: string };
  location: string;
  format: 'virtual' | 'hybrid' | 'in-person';
  description: string;
  speakers: number;
  sessions: number;
  attendees: number;
  capacity: number;
}

/**
 * Conference Registration Component
 * 
 * Comprehensive registration system for Scholarly Bridge conferences including:
 * - Multiple registration types
 * - Form validation
 * - Confirmation and ticket generation
 * - Integration with agenda and roundtable discussions
 */
export default function ConferenceRegistration() {
  const [step, setStep] = useState<'info' | 'registration' | 'confirmation'>('info');
  const [formData, setFormData] = useState<RegistrationForm>({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    researchField: '',
    registrationType: 'free',
    dietaryRestrictions: '',
    agreeToTerms: false
  });

  const conference: ConferenceDetails = {
    id: 'conf-2026-001',
    title: 'Digital Leadership Forum: AI & Academic Excellence',
    subtitle: 'Education Track - Roundtable Discussions on AI in Academic Leadership',
    dates: { start: '2026-11-16', end: '2026-11-17' },
    location: 'Vienna, Austria (Hybrid)',
    format: 'hybrid',
    description: 'Join us for an exclusive two-day boutique conference exploring AI-driven digital transformation in academic leadership. This education track features interactive roundtable discussions on integrating ChatGPT and AI tools in academic institutions.',
    speakers: 12,
    sessions: 18,
    attendees: 150,
    capacity: 300
  };

  const registrationTypes = [
    { id: 'free', label: 'Educational Staff', price: '$0', description: 'Free for university staff' },
    { id: 'student', label: 'Student', price: '$29', description: 'For enrolled students' },
    { id: 'professional', label: 'Professional', price: '$99', description: 'For industry professionals' },
    { id: 'vip', label: 'VIP Access', price: '$199', description: 'Includes all meals & networking' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreeToTerms) {
      setStep('confirmation');
    }
  };

  const registrationFee = registrationTypes.find(t => t.id === formData.registrationType)?.price || '$0';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-blue-900">{conference.title}</h1>
          <p className="text-gray-600 mt-2">{conference.subtitle}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Nov 16-17, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{conference.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>{conference.attendees}/{conference.capacity} Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between mb-8">
          {[
            { step: 'info', label: 'Conference Info' },
            { step: 'registration', label: 'Registration' },
            { step: 'confirmation', label: 'Confirmation' }
          ].map((s, idx) => (
            <div key={s.step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                step === s.step ? 'bg-blue-600' : 
                ['info', 'registration'].includes(step) && idx < 2 ? 'bg-green-600' : 'bg-gray-300'
              }`}>
                {idx + 1}
              </div>
              <span className="ml-2 font-medium text-gray-700">{s.label}</span>
              {idx < 2 && <div className="w-12 h-1 bg-gray-300 ml-4" />}
            </div>
          ))}
        </div>

        {/* Step 1: Conference Info */}
        {step === 'info' && (
          <div className="space-y-8">
            {/* Conference Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conference Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{conference.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Sessions</p>
                  <p className="text-3xl font-bold text-blue-600">{conference.sessions}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Expert Speakers</p>
                  <p className="text-3xl font-bold text-green-600">{conference.speakers}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Spots Available</p>
                  <p className="text-3xl font-bold text-purple-600">{conference.capacity - conference.attendees}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-gray-900 mb-4">What You'll Experience</h3>
                <ul className="space-y-2">
                  {[
                    'Interactive roundtable discussions on AI in academic leadership',
                    'Live demonstrations of ChatGPT and AI tools for education',
                    'Networking with 150+ academic leaders and professionals',
                    'Access to exclusive resources and best practices',
                    'Certificate of participation',
                    'Hybrid format: Join in Vienna or online'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setStep('registration')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Continue to Registration
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Registration Form */}
        {step === 'registration' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@university.edu"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your University"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Research Field *</label>
                    <select
                      name="researchField"
                      value={formData.researchField}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a field</option>
                      <option value="education">Education & Academic Leadership</option>
                      <option value="technology">Technology & AI</option>
                      <option value="business">Business & Management</option>
                      <option value="communications">Communications & Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Registration Type */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Registration Type *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {registrationTypes.map(type => (
                    <label key={type.id} className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.registrationType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <input
                        type="radio"
                        name="registrationType"
                        value={type.id}
                        checked={formData.registrationType === type.id}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{type.label}</p>
                        <p className="text-sm text-gray-600">{type.description}</p>
                        <p className="font-bold text-blue-600 mt-2">{type.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Additional Information</h3>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Restrictions (Optional)</label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Please let us know if you have any dietary restrictions"
                  rows={3}
                />
              </div>

              {/* Terms & Conditions */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the conference terms and conditions, privacy policy, and code of conduct. I understand that my information will be used to send conference updates and materials.
                  </span>
                </label>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.agreeToTerms}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 'confirmation' && (
          <div className="space-y-8">
            {/* Success Message */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Confirmed!</h2>
              <p className="text-gray-700 mb-4">
                Thank you for registering for {conference.title}
              </p>
              <p className="text-sm text-gray-600">
                A confirmation email has been sent to <strong>{formData.email}</strong>
              </p>
            </div>

            {/* Ticket Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Your Registration Details</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Attendee Name:</span>
                  <span className="font-bold text-gray-900">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-bold text-gray-900">{formData.email}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Institution:</span>
                  <span className="font-bold text-gray-900">{formData.institution}</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Registration Type:</span>
                  <span className="font-bold text-gray-900">
                    {registrationTypes.find(t => t.id === formData.registrationType)?.label}
                  </span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold text-gray-900">{registrationFee}</span>
                </div>
                <div className="flex justify-between pt-4">
                  <span className="text-gray-600 font-bold">Confirmation Number:</span>
                  <span className="font-bold text-blue-600">SB-2026-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-bold text-gray-900 mb-4">What's Next?</h4>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Check your email for confirmation and login credentials</li>
                  <li>2. Access the conference agenda and roundtable discussions</li>
                  <li>3. Register for specific sessions and roundtables</li>
                  <li>4. Join the conference community and networking groups</li>
                  <li>5. Receive your certificate upon completion</li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                  <Download size={20} />
                  Download Ticket
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-colors">
                  <Share2 size={20} />
                  Share Registration
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
                  <Zap size={20} />
                  View Agenda
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
