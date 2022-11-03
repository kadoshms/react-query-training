import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export const data = [];

const IMAGE_SIZE = 150;

const CATEGORY_IMAGE_FACTORIES = {
  news: faker.image.people,
  sports: faker.image.sports,
  business: faker.image.business,
  fashion: faker.image.fashion,
  nightlife: faker.image.nightlife,
  food: faker.image.food,
};

function createFakeImage(category: string) {
  const factory = CATEGORY_IMAGE_FACTORIES[category];
  return factory.apply(null, [IMAGE_SIZE, IMAGE_SIZE, true]);
}

function createFakeCategory() {
  const categories = Object.keys(CATEGORY_IMAGE_FACTORIES);
  return categories[Math.floor(Math.random() * categories.length)];
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

for (let i = 0; i < 10000; i++) {
  data.push(createFakeArticle());
}
