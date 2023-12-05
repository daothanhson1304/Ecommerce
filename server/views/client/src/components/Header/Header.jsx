import BottomNav from './BottomNav';
import MiddleNav from './MiddleNav';
import TopNav from './TopNav';

function Header() {
  return (
    <div className="text-white bg-secondary-700 fixed w-full z-50">
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </div>
  );
}

export default Header;
