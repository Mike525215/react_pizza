import s from './Items.module.css';
import {context} from '../../App';
import {useSelector} from 'react-redux';

const Items = () => {
    const category = useSelector(state => state.category.value);
    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{category} пиццы</span>
            <div className={s.content}>
                            <div className={s.pizza}>
                    <img src="https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"
                         alt="pizza" className={s.pizzaImage} />
                    <span className={s.pizzaTitle}>Маргарита</span>
                    <div className={s.pizzaWeight}>
                        <span className={s.weightStyle + ' ' + s.selected}>тонкое</span>
                        <span className={s.weightStyle}>традиционное</span>
                    </div>
                    <div className={s.pizzaLong}>
                        <span className={s.long}>26 см</span>
                        <span className={s.long}>30 см</span>
                        <span className={s.long + ' ' + s.selected}>40 см</span>
                    </div>
                    <div className={s.pizzaPrice}>
                        <span className={s.part}>От 10$</span>
                        <span className={s.part}>Добавить</span>
                    </div>
                </div>
                <div className={s.pizza}>
                    <img src="https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"
                         alt="pizza" className={s.pizzaImage} />
                    <span className={s.pizzaTitle}>Маргарита</span>
                    <div className={s.pizzaWeight}>
                        <span className={s.weightStyle + ' ' + s.selected}>тонкое</span>
                        <span className={s.weightStyle}>традиционное</span>
                    </div>
                    <div className={s.pizzaLong}>
                        <span className={s.long  + ' ' + s.selected}>26 см</span>
                        <span className={s.long}>30 см</span>
                        <span className={s.long}>40 см</span>
                    </div>
                    <div className={s.pizzaPrice}>
                        <span className={s.part}>От 10$</span>
                        <span className={s.part}>Добавить</span>
                    </div>
                </div>
                                <div className={s.pizza}>
                    <img src="https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"
                         alt="pizza" className={s.pizzaImage} />
                    <span className={s.pizzaTitle}>Маргарита</span>
                    <div className={s.pizzaWeight}>
                        <span className={s.weightStyle + ' ' + s.selected}>тонкое</span>
                        <span className={s.weightStyle}>традиционное</span>
                    </div>
                    <div className={s.pizzaLong}>
                        <span className={s.long}>26 см</span>
                        <span className={s.long + ' ' + s.selected}>30 см</span>
                        <span className={s.long}>40 см</span>
                    </div>
                    <div className={s.pizzaPrice}>
                        <span className={s.part}>От 10$</span>
                        <span className={s.part}>Добавить</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Items};