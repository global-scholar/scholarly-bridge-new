'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';

export default function ConferencesPage() {
  const conferences = [
    {
      id: 1,
      title: 'Digital Leadership Forum: AI & Academic Excellence',
      description: 'Explore how AI is transforming academic leadership and institutional excellence.',
      date: 'November 16-17, 2026',
      location: 'Vienna, Austria',
      format: 'Hybrid',
      participants: 150,
      image: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'AI in Education Summit',
      description: 'The latest trends and best practices in integrating AI into educational systems.',
      date: 'December 5-7, 2026',
      location: 'Virtual',
      format: 'Virtual',
      participants: 500,
      image: 'bg-gradient-to-br from-teal-500 to-teal-600',
    },
    {
      id: 3,
      title: 'Global Research Symposium',
      description: 'Connecting researchers from around the world to share breakthrough discoveries.',
      date: 'January 15-17, 2027',
      location: 'Singapore',
      format: 'In-Person',
      participants: 300,
      image: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Women in STEM Conference',
      description: 'Celebrating and supporting women researchers in science, technology, engineering, and mathematics.',
      date: 'February 10-12, 2027',
      location: 'Toronto, Canada',
      format: 'Hybrid',
      participants: 200,
      image: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
    {
      id: 5,
      title: 'Sustainable Development Goals Forum',
      description: 'Research and innovation for achieving the UN Sustainable Development Goals.',
      date: 'March 5-7, 2027',
      location: 'Virtual',
      format: 'Virtual',
      participants: 400,
      image: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      id: 6,
      title: 'Open Science & Open Access Conference',
      description: 'Advancing open science practices and democratizing access to research.',
      date: 'April 12-14, 2027',
      location: 'Berlin, Germany',
      format: 'Hybrid',
      participants: 250,
      image: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conferences</h1>
          <p className="text-xl text-gray-600">Discover and join academic conferences worldwide</p>
        </div>
      </div>

      {/* Conferences Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferences.map((conference) => (
            <div
              key={conference.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className={`${conference.image} h-40 flex items-center justify-center text-white`}>
                <div className="text-center">
                  <Calendar size={32} className="mx-auto mb-2" />
                  <p className="font-semibold">{conference.format}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {conference.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {conference.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{conference.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{conference.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{conference.participants} participants</span>
                  </div>
                </div>

                {/* Button */}
                <Link href={`/conference/${conference.id}`}>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition">
                    View Details <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Host Your Conference</h2>
          <p className="text-lg mb-8 text-blue-100">
            Are you organizing a conference? Join Scholarly Bridge and reach a global audience.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
