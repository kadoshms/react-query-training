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
  findAll(@Query('page', ParseIntPipe) page: number) {
    return this.articlesService.findAll({ page });
  }

  @Put('like/:id')
  like(@Param('id') id: string) {
    return this.articlesService.like(id);
  }
}
