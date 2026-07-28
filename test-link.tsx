import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const App = () => (
  <ReactMarkdown
    components={{
      a: ({ href, children }) => {
        console.log("HREF:", href);
        return <a href={href}>{children}</a>;
      }
    }}
  >
    {"[من هو خبير إعلانات جوجل؟](#من-هو-خبير-إعلانات-جوجل)"}
  </ReactMarkdown>
);

renderToStaticMarkup(<App />);
