import s from './CartItem.module.css';
import {FC} from 'react';
import {useDispatch} from 'react-redux';
import {deletePizza, setTotalAmountReduce, setTotalCountReduce, addPizza, reducePizzaCount, setTotalCount, setTotalAmount} from '../../../redux/slices/cartSlice';
import { CartItemType } from '../Cart';

type PropsType = {
    pizza: CartItemType;
    id: number;
}

const CartItem: FC<PropsType>  = ({pizza, id}) => {
    const dispatcher = useDispatch();
    return (
            <div className={s.pizzaCard}>
                <img src={pizza.image} alt="pizza" className={s.cardImage} />
                <div className={s.infoBlock}>
                    <span className={s.title}>{pizza.title}</span>
                    <span className={s.weight}>{pizza.weight}, {pizza.long} см</span>
                </div>
                <div className={s.setCountBlock}>
                        <span className={s.decrease} onClick={() => {
                            if (pizza.count > 1) {
                                dispatcher(reducePizzaCount(pizza));
                                dispatcher(setTotalAmountReduce(pizza.price));
                                dispatcher(setTotalCountReduce(1));
                            }
                        }}>-</span>
                        <span className={s.pizzaCount}>{pizza.count}</span>
                        <span className={s.increase} onClick={() => {
                            dispatcher(addPizza(pizza));
                            dispatcher(setTotalCount());
                            dispatcher(setTotalAmount(pizza.price));
                        }}>+</span>
                </div>
                <div className={s.priceBlock}>
                        <span className={s.price}>{pizza.price * pizza.count} $</span>
                </div>
                <span className={s.deleteBtn}><img onClick={() => {
                        dispatcher(deletePizza(id));
                        dispatcher(setTotalAmountReduce(pizza.price * pizza.count));
                        dispatcher(setTotalCountReduce(pizza.count))}} src="../delete.png" alt="delete" /></span>
            </div>
    );
};

export {CartItem};