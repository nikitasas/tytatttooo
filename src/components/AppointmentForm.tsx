import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { masters } from '../data/masters';
import { services } from '../data/services';
import { Appointment } from '../types';
import { sendTelegramMessage } from '../utils/telegram';

const AppointmentForm: React.FC = () => {
  const { user, isAuthenticated, addAppointment } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const initialMasterId = queryParams.get('master') ? Number(queryParams.get('master')) : 0;
  const initialServiceId = queryParams.get('service') ? Number(queryParams.get('service')) : 0;

  const [formData, setFormData] = useState({
    masterId: initialMasterId,
    serviceId: initialServiceId,
    date: '',
    time: '',
    tattooType: '',
    hasCustomSketch: false,
    name: user?.name || '',
    phone: user?.phone || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData(prev => ({
        ...prev,
        name: user.name,
        phone: user.phone
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checkbox.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.masterId) {
      newErrors.masterId = 'Выберите мастера';
    }
    
    if (!formData.serviceId) {
      newErrors.serviceId = 'Выберите услугу';
    }
    
    if (!formData.date) {
      newErrors.date = 'Выберите дату';
    }
    
    if (!formData.time) {
      newErrors.time = 'Выберите время';
    }
    
    if (!formData.tattooType) {
      newErrors.tattooType = 'Укажите тип татуировки';
    }
    
    if (!formData.name) {
      newErrors.name = 'Введите ваше имя';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Введите ваш телефон';
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      const master = masters.find(m => m.id === Number(formData.masterId));
      const service = services.find(s => s.id === Number(formData.serviceId));
      
      // Prepare message for Telegram
      const message = `
<b>Новая запись на сеанс!</b>

👤 Клиент: ${formData.name}
📱 Телефон: ${formData.phone}
👨‍🎨 Мастер: ${master?.name}
🎨 Услуга: ${service?.name}
📅 Дата: ${formData.date}
⏰ Время: ${formData.time}
💭 Описание: ${formData.tattooType}
✏️ Свой эскиз: ${formData.hasCustomSketch ? 'Да' : 'Нет'}
`;

      // Send Telegram notification
      await sendTelegramMessage(message);

      // Create appointment
      const newAppointment: Appointment = {
        id: Date.now(),
        masterId: Number(formData.masterId),
        serviceId: Number(formData.serviceId),
        date: formData.date,
        time: formData.time,
        tattooType: formData.tattooType,
        hasCustomSketch: formData.hasCustomSketch,
        status: 'upcoming'
      };
      
      if (!isAuthenticated) {
        // Store appointment in session storage for non-authenticated users
        const tempAppointments = JSON.parse(sessionStorage.getItem('tempAppointments') || '[]');
        tempAppointments.push(newAppointment);
        sessionStorage.setItem('tempAppointments', JSON.stringify(tempAppointments));
        
        // Store user info for login
        sessionStorage.setItem('tempUserInfo', JSON.stringify({
          name: formData.name,
          phone: formData.phone
        }));
        
        // Redirect to login
        navigate('/login?redirect=appointment-success');
      } else {
        // Add appointment for authenticated user
        addAppointment(newAppointment);
        setIsSuccess(true);
      }
      
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Запись успешно создана!</h2>
          <p className="text-gray-300 mb-6">
            Мы свяжемся с вами для подтверждения записи. Вы также можете отслеживать статус вашей записи в личном кабинете.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/profile')}
              className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              Перейти в личный кабинет
            </button>
            <button
              onClick={() => navigate('/')}
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
            >
              На главную
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Запись на сеанс</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Выберите мастера</label>
            <select
              name="masterId"
              value={formData.masterId}
              onChange={handleChange}
              className={`w-full bg-gray-800 text-white rounded p-3 ${errors.masterId ? 'border border-red-500' : ''}`}
            >
              <option value="0">Выберите мастера</option>
              {masters.map(master => (
                <option key={master.id} value={master.id}>
                  {master.name} ({master.styles.join(', ')})
                </option>
              ))}
            </select>
            {errors.masterId && <p className="text-red-500 text-sm mt-1">{errors.masterId}</p>}
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Выберите услугу</label>
            <select
              name="serviceId"
              value={formData.serviceId}
              onChange={handleChange}
              className={`w-full bg-gray-800 text-white rounded p-3 ${errors.serviceId ? 'border border-red-500' : ''}`}
            >
              <option value="0">Выберите услугу</option>
              {services.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} (от {service.priceFrom} ₽)
                </option>
              ))}
            </select>
            {errors.serviceId && <p className="text-red-500 text-sm mt-1">{errors.serviceId}</p>}
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Дата</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`w-full bg-gray-800 text-white rounded p-3 ${errors.date ? 'border border-red-500' : ''}`}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>
          
          <div>
            <label className="block text-gray-300 mb-2">Время</label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={`w-full bg-gray-800 text-white rounded p-3 ${errors.time ? 'border border-red-500' : ''}`}
            >
              <option value="">Выберите время</option>
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
              <option value="16:00">16:00</option>
              <option value="18:00">18:00</option>
            </select>
            {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">Опишите желаемую татуировку</label>
            <textarea
              name="tattooType"
              value={formData.tattooType}
              onChange={handleChange}
              rows={3}
              className={`w-full bg-gray-800 text-white rounded p-3 ${errors.tattooType ? 'border border-red-500' : ''}`}
              placeholder="Размер, стиль, расположение и другие детали..."
            ></textarea>
            {errors.tattooType && <p className="text-red-500 text-sm mt-1">{errors.tattooType}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="flex items-center text-gray-300">
              <input
                type="checkbox"
                name="hasCustomSketch"
                checked={formData.hasCustomSketch}
                onChange={handleChange}
                className="mr-2"
              />
              У меня есть свой эскиз
            </label>
          </div>
          
          {!isAuthenticated && (
            <>
              <div>
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
              
              <div>
                <label className="block text-gray-300 mb-2">Ваш телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-gray-800 text-white rounded p-3 ${errors.phone ? 'border border-red-500' : ''}`}
                  placeholder="+7 (999) 123-45-67"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </>
          )}
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Отправка...' : 'Записаться на сеанс'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;