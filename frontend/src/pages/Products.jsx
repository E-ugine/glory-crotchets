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
            <span className="flex items-center justify-center font-medium text-2xl text-sky-500">Featured Collections</span>
            <ProdutsCard products={products}/>
        </div>
    )
}