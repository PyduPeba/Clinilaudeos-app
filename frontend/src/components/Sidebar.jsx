// frontend/src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h3>Clinilaudos</h3>
      <ul>
        <li>📄 Templates</li>
        <li>📁 Meus Laudos</li>
        <li>⚙️ Configurações</li>
      </ul>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Sidebar;
