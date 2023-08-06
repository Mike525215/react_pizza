import s from './Items.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Pizza} from './Pizza/Pizza';
import {fetchPizza, pizza} from '../../redux/slices/pizzaSlice';
import {category} from '../../redux/slices/categorySlice';
import {useEffect, FC} from 'react';

export type PizzaType = {
    id: number;
    image: string;
    title: string;
    ingredients: string;
    price: number;
    category: number;
}; 

const Items: FC = () => {
    const { value } = useSelector(category);
    const {filteredArray, error} = useSelector(pizza);
    const dispatcher = useDispatch();

    const pizzaList = () => {
        //@ts-ignore
        dispatcher(fetchPizza());
    };

    useEffect(() => {
        pizzaList();
    }, []);

    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{value} пиццы</span>
            {
                error || !filteredArray.length ?
                <div className={s.errorMessage}>
                    <span className={s.titleMessage}>Произошла ошибка 😕</span>
                    <span className={s.innerMessage}>К сожалению, не удалось получить пиццы.</span>
                    <span className={s.secondaryMessage}>Попробуйте повторить попытку позже.</span>
                </div> :
                <div className={s.content}>
                    {filteredArray.map((pizza: PizzaType, index: number) => <Pizza pizza={pizza} key={index} />)}
                </div>
            }
        </div>
    );
};

export {Items};