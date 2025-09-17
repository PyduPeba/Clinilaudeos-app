// frontend/src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import api from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/auth/profile');
        setPerfil(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h1>Bem-vindo, {perfil?.name || 'Médico(a)'}!</h1>
        <p>Você está autenticado com sucesso.</p>
      </div>
    </div>
  );
};

export default Dashboard;
