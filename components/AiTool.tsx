
import React, { useState } from 'react';
import { Language } from '@/types';
import { 
  Rocket, 
  ArrowRight,
  Globe,
  CheckCircle2,
  Users,
  Briefcase,
  Search,
  Zap,
  Layout,
  BarChart,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
  Settings,
  Target,
  Trophy,
  PieChart,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { runDiagnosticAnalysis, DiagnosticResponse } from '../services/geminiService';
import { Reveal } from './Reveal';

interface AiToolProps { lang: Language; }

export const AiTool: React.FC<AiToolProps> = ({ lang }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const isRTL = lang === 'ar';

  // State for Diagnostic
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [businessModel, setBusinessModel] = useState<'B2B' | 'B2C' | 'Hybrid'>('B2B');
  const [mainInterest, setMainInterest] = useState<'Ads' | 'Web' | 'SEO' | 'Full'>('Full');
  const [companySize, setCompanySize] = useState('1-5');
  const [targetMarket, setTargetMarket] = useState('Local');
  const [activeChannels, setActiveChannels] = useState<string[]>([]);
  const [monthlyLeads, setMonthlyLeads] = useState('0-10');
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [currentTech, setCurrentTech] = useState('');

  const [report, setReport] = useState<DiagnosticResponse | null>(null);

  const toggleItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const simulateLoading = () => {
    const texts = lang === 'en' 
      ? ['Decoding Business Model...', 'Benchmarking Industry Data...', 'Calculating Potential ROAS...', 'Auditing Technical Gaps...', 'Synthesizing Strategic Report...']
      : ['تفكيك نموذج العمل...', 'قياس بيانات القطاع...', 'حساب العائد المتوقع...', 'تدقيق الفجوات التقنية...', 'صياغة التقرير الاستراتيجي...'];
    let i = 0;
    setLoadingText(texts[0]);
    const interval = setInterval(() => {
      i++;
      if (i < texts.length) setLoadingText(texts[i % texts.length]);
    }, 1200);
    return interval;
  };

  const handleRunAnalysis = async () => {
    setLoading(true);
    setStep(5);
    const intervalId = simulateLoading();
    try {
      const result = await runDiagnosticAnalysis({
        businessName, industry, companySize, businessModel, targetMarket, mainInterest,
        digitalAssets: { activeChannels, monthlyLeadsRange: monthlyLeads },
        painPoints, currentTechStack: currentTech
      }, lang);
      setReport(result);
    } catch (e) {
      console.error(e);
      setStep(4);
    } finally {
      clearInterval(intervalId);
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(1); setReport(null); setBusinessName(''); setIndustry('');
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-12">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step === i ? 'w-12 bg-primary' : step > i ? 'w-6 bg-primary/40' : 'w-6 bg-slate-200'}`} />
      ))}
    </div>
  );

  return (
    <section id="ai-tool" className="relative py-20 md:py-32 min-h-screen flex flex-col items-center bg-slate-50 overflow-hidden text-slate-900">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="w-full max-w-7xl px-4 relative z-10">
        
        {step < 5 && (
          <div className="text-center mb-10 max-w-2xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-primary font-black text-xs uppercase tracking-widest mb-6">
                <Target size={14} />
                {lang === 'en' ? 'Performance Audit v3.0' : 'تدقيق الأداء - النسخة 3.0'}
             </div>
             <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
               {lang === 'en' ? 'Get Your Growth Roadmap' : 'احصل على خارطة طريق النمو'}
             </h2>
             <StepIndicator />
          </div>
        )}

        <div className="min-h-[500px] flex items-center justify-center">
          
          {/* STEP 1: Context & Model */}
          {step === 1 && (
            <div className="animate-fadeIn w-full max-w-4xl grid md:grid-cols-2 gap-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{lang === 'en' ? 'Business Name' : 'اسم النشاط'}</label>
                    <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Nashar Hub" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{lang === 'en' ? 'Industry' : 'القطاع'}</label>
                    <input type="text" value={industry} onChange={e => setIndustry(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="E-commerce" />
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{lang === 'en' ? 'Business Model' : 'نموذج العمل'}</label>
                    <div className="grid grid-cols-3 gap-3">
                       {['B2B', 'B2C', 'Hybrid'].map(m => (
                         <button key={m} onClick={() => setBusinessModel(m as any)} className={`py-3 rounded-xl font-bold border transition-all ${businessModel === m ? 'bg-primary text-white' : 'bg-slate-50 text-slate-500 hover:bg-white'}`}>{m}</button>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{lang === 'en' ? 'Primary Interest' : 'الاهتمام الأساسي'}</label>
                    <div className="grid grid-cols-2 gap-3">
                       {[
                         {id: 'Ads', en: 'Paid Ads', ar: 'إعلانات'},
                         {id: 'Web', en: 'Web Dev', ar: 'مواقع'},
                         {id: 'SEO', en: 'SEO', ar: 'SEO'},
                         {id: 'Full', en: 'Full Growth', ar: 'نمو شامل'}
                       ].map(i => (
                         <button key={i.id} onClick={() => setMainInterest(i.id as any)} className={`py-3 rounded-xl font-bold border transition-all ${mainInterest === i.id ? 'bg-primary text-white' : 'bg-slate-50 text-slate-500 hover:bg-white'}`}>{lang === 'en' ? i.en : i.ar}</button>
                       ))}
                    </div>
                  </div>
               </div>
               <div className="md:col-span-2 flex justify-end">
                  <button onClick={() => setStep(2)} disabled={!businessName || !industry} className="px-10 py-4 bg-primary text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all disabled:opacity-50">
                    {lang === 'en' ? 'Next: Define Scale' : 'التالي: تحديد النطاق'}
                  </button>
               </div>
            </div>
          )}

          {/* STEP 2: Scale & Market */}
          {step === 2 && (
            <div className="animate-fadeIn w-full max-w-4xl space-y-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Company Size (People)' : 'حجم الشركة (أفراد)'}</label>
                     <div className="grid grid-cols-2 gap-3">
                        {['1-5', '6-25', '26-100', '100+'].map(s => (
                          <button key={s} onClick={() => setCompanySize(s)} className={`py-4 rounded-2xl font-black border transition-all ${companySize === s ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-500'}`}>{s}</button>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-4">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Target Market' : 'السوق المستهدف'}</label>
                     <div className="grid grid-cols-1 gap-3">
                        {['Local City', 'Regional (GCC)', 'Global/International'].map(m => (
                          <button key={m} onClick={() => setTargetMarket(m)} className={`py-4 px-6 rounded-2xl font-black border text-left transition-all ${targetMarket === m ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-500'}`}>{m}</button>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <button onClick={() => setStep(1)} className="text-slate-400 font-bold hover:text-primary">{lang === 'en' ? 'Back' : 'رجوع'}</button>
                  <button onClick={() => setStep(3)} className="px-10 py-4 bg-primary text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                    {lang === 'en' ? 'Next: Digital Footprint' : 'التالي: البصمة الرقمية'}
                  </button>
               </div>
            </div>
          )}

          {/* STEP 3: Assets & Metrics */}
          {step === 3 && (
            <div className="animate-fadeIn w-full max-w-4xl space-y-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="space-y-6">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Active Digital Presence' : 'التواجد الرقمي الحالي'}</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Website', 'Instagram', 'TikTok', 'Google Search', 'LinkedIn', 'Snapchat'].map(c => (
                      <button key={c} onClick={() => toggleItem(activeChannels, setActiveChannels, c)} className={`py-4 rounded-2xl font-bold border transition-all ${activeChannels.includes(c) ? 'bg-secondary text-white border-secondary' : 'bg-slate-50 text-slate-500'}`}>{c}</button>
                    ))}
                  </div>
               </div>
               <div className="space-y-6">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Current Monthly Leads/Sales' : 'عدد العملاء/المبيعات شهرياً'}</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['0-10', '11-50', '51-200', '200+'].map(r => (
                      <button key={r} onClick={() => setMonthlyLeads(r)} className={`py-4 rounded-2xl font-black border transition-all ${monthlyLeads === r ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-500'}`}>{r}</button>
                    ))}
                  </div>
               </div>
               <div className="flex justify-between items-center">
                  <button onClick={() => setStep(2)} className="text-slate-400 font-bold hover:text-primary">{lang === 'en' ? 'Back' : 'رجوع'}</button>
                  <button onClick={() => setStep(4)} className="px-10 py-4 bg-primary text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                    {lang === 'en' ? 'Next: Barriers' : 'التالي: العوائق'}
                  </button>
               </div>
            </div>
          )}

          {/* STEP 4: Barriers & Tech */}
          {step === 4 && (
            <div className="animate-fadeIn w-full max-w-4xl space-y-8 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="space-y-6">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'Identify Your Pain Points' : 'حدد التحديات التي تواجهك'}</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {id: 'conversion', en: 'Low Conversion Rates', ar: 'معدل تحويل منخفض'},
                      {id: 'tracking', en: 'Bad/No Analytics Tracking', ar: 'مشاكل في التتبع والتحليل'},
                      {id: 'content', en: 'Struggling with Creatives', ar: 'صعوبة في صناعة المحتوى'},
                      {id: 'cost', en: 'High Customer Acquisition Cost', ar: 'ارتفاع تكلفة العميل'},
                      {id: 'speed', en: 'Slow/Unstable Website', ar: 'بطء أو عدم استقرار الموقع'}
                    ].map(p => (
                      <button key={p.id} onClick={() => toggleItem(painPoints, setPainPoints, p.id)} className={`flex items-center gap-4 p-5 rounded-2xl font-bold border transition-all ${painPoints.includes(p.id) ? 'bg-red-50 text-red-700 border-red-200' : 'bg-slate-50 text-slate-500'}`}>
                        <div className={`w-5 h-5 rounded-full border-2 ${painPoints.includes(p.id) ? 'bg-red-700 border-red-700 text-white' : 'border-slate-200'}`}>{painPoints.includes(p.id) && <CheckCircle2 size={12} />}</div>
                        {lang === 'en' ? p.en : p.ar}
                      </button>
                    ))}
                  </div>
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{lang === 'en' ? 'Current Tech Tools (CRM, CMS, etc)' : 'الأدوات التقنية المستخدمة حالياً'}</label>
                  <input type="text" value={currentTech} onChange={e => setCurrentTech(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 font-bold outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Shopify, Meta Ads, Excel..." />
               </div>
               <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  <button onClick={() => setStep(3)} className="text-slate-400 font-bold hover:text-primary">{lang === 'en' ? 'Back' : 'رجوع'}</button>
                  <button onClick={handleRunAnalysis} disabled={painPoints.length === 0} className="px-12 py-5 bg-primary text-white rounded-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50">
                    {lang === 'en' ? 'Generate Audit Report' : 'إنشاء تقرير التدقيق'}
                    <Rocket size={20} />
                  </button>
               </div>
            </div>
          )}

          {/* STEP 5: Results Dashboard */}
          {step === 5 && (
            <div className="w-full">
               {loading ? (
                 <div className="flex flex-col items-center justify-center min-h-[500px]">
                    <div className="relative w-40 h-40 mb-12">
                       <div className="absolute inset-0 border-[8px] border-slate-100 rounded-full"></div>
                       <div className="absolute inset-0 border-[8px] border-primary rounded-full border-t-transparent animate-spin"></div>
                       <div className="absolute inset-0 flex items-center justify-center text-primary"><Cpu size={60} className="animate-pulse" /></div>
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4 animate-pulse">{loadingText}</h3>
                 </div>
               ) : (
                 report && (
                   <div className="animate-fadeIn w-full space-y-10 pb-24">
                      {/* Top Header Row */}
                      <div className="grid lg:grid-cols-4 gap-8">
                         <div className="lg:col-span-3 bg-slate-900 text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-light/10 rounded-full blur-[100px]"></div>
                            <div className="relative z-10">
                               <div className="flex items-center gap-4 mb-8">
                                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-primary-light font-black text-sm uppercase tracking-widest border border-white/10">Growth Strategy</div>
                                  <div className="h-px w-12 bg-white/20"></div>
                                  <div className="text-slate-400 font-bold">{businessName}</div>
                               </div>
                               <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">{report.executiveSummary}</h3>
                               <div className="flex flex-wrap gap-4">
                                  {report.quickWinPlan.map((win, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-slate-200 font-bold text-sm">
                                       <Zap size={16} className="text-secondary" />
                                       {win}
                                    </div>
                                  ))}
                               </div>
                            </div>
                         </div>
                         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center">
                            <div className="relative w-48 h-48 mb-6">
                               <svg className="w-full h-full -rotate-90">
                                  <circle cx="96" cy="96" r="80" fill="none" stroke="#f8fafc" strokeWidth="16" />
                                  <circle cx="96" cy="96" r="80" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray={502} strokeDashoffset={502 - (502 * report.maturityScore) / 100} className="text-primary" />
                               </svg>
                               <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <span className="text-6xl font-black text-slate-900">{report.maturityScore}</span>
                                  <span className="text-sm font-black text-primary bg-primary/5 px-4 py-1 rounded-full mt-2">Grade: {report.grade}</span>
                               </div>
                            </div>
                            <h4 className="text-lg font-black text-slate-900">{lang === 'en' ? 'Performance Maturity' : 'نضج الأداء الرقمي'}</h4>
                         </div>
                      </div>

                      <div className="grid lg:grid-cols-3 gap-8">
                         {/* Market & Tech Column */}
                         <div className="space-y-8">
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                               <h4 className="text-xl font-black mb-6 flex items-center gap-3"><Trophy size={22} className="text-secondary" /> {lang === 'en' ? 'Market Edge' : 'ميزة السوق'}</h4>
                               <div className="space-y-6">
                                  <div>
                                     <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{lang === 'en' ? 'Unfair Advantage' : 'الميزة التنافسية'}</p>
                                     <p className="text-sm font-bold text-slate-700 leading-relaxed">{report.marketPositioning.advantage}</p>
                                  </div>
                                  <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                     <p className="text-[10px] font-black uppercase text-red-400 tracking-widest mb-1">{lang === 'en' ? 'Core Threat' : 'التهديد الأساسي'}</p>
                                     <p className="text-sm font-bold text-red-800">{report.marketPositioning.threat}</p>
                                  </div>
                               </div>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                               <h4 className="text-xl font-black mb-6 flex items-center gap-3"><Settings size={22} className="text-blue-600" /> {lang === 'en' ? 'Stack Recommendation' : 'ترقية النظام التقني'}</h4>
                               <div className="space-y-6">
                                  {report.techStackRecommendation.map((t, i) => (
                                    <div key={i}>
                                       <p className="text-[10px] font-black uppercase text-slate-400 mb-2">{t.category}</p>
                                       <div className="flex flex-wrap gap-2 mb-2">
                                          {t.tools.map(tool => <span key={tool} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-black">{tool}</span>)}
                                       </div>
                                       <p className="text-[10px] text-slate-500 font-medium">{t.why}</p>
                                    </div>
                                  ))}
                               </div>
                            </div>
                         </div>

                         {/* Gap Analysis Dashboard */}
                         <div className="lg:col-span-2 bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <h4 className="text-2xl font-black mb-10 flex items-center gap-3"><PieChart size={28} className="text-primary" /> {lang === 'en' ? 'Gap Analysis Dashboard' : 'لوحة تحليل الفجوات'}</h4>
                            <div className="grid md:grid-cols-3 gap-8">
                               {[
                                 {id: 'technical', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50', label: {en: 'Technical', ar: 'الجانب التقني'}},
                                 {id: 'marketing', icon: Target, color: 'text-orange-600', bg: 'bg-orange-50', label: {en: 'Marketing', ar: 'التسويق'}},
                                 {id: 'content', icon: Layout, color: 'text-purple-600', bg: 'bg-purple-50', label: {en: 'Content', ar: 'المحتوى'}}
                               ].map(cat => (
                                 <div key={cat.id} className="space-y-4">
                                    <div className={`w-12 h-12 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center`}><cat.icon size={24} /></div>
                                    <h5 className="font-black text-slate-900">{lang === 'en' ? cat.label.en : cat.label.ar}</h5>
                                    <div className="space-y-2">
                                       {(report.gapAnalysis as any)[cat.id].map((g: string, i: number) => (
                                          <div key={i} className="flex items-start gap-2">
                                             <div className="w-1 h-1 bg-slate-300 rounded-full mt-2 shrink-0"></div>
                                             <p className="text-xs font-bold text-slate-500 leading-relaxed">{g}</p>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>

                      {/* Strategic Roadmap Row */}
                      <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
                         <h4 className="text-3xl font-black mb-12 text-center">{lang === 'en' ? '3-Phase Execution Roadmap' : 'خارطة الطريق المكونة من 3 مراحل'}</h4>
                         <div className="grid md:grid-cols-3 gap-12 relative">
                            <div className="hidden md:block absolute top-16 left-20 right-20 h-1 bg-slate-100 -z-10"></div>
                            {report.strategicRoadmap.map((p, i) => (
                              <div key={i} className="relative group">
                                 <div className="w-16 h-16 bg-primary text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl mb-8 mx-auto shadow-xl group-hover:scale-110 transition-transform">{i + 1}</div>
                                 <div className="text-center mb-6">
                                    <h5 className="font-black text-slate-900 text-xl mb-2">{p.phase}</h5>
                                    <p className="text-xs font-black text-primary uppercase tracking-widest bg-primary/5 inline-block px-4 py-1 rounded-full">{p.focus}</p>
                                 </div>
                                 <div className="space-y-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                                    <div className="mb-4">
                                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{lang === 'en' ? 'Core Goal' : 'الهدف الأساسي'}</p>
                                       <p className="text-sm font-bold text-slate-800">{p.expectedOutcome}</p>
                                    </div>
                                    <div className="space-y-2">
                                       {p.steps.map((s, j) => (
                                          <div key={j} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                             <ChevronRight size={14} className="text-primary shrink-0" />
                                             {s}
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>

                      {/* Final CTA Box */}
                      <div className="bg-primary p-14 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary/20 opacity-40"></div>
                         <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-black mb-6">{lang === 'en' ? 'Time to Outperform Your Competitors' : 'حان الوقت لتجاوز منافسيك'}</h3>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 font-medium">
                               {lang === 'en' ? 'This audit is just the beginning. Our experts are ready to execute this exact roadmap to double your growth.' : 'هذا التدقيق هو البداية فقط. خبراؤنا مستعدون لتنفيذ خارطة الطريق هذه لمضاعفة نمو أعمالك.'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                               <a href="#contact" className="px-12 py-5 bg-white text-primary font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-lg">
                                  {lang === 'en' ? 'Book Implementation Strategy' : 'حجز جلسة تنفيذ الاستراتيجية'}
                               </a>
                               <button onClick={reset} className="px-12 py-5 bg-white/10 text-white font-black rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-lg">
                                  {lang === 'en' ? 'New Diagnostic' : 'تشخيص جديد'}
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                 )
               )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
