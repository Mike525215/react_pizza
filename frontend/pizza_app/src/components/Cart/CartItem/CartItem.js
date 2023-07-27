import s from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {deletePizza, setTotalAmountReduce, setTotalCountReduce} from '../../../redux/slices/cartSlice';

const CartItem = (props) => {
    const dispatcher = useDispatch();

    return (
        <div className={s.pizzaCard}>
            <img src={props.pizza.image} alt="pizza" className={s.cardImage} />
            <div className={s.setCountBlock}>
                    <button className={s.increase}>+</button>
                    <span className={s.pizzaAmount}>{props.pizza.count}</span>
                    <button className={s.decrease}>-</button>
            </div>
            <div className={s.infoBlock}>
                <span className={s.title}>{props.pizza.title}</span>
                <span className={s.price}>Цена: {props.pizza.price} $</span>
                <span className={s.weight}>Тесто: {props.pizza.weight}</span>
                <span className={s.long}>Длинна: {props.pizza.long} см</span>
                <button className={s.deleteBtn} onClick={() => {
                    dispatcher(deletePizza(props.id));
                    dispatcher(setTotalAmountReduce(props.pizza.price * props.pizza.count));
                    dispatcher(setTotalCountReduce(props.pizza.count));
                }}>Удалить</button>
            </div>
        </div>
    );
};

export {CartItem};