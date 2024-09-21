import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "./home.css";
export default function Home() {
    const { loading, recipeList } = useContext(GlobalContext);
    console.log(loading, recipeList);



    return (
        <div>
            <h1>Home</h1>
            <h2 className="loading">{loading && "Loading...."}</h2>
            <div className="containerRecipe">{recipeList && (recipeList.length > 0)
                ? recipeList.map((e,i) => {
                    return <div key={i}><RecipeItem item={e} /></div>

                }) : <div>
                    <p className="emptyResponse">Nothing to show. Please search something</p>
                </div>}</div>

        </div >


    );
}