import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

console.log("App is mounting...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

// If the root element contains our fallback loading screen, we must use createRoot
// to completely clear it and avoid hydration mismatches.
// If it doesn't contain the fallback, it means it's the pre-rendered HTML from react-snap,
// so we can safely hydrate it.
const hasFallback = rootElement.innerHTML.includes('SEO Fallback Content');

if (rootElement.hasChildNodes() && !hasFallback) {
  hydrateRoot(rootElement, app);
} else {
  const root = createRoot(rootElement);
  root.render(app);
}
