import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { User, Lock, Globe, Bell, Shield, Save, Moon, Sun } from 'lucide-react';
import { auth } from '../firebase';
import { updateProfile, updatePassword } from 'firebase/auth';

export const SettingsPage: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, user } = useAdminStore();
  const isRTL = language === 'ar';

  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [profileData, setProfileData] = useState({
    username: user?.displayName || 'Admin',
    email: user?.email || ''
  });

  const [securityData, setSecurityData] = useState({
    newPassword: ''
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        username: user.displayName || 'Admin',
        email: user.email || ''
      });
    }
  }, [user]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      if (activeTab === 'profile') {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: profileData.username
          });
          setMessage(isRTL ? 'تم حفظ التغييرات بنجاح' : 'Changes saved successfully');
        }
      } else if (activeTab === 'security') {
        if (auth.currentUser && securityData.newPassword) {
          // Note: This might require recent sign-in
          await updatePassword(auth.currentUser, securityData.newPassword);
          setMessage(isRTL ? 'تم تحديث كلمة المرور بنجاح' : 'Password updated successfully');
          setSecurityData({ newPassword: '' });
        }
      } else {
        // Preferences and notifications are handled locally for now
        setTimeout(() => {
          setLoading(false);
          setMessage(isRTL ? 'تم حفظ التغييرات بنجاح' : 'Changes saved successfully');
        }, 500);
        return;
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/requires-recent-login') {
        setMessage(isRTL ? 'يرجى تسجيل الدخول مرة أخرى لتغيير كلمة المرور' : 'Please sign in again to change password');
      } else {
        setMessage(err.message || (isRTL ? 'حدث خطأ في الاتصال' : 'Connection error'));
      }
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const tabs = [
    { id: 'profile', label: isRTL ? 'الملف الشخصي' : 'Profile', icon: User },
    { id: 'security', label: isRTL ? 'الأمان' : 'Security', icon: Shield },
    { id: 'preferences', label: isRTL ? 'التفضيلات' : 'Preferences', icon: Globe },
    { id: 'notifications', label: isRTL ? 'الإشعارات' : 'Notifications', icon: Bell },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'الإعدادات' : 'Settings'}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'إدارة إعدادات حسابك والنظام' : 'Manage your account and system settings'}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 md:p-8">
            <form onSubmit={handleSave}>
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'معلومات الملف الشخصي' : 'Profile Information'}</h2>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold overflow-hidden">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        profileData.username.charAt(0).toUpperCase() || 'A'
                      )}
                    </div>
                    <div>
                      <button type="button" className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        {isRTL ? 'تغيير الصورة' : 'Change Avatar'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {isRTL ? 'اسم المستخدم' : 'Username'}
                      </label>
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={e => setProfileData({...profileData, username: e.target.value})}
                        className="block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm py-3 px-4 transition-colors"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        disabled
                        className="block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700/30 text-slate-500 dark:text-slate-400 sm:text-sm py-3 px-4 cursor-not-allowed"
                        dir="ltr"
                      />
                      <p className="text-xs text-slate-500 mt-2">
                        {isRTL ? 'لا يمكن تغيير البريد الإلكتروني' : 'Email cannot be changed'}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'إعدادات الأمان' : 'Security Settings'}</h2>
                  
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {isRTL ? 'كلمة المرور الجديدة' : 'New Password'}
                      </label>
                      <div className="relative">
                        <div className={`absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          type="password"
                          value={securityData.newPassword}
                          onChange={e => setSecurityData({...securityData, newPassword: e.target.value})}
                          className={`block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm py-3 ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} transition-colors`}
                          dir="ltr"
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'تفضيلات النظام' : 'System Preferences'}</h2>
                  
                  <div className="space-y-6 max-w-md">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                        {isRTL ? 'لغة الواجهة' : 'Interface Language'}
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setLanguage('ar')}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold ${language === 'ar' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'}`}
                        >
                          العربية
                        </button>
                        <button
                          type="button"
                          onClick={() => setLanguage('en')}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold ${language === 'en' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'}`}
                        >
                          English
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                        {isRTL ? 'المظهر' : 'Theme'}
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => theme !== 'light' && toggleTheme()}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all font-bold ${theme === 'light' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'}`}
                        >
                          <Sun className="w-5 h-5" />
                          {isRTL ? 'فاتح' : 'Light'}
                        </button>
                        <button
                          type="button"
                          onClick={() => theme !== 'dark' && toggleTheme()}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all font-bold ${theme === 'dark' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600'}`}
                        >
                          <Moon className="w-5 h-5" />
                          {isRTL ? 'داكن' : 'Dark'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'إعدادات الإشعارات' : 'Notification Settings'}</h2>
                  
                  <div className="space-y-4">
                    {[
                      { id: 'email_alerts', label: isRTL ? 'تنبيهات البريد الإلكتروني' : 'Email Alerts', desc: isRTL ? 'تلقي تحديثات يومية عبر البريد' : 'Receive daily updates via email' },
                      { id: 'new_client', label: isRTL ? 'عميل جديد' : 'New Client', desc: isRTL ? 'إشعار عند تسجيل عميل جديد' : 'Notify when a new client registers' },
                      { id: 'payment', label: isRTL ? 'المدفوعات' : 'Payments', desc: isRTL ? 'إشعار عند استلام دفعة جديدة' : 'Notify when a new payment is received' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{item.label}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <div className="text-sm font-medium text-green-600 dark:text-green-400">
                  {message}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-light transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  {isRTL ? 'حفظ التغييرات' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
