import useForm from '../hooks/formHooks';
import { useAuthentication } from '../hooks/apiHooks';

const RegisterForm = ({ toggleForm }) => {
    const { postUser } = useAuthentication();

    const initValues = {
        username: '',
        password: '',
        email: '',
    };

    const doRegister = async () => {
        try {
            const userResult = await postUser(inputs);
            console.log('Register successful:', userResult);
            alert('Registration successful! Please log in.');
            if (toggleForm) toggleForm();
        } catch (error) {
            console.error('Register failed:', error);
            alert('Register failed: ' + error.message);
        }
    };

    const { inputs, handleInputChange, handleSubmit } = useForm(doRegister, initValues);

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="reguser" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
                    <input
                        name="username"
                        type="text"
                        id="reguser"
                        value={inputs.username || ''}
                        onChange={handleInputChange}
                        autoComplete="username"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="regemail" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                    <input
                        name="email"
                        type="email"
                        id="regemail"
                        value={inputs.email || ''}
                        onChange={handleInputChange}
                        autoComplete="email"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="regpassword" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                    <input
                        name="password"
                        type="password"
                        id="regpassword"
                        value={inputs.password || ''}
                        onChange={handleInputChange}
                        autoComplete="new-password"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;