const LoginForm = () => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="loginuser">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="loginuser"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="loginpassword">Password</label>
                    <input
                        name="password"
                        type="password"
                        id="loginpassword"
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;