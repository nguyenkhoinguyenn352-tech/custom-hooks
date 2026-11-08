import { useLocation, useNavigate } from 'react-router';

const Single = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const item = location.state?.item;

    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            {item && (
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
};

export default Single;