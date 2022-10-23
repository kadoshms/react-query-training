import { Module } from '@nestjs/common';
import { ArticlesModule } from './articles/articles.module';
import { PromotionModule } from './promotion/promotion.module';
import { WeatherModule } from './weather/weather.module';
import { OnlineUsersModule } from './online-users/online-users.module';

@Module({
  imports: [ArticlesModule, PromotionModule, WeatherModule, OnlineUsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
