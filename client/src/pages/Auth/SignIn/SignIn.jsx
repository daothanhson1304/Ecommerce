/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { ROUTES } from '@common/routing';
import OtherAuth from '../OtherAuth';

export default function SignIn() {
  const navigate = useNavigate();
  const handleNavigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP.ABSOLUTE_PATH);
  };
  return (
    <div className="py-[100px] flex items-center justify-center">
      <div className="sign-in-form shadow-base">
        <div className="flex">
          <div className="py-5 flex-1 font-semibold text-gray-900 text-center border-b-2 border-primary-500 cursor-pointer ">
            Sign In
          </div>
          <div
            className="py-5 flex-1 text-center cursor-pointer border-b-[1px] border-color-border-base"
            onClick={handleNavigateToSignUp}
            role="button"
            tabIndex={0}
          >
            Sign Up
          </div>
        </div>
        <div className="py-[32px]">
          <form className="px-[32px]" action="">
            <div className="flex flex-col gap-y-3 mb-[16px]">
              <label htmlFor="emailAddress">Email Address</label>
              <input className="sign-in-input" type="text" id="emailAddress" />
            </div>
            <div className="flex items-center justify-between mb-[12px]">
              <label htmlFor="password">Password</label>
              <p className="text-secondary-500 cursor-pointer">
                Forget Password
              </p>
            </div>
            <input className="sign-in-input" type="text" id="password" />
            <button
              type="button"
              className="w-full bg-primary-500 text-white rounded flex items-center justify-center mt-[24px] gap-x-2"
            >
              <span className="leading-[48px] font-bold">SIGN IN</span>
              <BsArrowRight className="text-2xl" />
            </button>
          </form>
          <OtherAuth />
        </div>
      </div>
    </div>
  );
}
