import AppContext from '@context/index';
import { useContext } from 'react';

const CATEGORIES = [
  { id: '79e08118-afb8-4bd6-bd5b-b6897f98efb3', name: 'Computer & Laptop' },
  {
    id: '62137de8-76ad-43b0-87f5-23acac33dc29',
    name: 'Computer Accessories',
  },
  { id: '649fcfb5-4345-4382-8854-f8120368ea2f', name: 'SmartPhone' },
  { id: '928a9643-964b-4445-a1a5-c5a616fd54d1', name: 'HeadPhone' },
  { id: '3c3e9aab-e24c-49c0-82cd-2a5356434657', name: 'Mobie Accessories' },
  { id: '43c7f20b-8e6a-4d68-99de-47114382cd6b', name: 'Game Console' },
  { id: '00c2a43a-a408-4449-8c42-3bfe23e78553', name: 'Camera & Photo' },
  {
    id: '4b1b9ec2-e638-4520-85ea-a9a72c65cc83',
    name: 'TV & Home Appliances',
  },
  { id: 'b536d846-a59f-4c57-a2ae-09a28f141154', name: 'Watch & Accessories' },
  { id: '530d2538-0e0e-44a9-899b-224517268f4b', name: 'GPS & Navigation' },
];
export default function Category({ className }) {
  const { category, handleSetCategory } = useContext(AppContext);
  const handleFilter = (e) => {
    const { value } = e.target;
    handleSetCategory(value);
  };
  return (
    <div className={className}>
      <h2 className="mb-4 text-base font-medium">CATEGORY</h2>
      <div className="flex flex-col gap-y-3">
        <label
          className="flex items-center gap-x-2 whitespace-nowrap cursor-pointer"
          htmlFor="all-category"
        >
          <input
            type="radio"
            name="filter-category"
            value="all"
            id="all-category"
            checked={category === 'all'}
            onClick={() => {
              handleSetCategory('all');
            }}
          />
          All
        </label>
        {CATEGORIES.map((c) => {
          const { id } = c;
          const categoryId = `category-${id}`;
          return (
            <label
              key={id}
              className="flex items-center gap-x-2 whitespace-nowrap cursor-pointer"
              htmlFor={categoryId}
            >
              <input
                type="radio"
                name="filter-category"
                id={categoryId}
                value={id}
                onClick={handleFilter}
                checked={category === id}
              />
              {c.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}
