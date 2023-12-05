import { useState } from 'react';
import classNames from 'classnames';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BiGitCompare } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { LiaCopySolid } from 'react-icons/lia';

export default function ProductInfo({ className, info, onAddToCard }) {
  const { product } = info;
  const { title, rating, price, id, images } = product;

  const productDetail = {
    color: ['red', 'midnight', 'green', 'blue', 'pink'],
    sku: ['A263678'],
    brand: ['apple'],
    size: [
      '14-inch Liquid Retina XDR display',
      '13-inch Liquid Retina XDR display',
      '16-inch Liquid Retina XDR display',
    ],
    memory: ['16GB', '64GB', '128GB'],
    storage: ['512GB', '1TB'],
  };
  const { color, sku, brand, size, memory, storage } = productDetail;

  const [quantity, setQuantity] = useState(1);

  const renderStars = (rate = 0) => {
    return Array.from({ length: 5 }, (_, index) => {
      return index < rate ? (
        <AiFillStar className="text-primary-500 text-xl" />
      ) : (
        <AiOutlineStar />
      );
    });
  };
  const handleAddToCard = () => {
    const params = {
      id,
      quantity,
      image: images[0].image,
      title,
      price,
    };
    onAddToCard(params);
  };
  const handleMinusQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className={classNames('flex flex-col gap-y-6', className)}>
      <div>
        <div className="flex gap-x-2 mb-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm font-semibold">{`${rating} Star Rating`}</span>
        </div>
        <h3 className="text-xl mb-4">{title}</h3>
        <div className="flex">
          <div className="flex flex-col flex-1">
            <p className="text-sm font-normal">
              Sku: <span className="font-semibold">{sku ? sku[0] : ''}</span>
            </p>
            <p className="text-sm font-normal">
              Branch:{' '}
              <span className="font-semibold">{brand ? brand[0] : ''}</span>
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-sm font-normal">
              Availability:{' '}
              <span className="font-semibold text-success-500">In stock</span>
            </p>
            <p className="text-sm font-normal">
              Category:{' '}
              <span className="font-semibold">Electronics Device</span>
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-secondary-500">{`$${price}`}</h2>
      <div className="h-[1px] bg-gray-200" />
      {Object.keys(productDetail).length > 0 && (
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">Color</p>
            <select className="px-4 py-3 border-1">
              {color.map((item) => {
                return (
                  <option className="text-sm" value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            {/* <div className="w-[40px] h-[40px] rounded-full bg-slate-400" /> */}
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">Size</p>
            <select className="px-4 py-3 border-1">
              {size.map((item) => {
                return (
                  <option className="text-sm" value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">Memory</p>
            <select className="px-4 py-3 border-1">
              {memory.map((item) => {
                return (
                  <option className="text-sm" value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-sm">Storage</p>
            <select className="px-4 py-3 border-1">
              {storage.map((item) => {
                return (
                  <option className="text-sm" value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex border-2 py-2 ">
          <button
            onClick={handleMinusQuantity}
            type="button"
            className="px-6 text-lg cursor-pointer "
          >
            -
          </button>
          <button type="button" className="px-6 text-lg cursor-pointer ">
            {quantity}
          </button>
          <button
            onClick={handlePlusQuantity}
            type="button"
            className="px-6 text-lg cursor-pointer "
          >
            +
          </button>
        </div>
        <button
          className="flex px-9 py-3 items-center gap-x-3 bg-primary-500 text-white"
          type="button"
          onClick={() => {
            handleAddToCard(id);
          }}
        >
          <p>ADD TO CARD</p>
          <AiOutlineShoppingCart />
        </button>
        <button
          className="px-8 py-3 border-2 border-primary-500 text-primary-500"
          type="button"
        >
          BUY NOW
        </button>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex items-center justify-between flex-1 gap-x-6">
          <div className="flex items-center gap-x-2">
            <AiOutlineHeart />
            <span>Add to Wishlist</span>
          </div>
          <div className="flex items-center gap-x-2">
            <BiGitCompare />
            <span>Add to compare</span>
          </div>
        </div>
        <div className="flex items-center justify-end flex-1 gap-x-3">
          <span>Share product: </span>
          <LiaCopySolid className="hover:text-primary-500" />
          <BsFacebook className="hover:text-primary-500" />
          <AiOutlineTwitter className="hover:text-primary-500" />
        </div>
      </div>
    </div>
  );
}
