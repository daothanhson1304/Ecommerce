export default function PriceRange({ className }) {
  const ranges = [
    { id: 1, name: 'All Price' },
    { id: 2, name: 'Under $20' },
    { id: 3, name: '$25 to $100' },
    { id: 4, name: '$100 to $300' },
    { id: 5, name: '$300 to $500' },
    { id: 6, name: '$500 to $1,000' },
    { id: 7, name: '$1,000 to $10,000' },
  ];
  return (
    <div className={className}>
      <h2 className="mb-4 text-base font-medium">PRICE RANGE</h2>
      <div className="flex flex-col gap-y-3">
        {ranges.map((range) => {
          const { id } = range;
          const priceRangeId = `price-range-${id}`;

          return (
            <label
              key={id}
              className="flex items-center gap-x-2 whitespace-nowrap cursor-pointer"
              htmlFor={priceRangeId}
            >
              <input
                type="radio"
                name="filter-price-range"
                id={priceRangeId}
                value={id}
              />
              {range.name}
            </label>
          );
        })}
      </div>
    </div>
  );
}
