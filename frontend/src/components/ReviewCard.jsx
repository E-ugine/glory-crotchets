export default function ReviewsCard({ reviews }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {reviews.map((review) => (
                <div key={review.id} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                    <div className="flex items-center gap-4">
                        {/* Reviewer Image */}
                        <img 
                            src={review.image} 
                            alt={review.customer_name} 
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            {/* Reviewer Name */}
                            <h3 className="text-lg font-semibold text-gray-900">{review.customer_name}</h3>
                            {/* Star Rating */}
                            <div className="flex">
                                {Array.from({ length: review.rating }).map((_, index) => (
                                    <span key={index} className="text-yellow-500 text-xl">★</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Review Comment */}
                    <p className="mt-3 text-red-700">{review.comment}</p>
                    {/* Purchased Product */}
                    {review.product_name && (
                        <p className="mt-3 text-sm text-blue-600 font-medium">
                            Purchased: <span className="underline">{review.product_name}</span>
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
