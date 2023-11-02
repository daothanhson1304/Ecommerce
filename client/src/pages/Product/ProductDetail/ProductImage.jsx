import classNames from 'classnames';

export default function ProductImage({ className }) {
  return (
    <div className={classNames('', className)}>
      <img
        src="https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-blue-titanium-pure-back-iphone-15-pro-blue-titanium-pure-front-2up-screen-usen.png"
        alt="product"
      />
    </div>
  );
}
