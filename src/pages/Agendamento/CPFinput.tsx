import React from 'react';
import Button from '../../components/Button/Button';

interface CPFInputProps {
    cpf: string;
    onCpfChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    cpfError: string;
    onConsult: () => void;
    isCpfValid: boolean;
}

const CPFInput: React.FC<CPFInputProps> = ({ cpf, onCpfChange, cpfError, onConsult, isCpfValid }) => (
    <div className="CPF">
        <label>Insira seu CPF</label>
        <input
            type="text"
            value={cpf}
            onChange={onCpfChange}
            placeholder="Insira seu CPF"
            required
            className="form-input"
        />
        <Button label="Consultar" onClick={onConsult} className="consultar" />
        {cpfError && <span className="error">{cpfError}</span>}
        {cpf.length === 14 && !isCpfValid && ( // Display button only if CPF has 11 digits (formatted length is 14)
            <Button label="Consultar" onClick={onConsult} className="consultar" />
        )}
    </div>
);

export default CPFInput;
