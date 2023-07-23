import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {App} from '../App';
import {Cart} from '../components/Cart/Cart';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
const Routers = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />} path="" />
                    <Route element={<Cart />} path="/cart/" />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export {Routers};