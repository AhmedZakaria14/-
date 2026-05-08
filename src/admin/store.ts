import { create } from 'zustand';

interface AdminState {
  isAuthenticated: boolean;
  user: any | null;
  language: 'en' | 'ar';
  theme: 'light' | 'dark';
  setAuth: (status: boolean, user?: any) => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  toggleTheme: () => void;
}

export const useAdminStore = create<AdminState>((set) => ({
  isAuthenticated: false,
  user: null,
  language: 'ar',
  theme: 'light',
  setAuth: (status, user = null) => set({ isAuthenticated: status, user }),
  setLanguage: (lang) => set({ language: lang }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
