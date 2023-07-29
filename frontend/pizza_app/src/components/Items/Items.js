import s from './Items.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Pizza} from './Pizza/Pizza';
import {setArray, setFilteredArray, setError} from '../../redux/slices/pizzaSlice';
import {useEffect} from 'react';
import axios from 'axios';

const Items = () => {
    const category = useSelector(state => state.category.value);
    const {filteredArray, error} = useSelector(state => state.pizza);
    const dispatcher = useDispatch();
    const pizzaList = async () => {
        try {
            const request = await axios.get('http://127.0.0.1:8000/api/v1/pizza/');
            const response = request.data;
            dispatcher(setArray(response));
            dispatcher(setFilteredArray(response));
        } catch(err) {
            dispatcher(setError(true));
        }
    };

    useEffect(() => {
        pizzaList();
    }, []);

    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{category} пиццы</span>
            {
                error ?
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