import s from './Categories.module.css';

const Categories = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.categories}>
                <ul className={s.categoryBlock}>
                    <li className={s.category}>Test</li>
                    <li className={s.category}>Testtest</li>
                    <li className={s.category}>Testtest</li>
                    <li className={s.category}>Test</li>
                    <li className={s.category}>Test</li>
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