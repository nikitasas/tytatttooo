import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Услуги и цены</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг по созданию татуировок различных стилей и сложности. 
            Окончательная стоимость зависит от размера, сложности и времени работы.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Дополнительная информация</h2>
          <ul className="text-gray-300 space-y-3">
            <li>• Окончательная стоимость определяется после консультации с мастером</li>
            <li>• В стоимость входит разработка эскиза (кроме сложных индивидуальных работ)</li>
            <li>• Минимальная стоимость сеанса — 2000 ₽</li>
            <li>• Для крупных работ может потребоваться несколько сеансов</li>
            <li>• Коррекция собственных работ в течение месяца — бесплатно</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;