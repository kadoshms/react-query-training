import { Injectable } from '@nestjs/common';
import { data } from './data';
import { timeout } from '../utils';
import { ArticleCategory, Article } from '@react-query-training/models';

const PAGE_SIZE = 10;

@Injectable()
export class ArticlesService {
  async find({
    page,
    categories,
  }: {
    page: number;
    categories: ArticleCategory[];
  }) {
    const cursor = page * PAGE_SIZE;
    await timeout();
    const slicedData = data.slice(cursor, cursor + PAGE_SIZE);
    const filteredData = this.filterArticles({
      articles: slicedData,
      categories,
    });
    return {
      data: filteredData,
      nextPage: cursor + PAGE_SIZE >= data.length ? undefined : page + 1,
    };
  }

  private filterArticles({
    articles,
    categories,
  }: {
    articles: Article[];
    categories: ArticleCategory[];
  }) {
    return articles.filter((article) =>
      categories.length > 0 ? categories.includes(article.category) : true,
    );
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
}
