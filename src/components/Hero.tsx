
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-blue-light via-white to-eco-green-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2f1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Строим 
              <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
                {" "}экологичное
              </span>
              <br />
              будущее
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Компания "Экострой" - ваш надежный партнер в области экологического строительства. 
              Мы создаем устойчивые и энергоэффективные решения для современного мира.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Наши услуги
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <button className="border-2 border-eco-blue text-eco-blue px-8 py-4 rounded-full font-semibold hover:bg-eco-blue hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Смотреть видео
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-blue">500+</div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-green">15</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-blue">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Современное экологичное здание"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eco-blue/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-eco-green to-eco-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Экологично</div>
                  <div className="text-sm text-gray-600">100% безопасные материалы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
