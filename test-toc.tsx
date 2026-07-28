import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const extractRawText = (node: any): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractRawText).join('');
  if (node.props && node.props.children) return extractRawText(node.props.children);
  if (node.props && node.props.nodeValue) return node.props.nodeValue;
  if (node.value) return node.value;
  return '';
};

const slugifyHeading = (text: string) => {
  return text
    .trim()
    .replace(/[؟?!.,;:!#*`"']/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

const markdown = `
## جدول المحتويات
- [ما المقصود بإعلانات جوجل؟](#ما-المقصود-بإعلانات-جوجل)
- [ماذا تحدد قبل إنشاء الإعلان؟](#ماذا-تحدد-قبل-إنشاء-الإعلان)
  - [النتيجة المطلوبة من الإعلان](#النتيجة-المطلوبة-من-الإعلان)
  - [الشخص الذي تريد الوصول إليه](#الشخص-الذي-تريد-الوصول-إليه)
  - [العرض الموجود خلف الإعلان](#العرض-الموجود-خلف-الإعلان)
  - [الصفحة التي سيصل إليها المستخدم](#الصفحة-التي-سيصل-إليها-المستخدم)
- [كيفية انشاء اعلان على جوجل وفق هدف واضح](#كيفية-انشاء-اعلان-على-جوجل-وفق-هدف-واضح)
`;

const App = () => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => {
        return <a href={href}>{children}</a>;
      }
    }}
  >
    {markdown}
  </ReactMarkdown>
);

console.log(renderToStaticMarkup(<App />));
