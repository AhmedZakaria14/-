import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { Search, Plus, Edit, Trash2, X, Loader2, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { ConfirmModal } from './components/ConfirmModal';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Pending' | 'Inactive';
  plan: string;
  joinDate: string;
  createdAt?: number;
}

export const ClientsManagement: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', status: 'Active', plan: ''
  });
  const [saving, setSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'clients'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const clientsData: Client[] = [];
      snapshot.forEach((doc) => {
        clientsData.push({ id: doc.id, ...doc.data() } as Client);
      });
      setClients(clientsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'clients');
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteClick = (id: string) => {
    setClientToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!clientToDelete) return;
    try {
      await deleteDoc(doc(db, 'clients', clientToDelete));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `clients/${clientToDelete}`);
    } finally {
      setDeleteConfirmOpen(false);
      setClientToDelete(null);
    }
  };

  const openModal = (client?: Client) => {
    if (client) {
      setEditingClient(client);
      setFormData({ name: client.name, email: client.email, phone: client.phone, status: client.status, plan: client.plan });
    } else {
      setEditingClient(null);
      setFormData({ name: '', email: '', phone: '', status: 'Active', plan: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingClient) {
        await updateDoc(doc(db, 'clients', editingClient.id), {
          ...formData
        });
      } else {
        await addDoc(collection(db, 'clients'), {
          ...formData,
          joinDate: new Date().toISOString().split('T')[0],
          createdAt: Date.now()
        });
      }
      setIsModalOpen(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'clients');
    } finally {
      setSaving(false);
    }
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'إدارة العملاء' : 'Clients Management'}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'إدارة بيانات العملاء والخطط' : 'Manage client data and plans'}</p>
        </div>
        <button onClick={() => openModal()} className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-bold">
          <Plus className="w-5 h-5" />
          {isRTL ? 'إضافة عميل' : 'Add Client'}
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="relative max-w-md">
            <Search className={`absolute inset-y-0 ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400`} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`block w-full rounded-xl border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white py-2.5 ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'}`}
              placeholder={isRTL ? 'ابحث عن عميل...' : 'Search clients...'}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-slate-500"><Loader2 className="w-6 h-6 animate-spin mx-auto" /></div>
          ) : filteredClients.length === 0 ? (
            <div className="p-8 text-center text-slate-500">{isRTL ? 'لا يوجد عملاء' : 'No clients found'}</div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-700">
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'العميل' : 'Client'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'الاتصال' : 'Contact'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'الخطة' : 'Plan'}</th>
                  <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">{isRTL ? 'الحالة' : 'Status'}</th>
                  <th className="py-4 px-6 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{client.name.charAt(0)}</div>
                        <div className="font-bold text-slate-900 dark:text-white">{client.name}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-400">
                      <div>{client.email}</div>
                      <div dir="ltr">{client.phone}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{client.plan}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${client.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : client.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => navigate(`/admin/clients/${client.id}`)} className="p-2 text-slate-400 hover:text-blue-500"><Eye className="w-4 h-4" /></button>
                        <button onClick={() => openModal(client)} className="p-2 text-slate-400 hover:text-primary"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteClick(client.id)} className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
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
                {editingClient ? (isRTL ? 'تعديل عميل' : 'Edit Client') : (isRTL ? 'إضافة عميل' : 'Add Client')}
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
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'رقم الهاتف' : 'Phone'}</label>
                <input required type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الخطة' : 'Plan'}</label>
                <input required type="text" value={formData.plan} onChange={e => setFormData({...formData, plan: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الحالة' : 'Status'}</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Inactive">Inactive</option>
                </select>
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
        message={isRTL ? 'هل أنت متأكد من حذف هذا العميل؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete this client? This action cannot be undone.'}
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setClientToDelete(null);
        }}
      />
    </div>
  );
};
