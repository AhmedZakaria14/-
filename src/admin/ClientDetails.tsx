import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdminStore } from './store';
import { ArrowLeft, ArrowRight, Loader2, Mail, Phone, Calendar, FileText, CheckSquare, MessageSquare, Plus } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { doc, getDoc, collection, query, where, onSnapshot, addDoc, orderBy } from 'firebase/firestore';

export const ClientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  useEffect(() => {
    if (!id) return;

    let unsubClient: () => void;
    let unsubTasks: () => void;
    let unsubInvoices: () => void;
    let unsubNotes: () => void;

    const fetchData = async () => {
      try {
        unsubClient = onSnapshot(doc(db, 'clients', id), (docSnap) => {
          if (!docSnap.exists()) {
            navigate('/admin/clients');
            return;
          }
          setClient((prev: any) => ({ ...prev, id: docSnap.id, ...docSnap.data() }));
        }, (error) => handleFirestoreError(error, OperationType.GET, `clients/${id}`));

        const qTasks = query(collection(db, 'tasks'), where('clientId', '==', id));
        unsubTasks = onSnapshot(qTasks, (snapshot) => {
          const tasks = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          setClient((prev: any) => prev ? { ...prev, tasks } : null);
        }, (error) => handleFirestoreError(error, OperationType.LIST, 'tasks'));

        const qInvoices = query(collection(db, 'invoices'), where('clientId', '==', id));
        unsubInvoices = onSnapshot(qInvoices, (snapshot) => {
          const invoices = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          setClient((prev: any) => prev ? { ...prev, invoices } : null);
        }, (error) => handleFirestoreError(error, OperationType.LIST, 'invoices'));

        const qNotes = query(collection(db, 'clientNotes'), where('clientId', '==', id), orderBy('date', 'desc'));
        unsubNotes = onSnapshot(qNotes, (snapshot) => {
          const notes = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
          setClient((prev: any) => prev ? { ...prev, notes } : null);
        }, (error) => handleFirestoreError(error, OperationType.LIST, 'clientNotes'));

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (unsubClient) unsubClient();
      if (unsubTasks) unsubTasks();
      if (unsubInvoices) unsubInvoices();
      if (unsubNotes) unsubNotes();
    };
  }, [id, navigate]);

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim() || !id) return;
    setSavingNote(true);
    try {
      await addDoc(collection(db, 'clientNotes'), {
        clientId: id,
        text: newNote,
        date: new Date().toISOString()
      });
      setNewNote('');
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'clientNotes');
    } finally {
      setSavingNote(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  }

  if (!client) return null;

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex items-center gap-4">
        <button onClick={() => navigate('/admin/clients')} className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
          {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{client.name}</h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${client.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : client.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}>
              {client.status}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {isRTL ? 'انضم في' : 'Joined'} {client.joinDate}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Notes */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{isRTL ? 'معلومات الاتصال' : 'Contact Info'}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center"><Mail className="w-5 h-5 text-slate-400" /></div>
                <div className="font-medium">{client.email}</div>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center"><Phone className="w-5 h-5 text-slate-400" /></div>
                <div className="font-medium" dir="ltr">{client.phone}</div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{isRTL ? 'الخطة الحالية' : 'Current Plan'}</div>
                <div className="font-bold text-lg text-primary">{client.plan}</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              {isRTL ? 'الملاحظات والسجل' : 'Notes & Activity'}
            </h2>
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
              {!client.notes || client.notes.length === 0 ? (
                <div className="text-sm text-slate-400 italic text-center py-4">{isRTL ? 'لا توجد ملاحظات' : 'No notes yet'}</div>
              ) : (
                client.notes.map((note: any) => (
                  <div key={note.id} className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-xl border border-slate-100 dark:border-slate-600">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{note.text}</p>
                    <div className="text-xs text-slate-400">{new Date(note.date).toLocaleString(isRTL ? 'ar-SA' : 'en-US')}</div>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input 
                type="text" 
                value={newNote} 
                onChange={e => setNewNote(e.target.value)} 
                placeholder={isRTL ? 'أضف ملاحظة...' : 'Add a note...'} 
                className="flex-1 rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-sm text-slate-900 dark:text-white" 
              />
              <button type="submit" disabled={savingNote || !newNote.trim()} className="p-2 bg-primary text-white rounded-lg hover:bg-primary-light disabled:opacity-50">
                {savingNote ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Tasks & Invoices */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-500" />
                {isRTL ? 'المهام المرتبطة' : 'Related Tasks'}
              </h2>
              <button onClick={() => navigate('/admin/tasks')} className="text-sm text-primary font-bold hover:underline">{isRTL ? 'إدارة المهام' : 'Manage Tasks'}</button>
            </div>
            {!client.tasks || client.tasks.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm italic">{isRTL ? 'لا توجد مهام' : 'No tasks found'}</div>
            ) : (
              <div className="space-y-3">
                {client.tasks.map((task: any) => (
                  <div key={task.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{task.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {task.deadline}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${task.status === 'Done' ? 'bg-emerald-100 text-emerald-700' : task.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-700'}`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                {isRTL ? 'الفواتير' : 'Invoices'}
              </h2>
              <button onClick={() => navigate('/admin/invoices')} className="text-sm text-primary font-bold hover:underline">{isRTL ? 'إدارة الفواتير' : 'Manage Invoices'}</button>
            </div>
            {!client.invoices || client.invoices.length === 0 ? (
              <div className="text-center py-8 text-slate-400 text-sm italic">{isRTL ? 'لا توجد فواتير' : 'No invoices found'}</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700">
                      <th className="pb-3 px-4">{isRTL ? 'الوصف' : 'Description'}</th>
                      <th className="pb-3 px-4">{isRTL ? 'التاريخ' : 'Date'}</th>
                      <th className="pb-3 px-4">{isRTL ? 'المبلغ' : 'Amount'}</th>
                      <th className="pb-3 px-4">{isRTL ? 'الحالة' : 'Status'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                    {client.invoices.map((invoice: any) => (
                      <tr key={invoice.id}>
                        <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{invoice.description}</td>
                        <td className="py-3 px-4 text-sm text-slate-500 dark:text-slate-400" dir="ltr">{invoice.date}</td>
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white" dir="ltr">${invoice.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${invoice.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                            {invoice.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
