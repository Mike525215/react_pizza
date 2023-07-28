import s from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {deletePizza, setTotalAmountReduce, setTotalCountReduce} from '../../../redux/slices/cartSlice';

const CartItem = (props) => {
    const dispatcher = useDispatch();

    return (
        <div className={s.pizzaCard}>
            <img src={props.pizza.image} alt="pizza" className={s.cardImage} />
            <div className={s.infoBlock}>
                <span className={s.title}>{props.pizza.title}</span>
                <span className={s.weight}>{props.pizza.weight}, {props.pizza.long} см</span>
            </div>
            <div className={s.setCountBlock}>
                    <span className={s.decrease}>-</span>
                    <span className={s.pizzaCount}>{props.pizza.count}</span>
                    <span className={s.increase}>+</span>
            </div>
            <div className={s.priceBlock}>
                    <span className={s.price}>{props.pizza.price * props.pizza.count} $</span>
            </div>
            <span className={s.deleteBtn} onClick={() => {
                    dispatcher(deletePizza(props.id));
                    dispatcher(setTotalAmountReduce(props.pizza.price * props.pizza.count));
                    dispatcher(setTotalCountReduce(props.pizza.count));
                }}><img src="../delete.png" alt="delete" /></span>
        </div>
    );
};

export {CartItem};