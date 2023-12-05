import { useDispatch, useSelector } from 'react-redux';
import cardSelector from '@store/card/cardSelector';
import {
  addToCard as addToCardActions,
  increaseProduct as increaseProductAction,
  decreaseProduct as decreaseProductAction,
  removeProduct as removeProductAction,
} from '@store/card/cardSlice';

const useCard = () => {
  const dispatch = useDispatch();
  const card = useSelector(cardSelector);
  const cardTotal = card.reduce((total, product) => {
    const { price, quantity } = product;
    return total + price * quantity;
  }, 0);
  const addToCard = (params) => dispatch(addToCardActions(params));
  const increaseProduct = (params) => dispatch(increaseProductAction(params));
  const decreaseProduct = (params) => dispatch(decreaseProductAction(params));
  const removeProduct = (params) => dispatch(removeProductAction(params));

  return [
    { card, cardTotal },
    { addToCard, increaseProduct, decreaseProduct, removeProduct },
  ];
};

export default useCard;
