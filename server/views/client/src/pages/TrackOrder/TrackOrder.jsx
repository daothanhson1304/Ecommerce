import { ROUTES } from '@common/routing';
import TextInput from '@components/Ui';
import { useGetOrderActivityMutation } from '@store/order/orderSlice';
import { Controller, useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { PiWarningCircleThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export default function TrackOrder() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      orderId: '',
      email: '',
    },
  });
  const navigate = useNavigate();
  const [getOrderActivity] = useGetOrderActivityMutation();

  const handleTrackOrder = async ({ email, orderId }) => {
    try {
      const data = await getOrderActivity({
        email,
        orderId,
      }).unwrap();

      navigate(ROUTES.TRACK_ORDER_DETAIL.ABSOLUTE_PATH, {
        state: { data },
      });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="flex flex-col max-w-[800px]">
      <h1 className="text-2xl font-bold mb-4">Track Order</h1>
      <p className="text-gray-600 text-base">
        To track your order please enter your order ID in the input field below
        and press the “Track Order” button. this was given to you on your
        receipt and in the confirmation email you should have received.
      </p>
      <form className="mt-6" action="">
        <div className="flex gap-6">
          <Controller
            control={control}
            name="orderId"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                labelClassName="text-gray-900 flex-1 text-sm"
                className="base-input"
                label="Order ID"
                placeholder="ID..."
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                labelClassName="text-gray-900 flex-1 text-sm"
                className="flex-1 base-input"
                label="Billing Email"
                placeholder="Email address"
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <PiWarningCircleThin />
          <span>Order ID that we sended to your in your email address.</span>
        </div>
        <button
          className="mt-6 bg-primary-500 px-6 py-2 rounded text-white flex uppercase items-center gap-2"
          type="button"
          onClick={handleSubmit(handleTrackOrder)}
        >
          <span className="text-sm font-semibold">TRACK ORDER</span>
          <BsArrowRight />
        </button>
      </form>
    </div>
  );
}
