import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ComprovanteContainer, Linha, Avisos, Rodape, BotaoImprimir, } from './styles';
import Cabecalhocomponente from '../../components/Cabecalho/Cabecalho';

interface DadosComprovante {
    protocolo: string;
    nomeCompleto: string;
    cpf: string;
    data: string;
    hora: string;
    local: string;
    servico: string;
}

const Comprovante: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dados = location.state as DadosComprovante;

    // Voltar para a tela inicial se não houver dados (acesso direto à página)
    if (!dados) {
        navigate('/');
        return null;
    }

    // Função para formatar a data atual
    const formatarDataPorExtenso = () => {
        const data = new Date();
        const dia = data.getDate();
        const meses = [
            'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
            'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
        ];
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();
        return `${dia} de ${mes} de ${ano}`;
    };

    return (
        
        <ComprovanteContainer>
            <Cabecalhocomponente />
            <Linha><strong>Protocolo:</strong> {dados.protocolo}</Linha>
            <Linha><strong>Contribuinte:</strong> {dados.nomeCompleto}</Linha>
            <Linha><strong>CPF/CNPJ:</strong> {dados.cpf}</Linha>
            <Linha><strong>Data:</strong> {dados.data}</Linha>
            <Linha><strong>Hora:</strong> {dados.hora}</Linha>
            <Linha><strong>Local de Atendimento:</strong> {dados.local}</Linha>
            <Linha><strong>Tipo de Serviço:</strong> {dados.servico}</Linha>

            <Avisos>
                <h1>Atenção:</h1>
                <p>- Você terá tolerância de 15 minutos. Em caso de atraso, será necessário reagendar.</p>
                <p>- Apresente este comprovante em seu celular ou impresso no momento do atendimento.</p>
                <p>- Evite filas chegando no local no horário agendado.</p>
            </Avisos>

            <Rodape>
                <p>Jaboatão dos Guararapes, {formatarDataPorExtenso()}</p>
                <p>
                    Atendimento ao Contribuinte<br />
                    Secretaria Executiva da Receita<br />
                    Secretaria Municipal de Planejamento da Fazenda<br />
                    Prefeitura Municipal do Jaboatão dos Guararapes
                </p>
            </Rodape>

            <BotaoImprimir onClick={() => window.print()}>Imprimir Comprovante</BotaoImprimir>
        </ComprovanteContainer>
        
    );
};

export default Comprovante;
