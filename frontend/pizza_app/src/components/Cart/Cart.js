import s from './Cart.module.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {CartItem} from './CartItem/CartItem';
import {setCategory, setSelected, setClose, setSortedName} from '../../redux/slices/categorySlice';

const Cart = () => {
    const cartArray = useSelector(state => state.cart.cartArray);
    const dispatcher = useDispatch();
    let html = '';
    cartArray.length === 0 ?
    html =
            <section className={s.emptyCart}>
                <span className={s.title}>Корзина пустая 😕</span>
                <span className={s.inner}>Вероятней всего, вы не заказывали ещё пиццу.</span>
                <span className={s.secondary}>Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
                <img src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png" alt="" className={s.emptyCartImage} />
            </section>
    :
    html = <div className={s.pizzaList}>{cartArray.map((pizza, index) => <CartItem key={index} pizza={pizza} id={index} />)}</div>;
    return (
        <main>
            <header>
                <section className={s.logoSection}>
                    <img src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
                         alt="pizza" className={s.logoImage} />
                    <div className={s.infoBlock}>
                        <span className={s.mainPart}>REACT PIZZA</span>
                        <span className={s.secondPart}>the best pizza on the earth</span>
                    </div>
                </section>
            </header>
            {html}
            <Link to="/" className={s.backLink}
                  onClick={() => {
                      dispatcher(setCategory("Все"));
                      dispatcher(setSelected(1));
                      dispatcher(setClose(true));
                      dispatcher(setSortedName("sorted by"));
                  }}>Back to main page</Link>
        </main>
    );
};

export {Cart};