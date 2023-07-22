import './App.css';
import {Header} from './components/Header/Header';
import {Categories} from './components/Categories/Categories';
import {Items} from './components/Items/Items';
import {Provider} from 'react-redux';
import {store} from './redux/store';
const App = () => {

    return (
        <Provider store={store}>
            <main>
                <Header />
                <Categories />
                <Items />
            </main>
        </Provider>
    );
};

export {App};
