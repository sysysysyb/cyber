import GlobalStyles from '@styles/GlobalStyles.jsx';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
