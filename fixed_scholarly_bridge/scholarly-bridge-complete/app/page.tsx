'use client';

import React from 'react';
import { Globe, Users, Award, Zap, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Scholarly Bridge</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#conference" className="text-gray-700 hover:text-blue-600 transition">Conferences</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/conference/register">
            <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
              Register Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
            <a href="#conference" className="block text-gray-700 hover:text-blue-600">Conferences</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
            <Link href="/conference/register">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">Register</button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Transform Academic Conferences into Global Knowledge Ecosystems
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Scholarly Bridge connects researchers, students, and institutions worldwide. Share knowledge, build networks, and advance your research with our comprehensive academic platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/conference/register">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition">
                Get Started <ArrowRight size={20} />
              </button>
            </Link>
            <Link href="/conference">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition">
                Explore Conferences
              </button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
            <Globe size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Global Reach</h3>
            <p className="text-blue-100">Connect with 50+ countries</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-xl">
            <Users size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Mentorship</h3>
            <p className="text-teal-100">Learn from experts</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl">
            <Award size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-purple-100">Earn certificates</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 rounded-xl">
            <Zap size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Virtual Rooms</h3>
            <p className="text-pink-100">Join live sessions</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Six Pillars of Scholarly Bridge
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Knowledge Sharing',
                description: 'Submit papers, present virtually, and access a comprehensive archive of academic content.',
                icon: '📚'
              },
              {
                title: 'Networking',
                description: 'Connect with researchers worldwide, find mentors, and build lasting professional relationships.',
                icon: '🤝'
              },
              {
                title: 'Professional Development',
                description: 'Access training modules, workshops, and career development resources.',
                icon: '🎓'
              },
              {
                title: 'Recognition',
                description: 'Earn certificates, badges, and recognition for your contributions to the community.',
                icon: '⭐'
              },
              {
                title: 'Infrastructure',
                description: 'Hybrid and virtual access, scheduling, registration, and accessibility features.',
                icon: '🔧'
              },
              {
                title: 'Global Engagement',
                description: 'Multilingual support, open access, and public engagement opportunities.',
                icon: '🌍'
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences Section */}
      <section id="conference" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Conferences
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Digital Leadership Forum',
                date: 'Nov 16-17, 2026',
                location: 'Vienna, Austria',
                participants: 150,
              },
              {
                title: 'AI in Education Summit',
                date: 'Dec 5-7, 2026',
                location: 'Virtual',
                participants: 500,
              },
              {
                title: 'Global Research Symposium',
                date: 'Jan 15-17, 2027',
                location: 'Singapore',
                participants: 300,
              },
            ].map((conf, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{conf.title}</h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p>📅 {conf.date}</p>
                  <p>📍 {conf.location}</p>
                  <p>👥 {conf.participants} participants</p>
                </div>
                <Link href="/conference">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/conference">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
                View All Conferences
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Global Scholar Community?</h2>
          <p className="text-xl mb-8 text-blue-100">Start your journey in academic excellence today</p>
          <Link href="/conference/register">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition">
              Register Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Scholarly Bridge</h3>
              <p className="text-gray-400">Transforming academic conferences into global knowledge ecosystems.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Conferences</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Members</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">License</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Scholarly Bridge. All rights reserved. | Made with ❤️ for the global research community</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
