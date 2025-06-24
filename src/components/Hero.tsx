
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Качественное
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}строительство
              </span>
              <br />
              для вашего будущего
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Создаем надежные и современные здания с использованием 
              передовых технологий и высококачественных материалов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Наши услуги
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/video"
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2" size={20} />
                Смотреть видео
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Современное строительство" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Лет опыта</p>
                  <p className="text-sm text-gray-600">в строительстве</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Разделы в стиле как на изображении */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Новости */}
            <Link 
              to="/news"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-blue-700/90"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Новости</h3>
                  <p className="text-blue-100 text-sm">Актуальные новости строительной отрасли</p>
                </div>
              </div>
            </Link>

            {/* Услуги */}
            <Link 
              to="/services"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-green-500 to-green-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/90 to-green-700/90"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Услуги</h3>
                  <p className="text-green-100 text-sm">Полный спектр строительных услуг</p>
                </div>
              </div>
            </Link>

            {/* Статьи */}
            <Link 
              to="/articles"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-purple-500 to-purple-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/90 to-purple-700/90"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Статьи</h3>
                  <p className="text-purple-100 text-sm">Экспертные материалы и советы</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Нижний ряд - широкие карточки */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Проекты */}
            <Link 
              to="/projects"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-orange-500 to-red-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-600/90"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Проекты</h3>
                  <p className="text-orange-100 text-sm">Портфолио выполненных работ</p>
                </div>
              </div>
            </Link>

            {/* О компании */}
            <Link 
              to="/about"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-teal-500 to-cyan-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 to-cyan-600/90"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">О компании</h3>
                  <p className="text-teal-100 text-sm">Узнайте больше о том, что мы предлагаем</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
