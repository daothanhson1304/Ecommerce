import { useContext } from 'react';
import AppContext from '@context/index';
import { useGetProductsQuery } from '@store/product/productSlice';
import { Filter, ProductList } from './components';

export default function Shop() {
  const { category, search } = useContext(AppContext);
  const { data } = useGetProductsQuery({
    pageSize: 30,
    pageIndex: 1,
    category,
    name: search,
  });
  if (!data) return null;
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <div className="grid grid-cols-10 gap-4">
      <Filter className="col-span-2" />
      <ProductList className="col-span-8" products={data.products} />
    </div>
  );
}
