import Link from 'next/link';
import { Home } from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'الصفحة غير موجودة',
  description: 'عذراً، الصفحة التي تبحث عنها غير موجودة.',
});

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-light px-4">
      <div className="text-center">
        <h1 className="font-serif text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-text-dark mb-6">عذراً، الصفحة غير موجودة</h2>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها، أو أن الرابط غير صحيح.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-accent text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-colors"
        >
          <Home className="w-5 h-5" />
          <span>العودة للرئيسية</span>
        </Link>
      </div>
    </div>
  );
}
