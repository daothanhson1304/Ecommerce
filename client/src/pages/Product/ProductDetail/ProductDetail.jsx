import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '@store/product/productSlice';
import useCard from '@hooks/useCard';
import { ROUTES } from '@common/routing';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [, { addToCard }] = useCard();
  // eslint-disable-next-line no-unused-vars

  const { data } = useGetProductDetailQuery(
    { productId },
    { skip: !productId }
  );
  if (!data) return null;
  const handleAddToCard = (product) => {
    addToCard(product);
    navigate(ROUTES.SHOPPING_CARD.ABSOLUTE_PATH);
  };
  return (
    <div className="grid grid-cols-7 gap-x-[56px]">
      <ProductImage className="col-span-3" images={data.product.images} />
      <ProductInfo
        className="col-span-4"
        info={data}
        onAddToCard={handleAddToCard}
      />
    </div>
  );
}
