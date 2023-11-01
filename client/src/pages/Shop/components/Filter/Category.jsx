export default function Category({ className }) {
  const categories = [
    { id: 1, name: 'Electronics Devices' },
    { id: 2, name: 'Computer & Laptop' },
    { id: 3, name: 'Computer Accessories' },
    { id: 4, name: 'SmartPhone' },
    { id: 5, name: 'Headphone' },
    { id: 6, name: 'Mobile Accessories' },
    { id: 7, name: 'Gaming Console' },
    { id: 8, name: 'Camera & Photo' },
    { id: 9, name: 'TV & Homes Appliances' },
    { id: 10, name: 'Watchs & Accessories' },
    { id: 11, name: 'GPS & Navigation' },
    { id: 12, name: 'Warable Technology' },
  ];
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
          />
          All
        </label>
        {categories.map((category) => {
          const { id } = category;
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
              />
              {category.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}
