import { useState, useEffect } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((resp) => resp.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="px-8 font-[sans-serif] mt-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <h2 className="text-gray-800 text-2xl font-bold">
              What our happy clients say
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Elit occaecat officia et laboris
              Lorem minim. Officia do aliqua adipisicing ullamco in.
            </p>
          </div>
          <div className="flex space-x-4 items-end justify-end">
            <div className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-800 inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="bg-sky-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#fff] inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-auto px-10 pr-2 py-2 mt-12">
          <div className="min-w-[1052px] grid grid-cols-3 gap-12">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
                />

                <div>
                  <h6 className="text-gray-800 text-[15px] font-bold">
                    {review.customer_name}
                  </h6>
                  <p className="mt-1 text-xs text-gray-500">{review.role}</p>
                </div>

                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 ${
                        index < review.rating
                          ? "fill-sky-600"
                          : "fill-[#CED5D8]"
                      }`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
