
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams();

  const article = {
    id: 1,
    title: 'Современные материалы в строительстве: революция качества',
    content: `В современном строительстве происходит настоящая революция материалов. Новые технологии позволяют создавать материалы с уникальными свойствами, которые кардинально меняют подход к строительству.

Основные направления развития:
• Композитные материалы с повышенной прочностью
• Умные материалы, реагирующие на изменения окружающей среды
• Переработанные материалы для устойчивого строительства
• Нанотехнологии в производстве строительных материалов

Преимущества новых материалов включают увеличенную долговечность, улучшенные изоляционные свойства и снижение веса конструкций. Это позволяет создавать более эффективные и долговечные здания.

Внедрение инновационных материалов требует новых подходов к проектированию и строительству, но результат стоит затраченных усилий.`,
    category: 'materials',
    date: '2024-06-15',
    author: 'Михаил Материалов',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['материалы', 'инновации', 'качество']
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Вернуться к статьям
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
