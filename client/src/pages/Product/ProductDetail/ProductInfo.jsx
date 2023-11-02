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

export default function ProductInfo({ className, info }) {
  console.log({ info });
  const { title, rating, price } = info;
  const renderStars = (rate = 0) => {
    return Array.from({ length: 5 }, (_, index) => {
      return index < rate ? (
        <AiFillStar className="text-primary-500 text-xl" />
      ) : (
        <AiOutlineStar />
      );
    });
  };
  return (
    <div className={classNames('flex flex-col gap-y-6', className)}>
      <div>
        <div className="flex gap-x-2 mb-2">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm font-semibold">{`${rating} Star Rating`}</span>
        </div>
        <h3 className="text-xl mb-4">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
          Storage) - Space Gray
        </h3>
        <div className="flex">
          <div className="flex flex-col flex-1">
            <p className="text-sm font-normal">
              Sku: <span className="font-semibold">A263678</span>
            </p>
            <p className="text-sm font-normal">
              Branch: <span className="font-semibold">Apple</span>
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
      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">Color</p>
          <div className="w-[40px] h-[40px] rounded-full bg-slate-400" />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">Size</p>
          <select className="px-4 py-3 border-1">
            <option
              className="text-sm"
              value="14-inch Liquid Retina XDR display"
            >
              14-inch Liquid Retina XDR display
            </option>
            <option
              className="text-sm"
              value="14-inch Liquid Retina XDR display"
            >
              14-inch Liquid Retina XDR display
            </option>
            <option
              className="text-sm"
              value="14-inch Liquid Retina XDR display"
            >
              14-inch Liquid Retina XDR display
            </option>
            <option
              className="text-sm"
              value="14-inch Liquid Retina XDR display"
            >
              14-inch Liquid Retina XDR display
            </option>
            <option
              className="text-sm"
              value="14-inch Liquid Retina XDR display"
            >
              14-inch Liquid Retina XDR display
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">Memory</p>
          <select className="px-4 py-3 border-1">
            <option className="text-sm" value="16GB unified memory">
              16GB unified memory
            </option>
            <option className="text-sm" value="16GB unified memory">
              16GB unified memory
            </option>
            <option className="text-sm" value="16GB unified memory">
              16GB unified memory
            </option>
            <option className="text-sm" value="16GB unified memory">
              16GB unified memory
            </option>
            <option className="text-sm" value="16GB unified memory">
              16GB unified memory
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-sm">Storage</p>
          <select className="px-4 py-3 border-1">
            <option className="text-sm" value="1TV SSD Storage">
              1TV SSD Storage
            </option>
            <option className="text-sm" value="1TV SSD Storage">
              1TV SSD Storage
            </option>
            <option className="text-sm" value="1TV SSD Storage">
              1TV SSD Storage
            </option>
            <option className="text-sm" value="1TV SSD Storage">
              1TV SSD Storage
            </option>
            <option className="text-sm" value="1TV SSD Storage">
              1TV SSD Storage
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div className="flex border-2 py-2 ">
          <span className="px-6 text-lg cursor-pointer ">-</span>
          <span className="px-6 text-lg cursor-pointer ">01</span>
          <span className="px-6 text-lg cursor-pointer ">+</span>
        </div>
        <button
          className="flex px-9 py-3 items-center gap-x-3 bg-primary-500 text-white"
          type="button"
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
