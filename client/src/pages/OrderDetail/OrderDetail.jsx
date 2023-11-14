import { useLocation } from 'react-router-dom';
import Activity from './components/Activity';
import Progress from './components/Progress';

export default function OrderDetail() {
  const { state } = useLocation();
  const data = state?.data;
  if (!data) {
    return <div>Not found</div>;
  }
  return (
    <div className="border-1 rounded">
      <Progress data={data} />
      <Activity activity={data.activity} />
    </div>
  );
}
