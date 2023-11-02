import { useState } from "react";
import { ID, database } from "../appwrite/appwriteConfig";
// import { useNavigate } from "react-router-dom";


function TodoForm() {
    // const navigate = useNavigate();
    const [todo, setTodo] = useState("");

    const handleSubmit = () => {

        const promise = database.createDocument("6531c21436ca977dc8aa", "6531c283e4dc7e76177c", ID.unique(), { todo })
        promise.then(function (res) {
            setTodo(res);
            console.log(res);
            window.location.reload();
        }, function (err) {
            console.error(err.message)
        });
    }

    return (
        <div className="w3-container">
            <h2 className="w3-center w3-padding w3-margin">Todo List!</h2>
            <div className="w3-center">
                <label className="w3-text-grey w3-padding w3-margin w3-left">Todo List:</label>
                <input className="w3-input w3-border-green w3-round-xlarge w3-margin"
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add your todo to your list..."
                />
                <button className="w3-button w3-margin-top w3-green w3-round-large" onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}

export default TodoForm;
