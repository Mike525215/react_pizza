import s from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {deletePizza, setTotalSumDecr, setCountDecr} from '../../../redux/slices/cartSlice';

const CartItem = (props) => {
    const dispatcher = useDispatch();
    const [totalCount, setCount] = useState(0);

    return (
        <div className={s.pizzaCard}>
            <img src={props.pizza.image} alt="pizza" className={s.cardImage} />
            <div className={s.setCountBlock}>
                    <button className={s.increase} onClick={() => setCount(totalCount + 1)}>+</button>
                    <span className={s.pizzaAmount}>{totalCount}</span>
                    <button className={s.decrease}  onClick={() => setCount(totalCount - 1)}>-</button>
            </div>
            <div className={s.infoBlock}>
                <span className={s.title}>{props.pizza.title}</span>
                <span className={s.price}>Цена: {props.pizza.price} $</span>
                <span className={s.weight}>Тесто: {props.pizza.weight}</span>
                <span className={s.long}>Длинна: {props.pizza.long} см</span>
                <button className={s.deleteBtn} onClick={() => {
                    dispatcher(deletePizza(props.id));
                    dispatcher(setTotalSumDecr(props.pizza.price));
                    dispatcher(setCountDecr(1));
                }}>Удалить</button>
            </div>
        </div>
    );
};

export {CartItem};