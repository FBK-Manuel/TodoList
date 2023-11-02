import { useState } from 'react';
import { ID, account } from '../appwrite/appwriteConfig';
import { Link, useNavigate } from 'react-router-dom';





const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const handleInputChange = (e, type) => {
        switch (type) {
            case "name":
                setError("");
                setName(e.target.value);
                if (e.target.value === "") {
                    setError("Name is left blank");
                }
                break;
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
                    setError("password should be at least 8 characters")
                } else if (password.length > 6) {
                    setMsg("password is strong enough!")
                }

                break;


            default:
                break;
        }
    }


    const handleRegister = async (e) => {
        try {
            if (email === "") {
                alert("please enter your email address")
            } else if (password === "") {
                alert("please enter your Password")
            }
            e.preventDefault();
            // Appwrite sign up event
            const promise = await account.create(ID.unique(), email, password, name);
            if (!promise) {
                console.log('error')
                return;
            } else {
                navigate('/login');
                console.log('success', promise);
            }
        }
        catch (error) {
            alert('Invalid email or password. Please try again.');
        }
    }

    const promiseVerified = account.createVerification('http://localhost:5173/profile');

    promiseVerified.then((res) => {
        console.log(res)
    }, err => console.error(err));


    return (
        <div className='w3-items-centered'>
            <form className='w3-form'>
                <h1>Register a new account</h1>
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
                    type="text"
                    className='w3-input-short'
                    placeholder="Name"
                    required
                    value={name}
                    id='name'
                    onChange={(e) => handleInputChange(e, "name")}
                />
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



                <button className='w3-btn w3-black w3-round-xlarge' type="button" id='btn' onClick={handleRegister}>
                    Register
                </button>

                <Link className='w3-link w3-text-none' to='/login'>login</Link>
            </form>
        </div>
    );
};

export default Register;





