import React from 'react';
import styled from 'styled-components';

interface SelecioneEnderecoProps {
    selectEndereco: string;
    onEnderecoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    getEndereco: (local: 'sefaz_procon' | 'shopping') => string;
}

const SelecioneEnderecoContainer = styled.div`
    margin-bottom: 20px;
`;

const SelecioneEnderecoLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #333333;
    font-size: 16px;
`;

const SelecioneEnderecoSelect = styled.select`
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #f7fafc;
    color: #333;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #003366;
        box-shadow: 0 0 8px rgba(2, 52, 114, 0.2);
    }

`;

const SelecioneEndereco: React.FC<SelecioneEnderecoProps> = ({ selectEndereco, onEnderecoChange, getEndereco }) => (
    <SelecioneEnderecoContainer>
        <SelecioneEnderecoLabel>Local do Atendimento</SelecioneEnderecoLabel>
        <SelecioneEnderecoSelect
            name="Endereco"
            value={selectEndereco}
            onChange={onEnderecoChange}
            required
        >
            <option value="" disabled hidden>Selecione</option>
            <option value="sefaz_procon">{getEndereco("sefaz_procon")}</option>
            <option value="shopping">{getEndereco("shopping")}</option>
        </SelecioneEnderecoSelect>
    </SelecioneEnderecoContainer>
);

export default SelecioneEndereco;
