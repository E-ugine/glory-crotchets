 import Hero from "../components/Hero"
import Services from "../components/Services"
import Reviews from "./Reviews"


export default function Home(){
    return(
        <>
        <Hero />
        <Services />
        <h1 className="text-4xl text-sky-500 justify-center text-center  font-serif">Featured Collections</h1>
        <Reviews />
        </>
    )
}