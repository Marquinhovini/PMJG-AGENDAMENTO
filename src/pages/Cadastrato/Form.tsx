import React from "react";
import "./style.css"; // Usando o caminho relativo
import Button from '../../components/Button/Button';

const CadastroForm: React.FC = () => {
  return (
    <div className="container">
      <div className="form-image">
        <img src="cadastro/css/img/logo.png" alt="Logo" />
      </div>
      <div className="form">
        <form>
          <div className="form-header">
            <div className="title">
              <h1>Pré-Cadastro</h1>
            </div>
          </div>

          <div className="input-group">
            <div className="input-box">
              <label htmlFor="firstname">Nome Completo</label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Nome completo do solicitante"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="cpf">CPF</label>
              <input
                id="cpf"
                type="text"
                name="cpf"
                placeholder="Digite seu CPF"
                required
                pattern="\d{11}"
              />
            </div>
            <div className="input-box">
              <label htmlFor="number">Telefone</label>
              <input
                id="number"
                type="tel"
                name="number"
                placeholder="Telefone"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email (opcional)</label>
              <input
                id="email"
                type="email"
                name="number"
                placeholder="(Opcional)"
                required
              />
            </div>
            

            <div className="button-group">
              <button type="submit" className="continue-button">
                Salvar
              </button>
              <button
                type="button"
                className="back-button"
                onClick={() => window.history.back()}
              >
                Voltar
              </button>

            
                        <Button label="Salvar" onClick={() => setIsCpfConsulted(false)} className="Salvar" />
                        <Button label="Voltar" onClick={() => console.log("Voltar")} className="Voltar" />
                
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroForm;
