import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "../home/home.css";
export default function Favorites(){
    const { favoritesList} = useContext(GlobalContext);
   



    return (
        <div>
            <h1>Favorites </h1>
           
            <div className="containerRecipe">
                {favoritesList && (favoritesList.length > 0)
                ? favoritesList.map((e,i) => {
                    return <div key={i}><RecipeItem item={e} /></div>

                }) : <div>
                    <p className="emptyResponse">Nothing is added in Favorates...</p>
                </div>}</div>

        </div >


    );
}