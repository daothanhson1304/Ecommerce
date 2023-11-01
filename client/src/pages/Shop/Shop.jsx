import { useGetProductsQuery } from '@store/product/productSlice';
import { Filter, ProductList } from './components';

export default function Shop() {
  // const { data } = useGetProductsQuery({
  //   pageSize: 30,
  //   pageIndex: 1,
  // });
  // if (!data) return null;
  const data = [
    { id: 1, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 2, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 3, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 4, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 5, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 6, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 7, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 8, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 9, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 10, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 11, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 12, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 13, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 14, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 15, title: 'iPhone 15', rating: 4, price: 889 },
    { id: 16, title: 'iPhone 15', rating: 4, price: 889 },
  ];
  return (
    <div className="grid grid-cols-10 gap-4">
      <Filter className="col-span-2" />
      <ProductList className="col-span-8" products={data} />
    </div>
  );
}
