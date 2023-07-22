import s from './Items.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {Pizza} from './Pizza/Pizza';
import {setArray, setFilteredArray} from '../../redux/slices/pizzaSlice';
import {useEffect} from 'react';
import axios from 'axios';
const Items = () => {
    const category = useSelector(state => state.category.value);
    const filteredArray = useSelector(state => state.pizza.filteredArray);
    const dispatcher = useDispatch();
    const pizzaList = async () => {
        const request = await axios.get('http://127.0.0.1:8000/api/v1/pizza/');
        const response = request.data;
        dispatcher(setArray(response));
        dispatcher(setFilteredArray(response));
    };

    useEffect(() => {
        pizzaList();
    }, []);

    return (
        <div className={s.pizzaList}>
            <span className={s.title}>{category} пиццы</span>
            <div className={s.content}>
                {filteredArray.map(pizza => <Pizza pizza={pizza} key={pizza.id} />)}
            </div>
        </div>
    );
};

export {Items};