import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useSignUpMutation } from '@store/auth/authSlice';
import { ROUTES } from '@common/routing';
import TextInput from '@components/Ui';
import OtherAuth from '../OtherAuth';

const signUpDefaultValues = {
  name: '',
  email: '',
  password: '',
};
export default function SignUp() {
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: signUpDefaultValues,
  });
  const handleNavigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN.ABSOLUTE_PATH);
  };
  const onSubmit = (formData) => {
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) return;
    signUp({ email, name, password });
  };
  return (
    <div className="flex items-center justify-center">
      <div className="sign-in-form shadow-base">
        <div className="flex">
          <div
            className="py-5 flex-1 text-center cursor-pointer border-b-[1px] border-color-border-base"
            onClick={handleNavigateToSignIn}
            role="button"
            tabIndex={0}
          >
            Sign In
          </div>
          <div className="py-5 flex-1 font-semibold text-gray-900 text-center border-b-2 border-primary-500 cursor-pointer">
            Sign Up
          </div>
        </div>
        <div className="py-[32px]">
          <form className="px-[32px]" action="">
            <div className="mb-[16px]">
              <Controller
                control={control}
                name="name"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="base-input"
                    label="Name"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="mb-[16px]">
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="base-input"
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
                    className="base-input"
                    label="Password"
                    placeholder="8+ characters"
                    type="password"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="mb-[16px]">
              <Controller
                control={control}
                name="confirmPassword"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    className="base-input"
                    label="Confirm Password"
                    type="password"
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 text-white rounded flex items-center justify-center mt-[24px] gap-x-2"
              onClick={handleSubmit(onSubmit)}
            >
              <span className="leading-[48px] font-bold">
                {isLoading ? 'SIGN UP...' : 'SIGN UP'}
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
