import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { NewsEditor } from './AdminPanel/NewsEditor';
import { ArticlesEditor } from './AdminPanel/ArticlesEditor';
import { ProjectsEditor } from './AdminPanel/ProjectsEditor';

const VALID_KEY = "a1b2c3d4-5678-90ef-1234-567890abcdef";

export const AdminPanel = () => {
  const { secretKey } = useParams();
  const [activeTab, setActiveTab] = useState<'news' | 'articles' | 'projects'>('news');

  if (secretKey !== VALID_KEY) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Шапка админ-панели */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Панель администратора
          </h1>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Навигационные табы */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'news'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Новости
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'articles'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Статьи
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'projects'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Проекты
            </button>
          </nav>
        </div>

        {/* Контент выбранной вкладки */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          {activeTab === 'news' && <NewsEditor />}
          {activeTab === 'articles' && <ArticlesEditor />}
          {activeTab === 'projects' && <ProjectsEditor />}
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Административная панель • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};