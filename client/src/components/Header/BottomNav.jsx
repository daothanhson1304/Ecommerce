import { FiPhoneCall } from 'react-icons/fi';
import { BiGitCompare, BiSupport, BiHelpCircle } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { FaChevronDown } from 'react-icons/fa';

export default function BottomNav() {
  return (
    <div className="flex items-center justify-between px-[200px] py-3 bg-white text-gray-600 border-b">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2 cursor-pointer">
          <span>All Category</span>
          <FaChevronDown />
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer">
          <SlLocationPin />
          <span>Track Order</span>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer">
          <BiGitCompare />
          <span>Compare</span>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer">
          <BiSupport />
          <span>Customer Support</span>
        </div>
        <div className="flex items-center gap-x-1 cursor-pointer">
          <BiHelpCircle />
          <span>Need Help</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FiPhoneCall />
        <span>+1-202-555-0104</span>
      </div>
    </div>
  );
}
