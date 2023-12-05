import { ROUTES } from '@common/routing';
import { useState } from 'react';
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ProductItem({ product }) {
  const { id, title, rating, price, image } = product;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleGoToProductDetail = (productId) => {
    navigate(`${ROUTES.PRODUCT_DETAIL.RELATIVE_PATH}/${productId}`);
  };

  const renderStars = (rate) => {
    return Array.from({ length: 5 }, (_, index) => {
      return index < rate ? (
        <AiFillStar className="text-primary-500" />
      ) : (
        <AiOutlineStar />
      );
    });
  };
  return (
    <div className="flex flex-col gap-y-[8px] border-1 border-color-border-base p-[16px]">
      <div
        className="relative rounded-md overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image || ''} alt="product" />
        {isHovered && (
          <div className="absolute right-0 bottom-0 top-0 left-0 flex items-center justify-center gap-x-2 bg-overlay">
            <button
              className="p-3 bg-white rounded-full hover:bg-primary-500 hover:text-white"
              type="button"
            >
              <AiOutlineHeart />
            </button>
            <button
              className="p-3 bg-white rounded-full hover:bg-primary-500 hover:text-white"
              type="button"
            >
              <AiOutlineShoppingCart />
            </button>
            <button
              className="p-3 bg-white rounded-full hover:bg-primary-500 hover:text-white"
              type="button"
              onClick={() => {
                handleGoToProductDetail(id);
              }}
            >
              <AiOutlineEye />
            </button>
          </div>
        )}
      </div>
      <div className="flex">{renderStars(rating)}</div>
      <p>{title}</p>
      <span className="text-secondary-500">{`$${price}`}</span>
    </div>
  );
}
