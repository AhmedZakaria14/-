import React, { useEffect, useState } from 'react';
import { useAdminStore } from './store';
import { Users, CreditCard, TrendingUp, RefreshCcw, ArrowUpRight, ArrowDownRight, Clock, Target, CheckSquare, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, query, orderBy, limit, where } from 'firebase/firestore';

export const Dashboard: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const [data, setData] = useState<any>({
    stats: { activeClients: 0, totalRevenue: 0, pendingInvoices: 0, activeTasks: 0 },
    revenueData: [],
    upcomingEvents: [],
    recentActivity: [],
    recentClients: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activeClients = 0;
    let totalRevenue = 0;
    let pendingInvoices = 0;
    let activeTasks = 0;
    let upcomingEvents: any[] = [];
    let recentActivity: any[] = [];
    let recentClients: any[] = [];

    const updateData = () => {
      setData({
        stats: { activeClients, totalRevenue, pendingInvoices, activeTasks },
        revenueData: [
          { name: 'Jan', revenue: 2000 },
          { name: 'Feb', revenue: 3500 },
          { name: 'Mar', revenue: totalRevenue > 0 ? totalRevenue : 5000 },
          { name: 'Apr', revenue: 0 },
        ],
        upcomingEvents,
        recentActivity,
        recentClients
      });
      setLoading(false);
    };

    const unsubClients = onSnapshot(collection(db, 'clients'), (snapshot) => {
      activeClients = snapshot.docs.filter(doc => doc.data().status === 'Active').length;
      const allClients = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      recentClients = allClients.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 5);
      updateData();
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'clients'));

    const unsubInvoices = onSnapshot(collection(db, 'invoices'), (snapshot) => {
      totalRevenue = snapshot.docs.filter(doc => doc.data().status === 'Paid').reduce((sum, doc) => sum + (Number(doc.data().amount) || 0), 0);
      pendingInvoices = snapshot.docs.filter(doc => doc.data().status === 'Unpaid').length;
      updateData();
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'invoices'));

    const unsubTasks = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      activeTasks = snapshot.docs.filter(doc => doc.data().status !== 'Done').length;
      
      // Use tasks for recent activity
      const allTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      recentActivity = allTasks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 5).map(t => ({
        id: t.id,
        action: `Task "${t.title}" was updated`,
        time: t.createdAt ? new Date(t.createdAt).toLocaleString() : 'Recently'
      }));
      updateData();
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'tasks'));

    const today = new Date().toISOString().split('T')[0];
    const qEvents = query(collection(db, 'events'), where('date', '>=', today), orderBy('date', 'asc'), limit(5));
    const unsubEvents = onSnapshot(qEvents, (snapshot) => {
      upcomingEvents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      updateData();
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'events'));

    return () => {
      unsubClients();
      unsubInvoices();
      unsubTasks();
      unsubEvents();
    };
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  const stats = [
    { label: isRTL ? 'العملاء النشطون' : 'Active Clients', value: data.stats.activeClients, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100', trend: '+12%' },
    { label: isRTL ? 'إجمالي الإيرادات' : 'Total Revenue', value: data.stats.totalRevenue, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100', trend: '+18%' },
    { label: isRTL ? 'فواتير غير مدفوعة' : 'Pending Invoices', value: data.stats.pendingInvoices, icon: FileText, color: 'text-amber-600', bg: 'bg-amber-100', trend: '-5%' },
    { label: isRTL ? 'مهام نشطة' : 'Active Tasks', value: data.stats.activeTasks, icon: CheckSquare, color: 'text-purple-600', bg: 'bg-purple-100', trend: '+2%' },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'نظرة عامة' : 'Dashboard Overview'}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'مرحباً بك في لوحة تحكم NasharHub' : 'Welcome back to NasharHub Dashboard'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center text-sm font-medium ${stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.trend}
                {stat.trend.startsWith('+') ? <ArrowUpRight className="w-4 h-4 ml-1" /> : <ArrowDownRight className="w-4 h-4 ml-1" />}
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'نظرة عامة على الإيرادات' : 'Revenue Overview'}</h2>
          <div className="h-[300px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{isRTL ? 'الأحداث القادمة' : 'Upcoming Events'}</h2>
          <div className="space-y-6">
            {data.upcomingEvents && data.upcomingEvents.length > 0 ? (
              data.upcomingEvents.map((event: any) => (
                <div key={event.id} className="flex gap-4">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-900 dark:text-white font-medium">
                      {event.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {new Date(event.date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US')} {event.time}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-slate-400 text-sm italic">
                {isRTL ? 'لا توجد أحداث قادمة' : 'No upcoming events'}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{isRTL ? 'العملاء الأخيرون' : 'Recent Clients'}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700">
                <th className="pb-4 px-4">{isRTL ? 'العميل' : 'Client'}</th>
                <th className="pb-4 px-4">{isRTL ? 'الخطة' : 'Plan'}</th>
                <th className="pb-4 px-4">{isRTL ? 'الحالة' : 'Status'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {data.recentClients.map((client: any) => (
                <tr key={client.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900 dark:text-white">{client.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{client.plan}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${client.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                      {client.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
