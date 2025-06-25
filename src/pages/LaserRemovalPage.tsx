import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Clock, CheckCircle } from 'lucide-react';

const LaserRemovalPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Лазерное удаление татуировок</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Безопасное и эффективное удаление нежелательных татуировок с помощью современного лазерного оборудования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://avatars.mds.yandex.net/i?id=a24d4e35a844fb7b92baaf8664a81a02b216380f-4233236-images-thumbs&n=13" 
              alt="Лазерное удаление татуировок" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-6">Как это работает?</h2>
            <p className="text-gray-300 mb-4">
              Лазерное удаление татуировок — это современный и безопасный метод, при котором лазер разбивает частицы краски на мельчайшие фрагменты, которые затем выводятся из организма естественным путем.
            </p>
            <p className="text-gray-300">
              Процедура проводится поэтапно, количество сеансов зависит от размера татуировки, глубины залегания пигмента и его цвета.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-xl">
            <Zap size={40} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Современные технологии</h3>
            <p className="text-gray-300">
              Используем новейшее лазерное оборудование, которое эффективно удаляет татуировки любой сложности.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl">
            <Shield size={40} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Безопасность</h3>
            <p className="text-gray-300">
              Процедура проводится с соблюдением всех медицинских норм и требований безопасности.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl">
            <Clock size={40} className="text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Быстрое восстановление</h3>
            <p className="text-gray-300">
              Минимальный период реабилитации после каждой процедуры.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Этапы процедуры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="bg-white rounded-full p-2 mr-4">
                <CheckCircle size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Консультация</h3>
                <p className="text-gray-300">Оценка татуировки и составление плана удаления</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full p-2 mr-4">
                <CheckCircle size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Подготовка</h3>
                <p className="text-gray-300">Обработка кожи и применение анестезии</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full p-2 mr-4">
                <CheckCircle size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Процедура</h3>
                <p className="text-gray-300">Лазерное воздействие на пигмент</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full p-2 mr-4">
                <CheckCircle size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Восстановление</h3>
                <p className="text-gray-300">Уход за кожей и наблюдение результатов</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Готовы избавиться от нежелательной татуировки?</h2>
          <Link 
            to="/appointment" 
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            Записаться на консультацию
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaserRemovalPage;