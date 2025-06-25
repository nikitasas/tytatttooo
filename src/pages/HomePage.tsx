import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { masters } from '../data/masters';
import { services } from '../data/services';
import { works } from '../data/works';
import MasterCard from '../components/MasterCard';
import ServiceCard from '../components/ServiceCard';
import { MapPin, Phone, Clock } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredMasters = masters.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredWorks = works.slice(0, 8);
  
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">О студии TY.TATTOO</h2>
              <p className="text-gray-300 mb-6">
                TY.TATTOO — это современная тату-студия, где искусство встречается с профессионализмом. Наша команда опытных мастеров создает уникальные татуировки, которые отражают вашу индивидуальность.
              </p>
              <p className="text-gray-300 mb-6">
                Мы используем только качественные материалы и оборудование, соблюдаем все санитарные нормы и создаем комфортную атмосферу для каждого клиента.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin size={20} className="text-white mr-2" />
                  <span className="text-gray-300">Москва, ул. Тверская, 1</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="text-white mr-2" />
                  <span className="text-gray-300">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="text-white mr-2" />
                  <span className="text-gray-300">10:00 - 20:00</span>
                </div>
              </div>
              <Link 
                to="/contacts" 
                className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
              >
                Как нас найти
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {featuredWorks.slice(0, 6).map((work) => (
                  <div key={work.id} className="rounded-lg overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={`Тату в стиле ${work.style}`} 
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Наши услуги</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Мы предлагаем широкий спектр услуг по созданию татуировок различных стилей и сложности.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Наши мастера</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Профессиональные тату-мастера с многолетним опытом работы в различных стилях.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMasters.map((master) => (
              <MasterCard key={master.id} master={master} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/masters" 
              className="inline-block border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Все мастера
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${works[8].image})` }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Готовы воплотить свою идею в реальность?</h2>
            <p className="text-gray-300 mb-8">
              Запишитесь на консультацию, и наши мастера помогут вам создать уникальную татуировку, которая будет радовать вас долгие годы.
            </p>
            <Link 
              to="/appointment" 
              className="inline-block bg-white text-black px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Записаться на сеанс
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Наши работы</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Познакомьтесь с нашим портфолио и выберите стиль для своей будущей татуировки.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredWorks.map((work) => (
              <div key={work.id} className="rounded-lg overflow-hidden">
                <img 
                  src={work.image} 
                  alt={`Тату в стиле ${work.style}`} 
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
            >
              Смотреть все работы
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;