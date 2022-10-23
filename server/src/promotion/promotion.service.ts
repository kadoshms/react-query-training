import { Injectable } from '@nestjs/common';
import { timeout } from '../utils';

@Injectable()
export class PromotionService {
  async getThisMonthPromotion() {
    await timeout(2000);
    return { description: '25% discount on all Membership Subscriptions!' };
  }
}
