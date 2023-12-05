import { ROUTES } from '@common/routing';
import { BsArrowRight } from 'react-icons/bs';
import { PiStackLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  const handleGoToDashboard = () => {
    navigate(ROUTES.HOME.ABSOLUTE_PATH);
  };
  const handleGoToViewOrder = () => {
    navigate(ROUTES.TRACK_ORDER.ABSOLUTE_PATH);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-6 py-32">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="88"
        viewBox="0 0 88 88"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z"
          fill="#2DB324"
        />
        <path
          d="M59.125 35.75L38.9469 55L28.875 45.375"
          stroke="#2DB324"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z"
          stroke="#2DB324"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl font-semibold">
          Your order is successfully place
        </h1>
        <p className="max-w-[500px] text-center">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum
          risus. Donec volutpat mollis nulla non facilisis.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          className="text-primary-500 px-6 py-2 rounded border-primary-200 border-2 flex items-center gap-2 uppercase"
          type="button"
          onClick={handleGoToDashboard}
        >
          <PiStackLight />
          <span className="text-sm font-semibold">Go to Dashboard</span>
        </button>
        <button
          className="bg-primary-500 px-6 py-2 rounded text-white flex uppercase items-center gap-2"
          type="button"
          onClick={handleGoToViewOrder}
        >
          <span className="text-sm font-semibold">View Order</span>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
