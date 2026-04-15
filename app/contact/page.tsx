import { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/lib/schema';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "اتصل بنا | نجار بالرياض",
  description: "تواصل مع نجار بالرياض لطلب استشارة مجانية أو عرض سعر لأعمال النجارة، تفصيل غرف النوم، المطابخ، والديكورات الخشبية.",
  alternates: { canonical: "https://najjarriyadh.com/contact" }
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', item: 'https://najjarriyadh.com' },
    { name: 'اتصل بنا', item: 'https://najjarriyadh.com/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
