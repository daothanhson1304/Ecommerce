import { Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

export default function Auth() {
  return (
    <div>
      <Breadcrumb />
      <Outlet />
    </div>
  );
}
