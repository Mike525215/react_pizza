import s from './Items.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Pizza} from './Pizza/Pizza';
import {fetchPizza, pizza} from '../../redux/slices/pizzaSlice';
import {category} from '../../redux/slices/categorySlice';
import {useEffect} from 'react';

const Items = () => {
    const { value } = useSelector(category);
    const {filteredArray, error} = useSelector(pizza);
    const dispatcher = useDispatch();

    const pizzaList = () => {
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
                    {filteredArray.map((pizza, index) => <Pizza pizza={pizza} key={index} />)}
                </div>
            }
        </div>
    );
};

export {Items};