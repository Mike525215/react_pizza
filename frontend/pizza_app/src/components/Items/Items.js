import s from './Items.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Pizza} from './Pizza/Pizza';
import {setArray, setFilteredArray, setError} from '../../redux/slices/pizzaSlice';
import {useEffect} from 'react';
import axios from 'axios';

const Items = () => {
    const category = useSelector(state => state.category.value);
    const filteredArray = useSelector(state => state.pizza.filteredArray);
    const error = useSelector(state => state.pizza.error)
    const dispatcher = useDispatch();
    let html = '';
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

    error ? html = <div className={s.errorMessage}>
                   <span className={s.titleMessage}>Произошла ошибка 😕</span>
                   <span className={s.innerMessage}>К сожалению, не удалось получить пиццы.</span>
                   <span className={s.secondaryMessage}>Попробуйте повторить попытку позже.</span>
               </div> :
            html = <div className={s.content}>
                        {filteredArray.map(pizza => <Pizza pizza={pizza} key={pizza.id} />)}
                    </div>;

    useEffect(() => {
        pizzaList();
    }, []);

    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{category} пиццы</span>
            {html}
        </div>
    );
};

export {Items};