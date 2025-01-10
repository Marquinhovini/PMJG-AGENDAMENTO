import React, { useState, useMemo } from 'react';
import Cabecalhocomponente from '../../components/Cabecalho/Cabecalho';
import CPFInput from './CPFinput';
import Servicos from './Servicos';
import SelecioneEndereco from './SelecioneEndereco';
import Button from '../../components/Button/Button';
import { Agendamento, Label, Nome, Email, Telefone, Botao, FormInput, Error, ServicoAgendamento } from './styles';
import Calendario from '../../components/Calendario/Calendario';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
    const [selectEndereco, setSelectEndereco] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [tipoServico, setTipoServico] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isCpfConsulted, setIsCpfConsulted] = useState(false);

    //Botão Agendar
    const navigate = useNavigate();

    const handleAgendar = () => {
        navigate('/comprovante', {
            state: {
                protocolo: '123456', // Gerar protocolo real
                nomeCompleto,
                cpf,
                data: '15/12/2024', // Exemplo, obter do calendário
                hora: '10:00', // Exemplo, capturar do input de hora
                local: unidade,
                servico: tipoServico,
            },
        });
    };

    const unidade = useMemo(() => {
        if (tipoServico === 'iptu' || tipoServico === 'itbi') return 'SEFAZ';
        if (tipoServico === 'iss') return 'Procon';
        return '';
    }, [tipoServico]);

    const formatCpfCnpj = (value: string) => {
        // Remove todos os caracteres não numéricos
        value = value.replace(/\D/g, '');

        // Formata como CPF se o valor tiver 11 dígitos
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }
        // Formata como CNPJ se o valor tiver 14 dígitos
        else if (value.length === 14) {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }

        return value; // Se o número for maior que 14, retorna o valor sem formatação
    };


    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Remove caracteres não numéricos
        value = value.replace(/\D/g, '');

        // Aplica a máscara (xx)xxxxx-xxxx
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');

        // Limita o tamanho a 11 dígitos
        if (value.length > 14) {
            value = value.substring(0, 14);
        }

        setTelefone(value);
        setErrors((prev) => ({ ...prev, telefone: '' })); // Limpa erros ao editar
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // Remove qualquer caractere não numérico e depois aplica a formatação
        value = value.replace(/\D/g, ''); // Remove os caracteres não numéricos
        if (value.length <= 11) {
            // Formata como CPF
            setCpf(formatCpfCnpj(value));
        } else if (value.length <= 14) {
            // Formata como CNPJ
            setCpf(formatCpfCnpj(value));
        } else {
            setCpf(formatCpfCnpj(value.substring(0, 14))); // Limita a 14 caracteres no CNPJ
        }
        setErrors((prev) => ({ ...prev, cpf: '' }));
    };

    const handleConsult = () => {
        const cpfDigitsOnly = cpf.replace(/\D/g, '');
        if (cpfDigitsOnly.length !== 11 && cpfDigitsOnly.length !== 14) {
            setErrors((prev) => ({ ...prev, cpf: 'CPF ou CNPJ inválido' }));
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
            return 'Endereço do Shopping Guararapes';
        }
        return '';
    };


    return (
        <>
            <Cabecalhocomponente />
            <Agendamento>
                <ServicoAgendamento>Serviço de Agendamento</ServicoAgendamento>
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
                                    onChange={handleTelefoneChange}
                                    placeholder="(xx)xxxxx-xxxx"
                                    required
                                />
                                {errors.telefone && <Error>{errors.telefone}</Error>}
                            </FormInput>
                        </Telefone>
                        <Label>Selecione uma data</Label>
                        <Calendario />
                        <Botao>
                            <Button label="Voltar" onClick={() => setIsCpfConsulted(false)} className="voltar" />
                            <Button label="Agendar" onClick={handleAgendar} className="agendar" />
                        </Botao>
                    </form>
                )}
            </Agendamento>
        </>
    );
};

export default Form;
