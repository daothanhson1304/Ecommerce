import { RiGooglePlayFill } from 'react-icons/ri';
import { AiFillApple } from 'react-icons/ai';

export default function DownloadApp() {
  return (
    <div>
      <h2 className="text-white font-medium mb-[18px]">DOWNLOAD APP</h2>
      <div className="flex flex-col gap-y-3">
        <div className="bg-gray-800 px-5 py-4 flex items-center gap-x-4 rounded text-white">
          <RiGooglePlayFill className="text-2xl" />
          <div>
            <p className="text-[14px] font-normal">Get it now</p>
            <p className="text-[16px] font-semibold">Google Play</p>
          </div>
        </div>
        <div className="bg-gray-800 px-5 py-4 flex items-center gap-x-4 rounded text-white">
          <AiFillApple className="text-2xl" />
          <div>
            <p className='text-[14px] font-normal"'>Get it now</p>
            <p className="text-[16px] font-semibold">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
}
