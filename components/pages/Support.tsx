import React from 'react';
import { HelpCircle, MessageSquare, FileText, Mail, ChevronDown, Send } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const faqs = [
  { q: "How do I submit my homework?", a: "Navigate to the Assignments tab, click on the pending assignment, and use the upload button." },
  { q: "Can I change my class schedule?", a: "Schedule changes require approval from your academic advisor. Please submit a request form." },
  { q: "Where can I find my grade report?", a: "Go to Analytics > Reports to download your latest semester report card." },
];

const Support: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 animate-enter">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">How can we help you?</h2>
        <p className="text-slate-500 font-medium">Search for answers or contact our support team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <Card className="md:col-span-2 animate-enter delay-100">
          <h3 className="font-bold text-lg text-slate-800 mb-6 flex items-center gap-2">
            <Mail className="w-5 h-5 text-brand-500" />
            Send us a message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Name</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Your name" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none text-slate-600 transition-all cursor-pointer">
                  <option>Technical Issue</option>
                  <option>Academic Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
              <textarea rows={5} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none resize-none transition-all" placeholder="Describe your issue..."></textarea>
            </div>
            <Button fullWidth variant="secondary" icon={<Send className="w-4 h-4" />}>
              Submit Request
            </Button>
          </form>
        </Card>

        {/* FAQ & Info */}
        <div className="flex flex-col gap-6 animate-enter delay-200">
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-3xl p-6 text-white shadow-xl shadow-brand-200 relative overflow-hidden group">
             <div className="relative z-10">
               <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                 <HelpCircle className="w-6 h-6 text-white" />
               </div>
               <h3 className="text-xl font-bold mb-2">Need immediate help?</h3>
               <p className="text-brand-100 text-sm mb-6 font-medium">Our support team is available Mon-Fri, 9am - 5pm.</p>
               <button className="bg-white text-brand-600 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-50 transition-all shadow-sm w-full">Call Support</button>
             </div>
             <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          </div>

          <Card className="flex-1">
            <h3 className="font-bold text-slate-800 mb-4">Common Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl p-4 hover:border-brand-200 cursor-pointer transition-all hover:bg-gray-50 group">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-slate-700 group-hover:text-brand-600 transition-colors pr-4">{faq.q}</h4>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;