import { Outlet } from 'react-router-dom';

import Breadcrumb from '@components/Breadcrumb';
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb />
      <div className="pt-[186px] px-[200px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
