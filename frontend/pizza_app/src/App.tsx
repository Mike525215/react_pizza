import './App.css';
import {Header} from './components/Header/Header';
import {Categories} from './components/Categories/Categories';
import {Items} from './components/Items/Items';
const App = () => {

    return (
        <main>
            <Header />
            <Categories />
            <Items />
        </main>
    );
};

export {App};
