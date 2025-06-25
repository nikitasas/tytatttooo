import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Запись на сеанс</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Заполните форму ниже, чтобы записаться на консультацию или сеанс татуировки. 
            Мы свяжемся с вами для подтверждения записи.
          </p>
        </div>
        
        <AppointmentForm />
      </div>
    </div>
  );
};

export default AppointmentPage;