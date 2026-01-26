export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  { id: 1, title: 'Атака Титанов. Том 1', category: 'Манга', price: 890, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 2, title: 'Моя Геройская Академия. Том 5', category: 'Манга', price: 790, image: '/placeholder.svg', isPopular: true },
  { id: 3, title: 'Токийский Гуль. Том 3', category: 'Манга', price: 850, image: '/placeholder.svg', isNew: true },
  { id: 4, title: 'Наруто. Полное издание. Том 1', category: 'Манга', price: 1290, image: '/placeholder.svg', isPopular: true },
  { id: 5, title: 'Ванпанчмен. Том 7', category: 'Манга', price: 750, image: '/placeholder.svg', isNew: true },
  { id: 6, title: 'Клинок, рассекающий демонов. Том 2', category: 'Манга', price: 820, image: '/placeholder.svg', isPopular: true },
  { id: 7, title: 'Магическая битва. Том 4', category: 'Манга', price: 840, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 8, title: 'Хантер × Хантер. Том 10', category: 'Манга', price: 780, image: '/placeholder.svg', isPopular: true },
  { id: 9, title: 'Берсерк. Делюкс издание. Том 1', category: 'Манга', price: 2490, image: '/placeholder.svg', isNew: true },
  { id: 10, title: 'Блич. Том 15', category: 'Манга', price: 720, image: '/placeholder.svg' },
  { id: 11, title: 'Стальной алхимик. Том 8', category: 'Манга', price: 810, image: '/placeholder.svg', isPopular: true },
  { id: 12, title: 'Ван Пис. Том 25', category: 'Манга', price: 760, image: '/placeholder.svg', isPopular: true },
  { id: 13, title: 'Тетрадь смерти. Том 1', category: 'Манга', price: 880, image: '/placeholder.svg', isNew: true },
  { id: 14, title: 'Чейнсо Мен. Том 6', category: 'Манга', price: 795, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 15, title: 'Евангелион. Том 12', category: 'Манга', price: 920, image: '/placeholder.svg' },
  { id: 16, title: 'Синий экзорцист. Том 9', category: 'Манга', price: 740, image: '/placeholder.svg' },
  { id: 17, title: 'Обещанный Неверленд. Том 7', category: 'Манга', price: 770, image: '/placeholder.svg', isNew: true },
  { id: 18, title: 'Убийца Акаме. Том 5', category: 'Манга', price: 730, image: '/placeholder.svg' },
  { id: 19, title: 'Мобильный воин Гандам. Том 3', category: 'Манга', price: 850, image: '/placeholder.svg' },
  { id: 20, title: 'Ковбой Бибоп. Том 2', category: 'Манга', price: 890, image: '/placeholder.svg', isPopular: true },
  
  { id: 21, title: 'Фигурка Луффи Premium', category: 'Фигурки', price: 3500, image: '/placeholder.svg', isPopular: true },
  { id: 22, title: 'Фигурка Годжо Сатору', category: 'Фигурки', price: 4200, image: '/placeholder.svg', isNew: true },
  { id: 23, title: 'Фигурка Микаса Аккерман', category: 'Фигурки', price: 3200, image: '/placeholder.svg', isNew: true },
  { id: 24, title: 'Фигурка Наруто Узумаки', category: 'Фигурки', price: 2980, image: '/placeholder.svg', isPopular: true },
  { id: 25, title: 'Фигурка Тандзиро Камадо', category: 'Фигурки', price: 3400, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 26, title: 'Фигурка Зенитсу Агацума', category: 'Фигурки', price: 3100, image: '/placeholder.svg' },
  { id: 27, title: 'Фигурка Деку (Изуку Мидория)', category: 'Фигурки', price: 2850, image: '/placeholder.svg', isPopular: true },
  { id: 28, title: 'Фигурка Сакуры Харуно', category: 'Фигурки', price: 2700, image: '/placeholder.svg' },
  { id: 29, title: 'Фигурка Эдварда Элрика', category: 'Фигурки', price: 3300, image: '/placeholder.svg', isNew: true },
  { id: 30, title: 'Фигурка Л (Death Note)', category: 'Фигурки', price: 3600, image: '/placeholder.svg', isPopular: true },
  
  { id: 31, title: 'Артбук "Атака Титанов"', category: 'Артбуки', price: 1890, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 32, title: 'Артбук "Студия Ghibli"', category: 'Артбуки', price: 2290, image: '/placeholder.svg', isPopular: true },
  { id: 33, title: 'Артбук "Магическая битва"', category: 'Артбуки', price: 1750, image: '/placeholder.svg', isNew: true },
  { id: 34, title: 'Артбук "Клинок, рассекающий демонов"', category: 'Артбуки', price: 1650, image: '/placeholder.svg', isPopular: true },
  { id: 35, title: 'Артбук "Евангелион"', category: 'Артбуки', price: 2100, image: '/placeholder.svg' },
  
  { id: 36, title: 'Постер "Годжо Сатору"', category: 'Постеры', price: 450, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 37, title: 'Постер "Акацуки"', category: 'Постеры', price: 390, image: '/placeholder.svg', isPopular: true },
  { id: 38, title: 'Постер "Хаки Луффи"', category: 'Постеры', price: 420, image: '/placeholder.svg' },
  { id: 39, title: 'Постер "Танджиро и Незуко"', category: 'Постеры', price: 380, image: '/placeholder.svg', isNew: true },
  { id: 40, title: 'Постер "Команда 7"', category: 'Постеры', price: 400, image: '/placeholder.svg', isPopular: true },
  { id: 41, title: 'Постер "Эрен Титан"', category: 'Постеры', price: 430, image: '/placeholder.svg' },
  
  { id: 42, title: 'Набор значков "Клинок демонов"', category: 'Аксессуары', price: 650, image: '/placeholder.svg', isNew: true },
  { id: 43, title: 'Блокнот Death Note', category: 'Аксессуары', price: 890, image: '/placeholder.svg', isPopular: true },
  { id: 44, title: 'Кружка "Моя Геройская Академия"', category: 'Аксессуары', price: 750, image: '/placeholder.svg', isNew: true },
  { id: 45, title: 'Футболка "Акацуки"', category: 'Аксессуары', price: 1490, image: '/placeholder.svg', isPopular: true },
  { id: 46, title: 'Худи "Токийские мстители"', category: 'Аксессуары', price: 2890, image: '/placeholder.svg', isNew: true, isPopular: true },
  { id: 47, title: 'Рюкзак "Наруто"', category: 'Аксессуары', price: 1990, image: '/placeholder.svg', isPopular: true },
  { id: 48, title: 'Косплей меч Танджиро', category: 'Аксессуары', price: 3200, image: '/placeholder.svg', isNew: true },
  { id: 49, title: 'Коврик для мыши "Годжо"', category: 'Аксессуары', price: 590, image: '/placeholder.svg' },
  { id: 50, title: 'Повязка "Скрытый Лист"', category: 'Аксессуары', price: 450, image: '/placeholder.svg', isPopular: true },
];
