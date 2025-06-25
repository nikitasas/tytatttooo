import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          TY.TATTOO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">Главная</Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors">Услуги</Link>
          <Link to="/gallery" className="hover:text-gray-300 transition-colors">Галерея</Link>
          <Link to="/masters" className="hover:text-gray-300 transition-colors">Мастера</Link>
          <Link to="/laser-removal" className="hover:text-gray-300 transition-colors">Удаление тату</Link>
          <Link to="/blog" className="hover:text-gray-300 transition-colors">Блог</Link>
          <Link to="/contacts" className="hover:text-gray-300 transition-colors">Контакты</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/appointment" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
            Записаться
          </Link>
          {isAuthenticated ? (
            <Link to="/profile" className="flex items-center">
              <User size={20} className="mr-1" />
              <span>Профиль</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center">
              <User size={20} className="mr-1" />
              <span>Войти</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6 absolute top-16 left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Главная</Link>
            <Link to="/services" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Услуги</Link>
            <Link to="/gallery" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Галерея</Link>
            <Link to="/masters" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Мастера</Link>
            <Link to="/laser-removal" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Удаление тату</Link>
            <Link to="/blog" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Блог</Link>
            <Link to="/contacts" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Контакты</Link>
            <Link to="/appointment" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors text-center" onClick={toggleMenu}>
              Записаться
            </Link>
            {isAuthenticated ? (
              <Link to="/profile" className="flex items-center justify-center" onClick={toggleMenu}>
                <User size={20} className="mr-1" />
                <span>Профиль</span>
              </Link>
            ) : (
              <Link to="/login" className="flex items-center justify-center" onClick={toggleMenu}>
                <User size={20} className="mr-1" />
                <span>Войти</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;