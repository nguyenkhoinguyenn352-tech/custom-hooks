import { useState } from 'react';
import { useMedia } from '../hooks/apiHooks'; // Điều chỉnh đường dẫn import cho đúng thư mục của bạn

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const { mediaArray } = useMedia();

    return (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    <table>
        <tbody>
        {mediaArray.map((mediaItem) => (
            <MediaRow
                key={mediaItem.media_id}
                item={mediaItem}
                setSelectedItem={setSelectedItem}
            />
        ))}
        </tbody>
    </table>
);
};

export default Home;