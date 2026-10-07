import React from "react";
import Aboutbg from "../assets/Aboutbg.png";
import bg from "../assets/about_bg.jpg";
import h1 from "../assets/office.jpg";
import h2 from "../assets/h2.jpg";
import acccement from "../assets/AccCement.jpg";
import Adani from "../assets/Adani_power_logo.png";
import birla from "../assets/AdityaBirlaCement.jpg";
import EssarPower from "../assets/EssarPower.png";
import mpbirla from "../assets/M.P_Birla_Group_logo.jpg";
import kjs from "../assets/kjs.png";
import jcb from "../assets/jcb.jpg";

import ultratech from "../assets/ultratech.png";
import dalmia from "../assets/dalmia.jpg";
import jaypee from "../assets/jaypee.png";
import prism from "../assets/prism.png";
import award from "../assets/bg02.jpeg";

import { useEffect } from "react";
export default function About() {

   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <>
    <div className="px-4 py-6 text-center bg-gray-50 min-h-screen">
  <div className="max-w-8xl mx-auto">
    <h1 className="mx-auto text-center text-4xl md:text-6xl font-extrabold text-[#1a4782] mt-2 mb-5 tracking-tight 
    hover:animate-zoomIn underline
  ">
      About Us
    </h1>
    
    {/* <div className="relative group w-full flex justify-center px-4"> */}
  
  {/* Premium Glow Effect */}
  {/* <div
    className="
      absolute
      -inset-1
      bg-gradient-to-r
      from-[#1a4782]
      to-blue-400
      rounded-2xl
      blur-lg
      opacity-20
      group-hover:opacity-40
      transition
      duration-700
    "
  ></div> */}

  {/* Image */}
  <img
    src={bg}
    alt="High-quality Lubricants"
    className="
      relative
      w-full
      max-w-8xl
      object-cover
      rounded-2xl
      shadow-2xl
      transition-all
      duration-500
      group-hover:scale-[1.02]
    "
  />
{/* </div> */}
  </div>
</div>
      <div className=" mx-auto min-w-full items-center text-xl rounded shadow-lg">
        <div className=" flex flex-col items-center justify-center p-4 m-4">
          <p className="font-extrabold text-4xl text-blue-900 tracking-tight underline ">
            Vikas Automobiles
          </p>
          <p className="text-xl text-gray-600 p-4 ">
            VIKAS AUTOMOBILES, SATNA
          </p>
          <p className="font-bold text-xl text-gray-800 ">
            HPCL LUBES C&F AGENT & DISTRIBUTOR
          </p>
          <p className="text-lgfont-medium text-gray-700 ">
            (SATNA,REWA, SIDHI, SINGRAULI, PANNA, CHATTARPUR, TIKAMGARH)
          </p>
        </div>
      </div>
<section className="bg-gray-50 p-6 md:p-10 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p>
              Wide range of high-quality lubricants for industrial and
              automotive applications.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">25 Years Experience</h3>
            <p>
              Serving industries with trusted lubrication solutions for over two
              decades.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
            <p>
              Fast and reliable supply chain with outstanding customer support.
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">100+ Products Available</h3>
            <p>
             100+ products in stock, ready to meet your lubrication needs with prompt delivery.
            </p>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src={h1} alt="head1" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h1  className="font-extrabold text-4xl text-blue-900 tracking-tight underline">  Welcome to 
              <br/>Vikas Automobiles</h1>
            <p className="text-lg font-medium text-gray-700 mt-4">
              Your trusted distributor and C&F agent
              for HPCL Lubricants serving businesses across <span className="font-bold">Satna, Rewa, Sidhi,
              Singrauli, Panna, Chhatarpur, and Tikamgarh.</span>
              <br/>
              <br/></p>
            <p className="text-lg font-medium text-gray-700 mt-4">
              With years of <span className="font-bold"> 25 years of
              industry experience</span> and a strong commitment to quality, we provide
              reliable lubricant solutions for industrial, automotive, and
              commercial applications.</p>
              <p className="text-lg font-medium text-gray-700 mt-4">    
               Located in Satna, Madhya Pradesh, we
              specialize in supplying a wide range of HPCL industrial and
              automotive lubricants designed to deliver superior performance,
              efficiency, and engine protection.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-lg font-medium text-gray-700 mt-4">  Our products are trusted by
              leading industries and organizations, helping machines and
              vehicles operate smoothly even under demanding conditions. At
              Vikas Automobiles, customer satisfaction is at the heart of
              everything we do. We focus on timely delivery, genuine products,
              competitive pricing, and dependable service to build long-term
              relationships with our clients. Our growing network of valued
              customers includes major industrial and infrastructure companies
              across the region. Backed by the strength and reliability of
              Hindustan Petroleum Corporation Limited, we continue to support
              industries, transport businesses, construction companies, and
              commercial enterprises with high-quality lubrication solutions
              tailored to their operational needs.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src={award} alt="award" />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 rounded-xl shadow-lg py-10 px-4">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <p
      className="
        font-bold
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        text-gray-800
        mb-10
      "
    >
      Our Channel Partner
    </p>

    {/* Logos */}
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        gap-6
        items-center
        justify-items-center
      "
    >
      <img
        src={acccement}
        alt="acccement"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={Adani}
        alt="adani"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={birla}
        alt="birla"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={jcb}
        alt="jcb"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={kjs}
        alt="kjs"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />

      <img
        src={mpbirla}
        alt="mpbirla"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={jaypee}
        alt="jaypee"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={prism}
        alt="prism"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={dalmia}
        alt="dalmia"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={ultratech}
        alt="ultratech"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
      <img
        src={EssarPower}
        alt="essarpower"
        className="w-24 sm:w-28 md:w-32 object-contain hover:scale-110 transition duration-300"
      />
    </div>
  </div>
</div>
    </>
  );
}

// const links = [
//   { name: 'Open roles', href: '#' },
//   { name: 'Internship program', href: '#' },
//   { name: 'Our values', href: '#' },
//   { name: 'Meet our leadership', href: '#' },
// ]
// const stats = [
//   { name: 'Offices worldwide', value: '12' },
//   { name: 'Full-time colleagues', value: '300+' },
//   { name: 'Hours per week', value: '40' },
//   { name: 'Paid time off', value: 'Unlimited' },
// ]

// export default function About() {
//   return (
//     <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
//       <img
//         alt=""
//         src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//         className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
//       />
//       <div
//         aria-hidden="true"
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div
//         aria-hidden="true"
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
//           <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//             fugiat veniam occaecat fugiat.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//             {links.map((link) => (
//               <a key={link.name} href={link.href}>
//                 {link.name} <span aria-hidden="true">&rarr;</span>
//               </a>
//             ))}
//           </div>
//           <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="flex flex-col-reverse gap-1">
//                 <dt className="text-base/7 text-gray-300">{stat.name}</dt>
//                 <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function About() {
//   return (
//   <>

//     <div>About</div>
//     <div className="main">
//         <h1>Welcome to Vikas Automobiles</h1>
//         <p>Your trusted partner for quality automotive products and services. Explore our wide range of designed to meet
//             your needs.
//             25+ Years of Experience</p>
//     </div>
//     <div>Our partners
//       <img src="assests/AccCement.jpg" alt="" />
//     </div>
//     </>
//   )
// }
