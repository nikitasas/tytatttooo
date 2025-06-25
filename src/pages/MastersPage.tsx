import React from 'react';
import { masters } from '../data/masters';
import MasterCard from '../components/MasterCard';

const MastersPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Наши мастера</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Познакомьтесь с нашей командой профессиональных тату-мастеров. Каждый из них специализируется на определенных стилях и техниках.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master) => (
            <MasterCard key={master.id} master={master} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Хотите стать частью нашей команды?</h2>
          <p className="text-gray-300 mb-6">
            Мы всегда в поиске талантливых мастеров, которые разделяют наши ценности и стремятся к профессиональному росту.
            Если вы опытный тату-мастер и хотите присоединиться к нашей студии, свяжитесь с нами.
          </p>
          <a 
            href="mailto:info@tytattoo.ru" 
            className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
          >
            Отправить резюме
          </a>
        </div>
      </div>
    </div>
  );
};

export default MastersPage;