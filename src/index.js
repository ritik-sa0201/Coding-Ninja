import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { signal } from '@preact/signals-react';

const root = document.getElementById('root');
export const scrollToTop = signal(()=>root.scrollTo({top: 0}));

ReactDOM.createRoot(root)
.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);