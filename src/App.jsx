import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Login from './views/Login';
import Logout from './views/Logout';

const App = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;