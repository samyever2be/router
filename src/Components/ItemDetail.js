import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
const ItemDetail = (match)=>{
    const { id } = useParams();
    console.log(`${id}`);
    const [item,setItem] = useState(null);
    
    useEffect (() =>{
        fetchItem();
        console.log(match);
    },[])
    const fetchItem = async () =>{
    const data  = await fetch(`https://fakestoreapi.com/products/${id}`);
    const item = await data.json();
   
    setItem(item);
    }

    return(
        <>
        <h1>Shop with us</h1>
        {   item &&
            (
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Category: ${item.category}</p>
                    <img src={item.image} alt={item.title}/>
                </div>  
            )
        }
        </>
    )
}

export default ItemDetail;