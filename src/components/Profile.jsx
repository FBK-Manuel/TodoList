import { useEffect, useState } from "react";
import { account } from "./appwrite/appwriteConfig";
import TodoForm from "./mainLayout/todoForm";
import { useNavigate } from "react-router-dom";
import Todo from "./mainLayout/todo";




function Profile() {
    const [signUser, setSignUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const infoDetail = account.get();
        infoDetail.then((res) => {
            setSignUser(res)
            console.log(res)
        }, err => console.log(err))
    }, [])

    // sign out
    const handleSignOut = async () => {
        try {
            await account.deleteSession('current');
            navigate('/login');
        }
        catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="w3-container">
            <div className="w3-bar w3-light-grey ">
                <h4 className="w3-left w3-bar-item w3-margin">{signUser ? `Logged in as ${signUser.name}` : 'Loading...'}</h4>
                <button className="w3-right w3-bar-item w3-margin w3-button w3-round-xlarge w3-red" type="button" onClick={handleSignOut}>Sign Out</button>

            </div>
            <div className="w3-items-centered">
                <TodoForm />
            </div>
            <div className="w3-items-centered">
                <Todo />
            </div>
        </div>

    )
}

export default Profile;