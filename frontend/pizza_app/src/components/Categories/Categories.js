import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory, setSelected, setClose, setSortedName} from '../../redux/slices/categorySlice';
const Categories = () => {
    const selected = useSelector(state => state.category.selected);
    const sorted = useSelector(state => state.category.sortName);
    const closed = useSelector(state => state.category.closed);
    const categories = [{id: 1, name: "Все"}, {id: 2, name: "Мясные"}, {id: 3, name: "Вегетерианские"},
                        {id: 4, name: "Гриль"}, {id: 5, name: "Острые"}, {id: 6, name: "Закрытые"}];

    const sortArray = ["PRICE(ASC)", "PRICE(DESC)", "NAME(ASC)", "NAME(DESC)"];

    const dispatcher = useDispatch();

    return (

        <div className={s.wrapper}>

            <div className={s.categories}>
                <ul className={s.categoryBlock}>
                    {categories.map(cat => <li key={cat.id} className={selected === cat.id ? s.category + ' ' + s.selected : s.category}
                                               onClick={() => {
                                                   dispatcher(setCategory(cat.name));
                                                   dispatcher(setSelected(cat.id));
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