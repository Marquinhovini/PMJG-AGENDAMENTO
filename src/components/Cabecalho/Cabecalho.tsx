import React from 'react';
import { Cabecalho, TituloContainer, TituloAgendamento, Subtitulo, Date, Logo } from './styles';
import logoImg from '../../assets/titulo.png';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br'); // Define o idioma como português

const Cabecalhocomponente: React.FC = () => {
    const currentDate = dayjs().format("dddd, D [de] MMMM [de] YYYY"); // Data formatada em português

    return (
        <Cabecalho>
            <Logo src={logoImg} alt="Logo" />
            <TituloContainer>
                <TituloAgendamento>SECRETARIA MUNICIPAL DE PLANEJAMENTO E FAZENDA</TituloAgendamento>
                <Subtitulo>Sistema de Agendamento para Atendimento Presencial</Subtitulo>
                <Date>{currentDate}</Date>
            </TituloContainer>
        </Cabecalho>
    );
};

export default Cabecalhocomponente;
