import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../Redux/Actions";
import Cards from "./Components/Cards";

const Favorites = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const favorites = useSelector((state) => state.myFavorites);
    

  useEffect(()=>{
    dispatch(getFavorite(user))
  
  },[])

    return (
      <div>
      {
        favorites ? <Cards favorites={favorites}/> : <div>Loading</div>
      }
        </div>
    )
     
};

export default Favorites;