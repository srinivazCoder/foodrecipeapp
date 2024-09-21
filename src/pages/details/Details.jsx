import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context/Context";
import "../details/Details.css";
export default function Details() {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData ,handleAddToFavorite,favoritesList} = useContext(GlobalContext);

    useEffect(() => {
        setRecipeDetailsData(null);
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();
            if (data?.data) {
                setRecipeDetailsData(data?.data);
            }


        }

        getRecipeDetails();
    }, []);

    function checkItemInFavorites(item){
        console.log(item)
        console.log(favoritesList)
        const isItemInFavorites = favoritesList.some((e)=>e.id == item?.id)
        return isItemInFavorites ? "Remove as favorites" : "Save as favorites";

    }
    return <div>
        <div className="detailsContainer">
            <div>
                <img className="imageDetailsPage" src={recipeDetailsData?.recipe?.image_url} alt={recipeDetailsData?.recipe?.source_url} />
            </div>
            <div>
                <span className="recipeDetailsTitle">{recipeDetailsData?.recipe?.publisher}</span>
                <h3>{recipeDetailsData?.recipe?.title}</h3>
                <div>
                    <button className="saveAsFavorites" onClick={()=>handleAddToFavorite(recipeDetailsData?.recipe)}>{checkItemInFavorites(recipeDetailsData?.recipe)}</button>
                </div>
                <div>
                    <h3>Ingredients:</h3>
                    <ul className="ingredientsList">
                        {recipeDetailsData?.recipe?.ingredients?.map((ingredient, index) => {
                            return <li key={index}>
                                <span>{ingredient?.quantity} {ingredient.unit}</span>
                                <span>{ingredient.description}</span>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}