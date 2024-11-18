import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Agendamento from './pages/Agendamento'
import MyGlobalStyles from './styles/globalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles />
    <Agendamento />
  </StrictMode>
);
