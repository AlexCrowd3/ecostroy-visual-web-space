
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, BookOpen, ArrowRight } from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'technology', name: 'Технологии' },
    { id: 'materials', name: 'Материалы' },
    { id: 'design', name: 'Дизайн' },
    { id: 'sustainability', name: 'Устойчивость' },
    { id: 'tips', name: 'Советы' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Современные экоматериалы в строительстве: революция устойчивости',
      excerpt: 'Подробный обзор инновационных материалов, которые меняют подход к экологическому строительству',
      category: 'materials',
      date: '2024-06-15',
      author: 'Михаил Экологов',
      readTime: '8 мин',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      tags: ['экоматериалы', 'инновации', 'устойчивость']
    },
    {
      id: 2,
      title: 'Умные технологии для энергоэффективного дома',
      excerpt: 'Как современные технологии помогают создать дом с минимальным энергопотреблением',
      category: 'technology',
      date: '2024-06-12',
      author: 'Анна Техноград',
      readTime: '6 мин',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['умный дом', 'энергоэффективность', 'автоматизация']
    },
    {
      id: 3,
      title: 'Принципы биофильного дизайна в архитектуре',
      excerpt: 'Как интегрировать природные элементы в современную архитектуру для улучшения качества жизни',
      category: 'design',
      date: '2024-06-10',
      author: 'Елена Природина',
      readTime: '7 мин',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['биофилия', 'дизайн', 'природа']
    },
    {
      id: 4,
      title: 'Солнечная энергия в частном строительстве',
      excerpt: 'Практическое руководство по установке и использованию солнечных панелей',
      category: 'technology',
      date: '2024-06-08',
      author: 'Дмитрий Солнечный',
      readTime: '10 мин',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['солнечная энергия', 'возобновляемые источники', 'экономия']
    },
    {
      id: 5,
      title: 'Геотермальное отопление: эффективность и экономия',
      excerpt: 'Анализ преимуществ геотермальных систем отопления для частных домов',
      category: 'technology',
      date: '2024-06-05',
      author: 'Сергей Геотерм',
      readTime: '9 мин',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['геотермия', 'отопление', 'энергосбережение']
    },
    {
      id: 6,
      title: '10 советов по созданию экологичного интерьера',
      excerpt: 'Простые и эффективные способы сделать ваш дом более экологичным',
      category: 'tips',
      date: '2024-06-03',
      author: 'Ольга Интерьерная',
      readTime: '5 мин',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['интерьер', 'экология', 'советы']
    },
    {
      id: 7,
      title: 'Переработанные материалы в современной архитектуре',
      excerpt: 'Как использование переработанных материалов меняет облик современных зданий',
      category: 'materials',
      date: '2024-06-01',
      author: 'Павел Переработкин',
      readTime: '7 мин',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['переработка', 'вторичные материалы', 'экоархитектура']
    },
    {
      id: 8,
      title: 'Сертификация LEED: путь к устойчивому строительству',
      excerpt: 'Подробное руководство по получению сертификации LEED для ваших проектов',
      category: 'sustainability',
      date: '2024-05-29',
      author: 'Марина Сертификат',
      readTime: '12 мин',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      tags: ['LEED', 'сертификация', 'стандарты']
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Экспертные
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}статьи
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Глубокие знания и практические советы от экспертов в области 
              экологического строительства и устойчивой архитектуры
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Рекомендуемая статья</h2>
            <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className="bg-eco-green text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User size={16} />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center w-fit">
                    Читать статью
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
          <div className="flex items-center justify-center mb-4">
            <BookOpen size={20} className="mr-2 text-gray-600" />
            <span className="text-gray-600 font-medium">Категории статей</span>
          </div>
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

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-eco-blue/10 text-eco-blue px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <User size={14} />
                      <span>{article.author}</span>
                    </div>
                    <button className="text-eco-blue hover:text-eco-green font-semibold flex items-center transition-colors duration-200">
                      Читать
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-eco-green to-eco-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Подписаться на наши статьи
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получайте новые экспертные материалы первыми
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-eco-blue px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Подписаться
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
