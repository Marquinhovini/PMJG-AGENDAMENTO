import React, { useState, useMemo } from 'react';
import Cabecalhocomponente from '../../components/Cabecalho/Cabecalho';
import CPFInput from './CPFinput';
import Servicos from './Servicos';
import SelecioneEndereco from './SelecioneEndereco';
import Button from '../../components/Button/Button';
import { Agendamento, Label, Nome, Email, Telefone, Botao, FormInput, Error } from './styles.ts';

const Form: React.FC = () => {
    const [selectEndereco, setSelectEndereco] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [tipoServico, setTipoServico] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isCpfConsulted, setIsCpfConsulted] = useState(false);

    const unidade = useMemo(() => {
        if (tipoServico === 'iptu' || tipoServico === 'itbi') return 'SEFAZ';
        if (tipoServico === 'iss') return 'Procon';
        return '';
    }, [tipoServico]);

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        setCpf(formatCpf(value));
        setErrors((prev) => ({ ...prev, cpf: '' }));
    };

    const formatCpf = (cpf: string) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    const validateCpf = (cpf: string): boolean => {
        return cpf.length === 11 && cpf !== '00000000000';
    };

    const handleConsult = () => {
        const cpfDigitsOnly = cpf.replace(/\D/g, '');
        if (cpfDigitsOnly.length !== 11 || !validateCpf(cpfDigitsOnly)) {
            setErrors((prev) => ({ ...prev, cpf: 'CPF inválido' }));
            return;
        }
        setIsCpfConsulted(true);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(errors).some((error) => error)) return;
        console.log("Formulário enviado:", { cpf, nomeCompleto, email, telefone, tipoServico, unidade, selectEndereco });
    };

    const getEndereco = (local: 'sefaz_procon' | 'shopping') => {
        if (local === 'sefaz_procon') {
            return 'PREDIO PALACIO DA BATALHA - Av. Barreto de Menezes, 1648, Prazeres - CEP: 54310310 (Ao Lado do Corpo de Bombeiros)';
        } else if (local === 'shopping') {
            return 'Endereço do Shopping';
        }
        return '';
    };

    return (
        <Agendamento>
            <Cabecalhocomponente />
            {!isCpfConsulted ? (
                <CPFInput
                    cpf={cpf}
                    onCpfChange={handleCpfChange}
                    cpfError={errors.cpf}
                    onConsult={handleConsult}
                    isCpfValid={!!cpf && !errors.cpf}
                />
            ) : (
                <form onSubmit={handleSubmit}>
                    <Servicos tipoServico={tipoServico} onChange={(e) => setTipoServico(e.target.value)} unidade={unidade} />
                    <SelecioneEndereco 
                        selectEndereco={selectEndereco}
                        onEnderecoChange={(e) => setSelectEndereco(e.target.value)}
                        getEndereco={getEndereco}  
                    />
                    <Nome>
                        <Label>Nome Completo</Label>
                        <FormInput>
                            <input
                                type="text"
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                placeholder="Seu nome completo"
                                required
                            />
                            {errors.nomeCompleto && <Error>{errors.nomeCompleto}</Error>}
                        </FormInput>
                    </Nome>
                    <Email>
                        <Label>E-mail</Label>
                        <FormInput>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu e-mail"
                                required
                            />
                        </FormInput>
                    </Email>
                    <Telefone>
                        <Label>Telefone</Label>
                        <FormInput>
                            <input
                                type="text"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                placeholder="Seu telefone"
                                required
                            />
                            {errors.telefone && <Error>{errors.telefone}</Error>}
                        </FormInput>
                    </Telefone>
                    <Botao>
                        <Button label="Voltar" onClick={() => console.log("Voltar clicado")} className="voltar" />
                        <Button label="Agendar" onClick={() => console.log("Agendar clicado")} className="agendar" />
                    </Botao>
                </form>
            )}
        </Agendamento>
    );
};

export default Form;
