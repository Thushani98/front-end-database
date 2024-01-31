import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () =>{

    const[items, setItems] = useState(null);
    const[categories, setCategories] = useState(null);
    const[name, setName] = useState(null);
    const[price, setPrice] = useState(null);
    const[qty, setQty] = useState(null);
    const[categoryId, setCategoryId] = useState(null);



    useEffect(()=>{
        getItems();
        getCategories();
    },[])

    const navigate = useNavigate();


    const getItems = async () =>{
        try{
            const response = await axios.get("http://localhost:8080/item");
            setItems(response.data);
        }catch(error){
            if(error.response.status === 401){
                navigate("/login");
            }
        }

    }

    const getCategories = async() =>{
        try{
            const response = await axios.get("http://localhost:8080/category");
            setCategories(response.data);
        }catch(error){
            console.log(error);
        }
    }
const handleName = (event)=>{
    setName(event.target.value)
}

const handlePrice = (event)=>{
    setPrice(event.target.value)
}

const handleQty = (event)=>{
    setQty(event.target.value)
}

const handleCategory = (event)=>{
    setCategoryId(event.target.value)
}

const createItem = (event) =>{
    event.preventDefault();

    const data = {
        "name" : name,
        "price" : price,
        "quantity" : qty,
        "categoryId" : categoryId
    }

    fetch("http://localhost:8080/item",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body:JSON.stringify(data)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    }).catch(error =>{
        console.log(error);
    })


}


    return(
        <div>
            <h1>Home</h1>
            <Link to= "/item">Item</Link>
            <button onClick={getItems}>Load Items</button>

            { items  && 
            <ul>
                {items.map((item)=>(
                    <li key= {item.id}>
                    <Link to ={`/item/${item.id}`}>{item.name}</Link>    
                    </li>
                ))}
            </ul>
            }

            <button onClick={getCategories}>Load Categories</button>
            { categories  && 
            <ul>
                {categories.map((category)=>(
                    <li key= {category.id}>{category.name}</li>
                ))}
            </ul>
            }

            <form onSubmit={createItem}>
                <div>
                    <label>Item Name</label>
                    <input type="text" required onChange={handleName}/>
                </div>

                <div>
                    <label>Item Price</label>
                    <input type="text" required onChange={handlePrice}/>
                </div>

                <div>
                    <label>Item Quantity</label>
                    <input type="text" required  onChange={handleQty}/>
                </div>

                <div>
                    <label>Category</label>
                    <select required onChange={handleCategory}>
                        <option></option>

                        {categories && categories.map((category)=>
                            <option value={category.id}>{category.name}</option>
                        )}
                    </select>
                </div>
            
            <button type="submit">Save Category</button>
            </form>

        </div>
        
    )
    
}

export default Home;