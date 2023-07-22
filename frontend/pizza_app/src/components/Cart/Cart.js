import s from './Cart.module.css';
import {Link} from 'react-router-dom';
const Cart = () => {
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
            <section className={s.emptyCart}>
                <span className={s.title}>Корзина пустая 😕</span>
                <span className={s.inner}>Вероятней всего, вы не заказывали ещё пиццу.</span>
                <span className={s.secondary}>Для того, чтобы заказать пиццу, перейди на главную страницу.</span>
                <img src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png" alt="" className={s.emptyCartImage} />
                <Link to="/" className={s.backLink}>Back to main page</Link>
            </section>
        </main>
    );
};

export {Cart};