import { Link } from 'react-router';

const MediaRow = ({ item }) => {
    return (
        <tr>
            <td>
                <img src={item.thumbnail} alt={item.title} width="100" />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
                <Link to="/single" state={{ item }}>
                    Show
                </Link>
            </td>
        </tr>
    );
};

export default MediaRow;