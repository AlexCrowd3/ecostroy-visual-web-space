import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Проектирование зданий',
      description: 'Создание архитектурных и инженерных проектов с учетом экологических стандартов',
      features: ['3D-моделирование', 'Энергоэффективность', 'Экологические материалы', 'Инновационные решения'],
      price: 'от 50 000 ₽',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: false
    },
    {
      id: 2,
      title: 'Строительство домов',
      description: 'Полный цикл строительства экологичных частных домов и коттеджей',
      features: ['Экоматериалы', 'Энергосбережение', 'Умный дом', 'Гарантия 10 лет'],
      price: 'от 2 500 000 ₽',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 3,
      title: 'Коммерческое строительство',
      description: 'Строительство офисных зданий, торговых центров и промышленных объектов',
      features: ['Большие объемы', 'Соблюдение сроков', 'Сертификация LEED', 'Техподдержка'],
      price: 'от 15 000 000 ₽',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: false
    },
    {
      id: 4,
      title: 'Реконструкция и ремонт',
      description: 'Модернизация существующих зданий с применением экотехнологий',
      features: ['Энергоаудит', 'Утепление', 'Замена коммуникаций', 'Современный дизайн'],
      price: 'от 150 000 ₽',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: false
    },
    {
      id: 5,
      title: 'Консультации и экспертиза',
      description: 'Профессиональные консультации по экологическому строительству',
      features: ['Техническая экспертиза', 'Оценка проектов', 'Рекомендации', 'Сопровождение'],
      price: 'от 5 000 ₽',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: false
    },
    {
      id: 6,
      title: 'Ландшафтный дизайн',
      description: 'Создание экологичных ландшафтных решений и озеленение территорий',
      features: ['Планирование участка', 'Подбор растений', 'Системы полива', 'Уход и обслуживание'],
      price: 'от 25 000 ₽',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: false
    }
  ];

  const advantages = [
    {
      title: 'Опыт более 15 лет',
      description: 'Профессиональная команда с богатым опытом в экостроительстве'
    },
    {
      title: 'Современные технологии',
      description: 'Используем передовые технологии и инновационные материалы'
    },
    {
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды выполненных работ'
    },
    {
      title: 'Экологичность',
      description: 'Все наши проекты соответствуют международным экостандартам'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}услуги
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг в области экологического строительства - 
              от проектирования до сдачи объектов под ключ
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className={`relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${service.popular ? 'ring-2 ring-eco-green' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-eco-green text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star size={14} className="mr-1" />
                    Популярно
                  </div>
                )}
                
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Check size={14} className="text-eco-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-eco-blue">{service.price}</span>
                    <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
                      Заказать
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Наши конкурентные преимущества</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-eco-green to-eco-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-eco-blue px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Получить консультацию
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-eco-blue transition-all duration-300">
              Посмотреть портфолио
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
