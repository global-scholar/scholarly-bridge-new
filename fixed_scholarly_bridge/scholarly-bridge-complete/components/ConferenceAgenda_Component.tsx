import React, { useState } from 'react';
import { Clock, MapPin, Users, Zap, MessageSquare, ChevronDown, ChevronUp, BookOpen, Award } from 'lucide-react';

interface RoundtableSession {
  id: string;
  title: string;
  description: string;
  moderator: string;
  moderatorTitle: string;
  participants: number;
  maxParticipants: number;
  topics: string[];
  time: string;
  duration: string;
  room: string;
  format: 'virtual' | 'in-person' | 'hybrid';
  registered: boolean;
}

interface AgendaDay {
  date: string;
  dayName: string;
  sessions: RoundtableSession[];
}

/**
 * Conference Agenda Component with Roundtable Discussions
 * 
 * Features:
 * - Two-day agenda view
 * - Interactive roundtable discussions
 * - Moderator and participant information
 * - Registration for specific sessions
 * - Topic-based filtering
 * - Virtual/Hybrid/In-person format indicators
 */
export default function ConferenceAgenda() {
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<'all' | 'virtual' | 'in-person' | 'hybrid'>('all');
  const [registeredSessions, setRegisteredSessions] = useState<string[]>([]);

  const agendaDays: AgendaDay[] = [
    {
      date: '2026-11-16',
      dayName: 'Day 1 - Monday, November 16',
      sessions: [
        {
          id: 'session-1',
          title: 'Opening Keynote: AI Transformation in Academic Leadership',
          description: 'Join Elisabeth Schwab, Head of Data & Analytics at PALFINGER AG, as she shares insights on leveraging AI and data analytics to drive digital transformation in academic institutions.',
          moderator: 'Erik Hartman',
          moderatorTitle: 'Moderator, Advatera',
          participants: 45,
          maxParticipants: 150,
          topics: ['AI Strategy', 'Leadership', 'Digital Transformation'],
          time: '09:00',
          duration: '1.5 hours',
          room: 'Main Hall',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-1',
          title: 'Roundtable: Implementing ChatGPT in Academic Administration',
          description: 'An interactive roundtable discussion on practical applications of ChatGPT for academic administrators. Explore use cases, challenges, and best practices for integrating AI tools into daily operations.',
          moderator: 'Gabi Wüstenberg',
          moderatorTitle: 'Senior Consultant, Advatera',
          participants: 28,
          maxParticipants: 35,
          topics: ['ChatGPT', 'Academic Administration', 'AI Tools', 'Best Practices'],
          time: '10:45',
          duration: '1 hour',
          room: 'Room A',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-2',
          title: 'Roundtable: AI Ethics in Higher Education',
          description: 'Discuss ethical considerations when implementing AI in academic settings. Topics include bias in AI systems, student privacy, academic integrity, and responsible AI governance.',
          moderator: 'Marie Gonzalez',
          moderatorTitle: 'Ethics Consultant, Advatera',
          participants: 32,
          maxParticipants: 40,
          topics: ['AI Ethics', 'Privacy', 'Academic Integrity', 'Governance'],
          time: '12:00',
          duration: '1 hour',
          room: 'Room B',
          format: 'virtual',
          registered: false
        },
        {
          id: 'lunch-1',
          title: 'Networking Lunch',
          description: 'Enjoy lunch and connect with fellow academic leaders. Informal networking opportunity to discuss ideas and build relationships.',
          moderator: 'Advatera Team',
          moderatorTitle: 'Conference Organizers',
          participants: 150,
          maxParticipants: 150,
          topics: ['Networking', 'Community Building'],
          time: '13:00',
          duration: '1.5 hours',
          room: 'Dining Hall',
          format: 'in-person',
          registered: false
        },
        {
          id: 'roundtable-3',
          title: 'Roundtable: AI for Student Learning & Engagement',
          description: 'Explore how AI can enhance student learning outcomes and engagement. Discuss AI tutoring systems, personalized learning paths, and student support tools.',
          moderator: 'Volker Grünauer',
          moderatorTitle: 'Innovation Lead, Advatera',
          participants: 26,
          maxParticipants: 35,
          topics: ['Student Learning', 'Personalization', 'Engagement', 'EdTech'],
          time: '14:30',
          duration: '1 hour',
          room: 'Room C',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-4',
          title: 'Roundtable: Building AI-Ready Academic Teams',
          description: 'Discuss strategies for upskilling academic staff and building teams ready for AI integration. Topics include training programs, change management, and organizational culture.',
          moderator: 'Zina Hanesová',
          moderatorTitle: 'HR Business Partner, O2 Slovakia',
          participants: 30,
          maxParticipants: 40,
          topics: ['Team Development', 'Training', 'Change Management', 'Culture'],
          time: '15:45',
          duration: '1 hour',
          room: 'Room D',
          format: 'virtual',
          registered: false
        },
        {
          id: 'reception-1',
          title: 'Evening Reception & Networking',
          description: 'Join us for an evening reception with drinks and appetizers. Perfect opportunity to network with speakers and fellow attendees.',
          moderator: 'Advatera Team',
          moderatorTitle: 'Conference Organizers',
          participants: 120,
          maxParticipants: 150,
          topics: ['Networking', 'Social'],
          time: '17:00',
          duration: '2 hours',
          room: 'Terrace',
          format: 'in-person',
          registered: false
        }
      ]
    },
    {
      date: '2026-11-17',
      dayName: 'Day 2 - Tuesday, November 17',
      sessions: [
        {
          id: 'session-2',
          title: 'Morning Keynote: The Future of AI in Academic Research',
          description: 'Felicitas Kilga, Head of Advisory Services at Swiss Life Select Österreich, discusses the future of AI in academic research and innovation.',
          moderator: 'Marie Gonzalez',
          moderatorTitle: 'Moderator, Advatera',
          participants: 50,
          maxParticipants: 150,
          topics: ['AI Research', 'Innovation', 'Future Trends'],
          time: '09:00',
          duration: '1.5 hours',
          room: 'Main Hall',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-5',
          title: 'Roundtable: AI Tools for Research & Publication',
          description: 'Explore AI tools that can assist in research processes and academic publishing. Discuss literature review tools, writing assistants, and research analytics platforms.',
          moderator: 'Erik Hartman',
          moderatorTitle: 'Moderator, Advatera',
          participants: 24,
          maxParticipants: 35,
          topics: ['Research Tools', 'Publishing', 'Academic Writing', 'Analytics'],
          time: '10:45',
          duration: '1 hour',
          room: 'Room A',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-6',
          title: 'Roundtable: AI & Academic Equity',
          description: 'Discuss how AI can promote equity and inclusion in academia. Topics include accessibility, diversity, and removing barriers for underrepresented groups.',
          moderator: 'Gabi Wüstenberg',
          moderatorTitle: 'Senior Consultant, Advatera',
          participants: 28,
          maxParticipants: 40,
          topics: ['Equity', 'Inclusion', 'Accessibility', 'Diversity'],
          time: '12:00',
          duration: '1 hour',
          room: 'Room B',
          format: 'virtual',
          registered: false
        },
        {
          id: 'lunch-2',
          title: 'Lunch & Lightning Talks',
          description: 'Enjoy lunch while listening to short presentations from attendees sharing their AI implementation experiences.',
          moderator: 'Advatera Team',
          moderatorTitle: 'Conference Organizers',
          participants: 150,
          maxParticipants: 150,
          topics: ['Networking', 'Case Studies'],
          time: '13:00',
          duration: '1.5 hours',
          room: 'Dining Hall',
          format: 'in-person',
          registered: false
        },
        {
          id: 'roundtable-7',
          title: 'Roundtable: Strategic AI Roadmap for Universities',
          description: 'Develop a strategic roadmap for AI adoption in your institution. Discuss governance, investment priorities, and measuring success.',
          moderator: 'Volker Grünauer',
          moderatorTitle: 'Innovation Lead, Advatera',
          participants: 22,
          maxParticipants: 35,
          topics: ['Strategy', 'Planning', 'Investment', 'Governance'],
          time: '14:30',
          duration: '1 hour',
          room: 'Room C',
          format: 'hybrid',
          registered: false
        },
        {
          id: 'roundtable-8',
          title: 'Roundtable: Building Your AI Community of Practice',
          description: 'Learn how to build and sustain communities of practice around AI in academia. Discuss knowledge sharing, peer learning, and continuous improvement.',
          moderator: 'Zina Hanesová',
          moderatorTitle: 'HR Business Partner, O2 Slovakia',
          participants: 31,
          maxParticipants: 40,
          topics: ['Community', 'Knowledge Sharing', 'Peer Learning', 'Collaboration'],
          time: '15:45',
          duration: '1 hour',
          room: 'Room D',
          format: 'virtual',
          registered: false
        },
        {
          id: 'closing',
          title: 'Closing Ceremony & Awards',
          description: 'Join us for the closing ceremony. We will recognize outstanding contributions and announce next year\'s conference.',
          moderator: 'Erik Hartman',
          moderatorTitle: 'Conference Chair, Advatera',
          participants: 150,
          maxParticipants: 150,
          topics: ['Recognition', 'Closing'],
          time: '17:00',
          duration: '1 hour',
          room: 'Main Hall',
          format: 'hybrid',
          registered: false
        }
      ]
    }
  ];

  const toggleSessionRegistration = (sessionId: string) => {
    setRegisteredSessions(prev =>
      prev.includes(sessionId)
        ? prev.filter(id => id !== sessionId)
        : [...prev, sessionId]
    );
  };

  const getFormatColor = (format: string) => {
    const colors: Record<string, string> = {
      'virtual': 'bg-blue-100 text-blue-800',
      'in-person': 'bg-green-100 text-green-800',
      'hybrid': 'bg-purple-100 text-purple-800'
    };
    return colors[format] || 'bg-gray-100 text-gray-800';
  };

  const filteredDays = agendaDays.map(day => ({
    ...day,
    sessions: day.sessions.filter(session =>
      selectedFormat === 'all' || session.format === selectedFormat
    )
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-blue-900">Conference Agenda</h1>
          <p className="text-gray-600 mt-2">Digital Leadership Forum: AI & Academic Excellence</p>
          <p className="text-sm text-gray-500 mt-1">November 16-17, 2026 • Vienna, Austria (Hybrid)</p>
        </div>
      </div>

      {/* Format Filter */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3">
          <span className="text-sm font-medium text-gray-700 self-center">Filter by Format:</span>
          {[
            { id: 'all', label: 'All Sessions' },
            { id: 'hybrid', label: 'Hybrid' },
            { id: 'virtual', label: 'Virtual Only' },
            { id: 'in-person', label: 'In-Person Only' }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFormat(filter.id as any)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                selectedFormat === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Agenda */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        {filteredDays.map(day => (
          <div key={day.date} className="mb-12">
            {/* Day Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-t-lg p-6">
              <h2 className="text-2xl font-bold">{day.dayName}</h2>
              <p className="text-blue-100 mt-1">{day.sessions.length} sessions</p>
            </div>

            {/* Sessions */}
            <div className="space-y-4 bg-white rounded-b-lg p-6 border border-gray-200 border-t-0">
              {day.sessions.map((session, idx) => (
                <div
                  key={session.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Session Header */}
                  <div
                    onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
                    className="p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer flex items-start justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-fit">
                          <p className="text-sm font-bold">{session.time}</p>
                          <p className="text-xs">{session.duration}</p>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900">{session.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(session.format)}`}>
                              {session.format.charAt(0).toUpperCase() + session.format.slice(1)}
                            </span>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-200 text-gray-800 flex items-center gap-1">
                              <Users size={12} />
                              {session.participants}/{session.maxParticipants}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="ml-4 text-gray-500 hover:text-gray-700">
                      {expandedSession === session.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  {/* Session Details */}
                  {expandedSession === session.id && (
                    <div className="p-6 border-t border-gray-200 space-y-4">
                      <p className="text-gray-700 leading-relaxed">{session.description}</p>

                      {/* Topics */}
                      <div>
                        <p className="font-bold text-gray-900 mb-2">Topics Covered:</p>
                        <div className="flex flex-wrap gap-2">
                          {session.topics.map((topic, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Moderator */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Moderator/Speaker</p>
                        <p className="font-bold text-gray-900">{session.moderator}</p>
                        <p className="text-sm text-gray-600">{session.moderatorTitle}</p>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-blue-600" />
                        <span>{session.room}</span>
                      </div>

                      {/* Registration Button */}
                      <button
                        onClick={() => toggleSessionRegistration(session.id)}
                        className={`w-full font-bold py-3 rounded-lg transition-colors ${
                          registeredSessions.includes(session.id)
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'
                        }`}
                      >
                        {registeredSessions.includes(session.id)
                          ? '✓ Registered for this session'
                          : 'Register for this session'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Registered Sessions Summary */}
      {registeredSessions.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
          <p className="font-bold">{registeredSessions.length} sessions registered</p>
          <p className="text-sm">Check your email for confirmation</p>
        </div>
      )}
    </div>
  );
}
