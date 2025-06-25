import React from 'react';
import { Link } from 'react-router-dom';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Как подготовиться к первой татуировке',
    excerpt: 'Советы для тех, кто решился на свою первую татуировку: от выбора эскиза до ухода за готовой работой.',
    image: 'https://images.pexels.com/photos/1619799/pexels-photo-1619799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '15 мая 2025',
    author: 'Алексей',
    slug: 'how-to-prepare-for-first-tattoo'
  },
  {
    id: 2,
    title: 'Уход за татуировкой: первые дни и долгосрочная перспектива',
    excerpt: 'Подробное руководство по уходу за свежей татуировкой и советы по поддержанию её яркости на долгие годы.',
    image: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2 июня 2025',
    author: 'Мария',
    slug: 'tattoo-aftercare-guide'
  },
  {
    id: 3,
    title: 'Тренды в мире татуировок 2025 года',
    excerpt: 'Обзор самых популярных стилей, техник и дизайнов татуировок в текущем году.',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '20 июня 2025',
    author: 'Дмитрий',
    slug: 'tattoo-trends-2025'
  },
  {
    id: 4,
    title: 'Минимализм в татуировках: меньше значит больше',
    excerpt: 'Почему минималистичные татуировки становятся всё популярнее и как выбрать идеальный дизайн.',
    image: 'https://images.pexels.com/photos/1405822/pexels-photo-1405822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '5 июля 2025',
    author: 'Елена',
    slug: 'minimalism-in-tattoos'
  }
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Блог</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Полезные статьи о татуировках, советы по уходу, интервью с мастерами и обзоры трендов в мире тату.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
                  <span>{post.date}</span>
                  <span>Автор: {post.author}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                >
                  Читать далее
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Подпишитесь на обновления</h2>
          <p className="text-gray-300 mb-6">
            Получайте новые статьи, советы по уходу за татуировками и новости студии на свою почту.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-grow bg-gray-800 text-white rounded p-3"
            />
            <button 
              type="submit"
              className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition-colors"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;