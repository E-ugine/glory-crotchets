import { useState, useEffect } from "react"
import ReviewsCard from "../components/ReviewCard";
export default function Reviews(){
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/reviews")
       .then((resp) => resp.json())
       .then((data) => setReviews(data))
    },[]);
    return(
        <>
     <div className="bg-[#eeecec]">
     <div className="bg-[#eeecec]">
      <h2 className="text-2xl font-bold text-sky-500 text-center mt-12">Customer Reviews</h2>
      <ReviewsCard reviews={reviews} />
      </div>
     </div>
        </>
    )
}