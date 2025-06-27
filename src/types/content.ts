export type NewsItem = {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  articleLink: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  tags: string[];
};

export type ProjectItem = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  createdAt: string;
};