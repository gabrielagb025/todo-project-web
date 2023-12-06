import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Todo App</h1>
            <div>
                <NavLink to="/register" className="btn btn-primary me-2">Register</NavLink>
                <NavLink to="/login" className="btn btn-primary">Log in</NavLink>
            </div>
        </div>
    )
}

export default Home;