import s from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <div className={s.pizzaCard}>
            <img src={props.pizza.image} alt="pizza" className={s.cardImage} />
            <div className={s.infoBlock}>
                <span className={s.title}>{props.pizza.title}</span>
                <span className={s.price}>Цена: {props.pizza.price} $</span>
                <span className={s.weight}>Тесто: {props.pizza.weight}</span>
                <span className={s.long}>Длинна: {props.pizza.long} см</span>
                <button className={s.deleteBtn}>Удалить</button>
            </div>
        </div>
    );
};

export {CartItem};