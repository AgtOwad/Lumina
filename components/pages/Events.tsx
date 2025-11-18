import React from 'react';
import { Calendar, MapPin, Clock, MoreHorizontal } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const events = [
  { 
    id: 1, 
    title: "Science Fair 2024", 
    date: "Aug 25", 
    time: "09:00 AM - 04:00 PM", 
    location: "Main Hall", 
    type: "Academic", 
    img: "https://img.freepik.com/free-vector/science-lab-concept-illustration_114360-10376.jpg?w=800",
    color: "blue"
  },
  { 
    id: 2, 
    title: "Football Tournament", 
    date: "Aug 28", 
    time: "02:00 PM", 
    location: "School Stadium", 
    type: "Sports", 
    img: "https://img.freepik.com/free-vector/soccer-players-action_23-2148666642.jpg?w=800",
    color: "orange"
  },
  { 
    id: 3, 
    title: "Art Exhibition", 
    date: "Sep 02", 
    time: "10:00 AM", 
    location: "Gallery Room", 
    type: "Art", 
    img: "https://img.freepik.com/free-vector/artist-painting-picture-concept-illustration_114360-5869.jpg?w=800",
    color: "pink"
  },
];

const Events: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex items-center justify-between animate-enter">
        <div>
           <h2 className="text-2xl font-bold text-slate-800">Upcoming Events</h2>
           <p className="text-slate-500 text-sm mt-1">Don't miss out on school activities</p>
        </div>
        <Button variant="secondary" size="sm">
          + Add Event
        </Button>
      </div>

      {/* Featured Event */}
      <div className="bg-gradient-to-r from-brand-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl shadow-brand-200 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 animate-enter delay-100 group">
        <div className="flex-1 relative z-10">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold tracking-wide uppercase mb-4 inline-block border border-white/10">Next Big Event</span>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">Annual Graduation Ceremony</h3>
          <div className="flex flex-wrap gap-6 text-brand-100 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Sep 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">10:00 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Grand Auditorium</span>
            </div>
          </div>
          <button className="bg-white text-brand-600 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Register Now
          </button>
        </div>
        <div className="w-full md:w-64 h-48 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center relative z-10 border border-white/20 group-hover:scale-105 transition-transform duration-500">
           <Calendar className="w-20 h-20 text-white/50" />
        </div>
        
        {/* Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-wave"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-soft"></div>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto p-1">
        {events.map((event, i) => (
          <Card key={event.id} className="hover:shadow-lg cursor-pointer group p-4 animate-enter" style={{ animationDelay: `${(i+2) * 100}ms` }}>
            <div className="h-40 rounded-2xl overflow-hidden mb-4 relative">
              <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm">
                {event.type}
              </div>
            </div>
            <div className="px-2 pb-2">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-slate-800 text-lg group-hover:text-brand-600 transition-colors">{event.title}</h4>
                <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal className="w-5 h-5" /></button>
              </div>
              <div className="space-y-2 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-500" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;