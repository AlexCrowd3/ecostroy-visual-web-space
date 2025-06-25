import { useState, useEffect } from 'react';
import { NewsItem } from '../../types/content';
import { ImageUploader } from '../../components/ImageUploader';

export const NewsEditor = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentNews, setCurrentNews] = useState<Partial<NewsItem>>({
    publishDate: new Date().toISOString().split('T')[0],
    author: 'Администратор'
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Загрузка новостей
  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(setNews);
  }, []);

  const saveNews = () => {
    if (!currentNews.title) {
      alert('Заголовок обязателен!');
      return;
    }

    const newItem: NewsItem = {
      id: editingId || crypto.randomUUID(),
      title: currentNews.title,
      content: currentNews.content || '',
      image: currentNews.image || '/placeholder-news.jpg',
      author: currentNews.author || 'Администратор',
      publishDate: currentNews.publishDate || new Date().toISOString(),
      articleLink: currentNews.articleLink || '#',
    };

    const updatedNews = editingId 
      ? news.map(item => item.id === editingId ? newItem : item)
      : [...news, newItem];

    setNews(updatedNews);
    resetForm();
  };

  const editNews = (item: NewsItem) => {
    setCurrentNews(item);
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteNews = (id: string) => {
    if (confirm('Удалить эту новость?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setCurrentNews({
      publishDate: new Date().toISOString().split('T')[0],
      author: 'Администратор'
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Форма редактирования */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {editingId ? 'Редактировать новость' : 'Добавить новость'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Заголовок *
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentNews.title || ''}
                onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })}
                placeholder="Введите заголовок"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Содержание
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white min-h-[150px]"
                value={currentNews.content || ''}
                onChange={(e) => setCurrentNews({ ...currentNews, content: e.target.value })}
                placeholder="Текст новости"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ссылка на статью
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentNews.articleLink || ''}
                onChange={(e) => setCurrentNews({ ...currentNews, articleLink: e.target.value })}
                placeholder="https://example.com/news"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Изображение
              </label>
              <ImageUploader 
                onUpload={(url) => setCurrentNews({ ...currentNews, image: url })}
                initialImage={currentNews.image}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Автор
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentNews.author || ''}
                onChange={(e) => setCurrentNews({ ...currentNews, author: e.target.value })}
                placeholder="Автор новости"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Дата публикации
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white cursor-not-allowed"
                value={currentNews.publishDate || ''}
                disabled
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          {editingId && (
            <button
              onClick={resetForm}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 transition"
            >
              Отмена
            </button>
          )}
          <button
            onClick={saveNews}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition"
          >
            {editingId ? 'Обновить' : 'Опубликовать'}
          </button>
        </div>
      </div>

      {/* Список новостей */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Список новостей ({news.length})
          </h3>
        </div>

        {news.length === 0 ? (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            Нет добавленных новостей
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {news.map(item => (
              <li key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {item.image && (
                    <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white truncate">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.publishDate).toLocaleDateString()} • {item.author}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editNews(item)}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => deleteNews(item.id)}
                      className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800 transition"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};