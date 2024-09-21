import { Link } from "react-router-dom";
import "./Recipe.css";
export default function RecipeItem({ item }) {
    return (<div className="recipeContainer">
        <div className="recipeItem">
            <div>
                <img className="recipeImage" src={item?.image_url} alt={item.id} />
            </div>
            <div>
                <span className="recipeTitle">{item.publisher}</span>
                <h3>{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`} className="recipeDetails">Recipe Details</Link>
            </div>
        </div>

    </div>)

}