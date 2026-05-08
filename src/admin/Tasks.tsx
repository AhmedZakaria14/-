import React, { useState, useEffect } from 'react';
import { useAdminStore } from './store';
import { Plus, Edit, Trash2, X, Loader2, CheckSquare, Clock } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, query, orderBy } from 'firebase/firestore';
import { ConfirmModal } from './components/ConfirmModal';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'To Do' | 'In Progress' | 'Done';
  clientId: string;
  dueDate: string;
  createdAt?: number;
}

export const Tasks: React.FC = () => {
  const { language } = useAdminStore();
  const isRTL = language === 'ar';
  const [tasks, setTasks] = useState<Task[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: '', description: '', status: 'To Do', clientId: '', dueDate: ''
  });
  const [saving, setSaving] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  useEffect(() => {
    const qTasks = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'));
    const unsubscribeTasks = onSnapshot(qTasks, (snapshot) => {
      const tasksData: Task[] = [];
      snapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() } as Task);
      });
      setTasks(tasksData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'tasks');
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
      unsubscribeTasks();
      unsubscribeClients();
    };
  }, []);

  const handleDeleteClick = (id: string) => {
    setTaskToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const confirmDelete = async () => {
    if (!taskToDelete) return;
    try {
      await deleteDoc(doc(db, 'tasks', taskToDelete));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `tasks/${taskToDelete}`);
    } finally {
      setDeleteConfirmOpen(false);
      setTaskToDelete(null);
    }
  };

  const openModal = (task?: Task) => {
    if (task) {
      setEditingTask(task);
      setFormData({ title: task.title, description: task.description || '', status: task.status, clientId: task.clientId, dueDate: task.dueDate });
    } else {
      setEditingTask(null);
      setFormData({ title: '', description: '', status: 'To Do', clientId: clients[0]?.id || '', dueDate: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingTask) {
        await updateDoc(doc(db, 'tasks', editingTask.id), {
          ...formData
        });
      } else {
        await addDoc(collection(db, 'tasks'), {
          ...formData,
          createdAt: Date.now()
        });
      }
      setIsModalOpen(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'tasks');
    } finally {
      setSaving(false);
    }
  };

  const getClientName = (id: string) => clients.find(c => c.id === id)?.name || 'Unknown';

  const columns = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{isRTL ? 'المهام' : 'Tasks'}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{isRTL ? 'إدارة مهام العملاء' : 'Manage client tasks'}</p>
        </div>
        <button onClick={() => openModal()} className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl font-bold">
          <Plus className="w-5 h-5" />
          {isRTL ? 'مهمة جديدة' : 'New Task'}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(col => (
            <div key={col} className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-4">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4 flex items-center justify-between">
                {col === 'To Do' ? (isRTL ? 'قيد الانتظار' : 'To Do') : col === 'In Progress' ? (isRTL ? 'قيد التنفيذ' : 'In Progress') : (isRTL ? 'مكتملة' : 'Done')}
                <span className="bg-white dark:bg-slate-700 px-2 py-1 rounded-lg text-xs">{tasks.filter(t => t.status === col).length}</span>
              </h3>
              <div className="space-y-4">
                {tasks.filter(t => t.status === col).map(task => (
                  <div key={task.id} className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white">{task.title}</h4>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openModal(task)} className="text-slate-400 hover:text-primary"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDeleteClick(task.id)} className="text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{getClientName(task.clientId)}</div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 w-fit px-2 py-1 rounded">
                      <Clock className="w-3 h-3" />
                      {task.dueDate}
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
                {editingTask ? (isRTL ? 'تعديل مهمة' : 'Edit Task') : (isRTL ? 'إضافة مهمة' : 'Add Task')}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'العنوان' : 'Title'}</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'العميل' : 'Client'}</label>
                <select required value={formData.clientId} onChange={e => setFormData({...formData, clientId: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                  <option value="">{isRTL ? 'اختر عميلاً...' : 'Select a client...'}</option>
                  {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الحالة' : 'Status'}</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white">
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{isRTL ? 'الموعد النهائي' : 'Deadline'}</label>
                <input required type="date" value={formData.dueDate} onChange={e => setFormData({...formData, dueDate: e.target.value})} className="w-full rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-2 text-slate-900 dark:text-white" dir="ltr" />
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
        message={isRTL ? 'هل أنت متأكد من حذف هذه المهمة؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete this task? This action cannot be undone.'}
        onConfirm={confirmDelete}
        onCancel={() => {
          setDeleteConfirmOpen(false);
          setTaskToDelete(null);
        }}
      />
    </div>
  );
};
