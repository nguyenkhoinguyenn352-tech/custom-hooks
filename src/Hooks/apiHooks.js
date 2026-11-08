import { useState, useEffect } from 'react';

const useMedia = () => {
    // TODO: move mediaArray state here
    const [mediaArray, setMediaArray] = useState([]);

    // TODO: move getMedia function here
    const getMedia = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/media'); // Hoặc đường dẫn API hiện tại của bạn
            const data = await response.json();
            setMediaArray(data);
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };

    // TODO: move useEffect here
    useEffect(() => {
        getMedia();
    }, []);

    return { mediaArray }; // Trả về object hoặc mảng tuỳ theo cấu trúc dự án của bạn
};

export { useMedia };