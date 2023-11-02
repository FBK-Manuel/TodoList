import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="w3-center">
            <h1>welcome to the home page</h1>
            <Link to='/login'>click</Link>
        </div>
    )
}

export default Home;
