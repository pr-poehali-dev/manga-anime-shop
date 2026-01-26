import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { CartItem } from './ProductsData';

interface ShoppingCartProps {
  cart: CartItem[];
  cartCount: number;
  totalPrice: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export default function ShoppingCart({ 
  cart, 
  cartCount, 
  totalPrice, 
  onUpdateQuantity, 
  onRemoveFromCart 
}: ShoppingCartProps) {
  return (
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
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onRemoveFromCart(item.id)}
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
  );
}
