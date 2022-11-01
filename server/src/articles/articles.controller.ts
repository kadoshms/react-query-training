import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleCategory } from '@react-query-training/models';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('categories') categories: ArticleCategory[] = [],
  ) {
    return this.articlesService.find({ page, categories });
  }

  @Put('like/:id')
  like(@Param('id') id: string) {
    return this.articlesService.like(id);
  }
}
