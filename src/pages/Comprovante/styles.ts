import styled from 'styled-components';

export const ComprovanteContainer = styled.div`
    width: 21cm;
    height: 29.7cm;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 13px;
    margin: 0 auto;
`;


export const Linha = styled.div`
    width: 100%;
    padding: 8px 0;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
`;

export const Avisos = styled.div`
    margin-top: 20px;
    font-size: 14px;
    color: #555;
    text-align: left;
`;

export const Rodape = styled.div`
    margin-top: auto;
    text-align: center;
    font-size: 13px;
    color: #555;
`;

export const BotaoImprimir = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    &:hover {
        background-color: #45a049;
    }
`;
