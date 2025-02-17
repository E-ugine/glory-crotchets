 import Hero from "../components/Hero"
import Products from "./Products"
import Services from "../components/Services"
import Reviews from "./Reviews"


export default function Home(){
    return(
        <>
        <Hero />
        <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif">Featured Collections</h1>
        <Products />
        <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif">Our Services</h1>
        <Services />
        </>
    )
}