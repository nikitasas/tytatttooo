import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const redirectPath = queryParams.get('redirect') || '/profile';
  
  useEffect(() => {
    // Check if there's temp user info from appointment
    const tempUserInfo = sessionStorage.getItem('tempUserInfo');
    if (tempUserInfo) {
      const { name: tempName, phone: tempPhone } = JSON.parse(tempUserInfo);
      setName(tempName || '');
      setPhone(tempPhone || '');
    }
    
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate(redirectPath);
    }
  }, [isAuthenticated, navigate, redirectPath]);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (!phone) {
      newErrors.phone = 'Введите ваш телефон';
    } else if (!/^\+?[0-9]{10,12}$/.test(phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
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
        login(phone, name);
        
        // Check if there are temp appointments to add
        const tempAppointments = sessionStorage.getItem('tempAppointments');
        if (tempAppointments) {
          // In a real app, we would add these appointments to the user account
          sessionStorage.removeItem('tempAppointments');
        }
        
        sessionStorage.removeItem('tempUserInfo');
        navigate(redirectPath);
        setIsSubmitting(false);
      }, 1000);
    }
  };
  
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Вход / Регистрация</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Ваше имя</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full bg-gray-800 text-white rounded p-3 ${errors.name ? 'border border-red-500' : ''}`}
            placeholder="Иван Иванов"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Ваш телефон</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full bg-gray-800 text-white rounded p-3 ${errors.phone ? 'border border-red-500' : ''}`}
            placeholder="+7 (999) 123-45-67"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          <p className="text-gray-400 text-sm mt-2">
            Мы используем ваш телефон для входа в личный кабинет и связи с вами.
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Подождите...' : 'Войти / Зарегистрироваться'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;