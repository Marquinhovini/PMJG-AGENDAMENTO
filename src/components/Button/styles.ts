// src/components/button/styles.ts
import styled from 'styled-components';

// Estilos para o botão
export const MyButton = styled.button`
    background-color: #0056b3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    &.voltar {
        background-color: #003366;
        color: white;
    }

    &.agendar {
        background-color: #003366;
        color: white;
    }

    &.consultar {
        background-color: #003366;
        color: white;
    }
`;
