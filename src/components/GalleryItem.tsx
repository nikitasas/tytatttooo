import React from 'react';
import { TattooWork } from '../types';
import { masters } from '../data/masters';

interface GalleryItemProps {
  work: TattooWork;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ work, onClick }) => {
  const master = masters.find(m => m.id === work.masterId);
  
  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      onClick={onClick}
    >
      <img 
        src={work.image} 
        alt={`Тату в стиле ${work.style}`} 
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        <p className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {work.style}
        </p>
        <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
          Мастер: {master?.name}
        </p>
      </div>
    </div>
  );
};

export default GalleryItem;