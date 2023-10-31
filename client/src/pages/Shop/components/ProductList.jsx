export default function ProductList({ className, products }) {
  if (!products) return null;
  return (
    <div className={className}>
      {products.map((product) => {
        return <div key={product.title}>{product.title}</div>;
      })}
    </div>
  );
}
