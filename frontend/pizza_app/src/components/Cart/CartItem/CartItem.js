import s from './CartItem.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {deletePizza, setTotalSumDecr, setCountDecr} from '../../../redux/slices/cartSlice';

const CartItem = (props) => {
    const dispatcher = useDispatch();
    return (
        <div className={s.pizzaCard}>
            <img src={props.pizza.image} alt="pizza" className={s.cardImage} />
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