import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Новости', href: '/news' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/projects' },
    { name: 'Статьи', href: '/articles' },
    { name: 'О компании', href: '/about' }
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/img/logo2.png" 
                alt="Экострой" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex md:space-x-4 lg:space-x-8 text-sm md:text-base">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.href) 
                    ? 'text-eco-blue' 
                    : 'text-gray-600 hover:text-eco-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-eco-green to-eco-blue text-white px-4 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-base">
              Связаться с нами
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-eco-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-eco-blue'
                      : 'text-gray-600 hover:text-eco-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-eco-green to-eco-blue text-white px-6 py-2 rounded-full">
                Связаться с нами
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
