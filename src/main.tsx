import { createRoot } from 'react-dom/client';
import { Router } from './Components/Router';
import  './index.css'
createRoot(document.getElementById('root') as HTMLElement).render(
 <Router/>
);
