import { useGetProductQuery } from '@store/product/productSlice';
import { Filter, ProductList } from './components';

export default function Shop() {
  const { data } = useGetProductQuery({
    pageSize: 10,
    pageIndex: 1,
  });
  console.log({ data });
  if (!data) return null;
  return (
    <div className="grid grid-cols-10">
      <Filter className="col-span-2" />
      <ProductList className="col-span-8" products={data.products} />
    </div>
  );
}
