import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from '../AuthService';

const LoginComponent = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.login({ usernameOrEmail, password });
            if (response.data === 'User signed-in successfully!.') {
                navigate('/employees');
            } else {
                setMessage('Wrong credentials');
            }
        } catch (error) {
            setMessage('Invalid credentials');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">SignIn Form</div>
                        <div className="card-body">
                            {message && <div className="alert alert-danger">{message}</div>}
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Username or Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={usernameOrEmail}
                                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">SignIn</button>
                            </form>
                            <div className="mt-3">
                                <span>Not registered? <Link to="/signup">SignUp here</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;