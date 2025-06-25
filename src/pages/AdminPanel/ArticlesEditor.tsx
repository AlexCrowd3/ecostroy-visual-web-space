import { useState, useEffect } from 'react';
import { ImageUploader } from '../../components/ImageUploader';

type ArticleItem = {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  tags: string;
};

export const ArticlesEditor = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Partial<ArticleItem>>({
    publishDate: new Date().toISOString().split('T')[0],
    author: 'Администратор',
    tags: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Загрузка статей
  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(setArticles);
  }, []);

  const saveArticle = () => {
    if (!currentArticle.title) {
      alert('Заголовок обязателен!');
      return;
    }

    const newItem: ArticleItem = {
      id: editingId || crypto.randomUUID(),
      title: currentArticle.title,
      content: currentArticle.content || '',
      image: currentArticle.image || '/placeholder-article.jpg',
      author: currentArticle.author || 'Администратор',
      publishDate: currentArticle.publishDate || new Date().toISOString(),
      tags: currentArticle.tags || ''
    };

    const updatedArticles = editingId 
      ? articles.map(item => item.id === editingId ? newItem : item)
      : [...articles, newItem];

    setArticles(updatedArticles);
    resetForm();
  };

  const editArticle = (item: ArticleItem) => {
    setCurrentArticle(item);
    setEditingId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteArticle = (id: string) => {
    if (confirm('Удалить эту статью?')) {
      setArticles(articles.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setCurrentArticle({
      publishDate: new Date().toISOString().split('T')[0],
      author: 'Администратор',
      tags: ''
    });
    setEditingId(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Форма редактирования */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {editingId ? 'Редактировать статью' : 'Добавить статью'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Заголовок *
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentArticle.title || ''}
                onChange={(e) => setCurrentArticle({ ...currentArticle, title: e.target.value })}
                placeholder="Введите заголовок статьи"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Содержание
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white min-h-[200px]"
                value={currentArticle.content || ''}
                onChange={(e) => setCurrentArticle({ ...currentArticle, content: e.target.value })}
                placeholder="Текст статьи"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Изображение
              </label>
              <ImageUploader 
                onUpload={(url) => setCurrentArticle({ ...currentArticle, image: url })}
                initialImage={currentArticle.image}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Автор
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentArticle.author || ''}
                onChange={(e) => setCurrentArticle({ ...currentArticle, author: e.target.value })}
                placeholder="Автор статьи"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Теги (через запятую)
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                value={currentArticle.tags || ''}
                onChange={(e) => setCurrentArticle({ ...currentArticle, tags: e.target.value })}
                placeholder="технологии, дизайн, разработка"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Введите теги через запятую
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Дата публикации
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white cursor-not-allowed"
                value={currentArticle.publishDate || ''}
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
            onClick={saveArticle}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition"
          >
            {editingId ? 'Обновить' : 'Опубликовать'}
          </button>
        </div>
      </div>

      {/* Список статей */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Список статей ({articles.length})
          </h3>
        </div>

        {articles.length === 0 ? (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            Нет добавленных статей
          </div>
        ) : (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {articles.map(item => (
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
                    {item.tags && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {item.tags.split(',').map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => editArticle(item)}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 transition"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => deleteArticle(item.id)}
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