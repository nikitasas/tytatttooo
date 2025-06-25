import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TY.TATTOO</h3>
            <p className="mb-4">Современная тату-студия с профессиональными мастерами и индивидуальным подходом к каждому клиенту.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300 transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-gray-300 transition-colors">Услуги</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-300 transition-colors">Галерея</Link></li>
              <li><Link to="/masters" className="hover:text-gray-300 transition-colors">Мастера</Link></li>
              <li><Link to="/laser-removal" className="hover:text-gray-300 transition-colors">Удаление тату</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300 transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="hover:text-gray-300 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Москва, ул. Тверская, 1</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@tytattoo.ru</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/appointment" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors inline-block">
                Записаться
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TY.TATTOO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;