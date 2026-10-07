
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { products } from "../data/data";

// const images = Object.entries(
//   import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true }),
// ).map(([path, mod], index) => {
//   const fileName = path.split("/").pop();
//   const cleanName = fileName.replace(/\.[^/.]+$/, "");

//   const formattedName = cleanName
//     .replace(/[-_]/g, " ")
//     .replace(/\b\w/g, (c) => c.toUpperCase());
  
//   return {
//     id: index,
//     imageSrc: mod.default,
//     name: formattedName,
//     // description:"",
//     // packsize: "",
//     // usage: "",
//     // application: "",
//     // lifetime: "",
//     description: "High quality industrial lubricant",
//     packsize: "Available in 1L, 5L, 20L, and 200L containers",
//     usage: "Suitable for automotive, industrial, and marine applications",
//     application: "Reduces friction and wear in engines and machinery",
//     lifetime: "Up to 10,000 miles or 6 months, whichever comes first",
//     features: "Enhanced performance and protection for demanding applications",
//     ratings: 4.5,
//   };
// });

// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = images.find((p) => p.id == id);
//   const navigate = useNavigate();
//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold mt-6 mb-4"> Product details </h1>
//       <img
//         src={product.imageSrc}
//         alt={product.name}
//         className="w-full rounded-lg"
//       />
      

//       <h1 className="text-3xl font-bold mt-6 mb-4">{product.name}</h1>

//       <div className="flex flex-wrap gap-4 mt-4">
//        {product.pack_sizes.map((size, index) => (
//          <button
//             key={index}
//           >
//             {size}
// </button>
//          ))}
//        </div>
      
//       <p className="mt-4 text-gray-700 text-xl">Description: {product.description}</p>
//       <li className="mt-4 text-gray-600">Pack Size: {product.packsize}</li>
      
//        <ul className="mt-6 space-y-3 text-gray-600">
//          <li><strong>Usage:</strong> {product.usage}</li>
//          <li><strong>Application:</strong> {product.application}</li>
//          <li><strong>Lifetime:</strong> {product.lifetime}</li>
//          <li><strong>Performance:</strong> {product.performance}</li>
//          <li><strong>Features:</strong> {product.features}</li>
//         <li><strong>Rating:</strong> ⭐ {product.rating}/5</li>
//        </ul>
//       <button
//         onClick={() => navigate("/contact")}
//         className="mt-6 bg-orange text-white px-6 py-3 rounded-lg"
//       >
//         Contact for Quote
//       </button>
//     </div>
//   );
// }


import { useParams, useNavigate } from "react-router-dom";
import {useEffect} from "react";
import { products } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="px-8 py-6 mt-5 mb-5 max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg">
<div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
  <span
    onClick={() => navigate("/")}
    className="cursor-pointer hover:text-blue-500"
  >
    Home
  </span>

  <span>/</span>

  <span
    onClick={() => navigate("/products")}
    className="cursor-pointer hover:text-blue-500"
  >
    Products
  </span>

  <span>/</span>

  <span className="text-black font-semibold">
    {product.name}
  </span>
</div>
      <h1 className="text-3xl font-bold mt-6 mb-4">Product Details</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[500px] rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-6 mb-4">{product.name}</h1>

      {/* pack sizes */}
      <div className="flex flex-wrap gap-4 mt-4 hover-bg-blue-500">
        {product.pack_sizes.map((size, index) => (
          <button
            key={index}
          className="relative bg-[#0B1F3A] text-white py-2 px-6 rounded-lg 
                   transition-all duration-300
                   hover:scale-105 active:scale-95
                   after:content-[''] after:absolute after:-inset-1 after:rounded-lg 
                   after:border-2 after:border-[#1a4782] after:opacity-0 
                   hover:after:opacity-100 hover:after:-inset-2 after:transition-all">
          
            {size}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-700 text-xl">
        <strong>Description: </strong>
      {product.description}
      </p>

      <ul className="mt-6 space-y-3 text-gray-600 text-lg">
        <li><strong>Usage:</strong> {product.usage}</li>
        <li><strong>Application:</strong> {product.application}</li>
        <li><strong>Lifetime:</strong> {product.lifetime}</li>
        <li><strong>Performance:</strong> {product.performance}</li>
        <li><strong>Features:</strong> {product.features}</li>
        <li><strong>Rating:</strong> ⭐ {product.rating}/5</li>
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="mt-6 mb-4 bg-[#0B1F3A] text-white px-6 py-5 rounded-lg"
      >
        Contact for Quote
      </button>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 md:hidden z-50">
  <button
    onClick={() => navigate("/contact")}
    className="w-full bg-[#0B1F3A] text-white py-4 rounded-xl text-lg font-bold"
  >
    Contact for Quote
  </button>
  
</div>
  <a
  href={`https://wa.me/919827003016?text=Hello, I want details about ${product.name}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 mt-4 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition"
  >
  <FaWhatsapp size={24} />
  WhatsApp Inquiry
  </a>

    </div>
  );
}