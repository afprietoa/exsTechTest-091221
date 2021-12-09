import {
    BrowserRouter,
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Clothes } from '../components/Clothes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Clothes/>} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}
