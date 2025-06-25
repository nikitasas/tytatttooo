import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Страница не найдена</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link 
          to="/" 
          className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;