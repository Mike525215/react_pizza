import s from './Cart.module.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {CartItem} from './CartItem/CartItem';
import {setCategory, setSelected, setClose, setSortedName} from '../../redux/slices/categorySlice';
import {clearCart} from '../../redux/slices/cartSlice';
const Cart = () => {
    const { cartArray, totalSum, count } = useSelector(state => state.cart);
    const dispatcher = useDispatch();

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
            {
                cartArray.length === 0 ?
                <section className={s.emptyCart}>
                    <span className={s.title}>Корзина пустая 😕</span>
                    <span className={s.inner}>Вероятней всего, вы не заказывали ещё пиццу.</span>
                    <span className={s.secondary}>Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
                    <img src="../emptyCart.png" alt="" className={s.emptyCartImage} />
                </section> :
                <div className={s.pizzaList}>
                    <div className={s.cartText}>
                        <div className={s.partOne}>
                            <img src="../cart.png" alt="cart" className={s.cartImage}/>
                            <span className={s.cartTextInner}>Cart</span>
                        </div>
                        <div className={s.partTwo} onClick={() => dispatcher(clearCart())}>
                            <img src="../delete.png" alt="cart" width="25" height="25" />
                            <span className={s.clearCartText}>Clear cart</span>
                        </div>
                    </div>
                    {cartArray.map((pizza, index) => <CartItem key={index} pizza={pizza} id={index} />)}
                    <div className={s.totalBlock}>
                        <span className={s.totalCount}>Total count: <b>{count}</b></span>
                        <span className={s.totalAmount}>Total amount: <b>{totalSum} $</b></span>
                    </div>
                </div>
            }
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