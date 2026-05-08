import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { Plus, Edit, Trash2, X, Loader2, DollarSign, Mail } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { ConfirmModal } from './components/ConfirmModal';

interface Lead {
  id: string;
  name: string;
  email: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  value: number;
  notes: string;
  createdAt?: number;
}

export const Leads: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', status: 'New', value: 0, notes: ''
  });
  const [saving, setSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData: Lead[] = [];
      snapshot.forEach((doc) => {
        leadsData.push({ id: doc.id, ...doc.data() } as Lead);
      });
      setLeads(leadsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'leads');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteClick = (id: string) => {
    setLeadToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!leadToDelete) return;
    try {
      await deleteDoc(doc(db, 'leads', leadToDelete));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `leads/${leadToDelete}`);
    } finally {
      setDeleteConfirmOpen(false);
      setLeadToDelete(null);
    }
  };

  const openModal = (lead?: Lead) => {
    if (lead) {
      setEditingLead(lead);
      setFormData({ name: lead.name, email: lead.email, status: lead.status, value: lead.value, notes: lead.notes });
    } else {
      setEditingLead(null);
      setFormData({ name: '', email: '', status: 'New', value: 0, notes: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const dataToSave = { ...formData, value: Number(formData.value) };
      if (editingLead) {
        await updateDoc(doc(db, 'leads', editingLead.id), dataToSave);
      } else {
        await addDoc(collection(db, 'leads'), {
          ...dataToSave,
          createdAt: Date.now()
        });
      }
      setIsModalOpen(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'leads');
    } finally {
      setSaving(false);
    }
  };

  const columns = ['New', 'Contacted', 'Qualified', 'Proposal', 'Won', 'Lost'];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'العملاء المحتملين' : 'Leads'}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'إدارة مسار المبيعات والعملاء المحتملين' : 'Manage sales pipeline and leads'}</p>
        </div>
        <button onClick={() => openModal()} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-bold">
          <Plus className="w-5 h-5" />
          {isRTL ? 'عميل محتمل جديد' : 'New Lead'}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      ) : (
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
          {columns.map(col => (
            <div key={col} className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-4 min-w-[300px] snap-center">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4 flex items-center justify-between">
                {col}
                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded-lg text-xs">{leads.filter(l => l.status === col).length}</span>
              </h3>
              <div className="space-y-4">
                {leads.filter(l => l.status === col).map(lead => (
                  <div key={lead.id} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group cursor-pointer hover:border-primary/50 transition-colors" onClick={() => openModal(lead)}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">{lead.name}</h4>
                      <button onClick={(e) => { e.stopPropagation(); handleDeleteClick(lead.id); }} className="text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <Mail className="w-3.5 h-3.5" />
                      {lead.email}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">
                        <DollarSign className="w-3.5 h-3.5" />
                        {lead.value.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingLead ? (isRTL ? 'تعديل عميل محتمل' : 'Edit Lead') : (isRTL ? 'إضافة عميل محتمل' : 'Add Lead')}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الاسم' : 'Name'}</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email'}</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'القيمة المتوقعة ($)' : 'Expected Value ($)'}</label>
                  <input required type="number" min="0" value={formData.value} onChange={e => setFormData({...formData, value: Number(e.target.value)})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الحالة' : 'Status'}</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                    {columns.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'ملاحظات' : 'Notes'}</label>
                <textarea rows={3} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg font-medium">
                  {isRTL ? 'إلغاء' : 'Cancel'}
                </button>
                <button type="submit" disabled={saving} className="px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-light disabled:opacity-50 flex items-center gap-2">
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isRTL ? 'حفظ' : 'Save'}
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
        message={isRTL ? 'هل أنت متأكد من حذف هذا العميل المحتمل؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete this lead? This action cannot be undone.'}
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setLeadToDelete(null);
        }}
      />
    </div>
  );
};
