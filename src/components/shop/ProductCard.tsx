import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Product } from './ProductsData';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-scale">
      <CardContent className="p-0">
        <div className="relative">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
          <div className="absolute top-2 right-2 flex gap-1">
            {product.isNew && (
              <Badge className="bg-primary">Новинка</Badge>
            )}
            {product.isPopular && (
              <Badge variant="secondary">Хит</Badge>
            )}
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{product.price} ₽</span>
            <Button onClick={() => onAddToCart(product)} size="sm">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              В корзину
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
