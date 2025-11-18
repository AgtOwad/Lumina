import React from 'react';
import { Search, Phone, Video, MoreVertical, Send, Paperclip } from 'lucide-react';
import Card from '../ui/Card';

const contacts = [
  { id: 1, name: 'Dr. Sarah Wilson', msg: 'Please review the assignment...', time: '10:30 AM', active: true, img: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Study Group A', msg: 'James: I can join at 5!', time: '09:15 AM', active: false, img: 'https://i.pravatar.cc/150?u=9' },
  { id: 3, name: 'Michael Brown', msg: 'Thanks for the help!', time: 'Yesterday', active: false, img: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Lisa Anderson', msg: 'Did you finish the history essay?', time: 'Yesterday', active: false, img: 'https://i.pravatar.cc/150?u=5' },
];

const messages = [
  { id: 1, type: 'received', text: "Hi Darrel, how is your research going for the final project?", time: "10:00 AM" },
  { id: 2, type: 'sent', text: "Hi Dr. Wilson! It's going well. I've gathered most of the data sources.", time: "10:15 AM" },
  { id: 3, type: 'received', text: "That's great to hear. Make sure to include the comparative analysis we discussed.", time: "10:20 AM" },
  { id: 4, type: 'sent', text: "Absolutely. I'm working on the charts right now. I should have a draft ready by Friday.", time: "10:25 AM" },
  { id: 5, type: 'received', text: "Please review the assignment guidelines one last time before submitting.", time: "10:30 AM" },
];

const Messages: React.FC = () => {
  return (
    <div className="flex h-full gap-6">
      {/* Contacts List - Left Side */}
      <Card className="w-80 flex-col hidden md:flex animate-enter" noPadding>
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Messages</h2>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border-none text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              className={`p-3 rounded-2xl flex gap-3 cursor-pointer transition-all duration-200 ${contact.active ? 'bg-brand-50 shadow-sm translate-x-1' : 'hover:bg-gray-50'}`}
            >
              <div className="relative">
                <img src={contact.img} alt={contact.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-bold text-sm truncate ${contact.active ? 'text-brand-900' : 'text-slate-700'}`}>{contact.name}</h4>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap font-medium">{contact.time}</span>
                </div>
                <p className={`text-xs truncate ${contact.active ? 'text-brand-700 font-medium' : 'text-slate-500'}`}>{contact.msg}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area - Right Side */}
      <Card className="flex-1 flex flex-col overflow-hidden animate-enter delay-100" noPadding>
        {/* Chat Header */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100 bg-white/95 backdrop-blur-sm z-10">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?u=1" alt="Dr. Sarah Wilson" className="w-10 h-10 rounded-full object-cover shadow-sm" />
            <div>
              <h3 className="font-bold text-slate-800">Dr. Sarah Wilson</h3>
              <p className="text-xs text-brand-500 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 hover:bg-gray-50 rounded-full text-slate-400 hover:text-brand-600 transition-all hover:scale-110"><Phone className="w-5 h-5" /></button>
            <button className="p-2.5 hover:bg-gray-50 rounded-full text-slate-400 hover:text-brand-600 transition-all hover:scale-110"><Video className="w-5 h-5" /></button>
            <button className="p-2.5 hover:bg-gray-50 rounded-full text-slate-400 hover:text-brand-600 transition-all hover:scale-110"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg, i) => (
            <div key={msg.id} className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-enter`} style={{ animationDelay: `${i * 50}ms` }}>
              <div className={`max-w-[70%] ${msg.type === 'sent' ? 'order-2' : 'order-1'}`}>
                <div className={`px-6 py-3.5 rounded-2xl shadow-sm text-sm leading-relaxed transition-all hover:shadow-md ${
                  msg.type === 'sent' 
                    ? 'bg-brand-600 text-white rounded-tr-sm' 
                    : 'bg-white text-slate-700 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
                <p className={`text-[10px] text-slate-400 font-medium mt-1.5 ${msg.type === 'sent' ? 'text-right' : 'text-left'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-2xl px-2 py-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-100 transition-all duration-300">
            <button className="p-2.5 hover:bg-gray-200 rounded-full text-slate-400 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 text-sm py-2 px-2"
            />
            <button className="p-3 bg-brand-600 hover:bg-brand-700 rounded-xl text-white transition-all shadow-md shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5 active:scale-95">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Messages;