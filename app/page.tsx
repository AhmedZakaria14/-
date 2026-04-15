import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import AreasWeServe from '@/components/sections/AreasWeServe';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'نجار بالرياض | أفضل منجرة لتفصيل غرف النوم والمطابخ والأبواب',
  description: 'نجار بالرياض متخصص في تفصيل غرف النوم، المطابخ، الأبواب، والديكورات الخشبية. جودة عالية، دقة في المواعيد، وأسعار منافسة. اتصل بنا الآن.',
  alternates: { canonical: 'https://najjarriyadh.com' }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyUs />
      <AreasWeServe />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
