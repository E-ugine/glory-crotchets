import { Handshake, Truck, Package, Headphones } from "lucide-react";

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#eeecec] p-8">
      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
        <Package size={40} className="text-purple-500 mb-4" />
        <h4 className="text-xl font-semibold mb-2 text-yellow-700">Handmade with Care</h4>
        <p className="text-gray-700">Each item is carefully crafted with attention to detail.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
        <Truck size={40} className="text-purple-500 mb-4" />
        <h4 className="text-xl font-semibold mb-2 text-yellow-700">Fast Shipping</h4>
        <p className="text-gray-700">Free shipping on orders over $50.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
        <Handshake size={40} className="text-purple-500 mb-4" />
        <h4 className="text-xl font-semibold mb-2 text-yellow-700">Custom Orders</h4>
        <p className="text-gray-700">Get exactly what you want with custom orders.</p>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center">
        <Headphones size={40} className="text-purple-500 mb-4" />
        <h4 className="text-xl font-semibold mb-2 text-yellow-700">Customer Support</h4>
        <p className="text-gray-700">24/7 support for all your queries.</p>
      </div>
    </div>
  );
}
