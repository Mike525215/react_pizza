import s from './Items.module.css';
import {useSelector} from 'react-redux';
import {Pizza} from './Pizza/Pizza';

const Items = () => {
    const category = useSelector(state => state.category.value);
    const pizzas = [{id: 1, name: "Маргарита", image: "https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"},
                    {id: 2, name: "Маргарита", image: "https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"},
                    {id: 3, name: "Маргарита", image: "https://staticy.dominospizza.ru/api/medium/ProductOsg/Web/CHIPES/NULL/NULL/RU"}];
    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{category} пиццы</span>
            <div className={s.content}>
                {pizzas.map(pizza => <Pizza name={pizza.name} image={pizza.image} key={pizza.id} />)}
            </div>
        </div>
    );
};

export {Items};