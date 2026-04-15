import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

const KEYWORD_PAGES_SERVICES = [
  { href: '/نجار-بالرياض', label: 'نجار بالرياض' },
  { href: '/نجار-غرف-نوم-بالرياض', label: 'نجار غرف نوم بالرياض' },
  { href: '/نجار-ابواب-بالرياض', label: 'نجار ابواب بالرياض' },
  { href: '/نجار-فك-وتركيب-الاثاث', label: 'نجار فك وتركيب الاثاث' },
  { href: '/نجار-تركيب-ايكيا', label: 'نجار تركيب ايكيا' },
  { href: '/نجار-ديكور', label: 'نجار ديكور' },
  { href: '/نجار-دواليب-بالرياض', label: 'نجار دواليب بالرياض' },
  { href: '/نجار-خشب-طاولات', label: 'نجار خشب طاولات' },
  { href: '/نجار-تركيب-ابواب-بالرياض', label: 'نجار تركيب ابواب بالرياض' },
  { href: '/نجار-فك-وتركيب-غرف-نوم-بالرياض', label: 'نجار فك وتركيب غرف نوم بالرياض' },
  { href: '/نجار-تركيب-غرف-نوم', label: 'نجار تركيب غرف نوم' },
  { href: '/نجار-تركيب-اثاث-في-الرياض', label: 'نجار تركيب أثاث في الرياض' },
  { href: '/فني-تركيب-اثاث-ايكيا', label: 'فني تركيب اثاث ايكيا' },
];

const KEYWORD_PAGES_AREAS = [
  { href: '/نجار-شمال-الرياض', label: 'نجار شمال الرياض' },
  { href: '/نجار-جنوب-الرياض', label: 'نجار جنوب الرياض' },
  { href: '/نجار-شرق-الرياض', label: 'نجار شرق الرياض' },
  { href: '/نجار-غرب-الرياض', label: 'نجار غرب الرياض' },
  { href: '/نجار-خشب-شرق-الرياض', label: 'نجار خشب شرق الرياض' },
];

const KEYWORD_PAGES_GENERAL = [
  { href: '/نجار-خشب-بالرياض', label: 'نجار خشب بالرياض' },
  { href: '/نجار-خشب-في-الرياض', label: 'نجار خشب في الرياض' },
  { href: '/نجار-الابواب-في-الرياض', label: 'نجار الأبواب في الرياض' },
  { href: '/نجار-ابواب-خشب-بالرياض', label: 'نجار ابواب خشب بالرياض' },
  { href: '/نجار-باب-وشباك-بالرياض', label: 'نجار باب وشباك بالرياض' },
  { href: '/افضل-نجار-في-الرياض', label: 'افضل نجار في الرياض' },
  { href: '/افضل-نجار-بالرياض', label: 'افضل نجار بالرياض' },
  { href: '/نجار-ممتاز-في-الرياض', label: 'نجار ممتاز في الرياض' },
  { href: '/نجار-بالرياض-رخيص', label: 'نجار بالرياض رخيص' },
  { href: '/منجرة-بالرياض', label: 'منجرة بالرياض' },
  { href: '/نجار-خشب-الرياض', label: 'نجار خشب الرياض' },
  { href: '/نجارين-اثاث-بالرياض', label: 'نجارين اثاث بالرياض' },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-xl">
              <Image 
                src="/logo.png" 
                alt="شعار نجار بالرياض - أفضل منجرة بالرياض لتفصيل غرف النوم والأبواب" 
                width={160} 
                height={50} 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              نجار بالرياض — أفضل خدمات النجارة والديكورات الخشبية في الرياض. تفصيل وتصنيع غرف نوم، أبواب، وتجهيز مكاتب بجودة عالية وأسعار منافسة.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-bg-dark transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-bg-dark transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-bg-dark transition-colors" aria-label="Snapchat">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">خدمات النجارة</h4>
            <ul className="flex flex-col gap-3">
              {KEYWORD_PAGES_SERVICES.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas & General */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">مناطق وخدمات أخرى</h4>
            <ul className="flex flex-col gap-3 mb-6">
              {KEYWORD_PAGES_AREAS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {KEYWORD_PAGES_GENERAL.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & More General */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6">معلومات التواصل</h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">حي الملك فهد، مخرج 5، طريق الأمير نايف بن عبد العزيز، الرياض</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm" dir="ltr">+966 56 389 2344</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400 text-sm">info@najjarriyadh.com</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              {KEYWORD_PAGES_GENERAL.slice(6).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} نجار بالرياض. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-accent transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-accent transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
