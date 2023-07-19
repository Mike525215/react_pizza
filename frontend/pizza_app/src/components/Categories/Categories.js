import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSelected} from '../../redux/slices/categorySlice';

const Categories = () => {
    const selected = useSelector(state => state.category.selected);
    const categories = [{id: 1, name: "Все"}, {id: 2, name: "Мясные"}, {id: 3, name: "Вегетерианские"},
                        {id: 4, name: "Гриль"}, {id: 5, name: "Острые"}, {id: 6, name: "Закрытые"}];
    const dispatcher = useDispatch();
    return (
        <div className={s.wrapper}>
            <div className={s.categories}>
                <ul className={s.categoryBlock}>
                    {categories.map(cat => <li className={selected === cat.id ? s.category + ' ' + s.selected : s.category}
                                               onClick={() => {
                                                   dispatcher(setCategory(cat.name));
                                                   dispatcher(setSelected(cat.id));
                                               }}>{cat.name}</li>)}
                </ul>
            </div>
            <div className={s.sortBlock}>
                <img src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png" alt="icon"
                     className={s.icon} />
                <span>Sorted by</span>
            </div>
        </div>
    );

};

export {Categories};