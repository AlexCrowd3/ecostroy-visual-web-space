import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  const service = {
    id: 1,
    title: 'Проектирование зданий',
    description: 'Создание архитектурных и инженерных проектов с учетом современных стандартов качества',
    fullDescription: `Наша команда профессиональных архитекторов и инженеров создает качественные проекты для любых типов зданий. Мы используем современные технологии проектирования и учитываем все требования заказчика.

Процесс проектирования включает:
• Анализ участка и технического задания
• Создание концептуального проекта
• Разработка рабочих чертежей
• Согласование с контролирующими органами

Мы гарантируем высокое качество проектов и соблюдение всех строительных норм и правил.`,
    features: ['3D-моделирование', 'Современные технологии', 'Качественные материалы', 'Инновационные решения'],
    price: 'от 50 000 ₽',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    duration: '2-4 недели',
    warranty: '2 года'
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Вернуться к услугам
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-8 mb-8">
                  <div>
                    <span className="text-3xl font-bold text-blue-500">{service.price}</span>
                    <p className="text-gray-600">Стартовая цена</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-green-500">{service.duration}</span>
                    <p className="text-gray-600">Срок выполнения</p>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Заказать услугу
                </button>
              </div>
              
              <div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Описание услуги</h2>
                <div className="prose prose-lg max-w-none">
                  {service.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Что включено</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Check size={16} className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Гарантия:</span>
                      <span className="font-semibold">{service.warranty}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Срок:</span>
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Связаться с нами</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone size={14} className="mr-2" />
                        +7 (999) 123-45-67
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail size={14} className="mr-2" />
                        info@stroyplus.ru
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
