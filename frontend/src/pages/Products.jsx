import { useState, useEffect } from "react"
import ProdutsCard from "../components/ProductsCard";

export default function Products(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((resp) => resp.json())
        .then((data) =>setProducts(data))
    },[]);
    return (
        <div>
            <span className="flex items-center justify-center font-medium text-2xl text-sky-500 p-8">Featured Collections</span>
            <ProdutsCard products={products}/>
            <span className="flex items-center justify-center font-medium text-2xl text-sky-500 p-8" >Shop By Category</span>
        </div>
    )
}