import { Handshake, Truck, Package, Headphones } from "lucide-react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";

export default function Services() {
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const updatePerPage = () => {
      setPerPage(window.innerWidth <= 768 ? 2 : 4);
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);

    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const services = [
    { Icon: Package, title: "Handmade with Care", text: "Each item is crafted with great attention to detail." },
    { Icon: Truck, title: "Fast Shipping", text: "Enjoy free shipping on orders over $50." },
    { Icon: Handshake, title: "Custom Orders", text: "Order exactly what you need, tailored to you." },
    { Icon: Headphones, title: "Customer Support", text: "24/7 assistance for all your questions and needs." },
  ];

  return (
    <section className="mx-auto max-w-[1200px] px-5 py-6">
      <Splide options={{ type: "loop", perPage, gap: "1rem", autoplay: true }}>
        {services.map(({ Icon, title, text }, index) => (
          <SplideSlide key={index}>
            <div className="h-[250px] w-full bg-white shadow-lg p-6 rounded-lg flex flex-col justify-between items-center text-center border border-gray-200">
              <Icon size={40} className="text-sky-500" />
              <h4 className="text-lg font-semibold text-sky-500">{title}</h4>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
