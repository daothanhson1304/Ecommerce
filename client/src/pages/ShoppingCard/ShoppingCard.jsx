import CardDetails from './components/CardDetails';
import CardTotals from './components/CardTotals';

export default function ShoppingCard() {
  return (
    <div className="grid grid-cols-3 gap-x-6">
      <CardDetails className="col-span-2 h-fit" />
      <CardTotals className="col-span-1 h-fit" />
    </div>
  );
}
