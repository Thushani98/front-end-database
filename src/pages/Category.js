import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Category = () =>{
    const params = useParams();

    const [category, setCategory] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(()=>{
        getCategoryById();
        getItemsByCategory();
    }, []);


    const getCategoryById = () =>{
        fetch('http://localhost:8080/category/${params.id}')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setItems(data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const getItemsByCategory = () =>{
        fetch('http://localhost:8080/category/${params.id}/item')
        .then((response)=>{
            return response.json();
        }).then((data)=>{
            setCategory(data);
        }).catch((error)=>{
            console.log(error);
        })
    } 

    return (
        <div>
            {category &&
            <h1>Products of {category.name} Category</h1>
            }

            {items &&
            <ul>
                {items.map(item=>(
                    <li>{item.name}</li>
                ))}
            </ul>

            }
        </div>
    )
}

export default Category;