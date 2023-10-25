import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[186px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
