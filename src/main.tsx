import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import do React Router
import Agendamento from './pages/Agendamento';
import Comprovante from './pages/Comprovante'; // Página do comprovante
import MyGlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <MyGlobalStyles />
      <Routes>
        <Route path="/" element={<Agendamento />} />
        <Route path="/comprovante" element={<Comprovante />} />
      </Routes>
    </Router>
  </StrictMode>
);
