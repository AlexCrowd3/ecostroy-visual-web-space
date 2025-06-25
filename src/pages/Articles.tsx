import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Search, Clock} from 'lucide-react';

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все статьи' },
    { id: 'materials', name: 'Материалы' },
    { id: 'technologies', name: 'Технологии' },
    { id: 'design', name: 'Проектирование' },
    { id: 'tips', name: 'Советы' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Современные материалы в строительстве: революция качества',
      excerpt: 'Обзор новейших строительных материалов и их влияние на качество строительства',
      category: 'materials',
      date: '2024-06-15',
      author: 'Михаил Материалов',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['материалы', 'инновации', 'качество'],
      featured: true
    },
    {
      id: 2,
      title: 'BIM-технологии в современном проектировании',
      excerpt: 'Как информационное моделирование зданий изменяет подход к проектированию',
      category: 'technologies',
      date: '2024-06-10',
      author: 'Анна Технологова',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['BIM', 'проектирование', 'технологии']
    },
    {
      id: 3,
      title: 'Планировка жилых помещений: тренды 2024',
      excerpt: 'Современные подходы к планировке квартир и домов',
      category: 'design',
      date: '2024-06-05',
      author: 'Елена Дизайнова',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['планировка', 'дизайн', 'тренды']
    },
    {
      id: 4,
      title: 'Энергоэффективность в строительстве',
      excerpt: 'Методы снижения энергопотребления в современных зданиях',
      category: 'technologies',
      date: '2024-05-28',
      author: 'Дмитрий Энергетиков',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['энергоэффективность', 'технологии']
    },
    {
      id: 5,
      title: '10 советов по выбору подрядчика',
      excerpt: 'Важные критерии при выборе строительной компании',
      category: 'tips',
      date: '2024-05-20',
      author: 'Сергей Советов',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['советы', 'выбор', 'подрядчик']
    },
    {
      id: 6,
      title: 'Умный дом: технологии будущего уже сегодня',
      excerpt: 'Современные системы автоматизации для жилых домов',
      category: 'technologies',
      date: '2024-05-15',
      author: 'Ольга Умнова',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['умный дом', 'автоматизация']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.find(article => article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Статьи
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}и советы
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Полезные статьи о строительстве, материалах и современных технологиях
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Последняя статья</h2>
            <Link to={`/articles/${featuredArticle.id}`} className="block">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
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
                        <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(featuredArticle.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{featuredArticle.author}</span>
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`}>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {categories.find(cat => cat.id === article.category)?.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} className="text-green-500" />
                        <span>{article.author}</span>
                      </div>
                    </div>
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

export default Articles;
