import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const project = {
    id: parseInt(id || '1'),
    title: 'Жилой комплекс "Солнечный"',
    location: 'г. Москва',
    completedDate: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Современный жилой комплекс с развитой инфраструктурой и всеми удобствами для комфортной жизни.',
    area: '15,000 м²',
    status: 'Завершен',
    duration: '18 месяцев',
    team: '45 специалистов',
    details: [
      'Многоквартирные дома с современными планировками',
      'Подземная парковка на 200 машиномест',
      'Детская площадка и зона отдыха',
      'Фитнес-центр и СПА',
      'Система умный дом в каждой квартире',
      'Энергоэффективные технологии'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-20 pb-8 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
          >
            <ArrowLeft className="mr-2" size={20} />
            Вернуться к проектам
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center text-gray-700">
                  <MapPin className="mr-3 text-blue-500" size={24} />
                  <div>
                    <div className="font-semibold">Местоположение</div>
                    <div className="text-sm text-gray-600">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="mr-3 text-green-500" size={24} />
                  <div>
                    <div className="font-semibold">Завершен</div>
                    <div className="text-sm text-gray-600">
                      {new Date(project.completedDate).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-3 text-purple-500" size={24} />
                  <div>
                    <div className="font-semibold">Длительность</div>
                    <div className="text-sm text-gray-600">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="mr-3 text-orange-500" size={24} />
                  <div>
                    <div className="font-semibold">Команда</div>
                    <div className="text-sm text-gray-600">{project.team}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Особенности проекта</h2>
              <div className="space-y-4">
                {project.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Характеристики</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Площадь:</span>
                    <span className="font-semibold">{project.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Статус:</span>
                    <span className="font-semibold text-green-600">{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Команда:</span>
                    <span className="font-semibold">{project.team}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Галерея проекта</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`${project.title} - фото ${index + 1}`}
                className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
