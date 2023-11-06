import { useGetProductDetailQuery } from '@store/product/productSlice';
import { useParams } from 'react-router-dom';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export default function ProductDetail() {
  const { productId } = useParams();
  const { data } = useGetProductDetailQuery(
    { productId },
    { skip: !productId }
  );
  if (!data) return null;
  return (
    <div className="grid grid-cols-7 gap-x-[56px]">
      <ProductImage className="col-span-3" images={data.images} />
      <ProductInfo className="col-span-4" info={data} />
    </div>
  );
}
