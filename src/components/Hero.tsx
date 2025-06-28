import { ArrowRight, Newspaper, Wrench, FileText, FolderOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Качество
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}Проекта
              </span>
              <br />
              для Вас и Будущего Строительства
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
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Современное строительство" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 left-0 sm:left-0 md:left-0 lg:-left-6 bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border">
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

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Link 
              to="/news"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-blue-700/60 backdrop-brightness-75 backdrop-saturate-50"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Newspaper className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Новости</h3>
                  <p className="text-blue-100 text-sm">Актуальные новости строительной отрасли</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/services"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-green-500 to-green-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/60 to-green-700/60 backdrop-brightness-75 backdrop-saturate-50"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Услуги</h3>
                  <p className="text-green-100 text-sm">Полный спектр строительных услуг</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/articles"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-purple-500 to-purple-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-purple-700/60 backdrop-brightness-75 backdrop-saturate-50"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Статьи</h3>
                  <p className="text-purple-100 text-sm">Экспертные материалы и советы</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link 
              to="/projects"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-orange-500 to-red-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/60 to-red-700/60 backdrop-brightness-45 backdrop-saturate-50"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Проекты</h3>
                  <p className="text-orange-100 text-sm">Портфолио выполненных работ</p>
                </div>
              </div>
            </Link>

            <Link 
              to="/about"
              className="group relative overflow-hidden rounded-2xl h-48 bg-gradient-to-br from-teal-500 to-cyan-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/60 to-cyan-600/60 backdrop-brightness-45 backdrop-saturate-50"></div>
              <div className="relative h-full p-8 flex flex-col justify-between text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
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
