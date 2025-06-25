import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20">
            <h1 className="text-9xl font-bold text-gray-300 mb-8">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Страница не найдена
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              К сожалению, запрашиваемая страница не существует или была перемещена.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="mr-2" size={20} />
                На главную
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <ArrowLeft className="mr-2" size={20} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
