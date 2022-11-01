import { faker } from '@faker-js/faker';
import { ArticleCategory } from '@react-query-training/models';
import { v4 as uuidv4 } from 'uuid';

export const data = [];

const IMAGE_SIZE = 150;

const CATEGORY_IMAGE_FACTORY = {
  business: faker.image.business,
  fashion: faker.image.fashion,
  food: faker.image.food,
  sports: faker.image.sports,
  news: faker.image.people,
  nightlife: faker.image.nightlife,
};

function createFakeImage(category: ArticleCategory) {
  const factory = CATEGORY_IMAGE_FACTORY[category];

  return factory.apply(null, [IMAGE_SIZE, IMAGE_SIZE, true]);
}

function createFakeCategory() {
  const categories = Object.keys(CATEGORY_IMAGE_FACTORY);
  return categories[
    Math.floor(Math.random() * categories.length)
  ] as ArticleCategory;
}

function createFakeArticle() {
  const category = createFakeCategory();
  return {
    id: uuidv4(),
    title: faker.lorem.words(6),
    brief: faker.lorem.paragraph(),
    image: createFakeImage(category),
    category,
    likes: faker.datatype.number({
      min: 200,
      max: 1000,
    }),
  };
}

for (let i = 0; i < 4000; i++) {
  data.push(createFakeArticle());
}
