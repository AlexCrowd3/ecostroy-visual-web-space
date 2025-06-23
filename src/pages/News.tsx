import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все новости' },
    { id: 'company', name: 'Новости компании' },
    { id: 'industry', name: 'Отрасль' },
    { id: 'tech', name: 'Технологии' },
    { id: 'construction', name: 'Строительство' }
  ];

  const news = [
    {
      id: 1,
      title: 'Новый стандарт качества в строительстве',
      excerpt: 'Внедрение инновационных технологий позволяет повысить качество строительства на 40%',
      category: 'construction',
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

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.find(item => item.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Новости
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}Строй+
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Следите за последними новостями в области строительства 
              и достижениями нашей компании
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск новостей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Главная новость</h2>
            <Link to={`/news/${featuredNews.id}`} className="block">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm mb-4 w-fit">
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
                    <div className="flex items-center text-blue-500 font-semibold">
                      Читать полностью
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
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
              <Link key={item.id} to={`/news/${item.id}`}>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} className="text-blue-500" />
                        <span>{new Date(item.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} className="text-green-500" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="flex items-center text-blue-500 hover:text-green-500 font-semibold transition-colors duration-200">
                      Читать далее
                      <ArrowRight className="ml-1" size={16} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
