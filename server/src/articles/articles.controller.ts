import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  getArticles(
    @Query('page', ParseIntPipe) page: number,
    @Query('categories') categories: string[] = [],
  ) {
    return this.articlesService.getArticles({ page, categories });
  }

  @Put('like/:id')
  like(@Param('id') id: string) {
    return this.articlesService.like(id);
  }
}
