import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAdminStore } from './store';
import { LayoutDashboard, Users, Calendar, Settings, LogOut, Menu, X, Moon, Sun, Target, CheckSquare, FileText } from 'lucide-react';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

export const AdminLayout: React.FC = () => {
  const { isAuthenticated, setAuth, language, setLanguage, theme, toggleTheme } = useAdminStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isRTL = language === 'ar';
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(true, user);
      } else {
        setAuth(false, null);
        if (location.pathname !== '/admin') navigate('/admin');
      }
    });

    return () => unsubscribe();
  }, [location.pathname, navigate, setAuth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAuth(false, null);
      navigate('/admin');
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  const navItems = [
    { icon: LayoutDashboard, label: { en: 'Dashboard', ar: 'لوحة القيادة' }, path: '/admin/dashboard' },
    { icon: Target, label: { en: 'Leads', ar: 'العملاء المحتملين' }, path: '/admin/leads' },
    { icon: Users, label: { en: 'Clients', ar: 'العملاء' }, path: '/admin/clients' },
    { icon: CheckSquare, label: { en: 'Tasks', ar: 'المهام' }, path: '/admin/tasks' },
    { icon: FileText, label: { en: 'Invoices', ar: 'الفواتير' }, path: '/admin/invoices' },
    { icon: Calendar, label: { en: 'Calendar', ar: 'التقويم' }, path: '/admin/calendar' },
    { icon: Settings, label: { en: 'Settings', ar: 'الإعدادات' }, path: '/admin/settings' },
  ];

  if (!isAuthenticated && location.pathname !== '/admin') return null;

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 ${theme}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 z-40 flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
            <Menu className="w-6 h-6" />
          </button>
          <div className="font-black text-xl tracking-tight text-primary dark:text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary dark:bg-blue-500 text-white flex items-center justify-center text-sm">NH</span>
            <span className="hidden sm:inline">NasharHub CRM</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200">
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 font-medium text-sm">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">{isRTL ? 'خروج' : 'Logout'}</span>
          </button>
        </div>
      </header>

      <aside className={`fixed top-16 ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} bottom-0 w-64 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 z-30 transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'}`}>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => { navigate(item.path); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{isRTL ? item.label.ar : item.label.en}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className={`pt-16 ${isRTL ? 'lg:pr-64' : 'lg:pl-64'} min-h-screen`}>
        <Outlet />
      </main>
    </div>
  );
};
