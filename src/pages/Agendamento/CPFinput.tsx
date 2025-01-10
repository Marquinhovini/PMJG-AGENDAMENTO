import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';

interface CPFInputProps {
    cpf: string;
    onCpfChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cpfError: string;
    onConsult: () => void;
    isCpfValid: boolean;
}

const CPFContainer = styled.div`
    margin-bottom: 20px;
`;

const CPFLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #333333;
    font-size: 16px;
    margin-top: 1%;
`;

const CPFInputField = styled.input`
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #f7fafc;
    transition: all 0.3s ease;
    box-sizing: border-box;
    margin-bottom: 10px;

    &:focus {
        outline: none;
        border-color: #003366;
        box-shadow: 0 0 8px rgba(2, 52, 114, 0.2);
    }

    &.error {
        border-color: #e53e3e;
        background-color: white;
    }
`;

const ErrorText = styled.span`
    color: #e53e3e;
    font-size: 14px;
    margin-top: 5px;
    display: block;
`;

const CPFInput: React.FC<CPFInputProps> = ({ cpf, onCpfChange, cpfError, onConsult, }) => (
    <CPFContainer>
        <CPFLabel>Insira seu CPF ou CNPJ</CPFLabel>
        <CPFInputField
            type="text"
            value={cpf}
            onChange={onCpfChange}
            placeholder="Apenas Números"
            required
            className={cpfError ? 'error' : ''}
        />
        {/* Sempre exibe o botão "Consultar", independentemente da validade */}
        <Button label="Consultar" onClick={onConsult} className="consultar" />

        {/* Exibe a mensagem de erro, se houver */}
        {cpfError && <ErrorText>{cpfError}</ErrorText>}
    </CPFContainer>
);

export default CPFInput;
