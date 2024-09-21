
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            console.log(data);
            if (data?.data?.recipes) {

                setRecipeList(data?.data?.recipes);
                setSearchParam("");
                setLoading(false);
                navigate("/")

            }


        } catch (error) {
            console.log(error)
            setSearchParam("");
            setLoading(false);
        }



    }

    // console.log(loading, recipeList);

    function handleAddToFavorite(getCurrentItem){
       let cpyFavorates = [...favoritesList];
       const idx = cpyFavorates.findIndex(item=>item.id === getCurrentItem.id);

       if(idx === -1){
        cpyFavorates.push(getCurrentItem)

       }else{
        cpyFavorates.splice(idx);
       }

       setFavoritesList(cpyFavorates);
      


        
    }
    console.log(favoritesList)

    return <GlobalContext.Provider value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList
    }}>
    {children}
    </GlobalContext.Provider>;
}