import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Função para bloquear dias (sábado e domingo ou datas anteriores)
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    const dayOfWeek = date.getDay();

    // Bloqueia datas anteriores e dias de fim de semana (0 = domingo, 6 = sábado)
    return date < today || dayOfWeek === 0 || dayOfWeek === 6;
  };


return (
    <div>
    <Calendar
        onChange={(value: Date) => setDate(value)}
        value={date}
        tileDisabled={({ date }) => isDateDisabled(date)} // Bloqueia as datas indesejadas
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>{date ? `Data selecionada: ${date.toLocaleDateString()}` : 'Nenhuma data selecionada'}</p>
    </div>
  );
};

export default Calendario;
