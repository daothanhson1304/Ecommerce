import classNames from 'classnames';
import Category from './Category';
import PriceRange from './PriceRange';

export default function Filter({ className }) {
  return (
    <div className={classNames('flex flex-col gap-y-6', className)}>
      <Category />
      {/* <PriceRange /> */}
    </div>
  );
}
