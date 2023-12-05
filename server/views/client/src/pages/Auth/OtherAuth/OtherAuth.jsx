import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';

export default function OtherAuth() {
  return (
    <div className="px-[32px] flex flex-col items-center mt-[24px] gap-y-[12px]">
      <p>or</p>
      <div className="flex items-center relative border-color border-1 py-[12px] justify-center rounded w-full">
        <FcGoogle className="text-2xl absolute left-4" />
        <p>Login with Google</p>
      </div>
      <div className="flex justify-center items-center relative border-color-border-base border-1 py-[12px] rounded w-full">
        <AiFillApple className="text-2xl absolute left-4" />
        <p>Login with Apple</p>
      </div>
    </div>
  );
}
