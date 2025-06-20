
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Качество',
      description: 'Мы используем только проверенные материалы и передовые технологии'
    },
    {
      icon: Users,
      title: 'Команда',
      description: 'Опытные специалисты с многолетним стажем в строительной отрасли'
    },
    {
      icon: Target,
      title: 'Точность',
      description: 'Соблюдаем сроки и выполняем проекты в соответствии с планом'
    },
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Внедряем современные экологичные решения в каждый проект'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О компании 
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                Экострой
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы - ведущая компания в области экологического строительства с более чем 15-летним опытом. 
              Наша миссия заключается в создании устойчивых, энергоэффективных и безопасных для окружающей 
              среды строительных решений.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              За годы работы мы реализовали более 500 проектов различной сложности, от частных домов до 
              крупных коммерческих объектов. Наш подход основан на использовании инновационных технологий 
              и экологически чистых материалов.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={value.title} className="text-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-eco-green to-eco-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Команда Экострой"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-blue/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-green">500+</div>
                <div className="text-sm text-gray-600">Успешных проектов</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-blue">15</div>
                <div className="text-sm text-gray-600">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
