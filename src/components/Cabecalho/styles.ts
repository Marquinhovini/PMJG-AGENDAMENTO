import styled from 'styled-components';

// Estilos para o cabeçalho
export const Cabecalho = styled.div`
    background-color: #003366;
    padding: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

// Contêiner para o título e subtítulo
export const TituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-left: -12%;
`;

// Estilo para o título
export const TituloAgendamento = styled.h2`
    font-size: 1.3rem;
    margin-top: -15px ;
    margin-bottom: 7px;
    text-align: center;
`;

// Estilo para o subtítulo
export const Subtitulo = styled.h3`
    font-size: 1.2rem;
    color: #f0f0f0;
    margin-bottom: 10px;
    text-align: center;
`;

// Estilo para a data
export const Date = styled.p`
    color: #f0f0f0;
    font-size: 1em;
    margin: 0;
    text-align: center;
`;

// Estilo para a logo
export const Logo = styled.img`
    width: 15%;
    height: auto;
    margin-right: 20px;
`;
