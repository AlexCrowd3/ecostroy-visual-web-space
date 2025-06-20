
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все новости' },
    { id: 'company', name: 'Новости компании' },
    { id: 'industry', name: 'Отрасль' },
    { id: 'tech', name: 'Технологии' },
    { id: 'eco', name: 'Экология' }
  ];

  const news = [
    {
      id: 1,
      title: 'Новый экологический стандарт в строительстве',
      excerpt: 'Внедрение инновационных технологий позволяет снизить углеродный след на 40%',
      category: 'eco',
      date: '2024-06-18',
      author: 'Михаил Иванов',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Завершен проект жилого комплекса "Зеленый квартал"',
      excerpt: 'Современный жилой комплекс с собственной системой энергоснабжения',
      category: 'company',
      date: '2024-06-15',
      author: 'Анна Петрова',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Использование переработанных материалов в строительстве',
      excerpt: 'Как современные технологии помогают создавать устойчивую архитектуру',
      category: 'tech',
      date: '2024-06-12',
      author: 'Дмитрий Сидоров',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'Награда за лучший экопроект года',
      excerpt: 'Наш проект офисного центра получил престижную награду в области экостроительства',
      category: 'company',
      date: '2024-06-10',
      author: 'Елена Козлова',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Тенденции зеленого строительства в 2024 году',
      excerpt: 'Обзор основных направлений развития экологического строительства',
      category: 'industry',
      date: '2024-06-08',
      author: 'Сергей Волков',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Новая солнечная электростанция на крыше ТЦ',
      excerpt: 'Установка солнечных панелей позволит снизить энергопотребление на 60%',
      category: 'tech',
      date: '2024-06-05',
      author: 'Ольга Морозова',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Новости
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}Экострой
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Следите за последними новостями в области экологического строительства 
              и достижениями нашей компании
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Главная новость</h2>
            <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block bg-eco-green text-white px-3 py-1 rounded-full text-sm mb-4 w-fit">
                    Главная новость
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(featuredNews.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center w-fit">
                    Читать полностью
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-eco-green to-eco-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(item => !item.featured).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                  <button className="text-eco-blue hover:text-eco-green font-semibold flex items-center transition-colors duration-200">
                    Читать далее
                    <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
