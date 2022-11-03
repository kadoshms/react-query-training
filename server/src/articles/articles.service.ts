import { Injectable } from '@nestjs/common';
import { Article } from '@react-query-training/models';
import { data } from './data';
import { timeout } from '../utils';

const PAGE_SIZE = 10;

@Injectable()
export class ArticlesService {
  async getArticles({
    page,
    categories,
  }: {
    page: number;
    categories: string[];
  }) {
    const cursor = page * PAGE_SIZE;
    await timeout();
    const paginatedData = data.slice(cursor, cursor + PAGE_SIZE);
    const filteredData = this.filterArticlesByCategories({
      articles: paginatedData,
      categories,
    });
    return {
      data: filteredData,
      nextPage: cursor + PAGE_SIZE >= data.length ? undefined : page + 1,
    };
  }

  async like(id: string) {
    await timeout(1300);
    const record = data.find((rec) => rec.id === id);

    if (Math.random() < 0.3) {
      throw new Error();
    }

    if (!record) {
      return false;
    }

    record.likes = record.likes + 1;

    return true;
  }

  private filterArticlesByCategories({
    categories,
    articles,
  }: {
    categories: string[];
    articles: Article[];
  }) {
    if (categories.length === 0) {
      return articles;
    }
    return articles.filter((article) => categories.includes(article.category));
  }
}
