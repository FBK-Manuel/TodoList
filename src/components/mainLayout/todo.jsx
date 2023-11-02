import { useEffect, useState } from "react"
import { database } from "../appwrite/appwriteConfig";



function Todo() {

    const [loader, setLoader] = useState(false);
    const [todos, setTodos] = useState();

    useEffect(() => {
        setLoader(true);
        const getTodos = database.listDocuments("6531c21436ca977dc8aa", "6531c283e4dc7e76177c")
        getTodos.then(function (res) {
            setTodos(res.documents);
        }, function (err) {
            console.error(err.message)
        });
        setLoader(false);
    }, []);

    const deleteTodos = (e, id) => {
        e.preventDefault();
        const promise = database.deleteDocument("6531c21436ca977dc8aa", "6531c283e4dc7e76177c", id);
        promise.then(function (res) {
            console.log(res)
            window.location.reload();
        }, function (err) {
            console.error(err.message)
        });

    }

    return (

        <div className="">
            <h1><b>List of the todos added</b></h1>
            <div className="w3-container">
                {loader ? (
                    <h4><strong>Your todo list is currently empty</strong></h4>
                ) : (
                    <div>
                        {todos && todos.map(item => (
                            <div key={item.$id}>
                                <div className="w3-panel w3-round-xlarge w3-border w3-padding w3-margin w3-pale-green">
                                    <p className="w3-left">{item.todo}</p>
                                    <div className="w3-opacity" style={{ cursor: "pointer" }}>
                                        <span className="w3-right"><b className="w3-text-red w3-hover-text-black" onClick={(e) => { deleteTodos(e, item.$id) }}>X</b></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todo