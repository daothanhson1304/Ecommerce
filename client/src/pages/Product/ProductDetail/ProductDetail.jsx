import { useGetProductDetailQuery } from '@store/product/productSlice';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export default function ProductDetail() {
  const { productId } = useParams();
  console.log({ productId });
  const { data } = useGetProductDetailQuery(
    { productId }
    // { skip: !productId }
  );
  if (!data) return null;
  return (
    <div className="grid grid-cols-7">
      <ProductImage className="col-span-3" />
      <ProductInfo className="col-span-4" info={data} />
    </div>
  );
}
