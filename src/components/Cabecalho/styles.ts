import styled from 'styled-components';

// Estilos para o cabeçalho
export const Cabecalho = styled.div`
    background-color: #003366;
    padding: 10px 20px;
    color: white;
    display: flex;
    flex-wrap: wrap; /* Permite que os itens ajustem em linhas, se necessário */
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

// Contêiner para o título e subtítulo
export const TituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    margin-left: -12%;

    @media (max-width: 768px) {
        margin: 10px 0; /* Ajusta o espaçamento em telas menores */
    }
`;

// Estilo para o título
export const Secretaria = styled.h2`
    font-size: 1.5rem; /* Aumenta a legibilidade */
    margin: 5px 0;

    @media (max-width: 768px) {
        font-size: 1.2rem; /* Ajusta o tamanho da fonte em telas menores */
    }
`;

// Estilo para o subtítulo
export const Subtitulo = styled.h3`
    font-size: 1.2rem;
    color: #f0f0f0;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1rem; /* Diminui em telas menores */
    }
`;

// Estilo para a data
export const Date = styled.p`
    color: #f0f0f0;
    font-size: 1em;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 0.9em; /* Ajusta o tamanho da fonte */
    }
`;

// Estilo para a logo
export const Logo = styled.img`
    width: 15%;
    height: auto;
    margin-right: 20px;

    @media (max-width: 768px) {
        display: none; /* Remove a logo em telas menores */
    }
`;
