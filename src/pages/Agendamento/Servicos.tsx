import React from 'react';

interface  ServicosProps {
    tipoServico: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    unidade: string;
}

const  Servicos: React.FC< ServicosProps> = ({ tipoServico, onChange, unidade }) => (
    <div className="Servico">
        <label>Selecione o tipo de serviço</label>
        <select
            name="imposto"
            value={tipoServico}
            onChange={onChange}
            className="form-input"
            required
        >
            <option value="" disabled hidden>Selecione</option>
            <option value="iptu">IPTU</option>
            <option value="iss">ISS</option>
            <option value="itbi">ITBI</option>
        </select>
        <p><strong>Unidade:</strong> {unidade}</p>
    </div>
);

export default Servicos;
