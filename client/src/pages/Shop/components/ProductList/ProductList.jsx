import classNames from 'classnames';
import ProductItem from './ProductItem';

export default function ProductList({ className, products }) {
  if (!products) return null;
  return (
    <div className={classNames('grid grid-cols-4 gap-4', className)}>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}
