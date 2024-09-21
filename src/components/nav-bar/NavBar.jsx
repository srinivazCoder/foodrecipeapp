import { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
export default function NavBar() {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    console.log(searchParam)


    return <nav className="container">
        <h2> <NavLink to={"/"} className="nav-link title">
            FoodRecipe
        </NavLink></h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="search" 
            placeholder="Enter Items ...." 
            className="search-input"
            value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
        </form>
        <ul className="nav-links">
            <li>
                <NavLink to={"/"} className="nav-link">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={"/favorites"} className="nav-link">
                    Favorites
                </NavLink>
            </li>
        </ul>
    </nav>
}