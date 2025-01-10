import styled from 'styled-components';

export const Agendamento = styled.div`
    max-width: 600px;
    margin: auto; /* Centraliza o formulário horizontalmente */
    padding: 30px;
    border: 1px solid #81b6fc; /* Borda azul clara */
    border-radius: 12px; /* Arredonda as bordas */
    background-color: #ffffff; /* Fundo branco */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1); /* Sombra suave */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fonte amigável e moderna */
    margin-top: 2%;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #333333;
    font-size: 16px;
`;


export const Nome = styled.div`
    margin-bottom: 10px;
    width: 100%;
    input {
        padding: 14px 16px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 16px;
        background-color: #f7fafc;
        transition: all 0.3s ease;
        width: 100%;
        box-sizing: border-box;
    }
`;

export const Email = Nome;
export const Telefone = Nome;

export const Botao = styled.div`
    display: flex;
    gap: 10px;
`;

export const Error = styled.div`
    color: #e53e3e;
    font-size: 14px;
    margin-left: 5px;
`;

export const FormInput = styled.div`
    color: black;
`;

export const ServicoAgendamento = styled.h2`
`