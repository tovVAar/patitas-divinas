import React from 'react';
import BottomNav from '../components/BottomNav';

const GiveAdoptionPage: React.FC = () => {
  return (
    <div style={{ padding: '24px', textAlign: 'center', paddingTop: '100px' }}>
      <h1>Dar en adopción</h1>
      <p>Próximamente podrás registrar mascotas para adopción aquí.</p>
      <BottomNav />
    </div>
  );
};

export default GiveAdoptionPage;
