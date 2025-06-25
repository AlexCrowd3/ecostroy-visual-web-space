import { ArrowRight, Home, Building, Wrench, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Жилищное строительство',
      description: 'Строительство частных домов, коттеджей и многоквартирных зданий с современными технологиями',
      features: ['Индивидуальное проектирование', 'Качественные материалы', 'Соблюдение сроков']
    },
    {
      id: 2,
      icon: Building,
      title: 'Коммерческое строительство',
      description: 'Возведение офисных центров, торговых комплексов и промышленных объектов',
      features: ['Комплексный подход', 'Современные технологии', 'Гарантия качества']
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Реконструкция',
      description: 'Модернизация и реконструкция существующих зданий и сооружений',
      features: ['Профессиональная оценка', 'Инновационные решения', 'Минимальные сроки']
    },
    {
      id: 4,
      icon: Users,
      title: 'Консультации',
      description: 'Экспертные консультации по всем вопросам строительства и проектирования',
      features: ['Опытные специалисты', 'Индивидуальный подход', 'Полное сопровождение']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              {" "}услуги
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр строительных услуг от проектирования до сдачи объекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} to={`/services/${service.id}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-500 font-semibold hover:text-green-500 transition-colors">
                    Подробнее
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
          >
            Все услуги
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
