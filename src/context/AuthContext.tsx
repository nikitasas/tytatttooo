import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, Appointment } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, name: string) => void;
  logout: () => void;
  addAppointment: (appointment: Appointment) => void;
  updateAppointment: (appointmentId: number, status: 'upcoming' | 'completed' | 'cancelled') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = (phone: string, name: string) => {
    const newUser: User = {
      id: Date.now(),
      phone,
      name,
      appointments: []
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const addAppointment = (appointment: Appointment) => {
    if (user) {
      const updatedUser = {
        ...user,
        appointments: [...user.appointments, appointment]
      };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const updateAppointment = (appointmentId: number, status: 'upcoming' | 'completed' | 'cancelled') => {
    if (user) {
      const updatedAppointments = user.appointments.map(appointment => 
        appointment.id === appointmentId ? { ...appointment, status } : appointment
      );
      
      const updatedUser = {
        ...user,
        appointments: updatedAppointments
      };
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      logout, 
      addAppointment,
      updateAppointment
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};