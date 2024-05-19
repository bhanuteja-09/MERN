import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Assuming you have a div with id 'root' in your index.html
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
