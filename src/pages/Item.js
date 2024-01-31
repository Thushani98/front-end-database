import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
    const params = useParams();

    const[item, setItem] = useState(null);

    useEffect(()=>{
        getItem();
    }, [params.id]);

    const getItem = ()=>{
        fetch(`http://localhost:8080/item/${params.id}`)
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setItem(data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <h1>Item</h1>
            {item &&
            <>
            <h2>{item.name}</h2>
            <div>QTY: {item.qty}</div>
            <div>Price: {item.price}</div>
            </>
            }
        </div>
    )
}

export default Item;