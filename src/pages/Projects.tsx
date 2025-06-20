
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Calendar, Users, Square, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'residential', name: 'Жилые' },
    { id: 'commercial', name: 'Коммерческие' },
    { id: 'industrial', name: 'Промышленные' },
    { id: 'public', name: 'Общественные' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Зеленый квартал"',
      category: 'residential',
      location: 'Москва, Сокольники',
      year: 2024,
      area: '15,000 м²',
      residents: '450 семей',
      description: 'Современный экологичный жилой комплекс с собственной системой энергоснабжения и очистки воды',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      status: 'Завершен',
      eco_features: ['Солнечные панели', 'Система рекуперации', 'Умное освещение', 'Зеленые крыши']
    },
    {
      id: 2,
      title: 'Офисный центр "Экотех"',
      category: 'commercial',
      location: 'Санкт-Петербург',
      year: 2024,
      area: '8,500 м²',
      residents: '1,200 сотрудников',
      description: 'Инновационный офисный центр класса А+ с сертификацией LEED Platinum',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      status: 'В процессе',
      eco_features: ['Геотермальная энергия', 'Системы сбора дождевой воды', 'Натуральная вентиляция']
    },
    {
      id: 3,
      title: 'Завод переработки "ЭкоТех"',
      category: 'industrial',
      location: 'Нижний Новгород',
      year: 2023,
      area: '12,000 м²',
      residents: '300 сотрудников',
      description: 'Завод по переработке отходов с минимальным воздействием на окружающую среду',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      status: 'Завершен',
      eco_features: ['Система очистки выбросов', 'Замкнутый цикл производства', 'Восстановление ландшафта']
    },
    {
      id: 4,
      title: 'Школа будущего им. Менделеева',
      category: 'public',
      location: 'Казань',
      year: 2023,
      area: '6,200 м²',
      residents: '800 учеников',
      description: 'Современная школа с интерактивными классами и лабораториями',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      status: 'Завершен',
      eco_features: ['Энергоэффективные окна', 'Система умного климата', 'Экологичные материалы']
    },
    {
      id: 5,
      title: 'Торговый центр "ЭкоМолл"',
      category: 'commercial',
      location: 'Екатеринбург',
      year: 2023,
      area: '25,000 м²',
      residents: '5,000 посетителей/день',
      description: 'Первый в России торговый центр с нулевым углеродным следом',
      image: 'https://images.unsplash.com/photo-1519211975440-5d4d188e8039?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      status: 'Завершен',
      eco_features: ['Солнечная электростанция', 'Система переработки отходов', 'LED-освещение']
    },
    {
      id: 6,
      title: 'Коттеджный поселок "Лесная сказка"',
      category: 'residential',
      location: 'Московская область',
      year: 2022,
      area: '50,000 м²',
      residents: '120 семей',
      description: 'Элитный коттеджный поселок в окружении соснового леса',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
      status: 'Завершен',
      eco_features: ['Тепловые насосы', 'Системы "умный дом"', 'Сохранение природного ландшафта']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProject = projects.find(project => project.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}проекты
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Портфолио успешно реализованных проектов в области экологического строительства
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Проект года</h2>
            <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="inline-block bg-eco-green text-white px-3 py-1 rounded-full text-sm mb-4 w-fit">
                    {featuredProject.status}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={16} className="mr-2 text-eco-green" />
                      {featuredProject.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-2 text-eco-green" />
                      {featuredProject.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Square size={16} className="mr-2 text-eco-green" />
                      {featuredProject.area}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2 text-eco-green" />
                      {featuredProject.residents}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Экологические особенности:</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.eco_features.map((feature, index) => (
                        <span key={index} className="bg-eco-blue/10 text-eco-blue px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Filter size={20} className="mr-2 text-gray-600" />
            <span className="text-gray-600 font-medium">Фильтр по категориям</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-eco-green to-eco-blue text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Завершен' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin size={14} className="mr-2 text-eco-green" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={14} className="mr-2 text-eco-green" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Square size={14} className="mr-2 text-eco-green" />
                      {project.area}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.eco_features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="bg-eco-blue/10 text-eco-blue px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {project.eco_features.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{project.eco_features.length - 2}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-eco-green to-eco-blue text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-eco-green to-eco-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Завершенных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-white/90">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-white/90">м² построено</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
