import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card group">
      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
          {service.name}
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent mb-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-white">
          от <span className="text-3xl">{service.priceFrom}</span> ₽
        </p>
        <Link 
          to={`/appointment?service=${service.id}`}
          className="btn-primary"
        >
          Записаться
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;