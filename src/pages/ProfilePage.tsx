import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { masters } from '../data/masters';
import { services } from '../data/services';
import { LogOut, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, logout, updateAppointment } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }
  
  const upcomingAppointments = user.appointments.filter(
    appointment => appointment.status === 'upcoming'
  );
  
  const pastAppointments = user.appointments.filter(
    appointment => appointment.status === 'completed' || appointment.status === 'cancelled'
  );
  
  const getMasterName = (masterId: number) => {
    const master = masters.find(m => m.id === masterId);
    return master ? master.name : 'Неизвестный мастер';
  };
  
  const getServiceName = (serviceId: number) => {
    const service = services.find(s => s.id === serviceId);
    return service ? service.name : 'Неизвестная услуга';
  };
  
  const handleCancel = (appointmentId: number) => {
    if (window.confirm('Вы уверены, что хотите отменить запись?')) {
      updateAppointment(appointmentId, 'cancelled');
    }
  };
  
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Личный кабинет</h1>
          <button
            onClick={logout}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <LogOut size={18} className="mr-1" />
            <span>Выйти</span>
          </button>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Информация о пользователе</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400">Имя:</p>
              <p className="text-white">{user.name}</p>
            </div>
            <div>
              <p className="text-gray-400">Телефон:</p>
              <p className="text-white">{user.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Предстоящие записи</h2>
          
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock size={18} className="text-white mr-2" />
                        <span className="text-white font-medium">
                          {appointment.date}, {appointment.time}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-1">
                        <span className="text-gray-400">Мастер:</span> {getMasterName(appointment.masterId)}
                      </p>
                      <p className="text-gray-300 mb-1">
                        <span className="text-gray-400">Услуга:</span> {getServiceName(appointment.serviceId)}
                      </p>
                      <p className="text-gray-300">
                        <span className="text-gray-400">Тип тату:</span> {appointment.tattooType}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Отменить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-gray-300 mb-4">У вас нет предстоящих записей</p>
              <Link 
                to="/appointment" 
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Записаться на сеанс
              </Link>
            </div>
          )}
        </div>
        
        {pastAppointments.length > 0 && (
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">История записей</h2>
            
            <div className="space-y-4">
              {pastAppointments.map((appointment) => (
                <div key={appointment.id} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        {appointment.status === 'completed' ? (
                          <CheckCircle size={18} className="text-green-500 mr-2" />
                        ) : (
                          <XCircle size={18} className="text-red-500 mr-2" />
                        )}
                        <span className="text-white font-medium">
                          {appointment.date}, {appointment.time}
                        </span>
                        <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                          {appointment.status === 'completed' ? 'Выполнено' : 'Отменено'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-1">
                        <span className="text-gray-400">Мастер:</span> {getMasterName(appointment.masterId)}
                      </p>
                      <p className="text-gray-300 mb-1">
                        <span className="text-gray-400">Услуга:</span> {getServiceName(appointment.serviceId)}
                      </p>
                      <p className="text-gray-300">
                        <span className="text-gray-400">Тип тату:</span> {appointment.tattooType}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;