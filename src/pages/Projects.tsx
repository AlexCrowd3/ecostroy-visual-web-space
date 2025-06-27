import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'residential', name: 'Жилые' },
    { id: 'commercial', name: 'Коммерческие' },
    { id: 'industrial', name: 'Промышленные' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Солнечный"',
      category: 'residential',
      location: 'г. Москва',
      completedDate: '2024-05-15',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Современный жилой комплекс с развитой инфраструктурой',
      area: '15,000 м²',
      status: 'Завершен'
    },
    {
      id: 2,
      title: 'Торговый центр "Галерея"',
      category: 'commercial',
      location: 'г. Санкт-Петербург',
      completedDate: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Многофункциональный торговый комплекс в центре города',
      area: '25,000 м²',
      status: 'Завершен'
    },
    {
      id: 3,
      title: 'Производственный комплекс',
      category: 'industrial',
      location: 'г. Екатеринбург',
      completedDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Современный производственный комплекс с автоматизацией',
      area: '30,000 м²',
      status: 'Завершен'
    },
    {
      id: 4,
      title: 'Офисный центр "Бизнес Плаза"',
      category: 'commercial',
      location: 'г. Новосибирск',
      completedDate: '2023-12-05',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Премиальный офисный центр класса А',
      area: '20,000 м²',
      status: 'Завершен'
    },
    {
      id: 5,
      title: 'Коттеджный поселок "Дубрава"',
      category: 'residential',
      location: 'Московская область',
      completedDate: '2023-11-15',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Элитный коттеджный поселок с собственной инфраструктурой',
      area: '50,000 м²',
      status: 'Завершен'
    },
    {
      id: 6,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 7,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 8,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 9,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 10,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 11,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 12,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 13,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 14,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 15,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 16,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 17,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 18,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 19,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 20,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 21,
      title: 'Жилой комплекс "Солнечный"',
      category: 'residential',
      location: 'г. Москва',
      completedDate: '2024-05-15',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Современный жилой комплекс с развитой инфраструктурой',
      area: '15,000 м²',
      status: 'Завершен'
    },
    {
      id: 22,
      title: 'Торговый центр "Галерея"',
      category: 'commercial',
      location: 'г. Санкт-Петербург',
      completedDate: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Многофункциональный торговый комплекс в центре города',
      area: '25,000 м²',
      status: 'Завершен'
    },
    {
      id: 23,
      title: 'Производственный комплекс',
      category: 'industrial',
      location: 'г. Екатеринбург',
      completedDate: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Современный производственный комплекс с автоматизацией',
      area: '30,000 м²',
      status: 'Завершен'
    },
    {
      id: 24,
      title: 'Офисный центр "Бизнес Плаза"',
      category: 'commercial',
      location: 'г. Новосибирск',
      completedDate: '2023-12-05',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Премиальный офисный центр класса А',
      area: '20,000 м²',
      status: 'Завершен'
    },
    {
      id: 25,
      title: 'Коттеджный поселок "Дубрава"',
      category: 'residential',
      location: 'Московская область',
      completedDate: '2023-11-15',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Элитный коттеджный поселок с собственной инфраструктурой',
      area: '50,000 м²',
      status: 'Завершен'
    },
    {
      id: 26,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 27,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 28,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 29,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 30,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 31,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 32,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 33,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 34,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 35,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 36,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 37,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 38,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 39,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 40,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    },
    {
      id: 41,
      title: 'Логистический центр',
      category: 'industrial',
      location: 'г. Казань',
      completedDate: '2023-10-20',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Крупный логистический комплекс с современным оборудованием',
      area: '40,000 м²',
      status: 'Завершен'
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}проекты
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ознакомьтесь с нашими завершенными проектами различной сложности и масштаба
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2 text-blue-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2 text-green-500" />
                      {new Date(project.completedDate).toLocaleDateString('ru-RU')}
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Площадь:</span> {project.area}
                    </div>
                  </div>
                  <Link 
                    to={`/projects/${project.id}`}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                  >
                    Подробнее
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
