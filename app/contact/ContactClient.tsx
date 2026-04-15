'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نحن هنا للرد على استفساراتك وتحويل أفكارك إلى واقع. تواصل معنا اليوم.
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info & Map */}
            <div className="lg:w-1/2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent-light text-primary rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">رقم الهاتف</h3>
                  <p className="text-text-muted" dir="ltr">{process.env.NEXT_PUBLIC_PHONE}</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent-light text-primary rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
                  <p className="text-text-muted">info@abuthabit-carpentry.sa</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent-light text-primary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">العنوان</h3>
                  <p className="text-text-muted">الرياض، المملكة العربية السعودية</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent-light text-primary rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                  <p className="text-text-muted">السبت - الخميس: 8 ص - 10 م</p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-64 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d463877.312429037!2d46.93198031024328!3d24.725455371510464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1709664000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '1rem' }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع أبو ثابت للنجارة على الخريطة"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="font-serif text-3xl font-bold text-text-dark mb-6">أرسل لنا رسالة</h2>
                <p className="text-text-muted mb-8">
                  املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.
                </p>

                {isSuccess && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-xl mb-6 border border-green-200">
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">الاسم الكامل *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">رقم الجوال *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-right"
                        placeholder="05X XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">الخدمة المطلوبة</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option value="">اختر الخدمة...</option>
                      <option value="kitchens">مطابخ</option>
                      <option value="bedrooms">غرف نوم</option>
                      <option value="doors">أبواب خشبية</option>
                      <option value="decor">ديكورات خشبية</option>
                      <option value="office">أثاث مكاتب</option>
                      <option value="maintenance">صيانة وترميم</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">رسالتك *</label>
                    <textarea 
                      id="message" 
                      required 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                      placeholder="اكتب تفاصيل طلبك هنا..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <>
                        <span>إرسال الرسالة</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
