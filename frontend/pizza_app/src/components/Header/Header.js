import s from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useRef, useCallback} from 'react';
import {Link} from 'react-router-dom';
import debounce from 'lodash.debounce';
import axios from 'axios';
import {setFilteredArray} from '../../redux/slices/pizzaSlice';
import {setCategory, setSelected, setClose, setSortedName} from '../../redux/slices/categorySlice';
const Header = () => {
    const {count, totalSum} = useSelector(state => state.cart);
    const {pizzaArray} = useSelector(state => state.pizza);
    const dispatcher = useDispatch();
    const [value, setValue] = useState('');
    const ref = useRef();

    const axiosPizza = async () => {
        const changedValue = await value[0].toUpperCase() + value.slice(1, value.length).toLowerCase();
        const request = await axios.get('http://127.0.0.1:8000/api/v1/pizza?search=' + changedValue);
        const result = request.data;
        dispatcher(setFilteredArray(result));
    };

    const searchPizza = useCallback(
        debounce(() => {
            axiosPizza();
        }, 1000), []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        searchPizza();
    };

    const onClearInput = () => {
        setValue('');
        dispatcher(setFilteredArray(pizzaArray));
        dispatcher(setCategory('Все'));
        dispatcher(setSelected(1));
        dispatcher(setClose(true));
        dispatcher(setSortedName('sorted by'));
        ref.current.focus();
    };

    return (
        <header>
            <section className={s.logoSection}>
                <img src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
                     alt="pizza" className={s.logoImage} />
                <div className={s.infoBlock}>
                    <span className={s.mainPart}>REACT PIZZA</span>
                    <span className={s.secondPart}>the best pizza on the earth</span>
                </div>
            </section>
            <section className={s.searchSection}>
                <input className={s.searchForm} ref={ref} type="text" placeholder="Search pizza..."
                       onChange={(event) => onChangeInput(event)} value={value} />
                <button onClick={onClearInput}>
                <img src="https://www.svgrepo.com/show/80301/cross.svg" alt="clear"
                     className={s.clearBtn} />
                </button>
            </section>
            <Link to="/cart/" className={s.cartLink}><section className={s.cartSection}>
                    <span className={s.totalSumOrder}>{totalSum}$</span>
                    <svg width="16" height="16"
                        viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className={s.itemCount}>{count}</span>
            </section></Link>
        </header>
    );
};

export {Header};