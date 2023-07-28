import s from './Pizza.module.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setTotalCount, setTotalAmount, addPizza} from '../../../redux/slices/cartSlice';

const Pizza = (props) => {
    const [selectedWeight, setWeight] = useState(1);
    const [selectedLong, setLong] = useState(1);
    const dispatcher = useDispatch();

    return (
        <div className={s.pizza}>
            <img src={props.pizza.image}
                 alt="pizza" className={s.pizzaImage} />
            <span className={s.pizzaTitle}>{props.pizza.title}</span>
            <div className={s.pizzaWeight}>
                <span className={selectedWeight === 1 ? s.weightStyle + ' ' + s.selected : s.weightStyle}
                      onClick={() => setWeight(1)}>тонкое</span>
                <span className={selectedWeight === 2 ? s.weightStyle + ' ' + s.selected : s.weightStyle}
                      onClick={() => {
                          setWeight(2);
                          }}>традиционное</span>
            </div>
            <div className={s.pizzaLong}>
                <span className={selectedLong === 1 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => setLong(1)}>26 см</span>
                <span className={selectedLong === 2 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => {
                          setLong(2);
                          }}>30 см</span>
                <span className={selectedLong === 3 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => {
                          setLong(3);
                          }}>40 см</span>
            </div>
            <div className={s.pizzaPrice}>
                <span className={s.part}>От {props.pizza.price} $</span>
                <span className={s.part + ' ' + s.addBtn}
                      onClick={() => {
                          dispatcher(setTotalCount());
                          dispatcher(setTotalAmount(props.pizza.price));
                          dispatcher(addPizza({
                                    id: props.pizza.id,
                                    title: props.pizza.title,
                                    price: props.pizza.price,
                                    image: props.pizza.image,
                                    weight: selectedWeight === 1 ? 'тонкое' : 'традиционное',
                                    long: selectedLong === 1 ? 26 : selectedLong === 2 ? 30 : 40}));
                      }}>+ Добавить</span>
            </div>
        </div>
    );
};

export {Pizza};