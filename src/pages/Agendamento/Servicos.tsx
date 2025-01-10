import React from 'react';
import styled from 'styled-components';

interface ServicosProps {
    tipoServico: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    unidade: string;
}

const ServicosContainer = styled.div`
    margin-bottom: 20px;
`;

const ServicosLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    color: #333333;
    font-size: 16px;
`;

const ServicosSelect = styled.select`
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

const Servicos: React.FC<ServicosProps> = ({ tipoServico, onChange, unidade }) => (
    <ServicosContainer>
        <ServicosLabel>Selecione o tipo de serviço</ServicosLabel>
        <ServicosSelect
            name="imposto"
            value={tipoServico}
            onChange={onChange}
            required
        >
            <option value="" disabled hidden>Selecione</option>
            <option value="iptu">IPTU</option>
            <option value="iss">ISS</option>
            <option value="itbi">ITBI</option>
        </ServicosSelect>
        <p><strong>Unidade:</strong> {unidade}</p>
    </ServicosContainer>
);

export default Servicos;
