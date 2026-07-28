import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const markdown = `
- [ما المقصود بإعلانات جوجل؟](#ما-المقصود-بإعلانات-جوجل)
`;

const App = () => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => {
        console.log("HREF IS:", href);
        return <a href={href}>{children}</a>;
      }
    }}
  >
    {markdown}
  </ReactMarkdown>
);

renderToStaticMarkup(<App />);
