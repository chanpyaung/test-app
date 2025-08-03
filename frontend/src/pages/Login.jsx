import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            setMessage(`Welcome ${data.user.name}`);
        } else {
            setMessage(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ marginBottom: '16px' }}>
                <button type="submit" style={{ width: '100%' }}>Login</button>
            </div>
            <p>{message}</p>
        </form>
    );
}

export default Login;