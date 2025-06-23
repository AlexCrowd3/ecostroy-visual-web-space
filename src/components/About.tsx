
import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Award, value: '200+', label: 'Завершенных проектов' },
    { icon: Users, value: '50+', label: 'Специалистов в команде' },
    { icon: Clock, value: '15+', label: 'Лет опыта' },
    { icon: CheckCircle, value: '100%', label: 'Довольных клиентов' }
  ];

  const advantages = [
    'Собственная производственная база',
    'Команда сертифицированных специалистов',
    'Использование современных технологий',
    'Гарантия качества на все виды работ',
    'Соблюдение сроков выполнения проектов',
    'Полное сопровождение от проекта до сдачи'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О компании
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}Строй+
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Мы создаем качественные и надежные здания, которые служат поколениями. 
              Наша команда профессионалов использует передовые технологии и материалы 
              для реализации проектов любой сложности.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Link 
              to="/about"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Узнать больше
            </Link>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Наша команда" 
              className="rounded-2xl shadow-2xl"
            />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border max-w-sm">
              <h3 className="font-bold text-gray-900 mb-4">Наши преимущества:</h3>
              <ul className="space-y-2">
                {advantages.slice(0, 3).map((advantage, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
