// import { Link } from "react-router-dom";

// export default function ProductCard({ product }) {
//   return (
//     <div className="border p-4 rounded-lg shadow">
//       <img src={product.image} alt={product.name} />
//       <h2 className="font-semibold mt-2">{product.name}</h2>
//       <p className="text-sm text-muted">{product.description}</p>

//       <Link
//         to={`/products/${product.id}`}
//         className="inline-block mt-3 text-accent"
//       >
//         View Details →
//       </Link>
//     </div>
//   );
// }

// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="font-semibold mt-3 text-lg">{product.name}</h2>
      <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>
       <li className="mt-4 text-gray-600">{product.pack_sizes.join(", ")}</li>
      <li className="mt-4 text-gray-600">{product.usage}</li>
      <li className="mt-4 text-gray-600">{product.application}</li>
      <li className="mt-4 text-gray-600">{product.lifetime}</li>
      <li className="mt-4 text-gray-600">{product.features}</li>
      <li className="mt-4 text-gray-600">{product.rating}/5</li>
      <Link
        to={`/products/${product.id}`}
        className="inline-block mt-4 text-[#1a4782]  font-medium hover:underline"
      >
        View Details →[cite: 5]
      </Link>
    </div>
  );
}
// import { Link } from "react-router-dom";

// export default function ProductCard({ product }) {
//   return (
//     <div className="border bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded"
//       />

//       <h2 className="font-semibold mt-3 text-lg">
//         {product.name}
//       </h2>

//       <p className="text-sm text-gray-500 line-clamp-2 mt-1">
//         {product.description}
//       </p>

//       <p className="mt-2 text-gray-600">
//         Rating: ⭐ {product.rating}/5
//       </p>

//       <Link
//         to={`/products/${product.id}`}
//         className="inline-block mt-4 text-[#1a4782] font-medium hover:underline"
//       >
//         View Details →
//       </Link>
//     </div>
//   );
// }