// import { Paginated } from "../../../Components";
import { useEffect, useState } from "react";
import Card from "./Card";
import style from "./Cards.module.css";

const Cards = (props) => {
  const { favorites } = props;
  
 
  return (
    <div className={style.container}>
      
      
        {favorites?.map((product)=>{
          return <Card data={product} />
        })
        
        }
      
    

      
    </div>
  );
    
};

export default Cards;
