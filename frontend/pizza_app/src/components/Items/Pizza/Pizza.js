import s from './Pizza.module.css';
import {useState} from 'react';

const Pizza = (props) => {
    const [selectedWeight, setWeight] = useState(1);
    const [selectedLong, setLong] = useState(1);
    return (
        <div className={s.pizza}>
            <img src={props.image}
                 alt="pizza" className={s.pizzaImage} />
            <span className={s.pizzaTitle}>{props.name}</span>
            <div className={s.pizzaWeight}>
                <span className={selectedWeight === 1 ? s.weightStyle + ' ' + s.selected : s.weightStyle}
                      onClick={() => setWeight(1)}>тонкое</span>
                <span className={selectedWeight === 2 ? s.weightStyle + ' ' + s.selected : s.weightStyle}
                      onClick={() => setWeight(2)}>традиционное</span>
            </div>
            <div className={s.pizzaLong}>
                <span className={selectedLong === 1 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => setLong(1)}>26 см</span>
                <span className={selectedLong === 2 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => setLong(2)}>30 см</span>
                <span className={selectedLong === 3 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => setLong(3)}>40 см</span>
            </div>
            <div className={s.pizzaPrice}>
                <span className={s.part}>От 10 $</span>
                <span className={s.part + ' ' + s.addBtn}>+ Добавить</span>
            </div>
        </div>
    );
};

export {Pizza};