import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, Users, MapPin, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const [schedules] = useState([
    {
      id: 1,
      title: "Property Viewing",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "123 Main Street",
      attendees: ["John Doe", "Jane Smith"],
      type: "viewing"
    },
    {
      id: 2,
      title: "Client Meeting",
      date: "2024-03-15",
      time: "2:00 PM",
      location: "Virtual Meeting",
      attendees: ["Mike Johnson"],
      type: "meeting"
    },
    {
      id: 3,
      title: "Property Inspection",
      date: "2024-03-16",
      time: "11:30 AM",
      location: "456 Oak Avenue",
      attendees: ["Sarah Wilson", "Tom Brown"],
      type: "inspection"
    }
  ]);

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Schedule</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Link to="/admin/analytics" className="hover:text-red-500 transition-colors">
            Dashboard
          </Link>
          <span className="mx-2">›</span>
          <span>Schedule</span>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-red-500 overflow-hidden">
            <div className="p-4 border-b border-red-500 flex justify-between items-center">
              <h2 className="font-medium text-gray-800">Upcoming Events</h2>
              <button className="text-sm text-red-500 hover:text-red-600 transition-colors">
                View All
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {schedules.map((schedule) => (
                <div key={schedule.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{schedule.title}</h3>
                      <div className="mt-1 space-y-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          {schedule.date} at {schedule.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          {schedule.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          {schedule.attendees.join(", ")}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-red-500 overflow-hidden">
            <div className="p-4 border-b border-red-500">
              <h2 className="font-medium text-gray-800">Calendar</h2>
            </div>
            <div className="p-4">
              {/* Calendar implementation can be added here */}
              <div className="text-center text-gray-500">
                Calendar widget will be implemented here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule; 