
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Target, Zap, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Качество',
      description: 'Мы используем только проверенные материалы и передовые технологии для достижения максимального качества'
    },
    {
      icon: Users,
      title: 'Команда',
      description: 'Опытные специалисты с многолетним стажем в строительной отрасли и экологических технологиях'
    },
    {
      icon: Target,
      title: 'Точность',
      description: 'Соблюдаем сроки и выполняем проекты в строгом соответствии с утвержденным планом'
    },
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Внедряем современные экологичные решения и инновационные технологии в каждый проект'
    }
  ];

  const team = [
    {
      name: 'Михаил Иванов',
      position: 'Генеральный директор',
      experience: '20 лет опыта',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Эксперт в области устойчивого строительства, автор множества инновационных проектов'
    },
    {
      name: 'Анна Петрова',
      position: 'Главный архитектор',
      experience: '15 лет опыта',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Специалист по экологической архитектуре и биофильному дизайну'
    },
    {
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      experience: '18 лет опыта',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Эксперт по современным строительным технологиям и энергоэффективности'
    },
    {
      name: 'Елена Козлова',
      position: 'Руководитель отдела экологии',
      experience: '12 лет опыта',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Специалист по экологическому мониторингу и сертификации зеленых зданий'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Основание компании',
      description: 'Начало деятельности в области экологического строительства'
    },
    {
      year: '2012',
      title: 'Первая сертификация LEED',
      description: 'Получили первый проект с сертификацией LEED Gold'
    },
    {
      year: '2015',
      title: 'Расширение деятельности',
      description: 'Открытие филиалов в 5 крупных городах России'
    },
    {
      year: '2018',
      title: 'Международное признание',
      description: 'Награда "Лучшая компания в области экостроительства"'
    },
    {
      year: '2021',
      title: 'Инновационные технологии',
      description: 'Внедрение технологий умного дома и ИИ в проекты'
    },
    {
      year: '2024',
      title: 'Лидер рынка',
      description: 'Более 500 завершенных проектов и статус лидера отрасли'
    }
  ];

  const certifications = [
    'LEED Accredited Professional',
    'BREEAM International',
    'DGNB System',
    'ISO 14001:2015',
    'ISO 9001:2015',
    'Green Building Council'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              О компании
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}Экострой
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем устойчивое будущее через инновационные экологические решения 
              в строительстве уже более 15 лет
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Компания "Экострой" была основана в 2009 году группой энтузиастов, 
                объединенных общей идеей — создавать здания, которые гармонично 
                сосуществуют с окружающей средой.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                За 15 лет работы мы прошли путь от небольшой команды до ведущей 
                компании в области экологического строительства. Наш опыт охватывает 
                более 500 успешных проектов различной сложности.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Сегодня мы продолжаем развиваться, внедряя новейшие технологии 
                и поддерживая высочайшие стандарты качества в каждом проекте.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-eco-blue/10 rounded-xl">
                  <div className="text-3xl font-bold text-eco-blue mb-2">500+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div className="text-center p-4 bg-eco-green/10 rounded-xl">
                  <div className="text-3xl font-bold text-eco-green mb-2">15</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Офис Экострой"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-xl text-gray-600">Принципы, которыми мы руководствуемся в работе</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-eco-green to-eco-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Этапы развития</h2>
            <p className="text-xl text-gray-600">Ключевые моменты в истории нашей компании</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-eco-green to-eco-blue"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-eco-green to-eco-blue rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые делают невозможное возможным</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-eco-blue font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сертификации и награды</h2>
            <p className="text-xl text-gray-600">Международное признание нашей экспертизы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert} className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 p-6 rounded-xl text-center">
                <Award className="w-8 h-8 text-eco-blue mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-eco-green to-eco-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-white/90 text-sm">г. Москва, ул. Строительная, 123</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-white/90 text-sm">+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/90 text-sm">info@ecostroy.ru</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-white/90 text-sm">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
          
          <button className="bg-white text-eco-blue px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Связаться с нами
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
