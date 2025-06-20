import { Newspaper, Laptop, FileText, Users, Briefcase, CheckCircle } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Новости',
      description: 'Актуальные новости строительной отрасли',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Newspaper,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Услуги',
      description: 'Полный спектр строительных услуг',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Laptop,
      gradient: 'from-green-500 to-green-600'
    },
    {
      title: 'Статьи',
      description: 'Экспертные материалы и советы',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: FileText,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      title: 'О компании',
      description: 'Наша история и достижения',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Users,
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Проекты',
      description: 'Портфолио выполненных работ',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Briefcase,
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  const features = [
    'Скорость и эффективность',
    'Индивидуальный подход', 
    'Постоянная связь с клиентом',
    'Многолетний опыт'
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Разделы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Исследуйте все аспекты нашей деятельности и узнайте больше о том, что мы предлагаем
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Service Cards */}
          {mainServices.slice(0, 4).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  index === 0 || index === 3 ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <IconComponent className="w-8 h-8 mb-3" />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Projects Card - Larger */}
          <div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="relative h-64">
              <img
                src={mainServices[4].image}
                alt={mainServices[4].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${mainServices[4].gradient} opacity-80`}></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                {(() => {
                  const ProjectIcon = mainServices[4].icon;
                  return <ProjectIcon className="w-8 h-8 mb-3" />;
                })()}
                <h3 className="text-2xl font-bold mb-2">{mainServices[4].title}</h3>
                <p className="text-white/90">{mainServices[4].description}</p>
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="md:col-span-1 lg:col-span-1 bg-gradient-to-br from-eco-blue to-eco-green p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-6">Наши преимущества</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Узнать больше о наших услугах
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
