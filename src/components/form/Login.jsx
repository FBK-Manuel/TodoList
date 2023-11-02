import { useState } from 'react';
import { account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';





const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e, type) => {
        switch (type) {
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Email is left blank");
                }
                break;
            case "password":
                setError("");
                setPassword(e.target.value);
                if (e.target.value === "") {
                    setError("Password is left blank");
                } else if (password.length < 6) {
                    setError("Input your existing password")
                } else if (password.length > 6) {
                    setMsg("It has reached at least 7 characters")
                }
                break;
            default:
                break;
        }
    }



    const handleLogin = async (e) => {
        try {
            if (email === "") {
                alert("please enter your email address")
            } else if (password === "") {
                alert("please enter your Password")
            }
            e.preventDefault();
            // Appwrite login event
            const promise = await account.createEmailSession(email, password);
            if (promise) {
                navigate('/profile');
                console.log('success', promise);
            } else {
                console.log("error")
            }
        }
        catch (error) {
            alert('Invalid email or password. Please try again.');
        }
    }


    return (
        <div className='w3-items-centered'>
            <form className='w3-form'>
                <h1>Login to account</h1>
                <p>
                    {
                        error !== "" ? (
                            <div style={{ color: "red" }}>{error}</div>
                        ) : (
                            <div style={{ color: "green" }}>{msg}</div>
                        )
                    }
                </p>
                <input
                    className='w3-input-short'
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    id='email'
                    onChange={(e) => handleInputChange(e, "email")}
                />
                <input
                    className='w3-input-short'
                    type="password"
                    placeholder="Password"
                    required
                    id='password'
                    value={password}
                    onChange={(e) => handleInputChange(e, "password")}
                />



                <button className='w3-btn w3-black w3-round-xlarge' type="button" id='btn' onClick={handleLogin}>
                    login
                </button>

                <Link className='w3-link w3-text-none' to='/register'>Register</Link>
            </form>
        </div>
    );
};

export default Register;





