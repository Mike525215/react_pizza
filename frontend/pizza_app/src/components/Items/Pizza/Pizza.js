import s from './Pizza.module.css';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setCount, setTotalSum, addPizza} from '../../../redux/slices/cartSlice';

const Pizza = (props) => {
    const [selectedWeight, setWeight] = useState(1);
    const [selectedLong, setLong] = useState(1);
    const [totalSum, setSum] = useState(0);
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
                          setSum(totalSum + 1);
                          }}>традиционное</span>
            </div>
            <div className={s.pizzaLong}>
                <span className={selectedLong === 1 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => setLong(1)}>26 см</span>
                <span className={selectedLong === 2 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => {
                          setLong(2);
                          setSum(totalSum + 2);
                          }}>30 см</span>
                <span className={selectedLong === 3 ? s.long + ' ' + s.selected : s.long}
                      onClick={() => {
                          setLong(3);
                          setSum(totalSum + 4);
                          }}>40 см</span>
            </div>
            <div className={s.pizzaPrice}>
                <span className={s.part}>От {props.pizza.price} $</span>
                <span className={s.part + ' ' + s.addBtn}
                      onClick={() => {
                          dispatcher(setCount());
                          dispatcher(setTotalSum(totalSum + props.pizza.price));
                          dispatcher(addPizza({title: props.pizza.title, price: totalSum + props.pizza.price,
                                    image: props.pizza.image,
                                    weight: selectedWeight === 1 ? 'тонкое' : 'традиционное',
                                    long: selectedLong === 1 ? 26 : selectedLong === 2 ? 30 : 40}));
                      }}>+ Добавить</span>
            </div>
        </div>
    );
};

export {Pizza};