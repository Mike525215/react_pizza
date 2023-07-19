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

            </div>
        </div>
    );

};

export {Categories};