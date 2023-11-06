import classNames from 'classnames';
import Slider from 'react-slick';

export default function ProductImage({ className, images }) {
  const settings = {
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging: (i) => {
      return (
        <div className="slick-image">
          <img src={images[i].image} alt="product" />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classNames('', className)}>
      <Slider {...settings}>
        {images.map((item) => {
          return <img key={item.image} src={item.image} alt="product" />;
        })}
      </Slider>
    </div>
  );
}
