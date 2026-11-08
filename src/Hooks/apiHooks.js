import { useState, useEffect } from 'react';

)
const fetchData = async (url, options = {}) => {
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
        const error = new Error(json.message || 'Error fetching data');
        error.status = response.status;
        throw error;
    }
    return json;
};


const useMedia = () => {
    const [mediaArray, setMediaArray] = useState([]);

    const getMedia = async () => {
        try {
            const data = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
            setMediaArray(data);
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };

    useEffect(() => {
        getMedia();
    }, []);

    return { mediaArray };
};


const useAuthentication = () => {
    // Hàm xử lý Đăng nhập (postLogin)
    const postLogin = async (inputs) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };

        try {
            const loginResult = await fetchData(
                import.meta.env.VITE_AUTH_API + '/auth/login',
                fetchOptions
            );
            return loginResult;
        } catch (error) {
            console.error('postLogin error:', error);
            throw error;
        }
    };


    const postUser = async (inputs) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };

        try {
            const userResult = await fetchData(
                import.meta.env.VITE_AUTH_API + '/users',
                fetchOptions
            );
            return userResult;
        } catch (error) {
            console.error('postUser error:', error);
            throw error;
        }
    };

    return { postLogin, postUser };
};


const useUser = () => {
    const getUserByToken = async (token) => {
        const fetchOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const userData = await fetchData(
                import.meta.env.VITE_AUTH_API + '/users/token',
                fetchOptions
            );
            return userData;
        } catch (error) {
            console.error('getUserByToken error:', error);
            throw error;
        }
    };

    return { getUserByToken };
};

export { useMedia, useAuthentication, useUser };