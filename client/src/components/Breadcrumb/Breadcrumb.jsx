import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';

export default function Breadcrumb() {
  return (
    <div className="bg-gray-50 py-[26px] px-[200px] flex items-center gap-x-3">
      <AiOutlineHome />
      <p>Home</p>
      <AiOutlineRight />
      <p>User Account</p>
    </div>
  );
}
