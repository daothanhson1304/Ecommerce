import { useNavigate } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { ROUTES } from '@common/routing';
import Logo from './Logo';
import { useContext } from 'react';
import AppContext from '@context/index';

export default function MiddleNav() {
  const { search, handleSetSearch } = useContext(AppContext);

  const navigate = useNavigate();
  const handleNavigateToHome = () => {
    navigate(ROUTES.HOME.ABSOLUTE_PATH);
  };
  const handleGoToShoppingCart = () => {
    navigate(ROUTES.SHOPPING_CARD.ABSOLUTE_PATH);
  };
  return (
    <div className="flex items-center justify-between px-[200px] py-[20px] border-t-[1px] border-gray-500">
      <Logo onClick={handleNavigateToHome} />
      <div className="flex relative cursor-pointer">
        <input
          className="px-5 py-3 w-[646px] outline-none border-0 text-gray-600 rounded-sm"
          type="text"
          placeholder="Search for anything..."
          value={search}
          onChange={(e) => {
            handleSetSearch(e.target.value);
          }}
        />
        <AiOutlineSearch className="absolute top-1/2 translate-y-[-50%] text-gray-900 text-xl right-6" />
      </div>
      <div className="flex items-center text-xl gap-x-6">
        <button type="button" onClick={handleGoToShoppingCart}>
          <AiOutlineShoppingCart className="cursor-pointer" />
        </button>
        <button type="button">
          <AiOutlineUser className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
