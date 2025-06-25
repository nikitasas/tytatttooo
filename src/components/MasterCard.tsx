import React from 'react';
import { Link } from 'react-router-dom';
import { Master } from '../types';

interface MasterCardProps {
  master: Master;
}

const MasterCard: React.FC<MasterCardProps> = ({ master }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <img 
        src={master.photo} 
        alt={`Тату-мастер ${master.name}`} 
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold text-white mb-2">{master.name}</h3>
        <p className="text-gray-300 mb-3">Опыт: {master.experience}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {master.styles.map((style, index) => (
            <span 
              key={index} 
              className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
            >
              {style}
            </span>
          ))}
        </div>
        
        <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          {master.description}
        </p>
        
        <Link 
          to={`/appointment?master=${master.id}`}
          className="btn-primary w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"
        >
          Записаться к мастеру
        </Link>
      </div>
    </div>
  );
};

export default MasterCard;