import ExpectedArrival from './ExpectedArrival';
import Info from './Info';
import ProgressBar from './ProgressBar';

export default function Progress({ data }) {
  const { activity, orderId, createdAt, totalPrice } = data;
  return (
    <div className="p-6 border-b-1 flex flex-col gap-6">
      <Info orderId={orderId} createdAt={createdAt} totalPrice={totalPrice} />
      <ExpectedArrival />
      <ProgressBar activity={activity} />
    </div>
  );
}
