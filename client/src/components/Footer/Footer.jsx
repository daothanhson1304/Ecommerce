import CliconEcommerce from './CliconEcommerce';
import CopyRight from './CopyRight';
import DownloadApp from './DownloadApp';
import PopularTag from './PopularTag';
import QuickLinks from './QuickLinks';
import TopCategory from './TopCategory';
import './index.css';

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300  w-full">
      <div className="flex items-start px-[200px] py-[72px] justify-between">
        <CliconEcommerce />
        <TopCategory />
        <QuickLinks />
        <DownloadApp />
        <PopularTag />
      </div>
      <CopyRight />
    </div>
  );
}

export default Footer;
