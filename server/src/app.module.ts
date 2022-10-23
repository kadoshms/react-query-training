import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { PromotionModule } from './promotion/promotion.module';
import { WeatherModule } from './weather/weather.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [ArticlesModule, PromotionModule, WeatherModule, MatchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
