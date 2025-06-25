import React, { useState } from 'react';
import { works } from '../data/works';
import { masters } from '../data/masters';
import GalleryItem from '../components/GalleryItem';

const GalleryPage: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [selectedMaster, setSelectedMaster] = useState<number>(0);
  const [modalImage, setModalImage] = useState<string | null>(null);
  
  // Get unique styles
  const styles = ['all', ...new Set(works.map(work => work.style))];
  
  // Filter works based on selected style and master
  const filteredWorks = works.filter(work => {
    const styleMatch = selectedStyle === 'all' || work.style === selectedStyle;
    const masterMatch = selectedMaster === 0 || work.masterId === selectedMaster;
    return styleMatch && masterMatch;
  });
  
  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Галерея работ</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ознакомьтесь с работами наших мастеров. Используйте фильтры, чтобы найти татуировки в интересующем вас стиле.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div>
            <label className="text-gray-300 mr-2">Стиль:</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="bg-gray-800 text-white rounded p-2"
            >
              {styles.map((style) => (
                <option key={style} value={style}>
                  {style === 'all' ? 'Все стили' : style}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="text-gray-300 mr-2">Мастер:</label>
            <select
              value={selectedMaster}
              onChange={(e) => setSelectedMaster(Number(e.target.value))}
              className="bg-gray-800 text-white rounded p-2"
            >
              <option value={0}>Все мастера</option>
              {masters.map((master) => (
                <option key={master.id} value={master.id}>
                  {master.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorks.map((work) => (
            <GalleryItem 
              key={work.id} 
              work={work} 
              onClick={() => openModal(work.image)}
            />
          ))}
        </div>
        
        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300">Работы не найдены. Попробуйте изменить параметры фильтра.</p>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <img 
              src={modalImage} 
              alt="Увеличенное изображение татуировки" 
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;