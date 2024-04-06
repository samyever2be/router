import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const Shop = ()=>{
    const [items,setItems] = useState([]);
    useEffect (() =>{
        fetchItem();
    },[])
    const fetchItem = async () =>{
    const data  = await fetch('https://fakestoreapi.com/products');
    //const data  = await fetch(' https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json();
    console.log(items);
    setItems(items);
}

    return(
        <>
        <h1>Shop with us</h1>
        {
            items.map((item) =>(
                <Link to={`/shop/${item.id}`}><h2 key={item.id}>{item.title}</h2></Link>
            ))
        }
        </>
    )
}

export default Shop;