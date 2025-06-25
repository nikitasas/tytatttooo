import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Вход в личный кабинет</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Войдите в личный кабинет, чтобы управлять своими записями и отслеживать их статус.
          </p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;