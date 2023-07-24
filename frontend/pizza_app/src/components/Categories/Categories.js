import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSelected, setClose, setSortedName} from '../../redux/slices/categorySlice';
import {setFilteredArray} from '../../redux/slices/pizzaSlice';
import order from 'lodash.orderby';

const Categories = () => {
    const selected = useSelector(state => state.category.selected);
    const sorted = useSelector(state => state.category.sortName);
    const closed = useSelector(state => state.category.closed);
    const pizzaArray = useSelector(state => state.pizza.pizzaArray);
    const sortArray = ["price(ASC)", "price(DESC)", "name(ASC)", "name(DESC)"];
    const categories = [{name: 'Все', id: 1}, {name: 'Мясные', id: 2}, {name: 'Вегетерианские', id: 3},
                        {name: 'Гриль', id: 4}, {name: 'Острые', id: 5}, {name: 'Закрытые', id: 6}];

    const dispatcher = useDispatch();
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
                                dispatcher(setSortedName(name));
                                dispatcher(setClose());
                                index === 0 ?
                                dispatcher(setFilteredArray(order(pizzaArray, ['price'], ['asc'])))
                                : index === 1 ?
                                dispatcher(setFilteredArray(order(pizzaArray, ['price'], ['desc'])))
                                : index === 2 ?
                                dispatcher(setFilteredArray(order(pizzaArray, ['name'], ['asc'])))
                                : dispatcher(setFilteredArray(order(pizzaArray, ['name'], ['desc'])))
                                }}>{name}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    );

};

export {Categories};