import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const timeSlots = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const schedule = [
  { day: 0, time: 0, subject: "Mathematics", room: "Room 301", color: "bg-brand-100 border-brand-200 text-brand-700" },
  { day: 1, time: 1, subject: "Physics", room: "Lab 2", color: "bg-purple-100 border-purple-200 text-purple-700" },
  { day: 2, time: 0, subject: "History", room: "Room 105", color: "bg-orange-100 border-orange-200 text-orange-700" },
  { day: 3, time: 2, subject: "Biology", room: "Lab 1", color: "bg-teal-100 border-teal-200 text-teal-700" },
  { day: 4, time: 1, subject: "English", room: "Room 204", color: "bg-pink-100 border-pink-200 text-pink-700" },
  { day: 1, time: 4, subject: "Chemistry", room: "Lab 3", color: "bg-cyan-100 border-cyan-200 text-cyan-700" },
  { day: 3, time: 5, subject: "Art", room: "Studio A", color: "bg-indigo-100 border-indigo-200 text-indigo-700" },
];

const Timetable: React.FC = () => {
  return (
    <Card className="flex flex-col h-full overflow-hidden" noPadding>
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-20">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Weekly Schedule</h2>
          <p className="text-slate-500 text-sm mt-1">August 21 - August 27, 2024</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1.5">
          <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-white hover:shadow-sm"><ChevronLeft className="w-4 h-4" /></Button>
          <span className="text-sm font-bold text-slate-700 px-3">Week 34</span>
          <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-white hover:shadow-sm"><ChevronRight className="w-4 h-4" /></Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto custom-scrollbar bg-white">
        <div className="min-w-[800px]">
          {/* Days Header */}
          <div className="grid grid-cols-6 border-b border-gray-100">
            <div className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider border-r border-gray-50 bg-gray-50/50 sticky left-0 z-10">
              Time
            </div>
            {weekDays.map((day) => (
              <div key={day} className="p-4 text-center group hover:bg-gray-50 transition-colors">
                <span className="text-sm font-bold text-slate-700 block">{day}</span>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="relative">
            {timeSlots.map((time, timeIndex) => (
              <div key={time} className="grid grid-cols-6 min-h-[120px] border-b border-gray-50 animate-enter" style={{ animationDelay: `${timeIndex * 50}ms` }}>
                {/* Time Label */}
                <div className="p-4 text-xs font-medium text-slate-400 border-r border-gray-50 bg-gray-50/30 sticky left-0 z-10 flex items-start pt-4">
                  {time}
                </div>
                
                {/* Days Columns */}
                {weekDays.map((_, dayIndex) => {
                  const item = schedule.find(s => s.day === dayIndex && s.time === timeIndex);
                  return (
                    <div key={`${dayIndex}-${timeIndex}`} className="p-2 border-r border-gray-50/50 relative group">
                       {item && (
                         <div className={`h-full w-full rounded-2xl p-4 border ${item.color} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between`}>
                            <div>
                                <p className="font-bold text-sm mb-1">{item.subject}</p>
                                <p className="text-xs opacity-80 font-medium">{item.room}</p>
                            </div>
                            <div className="flex items-center gap-1.5 opacity-70">
                              <Clock className="w-3 h-3" />
                              <span className="text-[10px] font-bold">{time.split(' ')[0]}</span>
                            </div>
                         </div>
                       )}
                       {!item && (
                         <div className="w-full h-full hover:bg-gray-50/80 rounded-2xl transition-colors border border-transparent hover:border-dashed hover:border-gray-200"></div>
                       )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Timetable;