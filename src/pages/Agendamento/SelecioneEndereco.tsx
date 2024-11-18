import React from 'react';


interface SelecioneEnderecoProps {
    selectEndereco: string;
    onEnderecoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    getEndereco: (local: 'sefaz_procon' | 'shopping') => string;
}

const SelecioneEndereco : React.FC<SelecioneEnderecoProps> = ({ selectEndereco, onEnderecoChange, getEndereco }) => (
    <div className="selecioneEndereco">
        <label>Local do Atendimento</label>
        <select
            name="Endereco"
            value={selectEndereco}
            onChange={onEnderecoChange}
            className="form-input"
            required
        >
            <option value="" disabled hidden>Selecione</option>
            <option value="sefaz_procon">{getEndereco("sefaz_procon")}</option>
            <option value="shopping">{getEndereco("shopping")}</option>
        </select>
    </div>
);


export default SelecioneEndereco;
