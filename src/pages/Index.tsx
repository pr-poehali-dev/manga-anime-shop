import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/shop/Header';
import ProductCard from '@/components/shop/ProductCard';
import { products, Product, CartItem } from '@/components/shop/ProductsData';

export default function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState('catalog');

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
      <Header
        cartCount={cartCount}
        cart={cart}
        totalPrice={totalPrice}
        onSetActiveSection={setActiveSection}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
      />

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

      {activeSection === 'catalog' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Наш каталог</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="manga">Манга</TabsTrigger>
                <TabsTrigger value="figures">Фигурки</TabsTrigger>
                <TabsTrigger value="artbooks">Артбуки</TabsTrigger>
                <TabsTrigger value="posters">Постеры</TabsTrigger>
                <TabsTrigger value="accessories">Аксессуары</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="manga">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Манга').map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="figures">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Фигурки').map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="artbooks">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Артбуки').map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="posters">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Постеры').map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="accessories">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.filter(p => p.category === 'Аксессуары').map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'new' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Новинки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'popular' && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Популярное</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">О магазине</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-muted-foreground text-center mb-6">
                Sakura Shop — это ваш проводник в удивительный мир японской культуры. Мы предлагаем широкий 
                ассортимент манги, аниме-фигурок и сопутствующих товаров от ведущих издательств и производителей.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-bold mb-2">500+ изданий</h3>
                  <p className="text-sm text-muted-foreground">Огромный выбор манги</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="font-bold mb-2">Быстрая доставка</h3>
                  <p className="text-sm text-muted-foreground">По всей России</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="font-bold mb-2">Только оригинал</h3>
                  <p className="text-sm text-muted-foreground">Лицензионная продукция</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Контакты</h2>
            <div className="bg-card p-8 rounded-lg space-y-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Адрес
                </h3>
                <p className="text-muted-foreground">г. Москва, ул. Сакуры, д. 7</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Телефон
                </h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  Email
                </h3>
                <p className="text-muted-foreground">info@sakurashop.ru</p>
              </div>
              <div className="pt-6 border-t">
                <h3 className="font-bold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full">Отправить</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-card border-t mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl mb-4">🎌</div>
          <h3 className="text-xl font-bold mb-2">桜 Sakura Shop</h3>
          <p className="text-sm text-muted-foreground mb-6">Манга и аниме товары</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Sakura Shop. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
