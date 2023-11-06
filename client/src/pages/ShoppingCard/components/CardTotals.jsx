import classNames from 'classnames';
import { BsArrowRight } from 'react-icons/bs';

export default function CardTotals({ className }) {
  return (
    <div
      className={classNames(
        'flex flex-col gap-5 border-1 rounded p-6 pt-5',
        className
      )}
    >
      <h2 className="text-lg font-medium">Card Totals</h2>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Sub-total</span>
          <span className="font-medium">$320</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">$0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">$0</span>
        </div>
      </div>
      <div className="flex justify-between text-base">
        <span className="font-normal">Total</span>
        <span className="font-semibold">$320 USD</span>
      </div>
      <button
        className="w-full flex items-center gap-3 bg-primary-500 text-white rounded justify-center py-3"
        type="button"
      >
        <span className="text-base font-bold uppercase">
          Proceed to checkout
        </span>
        <BsArrowRight className="text-2xl  text-white" />
      </button>
    </div>
  );
}
