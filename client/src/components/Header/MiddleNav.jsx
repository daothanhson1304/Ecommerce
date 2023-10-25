import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import Logo from './Logo';

export default function MiddleNav() {
  return (
    <div className="flex items-center justify-between px-[200px] py-3">
      <Logo />
      <div className="flex relative">
        <input
          className="px-5 py-3 w-[646px] outline-none border-0 text-gray-600 rounded-sm"
          type="text"
          placeholder="Search for anything..."
        />
        <AiOutlineSearch className="absolute top-1/2 translate-y-[-50%] text-gray-900 text-xl right-6" />
      </div>
      <div className="flex items-center text-xl gap-x-6">
        <AiOutlineShoppingCart className="cursor-pointer" />
        <AiOutlineUser className="cursor-pointer" />
      </div>
    </div>
  );
}
