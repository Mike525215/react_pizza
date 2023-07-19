import s from './Categories.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../redux/slices/categorySlice';

const Categories = () => {
    const category = useSelector(state => state.category.value);
    const dispatcher = useDispatch();
    return (
        <div className={s.wrapper}>
            <div className={s.categories}>
                <ul className={s.categoryBlock}>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Все')) }}>Все</li>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Мясные')) }}>Мясные</li>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Вегетерианские')) }}>Вегетерианские</li>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Гриль')) }}>Гриль</li>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Острые')) }}>Острые</li>
                    <li className={s.category} onClick={() => { dispatcher(setCategory('Закрытые')) }}>Закрытые</li>
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