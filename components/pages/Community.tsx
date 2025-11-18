import React from 'react';
import { Search, MessageCircle, UserPlus } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const members = [
  { id: 1, name: "Sarah Johnson", role: "Math Teacher", img: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Michael Chen", role: "Class Representative", img: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Emma Davis", role: "Student", img: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "James Wilson", role: "Science Teacher", img: "https://i.pravatar.cc/150?u=4" },
  { id: 5, name: "Lisa Anderson", role: "Student", img: "https://i.pravatar.cc/150?u=5" },
  { id: 6, name: "David Miller", role: "Student", img: "https://i.pravatar.cc/150?u=6" },
  { id: 7, name: "Robert Taylor", role: "History Teacher", img: "https://i.pravatar.cc/150?u=7" },
  { id: 8, name: "Jennifer White", role: "Student", img: "https://i.pravatar.cc/150?u=8" },
];

const Community: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-enter">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Community</h2>
          <p className="text-slate-500 text-sm mt-1">Connect with teachers and classmates</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Find members..." 
              className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-64 transition-all focus:w-72"
            />
          </div>
          <Button icon={<UserPlus className="w-4 h-4" />}>Invite</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto p-1">
        {members.map((member, i) => (
          <Card 
            key={member.id} 
            className="flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-enter"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="w-24 h-24 rounded-full p-1 bg-white border-2 border-gray-100 mb-4 shadow-sm relative z-10 group-hover:border-brand-200 transition-colors">
               <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-lg text-slate-800 relative z-10">{member.name}</h3>
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mt-2 relative z-10 uppercase tracking-wide">{member.role}</span>
            
            <div className="mt-6 w-full relative z-10">
              <Button variant="ghost" fullWidth icon={<MessageCircle className="w-4 h-4" />} className="bg-slate-50 hover:text-brand-600">
                Message
              </Button>
            </div>

            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Community;