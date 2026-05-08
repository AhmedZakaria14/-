import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { Plus, Edit, Trash2, X, Loader2, FileText, CheckCircle, XCircle } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { ConfirmModal } from './components/ConfirmModal';

interface Invoice {
  id: string;
  amount: number;
  status: 'Paid' | 'Unpaid';
  clientId: string;
  date: string;
  description: string;
  createdAt?: number;
}

export const Invoices: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [formData, setFormData] = useState({
    amount: 0, status: 'Unpaid', clientId: '', date: '', description: ''
  });
  const [saving, setSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [invoiceToDelete, setInvoiceToDelete] = useState<string | null>(null);

  useEffect(() => {
    const qInvoices = query(collection(db, 'invoices'), orderBy('createdAt', 'desc'));
    const unsubscribeInvoices = onSnapshot(qInvoices, (snapshot) => {
      const invoicesData: Invoice[] = [];
      snapshot.forEach((doc) => {
        invoicesData.push({ id: doc.id, ...doc.data() } as Invoice);
      });
      setInvoices(invoicesData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'invoices');
      setLoading(false);
    });

    const qClients = query(collection(db, 'clients'));
    const unsubscribeClients = onSnapshot(qClients, (snapshot) => {
      const clientsData: any[] = [];
      snapshot.forEach((doc) => {
        clientsData.push({ id: doc.id, ...doc.data() });
      });
      setClients(clientsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'clients');
    });

    return () => {
      unsubscribeInvoices();
      unsubscribeClients();
    };
  }, []);

  const handleDeleteClick = (id: string) => {
    setInvoiceToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!invoiceToDelete) return;
    try {
      await deleteDoc(doc(db, 'invoices', invoiceToDelete));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `invoices/${invoiceToDelete}`);
    } finally {
      setDeleteConfirmOpen(false);
      setInvoiceToDelete(null);
    }
  };

  const openModal = (invoice?: Invoice) => {
    if (invoice) {
      setEditingInvoice(invoice);
      setFormData({ amount: invoice.amount, status: invoice.status, clientId: invoice.clientId, date: invoice.date, description: invoice.description });
    } else {
      setEditingInvoice(null);
      setFormData({ amount: 0, status: 'Unpaid', clientId: clients[0]?.id || '', date: new Date().toISOString().split('T')[0], description: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const dataToSave = { ...formData, amount: Number(formData.amount) };
      if (editingInvoice) {
        await updateDoc(doc(db, 'invoices', editingInvoice.id), dataToSave);
      } else {
        await addDoc(collection(db, 'invoices'), {
          ...dataToSave,
          createdAt: Date.now()
        });
      }
      setIsModalOpen(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'invoices');
    } finally {
      setSaving(false);
    }
  };

  const getClientName = (id: string) => clients.find(c => c.id === id)?.name || 'Unknown';

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'الفواتير' : 'Invoices'}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'إدارة فواتير العملاء والمدفوعات' : 'Manage client invoices and payments'}</p>
        </div>
        <button onClick={() => openModal()} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-bold">
          <Plus className="w-5 h-5" />
          {isRTL ? 'فاتورة جديدة' : 'New Invoice'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-slate-500"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
          ) : invoices.length === 0 ? (
            <div className="p-8 text-center text-slate-500">{isRTL ? 'لا توجد فواتير' : 'No invoices found'}</div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'الوصف' : 'Description'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'العميل' : 'Client'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'التاريخ' : 'Date'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'المبلغ' : 'Amount'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'الحالة' : 'Status'}</th>
                  <th className="py-4 px-6 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 flex items-center justify-center"><FileText className="w-5 h-5" /></div>
                        <div className="font-bold text-slate-900 dark:text-white">{invoice.description}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                      {getClientName(invoice.clientId)}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400" dir="ltr">
                      {invoice.date}
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900 dark:text-white" dir="ltr">
                      ${invoice.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${invoice.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                        {invoice.status === 'Paid' ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openModal(invoice)} className="p-2 text-slate-400 hover:text-primary"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteClick(invoice.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingInvoice ? (isRTL ? 'تعديل فاتورة' : 'Edit Invoice') : (isRTL ? 'إضافة فاتورة' : 'Add Invoice')}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الوصف' : 'Description'}</label>
                <input required type="text" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'العميل' : 'Client'}</label>
                <select required value={formData.clientId} onChange={e => setFormData({...formData, clientId: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                  <option value="">{isRTL ? 'اختر عميلاً...' : 'Select a client...'}</option>
                  {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'المبلغ ($)' : 'Amount ($)'}</label>
                  <input required type="number" min="0" value={formData.amount} onChange={e => setFormData({...formData, amount: Number(e.target.value)})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الحالة' : 'Status'}</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'التاريخ' : 'Date'}</label>
                <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
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
        message={isRTL ? 'هل أنت متأكد من حذف هذه الفاتورة؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete this invoice? This action cannot be undone.'}
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setInvoiceToDelete(null);
        }}
      />
    </div>
  );
};
