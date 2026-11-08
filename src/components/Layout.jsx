import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>

            <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f0f0f0' }}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>


            <div style={{ padding: '20px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;