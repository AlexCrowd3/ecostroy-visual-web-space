import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft, Link2 } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();

  const news = {
    id: 1,
    title: 'Новый стандарт качества в строительстве',
    content: `Компания "Экострой" объявляет о внедрении нового стандарта качества в строительной отрасли. Этот революционный подход позволяет повысить качество строительства на 40% и значительно сократить сроки выполнения проектов.

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
    Link: 'https://www.youtube.com/watch?v=HIcSWuKMwOw'
  };

  const handleRedirect = () => {
    window.open(news.Link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="pt-20">
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/news" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors">
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
              <div className="flex items-center space-x-2 text-blue-500 underline cursor-pointer" onClick={handleRedirect}>
                <Link2 size={18} />
                <span>Ссылка на статью</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-lg max-w-none">
            {news.content.split('\n\n').map((paragraph, index) => (
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

export default NewsDetail;
