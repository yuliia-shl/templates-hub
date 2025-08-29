type Lockers = {
  imgPath: string;
  title: string;
  description: string;
};

export const lockers: Lockers[] = [
  {
    imgPath: '/images/icons-png/cargo.png',
    title: 'Модуль доставки',
    description: "Отримання та відправка замовлень через кур'єрські служби.",
  },
  {
    imgPath: '/images/icons-png/holod.png',
    title: 'Холодильний модуль',
    description:
      'Продаж квіткових композицій і товарів з температурним  режимом. ',
  },
  {
    imgPath: '/images/icons-png/cleaning.png',
    title: 'Модуль хімчистки',
    description: 'Автоматизовані послуги хімчистки та ремонту одягу.',
  },
  {
    imgPath: '/images/icons-png/service.png',
    title: 'Дрібні побутові сервіси',
    description: 'Виготовлення ключів, заточка ножів та інше.',
  },
];
