/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Controller, useForm } from 'react-hook-form';
import { useSignInMutation } from '@store/auth/authSlice';
import { ROUTES } from '@common/routing';
import TextInput from '@components/Ui';
import OtherAuth from '../OtherAuth';

const signInDefaultValues = {
  email: '',
  password: '',
};
export default function SignIn() {
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();
  const handleNavigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP.ABSOLUTE_PATH);
  };
  const { control, handleSubmit } = useForm({
    defaultValues: signInDefaultValues,
  });
  const onSubmit = (formData) => {
    signIn(formData);
  };
  return (
    <div className=" flex items-center justify-center">
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
            <div className="mb-[16px]">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="sign-in-input"
                    label="Email"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="mb-[16px]">
              <Controller
                control={control}
                name="password"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="sign-in-input"
                    type="password"
                    label="Password"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <button
              type="button"
              className="w-full bg-primary-500 text-white rounded flex items-center justify-center mt-[24px] gap-x-2"
              onClick={handleSubmit(onSubmit)}
            >
              <span className="leading-[48px] font-bold">
                {isLoading ? 'SIGN IN...' : 'SIGN IN'}
              </span>
              <BsArrowRight className="text-2xl" />
            </button>
          </form>
          <OtherAuth />
        </div>
      </div>
    </div>
  );
}
