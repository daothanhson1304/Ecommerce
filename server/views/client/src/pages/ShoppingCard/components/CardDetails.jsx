import { BsArrowLeft } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { ROUTES } from '@common/routing';
import useCard from '@hooks/useCard';

export default function CardDetails({ className, card }) {
  const navigate = useNavigate();
  const [, { increaseProduct, decreaseProduct, removeProduct }] = useCard();
  const handleReturnToShop = () => {
    navigate(ROUTES.HOME.ABSOLUTE_PATH);
  };
  const handleDecrease = (id) => {
    decreaseProduct(id);
  };
  const handleIncrease = (id) => {
    increaseProduct(id);
  };
  const handleRemove = (id) => {
    removeProduct(id);
  };
  return (
    <div className={classNames('border-1 rounded', className)}>
      <h2 className="text-lg font-medium px-6 py-5">Shopping Card</h2>
      <table className="w-full">
        <thead className="border-t-1 border-b-1 bg-gray-50">
          <tr className="text-xs font-medium uppercase text-gray-700">
            <th colSpan={3} className="text-start px-6 py-2">
              Products
            </th>
            <th colSpan={1} className="text-start px-6 py-2">
              Price
            </th>
            <th colSpan={1} className="text-start px-6 py-2">
              Quantity
            </th>
            <th colSpan={1} className="text-start px-6 py-2">
              Sub-total
            </th>
          </tr>
        </thead>
        <tbody>
          {card.map((product) => {
            const { id, title, image, quantity, price } = product;
            return (
              <tr key={id}>
                <td colSpan={3} className="p-6">
                  <div className="flex items-center gap-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        handleRemove(id);
                      }}
                    >
                      <CiCircleRemove className="text-2xl hover:text-danger" />
                    </button>
                    <img className="w-[90px]" src={image} alt="" />
                    <span className="text-sm">{title}</span>
                  </div>
                </td>
                <td colSpan={1} className="p-6">
                  {`$${price}`}
                </td>
                <td colSpan={1} className="p-6">
                  <div className=" border-2 py-2 w-fit rounded">
                    <span
                      onClick={() => {
                        handleDecrease(id);
                      }}
                      className="px-6 text-lg cursor-pointer "
                    >
                      -
                    </span>

                    <span className="px-6 text-lg cursor-pointer ">
                      {quantity}
                    </span>
                    <span
                      onClick={() => {
                        handleIncrease(id);
                      }}
                      className="px-6 text-lg cursor-pointer "
                    >
                      +
                    </span>
                  </div>
                </td>
                <td colSpan={1} className="p-6">
                  {`$${price * quantity}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between p-6 border-t-1">
        <button
          type="button"
          className="flex items-center gap-2 border-secondary-500 border-2 px-6 py-2 text-secondary-500"
          onClick={handleReturnToShop}
        >
          <BsArrowLeft className="text-3xl font-bold" />
          <span className="font-bold text-sm uppercase">Return to shop</span>
        </button>
      </div>
    </div>
  );
}
