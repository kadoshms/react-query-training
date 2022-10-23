import { Injectable } from '@nestjs/common';
import { data } from './data';
import { timeout } from '../utils';

const PAGE_SIZE = 10;

@Injectable()
export class ArticlesService {
  async findAll({ page }: { page: number }) {
    const cursor = page * PAGE_SIZE;
    await timeout();
    return {
      data: data.slice(cursor, cursor + PAGE_SIZE),
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
}
