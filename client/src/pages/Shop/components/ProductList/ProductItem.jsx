/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import {
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';
import iphone from '../../../../assets/iphone15.webp';

export default function ProductItem({ product }) {
  const { title, rating, price } = product;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
        <img src={iphone} />
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
