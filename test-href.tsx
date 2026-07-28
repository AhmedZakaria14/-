import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const App = () => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => {
        console.log("HREF IS:", href);
        return <a href={href}>{children}</a>;
      }
    }}
  >
    {"[Link](#my-hash)"}
  </ReactMarkdown>
);

renderToStaticMarkup(<App />);
