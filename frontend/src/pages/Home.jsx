 import Hero from "../components/Hero"
import Services from "../components/Services"
import Reviews from "./Reviews"
import Deals from "../components/Deals"
import NewArrival from "../components/NewArrival"
import FeaturedProducts from "../components/FeaturedProducts"


export default function Home(){
    return(
        <>
        <Hero />
        <Services />
        <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif">New Arrivals</h1>
        <NewArrival />
        <Deals />
        <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif">Featured Products</h1>
        <FeaturedProducts />
        <Reviews />
        </>
    )
}