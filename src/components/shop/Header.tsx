import { Button } from '@/components/ui/button';
import ShoppingCart from './ShoppingCart';
import { CartItem } from './ProductsData';

interface HeaderProps {
  cartCount: number;
  cart: CartItem[];
  totalPrice: number;
  onSetActiveSection: (section: string) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export default function Header({ 
  cartCount, 
  cart, 
  totalPrice, 
  onSetActiveSection,
  onUpdateQuantity,
  onRemoveFromCart
}: HeaderProps) {
  return (
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
            <Button variant="ghost" onClick={() => onSetActiveSection('catalog')}>
              Каталог
            </Button>
            <Button variant="ghost" onClick={() => onSetActiveSection('new')}>
              Новинки
            </Button>
            <Button variant="ghost" onClick={() => onSetActiveSection('popular')}>
              Популярное
            </Button>
            <Button variant="ghost" onClick={() => onSetActiveSection('about')}>
              О магазине
            </Button>
            <Button variant="ghost" onClick={() => onSetActiveSection('contacts')}>
              Контакты
            </Button>
          </nav>

          <ShoppingCart
            cart={cart}
            cartCount={cartCount}
            totalPrice={totalPrice}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveFromCart={onRemoveFromCart}
          />
        </div>
      </div>
    </header>
  );
}
