import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Pause, Volume2 } from 'lucide-react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: 1,
      title: 'О нашей компании',
      description: 'Узнайте больше о нашей истории и подходе к строительству',
      thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3:45',
      featured: true
    },
    {
      id: 2,
      title: 'Процесс строительства',
      description: 'Посмотрите, как мы работаем над проектами',
      thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5:20'
    },
    {
      id: 3,
      title: 'Готовые проекты',
      description: 'Обзор наших завершенных работ',
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4:15'
    },
    {
      id: 4,
      title: 'Технологии строительства',
      description: 'Современные методы и материалы',
      thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6:30'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-100 via-white to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {" "}видео
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите видеоматериалы о нашей работе, проектах и технологиях строительства
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8">
            <div className="aspect-video bg-gray-900 rounded-xl relative overflow-hidden">
              <img 
                src={videos[0].thumbnail} 
                alt={videos[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-gray-900" />
                  ) : (
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  )}
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="bg-black/50 px-2 py-1 rounded text-sm">{videos[0].duration}</span>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{videos[0].title}</h2>
              <p className="text-gray-600">{videos[0].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Другие видео</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-900 ml-0.5" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 text-white">
                    <span className="bg-black/50 px-2 py-1 rounded text-xs">{video.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
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

export default Video;
