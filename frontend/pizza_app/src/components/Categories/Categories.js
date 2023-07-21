import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {setCategory, setSelected, setClose, setSortedName, setCategories} from '../../redux/slices/categorySlice';
import {setFilteredArray} from '../../redux/slices/pizzaSlice';
import axios from 'axios';

const Categories = () => {
    const categories = useSelector(state => state.category.categories);
    const selected = useSelector(state => state.category.selected);
    const sorted = useSelector(state => state.category.sortName);
    const closed = useSelector(state => state.category.closed);
    const pizzaArray = useSelector(state => state.pizza.pizzaArray);

    const sortArray = ["PRICE(ASC)", "PRICE(DESC)", "NAME(ASC)", "NAME(DESC)"];

    const dispatcher = useDispatch();

    const catArray = async () => {
        const request = await axios.get('http://127.0.0.1:8000/api/v1/category/');
        const response = request.data;
        dispatcher(setCategories(response));
    };

    useEffect(() => {
        catArray();
    }, []);

    return (

        <div className={s.wrapper}>

            <div className={s.categories}>
                <ul className={s.categoryBlock}>
                    {categories.map(cat => <li key={cat.id} className={selected === cat.id ? s.category + ' ' + s.selected : s.category}
                                               onClick={() => {
                                                   dispatcher(setCategory(cat.name));
                                                   dispatcher(setSelected(cat.id));
                                                   cat.name === 'Все'?
                                                   dispatcher(setFilteredArray(pizzaArray))
                                                   :
                                                   dispatcher(setFilteredArray(pizzaArray.filter(pizza => pizza.category === cat.id)))
                                               }}>{cat.name}</li>)}
                </ul>
            </div>

            <div className={s.sortBlock}>
                <img src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png" alt="icon"
                     className={closed === true ? s.icon : s.icon + ' ' + s.rot} />
                <span className={s.sortBy}
                      onClick={() => dispatcher(setClose())}>{sorted}</span>
                <ul className={closed === true ? s.dropMenu + ' ' + s.close : s.dropMenu}>
                    {
                        sortArray.map((name, index) => {
                            return <li key={index} className={s.sortField} onClick={() => {
                                dispatcher(setSortedName(name))
                                dispatcher(setClose())
                                }}>{name}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    );

};

export {Categories};