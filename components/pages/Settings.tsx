import React, { useState } from 'react';
import { User, Bell, Lock, Eye, Globe, Moon, Smartphone, Mail, ShieldCheck, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Switch from '../ui/Switch';

type SettingsTabType = 'profile' | 'notifications' | 'security' | 'appearance' | 'language';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTabType>('profile');

  // Mock states for form elements
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifPush, setNotifPush] = useState(true);
  const [notifSms, setNotifSms] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Edit Profile</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" defaultValue="Darrel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" defaultValue="Stew" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-bold" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input type="email" defaultValue="darrel.stew@school.edu" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bio</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-medium resize-none" placeholder="Write something about yourself..."></textarea>
              </div>
              <div className="pt-6 border-t border-gray-50 flex justify-end gap-4">
                <Button variant="ghost" type="button">Cancel</Button>
                <Button variant="primary" type="button">Save Changes</Button>
              </div>
            </form>
          </div>
        );
      case 'notifications':
        return (
          <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Notifications</h3>
            <p className="text-slate-500 text-sm mb-8">Manage how you want to be notified</p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-brand-600 uppercase tracking-wider bg-brand-50 inline-block px-3 py-1 rounded-lg">Channels</h4>
                <div className="space-y-3 bg-gray-50 p-4 rounded-2xl">
                  <Switch label="Email Notifications" checked={notifEmail} onChange={setNotifEmail} />
                  <div className="h-px bg-gray-200"></div>
                  <Switch label="Push Notifications" checked={notifPush} onChange={setNotifPush} />
                  <div className="h-px bg-gray-200"></div>
                  <Switch label="SMS Alerts" checked={notifSms} onChange={setNotifSms} />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-brand-600 uppercase tracking-wider bg-brand-50 inline-block px-3 py-1 rounded-lg">Updates</h4>
                <div className="space-y-3 bg-gray-50 p-4 rounded-2xl">
                   <Switch label="New Assignments" checked={true} onChange={() => {}} />
                   <div className="h-px bg-gray-200"></div>
                   <Switch label="Grade Posted" checked={true} onChange={() => {}} />
                   <div className="h-px bg-gray-200"></div>
                   <Switch label="Event Reminders" checked={false} onChange={() => {}} />
                </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-50 flex justify-end">
                <Button variant="primary">Update Preferences</Button>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Security Settings</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-brand-500" /> Change Password
                </h4>
                <div className="space-y-4">
                  <input type="password" placeholder="Current Password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-sm" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="password" placeholder="New Password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-sm" />
                    <input type="password" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-sm" />
                  </div>
                  <Button variant="outline" size="sm">Update Password</Button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-500" /> Two-Factor Authentication
                </h4>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">2FA is currently enabled</p>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">Your account is secured. We will ask for a code sent to your device when you login from a new location.</p>
                  </div>
                  <Button variant="danger" size="sm" className="ml-auto">Disable</Button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'appearance':
        return (
          <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Appearance</h3>
            <div className="bg-gray-50 p-6 rounded-2xl space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 shadow-sm'}`}>
                      <Moon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Dark Mode</p>
                      <p className="text-xs text-slate-500">Switch to a darker theme for low-light environments</p>
                    </div>
                  </div>
                  <Switch checked={darkMode} onChange={setDarkMode} />
               </div>
               <div className="h-px bg-gray-200"></div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white text-slate-800 shadow-sm">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Compact Mode</p>
                      <p className="text-xs text-slate-500">Decrease padding and font size for higher density</p>
                    </div>
                  </div>
                  <Switch checked={compactMode} onChange={setCompactMode} />
               </div>
            </div>
          </div>
        );
      case 'language':
        return (
           <div className="animate-scale-in">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Language & Region</h3>
            <p className="text-slate-500 text-sm mb-8">Customize your localization preferences</p>

            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Display Language</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-bold cursor-pointer">
                  <option>English (United States)</option>
                  <option>English (United Kingdom)</option>
                  <option>Spanish (Español)</option>
                  <option>French (Français)</option>
                  <option>German (Deutsch)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time Zone</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all text-slate-700 text-sm font-bold cursor-pointer">
                  <option>(GMT-08:00) Pacific Time</option>
                  <option>(GMT-05:00) Eastern Time</option>
                  <option>(GMT+00:00) London</option>
                  <option>(GMT+01:00) Paris</option>
                </select>
              </div>
              
              <div className="pt-4">
                 <Button variant="primary">Save Preferences</Button>
              </div>
            </div>
           </div>
        );
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-8 animate-enter">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden group">
          <img src="https://picsum.photos/id/64/200/200" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Darrel Stew</h2>
          <p className="text-slate-500 font-medium mt-1">Student • Grade 11-A</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Navigation for Settings */}
        <div className="space-y-2">
          <SettingsTab 
            label="Edit Profile" 
            icon={<User />} 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')}
          />
          <SettingsTab 
            label="Notifications" 
            icon={<Bell />} 
            active={activeTab === 'notifications'} 
            onClick={() => setActiveTab('notifications')}
          />
          <SettingsTab 
            label="Security" 
            icon={<Lock />} 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')}
          />
          <SettingsTab 
            label="Appearance" 
            icon={<Eye />} 
            active={activeTab === 'appearance'} 
            onClick={() => setActiveTab('appearance')}
          />
          <SettingsTab 
            label="Language" 
            icon={<Globe />} 
            active={activeTab === 'language'} 
            onClick={() => setActiveTab('language')}
          />
        </div>

        {/* Main Form Area */}
        <Card className="md:col-span-2 min-h-[500px]">
          {renderContent()}
        </Card>
      </div>
    </div>
  );
};

const SettingsTab = ({ label, icon, active, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${active ? 'bg-white shadow-md text-brand-600 translate-x-2' : 'text-slate-500 hover:bg-white/50 hover:text-slate-700'}`}
  >
    {React.cloneElement(icon, { size: 18, className: active ? 'text-brand-600' : 'text-slate-400' })}
    <span className="font-bold text-sm">{label}</span>
  </div>
);

export default Settings;