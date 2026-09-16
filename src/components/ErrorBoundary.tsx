import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0b1020] text-white p-4">
          <div className="max-w-md w-full bg-[#131b2e] p-6 rounded-2xl shadow-2xl border border-white/10 text-center">
            <h2 className="text-xl font-bold text-white mb-2">تم تحديث المحتوى</h2>
            <p className="text-sm text-white/70 mb-6">يرجى الضغط على الزر أدناه لتحديث الصفحة ومتابعة التصفح بسلاسة.</p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="w-full py-3 px-6 bg-[#1677d2] hover:bg-[#1677d2]/80 text-white rounded-xl font-bold transition-all shadow-lg shadow-[#1677d2]/20"
            >
              إعادة تحميل الصفحة / Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
