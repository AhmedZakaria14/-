import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users, X, Loader2, Trash2 } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, eachDayOfInterval } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc, addDoc, query, orderBy } from 'firebase/firestore';
import { ConfirmModal } from './components/ConfirmModal';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  client: string;
  type: string;
  createdAt?: number;
}

export const CalendarPage: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const locale = isRTL ? ar : enUS;
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '', date: format(new Date(), 'yyyy-MM-dd'), time: '10:00', client: '', type: 'Meeting'
  });
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const eventsData: Event[] = [];
      snapshot.forEach((doc) => {
        eventsData.push({ id: doc.id, ...doc.data() } as Event);
      });
      setEvents(eventsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'events');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await addDoc(collection(db, 'events'), {
        ...formData,
        createdAt: Date.now()
      });
      setIsModalOpen(false);
      setFormData({ title: '', date: format(new Date(), 'yyyy-MM-dd'), time: '10:00', client: '', type: 'Meeting' });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'events');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setEventToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;
    try {
      await deleteDoc(doc(db, 'events', eventToDelete));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `events/${eventToDelete}`);
    } finally {
      setDeleteConfirmOpen(false);
      setEventToDelete(null);
    }
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'التقويم' : 'Calendar'}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">{format(currentMonth, 'MMMM yyyy', { locale })}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-1">
          <button onClick={prevMonth} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <ChevronLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
          <button onClick={() => setCurrentMonth(new Date())} className="px-4 py-2 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
            {isRTL ? 'اليوم' : 'Today'}
          </button>
          <button onClick={nextMonth} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20">
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">{isRTL ? 'حدث جديد' : 'New Event'}</span>
        </button>
      </div>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: isRTL ? 6 : 0 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="py-4 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          {format(addDays(startDate, i), 'EEE', { locale })}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: isRTL ? 6 : 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: isRTL ? 6 : 0 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const dayEvents = events.filter(e => {
          try {
            return isSameDay(new Date(e.date), cloneDay);
          } catch {
            return false;
          }
        });
        
        days.push(
          <div
            key={day.toString()}
            onClick={() => {
              setSelectedDate(cloneDay);
              setFormData({...formData, date: format(cloneDay, 'yyyy-MM-dd')});
            }}
            className={`min-h-[120px] p-2 border-t border-slate-100 dark:border-slate-700 transition-all cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 ${!isSameMonth(day, monthStart) ? 'bg-slate-50/50 dark:bg-slate-900/20 opacity-40' : ''} ${isSameDay(day, selectedDate) ? 'bg-primary/5 dark:bg-primary/10 ring-1 ring-inset ring-primary' : ''}`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-sm font-bold ${isSameDay(day, new Date()) ? 'w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center' : 'text-slate-900 dark:text-white'}`}>
                {format(day, 'd')}
              </span>
            </div>
            <div className="space-y-1">
              {dayEvents.map(event => (
                <div key={event.id} className="px-2 py-1 text-[10px] font-bold rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 truncate border border-blue-200 dark:border-blue-800">
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7" key={day.toString()}>{days}</div>);
      days = [];
    }
    return <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">{rows}</div>;
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      {renderHeader()}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {renderDays()}
          {renderCells()}
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{isRTL ? 'أحداث اليوم المحدد' : 'Selected Day Events'}</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-4"><Loader2 className="w-5 h-5 animate-spin mx-auto text-slate-400" /></div>
              ) : events.filter(e => {
                try {
                  return isSameDay(new Date(e.date), selectedDate);
                } catch {
                  return false;
                }
              }).length > 0 ? (
                events.filter(e => {
                  try {
                    return isSameDay(new Date(e.date), selectedDate);
                  } catch {
                    return false;
                  }
                }).map(event => (
                  <div key={event.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 relative group">
                    <button onClick={() => handleDeleteClick(event.id)} className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="font-bold text-slate-900 dark:text-white mb-2 pr-6">{event.title}</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </div>
                      {event.client && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <Users className="w-3.5 h-3.5" />
                          {event.client}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-400 text-sm italic">
                  {isRTL ? 'لا توجد أحداث في هذا اليوم' : 'No events for this day'}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isRTL ? 'إضافة حدث جديد' : 'Add New Event'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddEvent} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'عنوان الحدث' : 'Event Title'}</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'التاريخ' : 'Date'}</label>
                  <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الوقت' : 'Time'}</label>
                  <input required type="time" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'العميل (اختياري)' : 'Client (Optional)'}</label>
                <input type="text" value={formData.client} onChange={e => setFormData({...formData, client: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg font-medium">
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-light disabled:opacity-50 flex items-center gap-2">
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isRTL ? 'إضافة' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteConfirmOpen}
        title={isRTL ? 'تأكيد الحذف' : 'Confirm Deletion'}
        message={isRTL ? 'هل أنت متأكد من حذف هذا الحدث؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete this event? This action cannot be undone.'}
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setEventToDelete(null);
        }}
      />
    </div>
  );
};
