// Тип для новости
export type NewsItem = {
  id: string;
  title: string;
  content: string;
  image: string; // URL изображения
  author: string;
  publishDate: string; // Формат: 'YYYY-MM-DD'
  articleLink: string;
};

// Тип для статьи
export type ArticleItem = {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  tags: string[];
};

// Тип для проекта
export type ProjectItem = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  createdAt: string;
};