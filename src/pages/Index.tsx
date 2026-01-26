import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('catalog');

  const products: Product[] = [
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

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const newProducts = products.filter(p => p.isNew);
  const popularProducts = products.filter(p => p.isPopular);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎌</div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">桜 Sakura Shop</h1>
                <p className="text-sm text-muted-foreground">Манга и аниме</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" onClick={() => setActiveSection('catalog')}>
                Каталог
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('new')}>
                Новинки
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('popular')}>
                Популярное
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('about')}>
                О магазине
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('contacts')}>
                Контакты
              </Button>
            </nav>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-muted-foreground py-8">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <Card key={item.id}>
                          <CardContent className="p-4">
                            <div className="flex gap-4">
                              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                              <div className="flex-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    -
                                  </Button>
                                  <span className="w-8 text-center">{item.quantity}</span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    +
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => removeFromCart(item.id)}
                                    className="ml-auto"
                                  >
                                    <Icon name="Trash2" size={16} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Итого:</span>
                          <span>{totalPrice} ₽</span>
                        </div>
                        <Button className="w-full mt-4" size="lg">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Добро пожаловать в мир манги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивные издания, редкие тома и коллекционные фигурки
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" onClick={() => setActiveSection('catalog')}>
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" onClick={() => setActiveSection('new')}>
              Новинки <Icon name="Sparkles" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'catalog' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Каталог товаров</h2>
            <Tabs defaultValue="all" className="mb-8">
              <TabsList>
                <TabsTrigger value="all">Все товары</TabsTrigger>
                <TabsTrigger value="manga">Манга</TabsTrigger>
                <TabsTrigger value="figures">Фигурки</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map(product => (
                    <Card key={product.id} className="group hover-scale overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2">Новинка</Badge>
                        )}
                        {product.isPopular && (
                          <Badge variant="secondary" className="absolute top-2 left-2">
                            Популярно
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                        <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-bold">{product.price} ₽</span>
                          <Button size="sm" onClick={() => addToCart(product)}>
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="manga" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Манга').map(product => (
                    <Card key={product.id} className="group hover-scale overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2">Новинка</Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                        <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-bold">{product.price} ₽</span>
                          <Button size="sm" onClick={() => addToCart(product)}>
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="figures" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Фигурки').map(product => (
                    <Card key={product.id} className="group hover-scale overflow-hidden">
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-2 right-2">Новинка</Badge>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                        <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xl font-bold">{product.price} ₽</span>
                          <Button size="sm" onClick={() => addToCart(product)}>
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'new' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Icon name="Sparkles" size={32} />
              Новинки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <Card key={product.id} className="group hover-scale overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <Badge className="absolute top-2 right-2">Новинка</Badge>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold">{product.price} ₽</span>
                      <Button size="sm" onClick={() => addToCart(product)}>
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'popular' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Icon name="TrendingUp" size={32} />
              Популярное
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map(product => (
                <Card key={product.id} className="group hover-scale overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                    <Badge variant="secondary" className="absolute top-2 left-2">
                      Популярно
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold">{product.price} ₽</span>
                      <Button size="sm" onClick={() => addToCart(product)}>
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">О магазине</h2>
            <Card>
              <CardContent className="p-8 space-y-4">
                <p className="text-lg">
                  🎌 <strong>Sakura Shop</strong> — это место, где оживают истории японской культуры.
                  Мы специализируемся на продаже манги, аниме-товаров и коллекционных фигурок.
                </p>
                <p>
                  Наша миссия — сделать мир манги и аниме доступным для всех поклонников японской культуры.
                  Мы тщательно отбираем каждый товар, чтобы вы получали только лучшее качество.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4">
                    <Icon name="Package" size={48} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                    <p className="text-sm text-muted-foreground">По всей России за 2-5 дней</p>
                  </div>
                  <div className="text-center p-4">
                    <Icon name="Shield" size={48} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-2">Оригинальная продукция</h3>
                    <p className="text-sm text-muted-foreground">Только лицензионные товары</p>
                  </div>
                  <div className="text-center p-4">
                    <Icon name="Heart" size={48} className="mx-auto mb-2 text-primary" />
                    <h3 className="font-semibold mb-2">С любовью к аниме</h3>
                    <p className="text-sm text-muted-foreground">Созданы фанатами для фанатов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Контакты</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@sakura-shop.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Японская, д. 5</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="font-semibold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                      Отправить
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 Sakura Shop. Все права защищены.</p>
            <p className="text-sm">Манга • Аниме • Фигурки 🎌</p>
          </div>
        </div>
      </footer>
    </div>
  );
}