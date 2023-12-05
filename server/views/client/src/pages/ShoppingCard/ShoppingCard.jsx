import useCard from '@hooks/useCard';
import { useCheckoutMutation } from '@store/checkout/checkoutSlice';
import CardDetails from './components/CardDetails';
import CardTotals from './components/CardTotals';

export default function ShoppingCard() {
  const [{ card, cardTotal }] = useCard();

  const [checkout] = useCheckoutMutation();
  const handleCheckout = async () => {
    const { id, email } = JSON.parse(localStorage.getItem('user'));
    const { data } = await checkout({
      userId: id,
      card,
      cardTotal,
      userEmail: email,
    });
    const { url } = data;
    window.location.href = url;
  };

  return (
    <div className="grid grid-cols-3 gap-x-6">
      {card.length > 0 ? (
        <>
          <CardDetails card={card} className="col-span-2 h-fit" />
          <CardTotals
            total={cardTotal}
            onCheckout={handleCheckout}
            className="col-span-1 h-fit"
          />
        </>
      ) : (
        <p>Card empty</p>
      )}
    </div>
  );
}
