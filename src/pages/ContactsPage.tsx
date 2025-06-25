import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Введите ваш email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Введите сообщение';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 1500);
    }
  };
  
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Контакты</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации, записи на сеанс или с любыми вопросами о наших услугах.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">Москва, ул. Тверская, 1</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-300">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@tytattoo.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-white mr-4 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Часы работы</h3>
                    <p className="text-gray-300">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-gray-300">Сб-Вс: 11:00 - 19:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-3">Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <Instagram size={24} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Как нас найти</h2>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-800">
                {/* Here would be an embedded map */}
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  Карта с расположением студии
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Напишите нам</h2>
            
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Сообщение отправлено!</h3>
                <p className="text-gray-300 mb-6">
                  Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Отправить еще сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white rounded p-3 ${errors.name ? 'border border-red-500' : ''}`}
                    placeholder="Иван Иванов"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Ваш email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 text-white rounded p-3 ${errors.email ? 'border border-red-500' : ''}`}
                    placeholder="example@mail.ru"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2">Сообщение</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full bg-gray-800 text-white rounded p-3 ${errors.message ? 'border border-red-500' : ''}`}
                    placeholder="Ваше сообщение..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;