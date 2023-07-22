import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {App} from '../App';
import {Cart} from '../components/Cart/Cart';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="" />
                <Route element={<Cart />} path="/cart/" />
            </Routes>
        </BrowserRouter>
    );
};

export {Routers};