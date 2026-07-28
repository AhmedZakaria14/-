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

const markdown = `### **من هو خبير إعلانات جوجل؟**`;

const App = () => (
  <ReactMarkdown
    components={{
      h3: ({ children }) => {
        const raw = extractRawText(children);
        const id = slugifyHeading(raw);
        console.log("GENERATED ID:", id);
        return <h3 id={id}>{children}</h3>;
      }
    }}
  >
    {markdown}
  </ReactMarkdown>
);

renderToStaticMarkup(<App />);
