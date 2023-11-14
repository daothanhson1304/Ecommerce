export default function Info({ orderId, createdAt, totalPrice }) {
  return (
    <div className="p-6 bg-warning-200 flex items-center justify-between">
      <div>
        <h3 className="text-xl">{`#${orderId}`}</h3>
        <p className="text-sm text-gray-700">
          <span>{`Order Placed in ${createdAt}`}</span>
        </p>
      </div>
      <span className="text-2xl font-semibold text-secondary-500">{`$${totalPrice}`}</span>
    </div>
  );
}
