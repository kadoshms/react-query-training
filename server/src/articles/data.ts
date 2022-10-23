import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export const data = [];

const IMAGE_SIZE = 150;

function createFakeImage() {
  const imageFactoryPool = [
    faker.image.business,
    faker.image.city,
    faker.image.animals,
    faker.image.people,
    faker.image.fashion,
    faker.image.food,
  ];

  const factory =
    imageFactoryPool[Math.floor(Math.random() * imageFactoryPool.length)];

  return factory.apply(null, [IMAGE_SIZE, IMAGE_SIZE, true]);
}

function createFakeArticle() {
  return {
    id: uuidv4(),
    title: faker.lorem.words(6),
    brief: faker.lorem.paragraph(),
    image: createFakeImage(),
    likes: faker.datatype.number({
      min: 200,
      max: 1000,
    }),
  };
}

for (let i = 0; i < 4000; i++) {
  data.push(createFakeArticle());
}
