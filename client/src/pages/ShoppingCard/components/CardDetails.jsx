import classNames from 'classnames';
import { BsArrowLeft } from 'react-icons/bs';
import { CiCircleRemove } from 'react-icons/ci';

export default function CardDetails({ className }) {
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
          <tr>
            <td colSpan={3} className="p-6">
              <div className="flex items-center gap-x-3">
                <button type="button">
                  <CiCircleRemove className="text-2xl hover:text-danger" />
                </button>
                <img
                  className="w-[90px]"
                  src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                  alt=""
                />
                <span className="text-sm">
                  4K UHD LED Smart TV with Chromecast Built-in
                </span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
            <td colSpan={1} className="p-6">
              <div className=" border-2 py-2 w-fit rounded">
                <span className="px-6 text-lg cursor-pointer ">-</span>
                <span className="px-6 text-lg cursor-pointer ">01</span>
                <span className="px-6 text-lg cursor-pointer ">+</span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-6">
              <div className="flex items-center gap-x-3">
                <button type="button">
                  <CiCircleRemove className="text-2xl hover:text-danger" />
                </button>
                <img
                  className="w-[90px]"
                  src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                  alt=""
                />
                <span className="text-sm">
                  4K UHD LED Smart TV with Chromecast Built-in
                </span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
            <td colSpan={1} className="p-6">
              <div className=" border-2 py-2 w-fit rounded">
                <span className="px-6 text-lg cursor-pointer ">-</span>
                <span className="px-6 text-lg cursor-pointer ">01</span>
                <span className="px-6 text-lg cursor-pointer ">+</span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-6">
              <div className="flex items-center gap-x-3">
                <button type="button">
                  <CiCircleRemove className="text-2xl hover:text-danger" />
                </button>
                <img
                  className="w-[90px]"
                  src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                  alt=""
                />
                <span className="text-sm">
                  4K UHD LED Smart TV with Chromecast Built-in
                </span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
            <td colSpan={1} className="p-6">
              <div className=" border-2 py-2 w-fit rounded">
                <span className="px-6 text-lg cursor-pointer ">-</span>
                <span className="px-6 text-lg cursor-pointer ">01</span>
                <span className="px-6 text-lg cursor-pointer ">+</span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-6">
              <div className="flex items-center gap-x-3">
                <button type="button">
                  <CiCircleRemove className="text-2xl hover:text-danger" />
                </button>
                <img
                  className="w-[90px]"
                  src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                  alt=""
                />
                <span className="text-sm">
                  4K UHD LED Smart TV with Chromecast Built-in
                </span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
            <td colSpan={1} className="p-6">
              <div className=" border-2 py-2 w-fit rounded">
                <span className="px-6 text-lg cursor-pointer ">-</span>
                <span className="px-6 text-lg cursor-pointer ">01</span>
                <span className="px-6 text-lg cursor-pointer ">+</span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-6">
              <div className="flex items-center gap-x-3">
                <button type="button">
                  <CiCircleRemove className="text-2xl hover:text-danger" />
                </button>
                <img
                  className="w-[90px]"
                  src="https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2023/09/13/iphone-15-pro-max-blue-titanium-pure-back-iphone-15-pro-max-blue-titanium-pure-front-2up-screen-usen.png"
                  alt=""
                />
                <span className="text-sm">
                  4K UHD LED Smart TV with Chromecast Built-in
                </span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
            <td colSpan={1} className="p-6">
              <div className=" border-2 py-2 w-fit rounded">
                <span className="px-6 text-lg cursor-pointer ">-</span>
                <span className="px-6 text-lg cursor-pointer ">01</span>
                <span className="px-6 text-lg cursor-pointer ">+</span>
              </div>
            </td>
            <td colSpan={1} className="p-6">
              $70
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between p-6 border-t-1">
        <button
          type="button"
          className="flex items-center gap-2 border-secondary-500 border-2 px-6 py-2 text-secondary-500"
        >
          <BsArrowLeft className="text-3xl font-bold" />
          <span className="font-bold text-sm uppercase">Return to shop</span>
        </button>
        <button
          className=" border-secondary-500 border-2 px-6 py-2 text-secondary-500"
          type="button"
        >
          <span className="font-bold text-sm uppercase">Update Cart</span>
        </button>
      </div>
    </div>
  );
}
