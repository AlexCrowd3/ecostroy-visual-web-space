
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  // В реальном приложении данные загружались бы из API
  const news = {
    id: 1,
    title: 'Новый стандарт качества в строительстве',
    content: `Компания "Строй+" объявляет о внедрении нового стандарта качества в строительной отрасли. Этот революционный подход позволяет повысить качество строительства на 40% и значительно сократить сроки выполнения проектов.

Основные преимущества нового стандарта:
• Повышение качества строительных работ
• Сокращение времени выполнения проектов  
• Улучшение безопасности на строительных площадках
• Снижение затрат на материалы

Новые технологии включают в себя использование современных материалов, автоматизированные системы контроля качества и инновационные методы строительства.

Внедрение нового стандарта уже началось на всех объектах компании. Первые результаты показывают значительное улучшение показателей качества и эффективности.`,
    category: 'construction',
    date: '2024-06-18',
    author: 'Михаил Иванов',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    readTime: '5 мин чтения'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-20">
        {/* Header */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/news" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Вернуться к новостям
            </Link>
            
            <div className="mb-6">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Строительство
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(news.date).toLocaleDateString('ru-RU')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen size={18} />
                <span>{news.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-lg max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Поделиться:</span>
              <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
                <Share2 size={18} />
                <span>Поделиться</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsDetail;
