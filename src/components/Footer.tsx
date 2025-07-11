import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/projects' },
    { name: 'О компании', href: '/about' }
  ];

  const services = [
    'Проектирование',
    'Строительство',
    'Реконструкция',
    'Консультации'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/">
              <img 
                src="/img/logo2_dark.png" 
                alt="Экострой" 
                className="h-8 w-auto mb-6 "
              />
            </Link>
            <p className="text-gray-300 mb-6">
              Строим экологичное будущее с использованием инновационных технологий 
              и устойчивых материалов.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-eco-green transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-eco-green" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-eco-green" />
                <span className="text-gray-300">info@ecostroy.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-eco-green" />
                <span className="text-gray-300">г. Москва, ул. Строительная, 123</span>
              </div>
            </div>

            <button className="mt-6 bg-gradient-to-r from-eco-green to-eco-blue text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Связаться с нами
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Экострой. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-eco-green text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-eco-green text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
