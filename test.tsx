import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const extractRawText = (node: any): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractRawText).join('');
  if (node && node.props && node.props.children) return extractRawText(node.props.children);
  return '';
};

const slugifyHeading = (text: string) => {
  return text
    .trim()
    .replace(/[؟?!.,;:!#*`"']/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

const App = () => (
  <ReactMarkdown
    components={{
      h3: ({ children }) => {
        const raw = extractRawText(children);
        console.log("RAW:", raw);
        console.log("ID:", slugifyHeading(raw));
        return <h3 id={slugifyHeading(raw)}>{children}</h3>;
      }
    }}
  >
    {"### **من هو خبير إعلانات جوجل؟**"}
  </ReactMarkdown>
);

console.log(renderToStaticMarkup(<App />));
