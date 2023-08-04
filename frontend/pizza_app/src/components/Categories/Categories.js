import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSelected, setClose, setSortedName, category} from '../../redux/slices/categorySlice';
import {setFilteredArray, pizza} from '../../redux/slices/pizzaSlice';
import order from 'lodash.orderby';

const Categories = () => {
    const {selected, closed, sortName} = useSelector(category);
    const {pizzaArray, filteredArray} = useSelector(pizza);
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
                                                   dispatcher(setSortedName("sorted by"));
                                                   cat.name === 'Все'?
                                                   dispatcher(setFilteredArray(pizzaArray))
                                                   :
                                                   dispatcher(setFilteredArray(pizzaArray.filter(pizza => pizza.category === cat.id)))
                                               }}>{cat.name}</li>)}
                </ul>
            </div>

            <div className={s.sortBlock} onClick={() => dispatcher(setClose(closed ? false : true))}>
                <img src="../drop.png" alt="icon"
                     className={closed === true ? s.icon : s.icon + ' ' + s.rot} />
                <span className={s.sortBy}>{sortName}</span>
                <ul className={closed === true ? s.dropMenu + ' ' + s.close : s.dropMenu}>
                    {
                        sortArray.map((name, index) => {
                            return <li key={index} className={s.sortField} onClick={() => {
                                dispatcher(setSortedName(name));
                                dispatcher(setClose(true));
                                index === 0 ?
                                dispatcher(setFilteredArray(order(filteredArray, ['price'], ['asc'])))
                                : index === 1 ?
                                dispatcher(setFilteredArray(order(filteredArray, ['price'], ['desc'])))
                                : index === 2 ?
                                dispatcher(setFilteredArray(order(filteredArray, ['title'], ['asc'])))
                                : dispatcher(setFilteredArray(order(filteredArray, ['title'], ['desc'])))
                                }}>{name}</li>
                        })
                    }
                </ul>
            </div>

        </div>
    );

};

export {Categories};