// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setErro(err.response?.data?.error || 'Erro ao fazer login');
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <div className="logo">Clinimagem</div>
        <nav>
          <a href="#">início</a>
          <a href="#">contato</a>
          <a href="#" className="active">login</a>
        </nav>
      </header>

     <div className="login-container">
        <div className="illustration left"></div>

        <div className="login-card">
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="icon">👤</span>
              <input
                type="email"
                placeholder="usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <span className="icon">🔒</span>
              <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> lembrar-me
              </label>
              <a href="#">esqueci minha senha</a>
            </div>

            <button type="submit">entrar</button>
            {erro && <p className="error">{erro}</p>}
          </form>
        </div>

        <div className="illustration right"></div>
        </div>
        {/* RODAPÉ */}
        <footer className="login-footer">
        <p>&copy; 2025 Clinilaudos. Todos os direitos reservados.</p>
        <p>Suporte: suporte@clinilaudos.com.br</p>
        </footer>
    </div>
  );
};

export default Login;
