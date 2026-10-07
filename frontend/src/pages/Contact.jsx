import { useState } from "react";
import call from "../assets/call.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.webp";
import mail from "../assets/mail.png";
import whatsapp from "../assets/whatsapp.png";
import axios from "axios";
import {useEffect} from "react";
export default function Contact() {
 useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  address: "",
  message: "",
});
const products = [
  "ENKLO 32",
  "ENKLO 46",
  "ENKLO 68",
  "ENKLO 100",
  "ENKLO 121",
  "ENKLO 150",
  "ENKLO 176",
  "ENKLO 220",
  "ENKLO 320",
  "ENKLO 460",
  "ENKLO HLP 22",
  "ENKLO HLP 32",
  "ENKLO HLP 46",
  "WAYLUBE 68",
  "WAYLUBE N68",
  "PARTHAN EP 68",
  "PARTHAN EP 100",
  "PARTHAN EP 150",
  "HP GEAR OIL XP 80 W 90",
  "HYTAK 0",
  "HYTAK 1",
  "SEETUL 15",
  "SEETUL 22",
  "HP RACER 4",
  "HP SN 150",
  "HP SN 500",
  "SPINTEK 5",
  "SPINTEK 12",
  "SPINTEK 15",
  "SPINTEK 22",
  "Other"
];

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "sanskritikhandelwal029@gmail.com";
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_URL || `https://formsubmit.co/ajax/${contactEmail}`;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(FORMSPREE_ENDPOINT, {
      ...form,
      _captcha: "false",
    }, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const successMessage = response.data?.message || "Message sent successfully";
    alert(successMessage);

    setForm({
      name: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      address: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert(`Failed to send message. Please try again or email ${contactEmail} directly.`);
  }
};
  return (
    <>
   
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
        {/* Google Map */}
        <div className="w-full h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-lg bg-white">
          <h1 className="text-2xl font-bold mb-4 m-2">Our Location</h1>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5168727408586!2d80.8620831144718!3d24.571352162836167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847efa4bf0455f%3A0xf7df454e162ab1de!2sVikas%20Automobiles%2C%20Satna%20(HP%20LUBE%20DISTRIBUTOR)!5e0!3m2!1sen!2sin!4v1652856740678!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
             {/* <label htmlFor="Name" className="text-lg w-full font-bold mt-6">Your Name:</label> */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
 {/* <label htmlFor="Email  " className="text-lg w-full font-bold mt-6">Your Email:</label> */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            />
             {/* <label htmlFor="phone" className="text-lg w-full font-bold mt-6">Your Phone:</label> */}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
<select
  name="product"
  value={form.product}
  onChange={handleChange}
  className="w-full border rounded-lg p-2"
>
  <option value="">Select Product</option>

  {products.map((product, index) => (
    <option key={index} value={product}>
      {product}
    </option>
  ))}
</select>

<select
  name="quantity"
  value={form.quantity}
  onChange={handleChange}
  className="w-full border rounded-lg p-2"
>
  <option value="">Quantity</option>

  {[...Array(50)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ))}
</select>
           
 {/* <label htmlFor="product" className="text-lg w-full font-bold mt-6">Select Product:</label> */}
              {/* <select name="product" id="product" className="w-full border rounded-lg p-2">
               <option value="">Select Product</option>
            <option value="ENKLO 32">ENKLO 32</option>
            <option value="ENKLO 46">ENKLO 46</option>
            <option value="ENKLO 68">ENKLO 68</option>
            <option value="ENKLO 100">ENKLO 100</option>
            <option value="ENKLO 121">ENKLO 121</option>
            <option value="ENKLO 150">ENKLO 150</option>
            <option value="ENKLO 176">ENKLO 176</option>
            <option value="ENKLO 220">ENKLO 220</option>
            <option value="ENKLO 320">ENKLO 320</option>
            <option value="ENKLO 460">ENKLO 460</option>
            <option value="ENKLO HLP 22">ENKLO HLP 22</option>
            <option value="ENKLO HLP 32">ENKLO HLP 32</option>
            <option value="ENKLO HLP 46">ENKLO HLP 46</option>
            <option value="ENKLO HLP 48">ENKLO HLP 48</option>
            <option value="FIRE RESISTANT HYDRAULIC &amp; CIRCULATING OILS">FIRE RESISTANT HYDRAULIC
              &amp; CIRCULATING OILS </option>
            <option value="WAYLUBE 68">WAYLUBE 68</option>
            <option value="WAYLUBE N68">WAYLUBE N68</option>
            <option value="WAYLUBE 220">WAYLUBE 220</option>
            <option value="PARTHAN EP 68">PARTHAN EP 68 </option>
            <option value="PARTHAN EP 100">PARTHAN EP 100 </option>
            <option value="PARTHAN EP 150">PARTHAN EP 150 </option>
            <option value="PARTHAN EP 220">PARTHAN EP 220 </option>
            <option value="PARTHAN EP 257">PARTHAN EP 257 </option>
            <option value="PARTHAN EP 320">PARTHAN EP 320 </option>
            <option value="PARTHAN EP 460">PARTHAN EP 460 </option>
            <option value="PARTHAN EP 480">PARTHAN EP 480 </option>
            <option value="PARTHAN EP 1000">PARTHAN EP 1000 </option>
            <option value="HP GEAR OIL XP 80 W 90">HP GEAR OIL XP 80 W 90 </option>
            <option value="HP GEAR OIL EP 90">HP GEAR OIL EP 90 </option>
            <option value="HP GEAR OIL EP 140">HP GEAR OIL EP 140 </option>
            <option value="HP GEAR OIL EP 85 w 140">HP GEAR OIL EP 85 w 140 </option>
            <option value="HYTAK 0">HYTAK 0 </option>
            <option value="HYTAK 1">HYTAK 1 </option>
            <option value="HYTAK 2">HYTAK 2 </option>
            <option value="HYTAK 5">HYTAK 5 </option>
            <option value="HYTAK F3">HYTAK F3 </option>
            <option value="HYTAK F4">HYTAK F4 </option>
            <option value="HYTAK F5">HYTAK F5 </option>
            <option value="SEETUL 15">SEETUL 15 </option>
            <option value="SEETUL 22">SEETUL 22 </option>
            <option value="SEETUL 32">SEETUL 32 </option>
            <option value="SEETUL 46">SEETUL 46 </option>
            <option value="SEETUL 64">SEETUL 64 </option>
            <option value="SEETUL 100">SEETUL 100 </option>
            <option value="SEETUL N32">SEETUL N32 </option>
            <option value="SEETUL N68">SEETUL N68 </option>
            <option value="HYCOM C 100">HYCOM C 100 </option>
            <option value="HYCOM C 150">HYCOM C 150 </option>
            <option value="HYCOM C 220">HYCOM C 220 </option>
            <option value="HYCOM C 320">HYCOM C 320 </option>
            <option value="HYCOM C 460">HYCOM C 460 </option>
            <option value="TISON 2">TISON 2</option>
            <option value="TISONA M2">TISONA M2</option>
            <option value="HP PLUTEK 1">HP PLUTEK 1 </option>
            <option value="HP PLUTEK 2">HP PLUTEK 2</option>
            <option value="HP LITHON 2">HP LITHON 2 </option>
            <option value="HP LITHON 3">HP LITHON 3 </option>
            <option value="HP LITHON M2">HP LITHON M2 </option>
            <option value="AP3 ( All Purposes )">AP3 ( All Purposes )</option>
            <option value="MP3 ( Multi Purpose )">MP3 ( Multi Purpose )</option>
            <option value="HYTAK ( Open Gear Greases )">HYTAK ( Open Gear Greases ) </option>
            <option value="HYLUBE HDX MULTIGRADE 20W40">HYLUBE HDX MULTIGRADE 20W40 </option>
            <option value="HYLUBE HDX MULTIGRADE 20W50">HYLUBE HDX MULTIGRADE 20W50 </option>
            <option value="HP MILCY POWER 15W40">HP MILCY POWER 15W40 </option>
            <option value="HP RACER 4">HP RACER 4 </option>
            <option value="HYLUBE X3 10W">HYLUBE X3 10W </option>
            <option value="HYLUBE X3 30">HYLUBE X3 30</option>
            <option value="HYLUBE X3 40">HYLUBE X3 40 </option>
            <option value="HYLUBE X3 50">HYLUBE X3 50 </option>
            <option value="HP NATURAL GAS ENGINE OIL L 40">HP NATURAL GAS ENGINE OIL L 40</option>
            <option value="HP NATURAL GAS ENGINE OIL L15W 40">HP NATURAL GAS ENGINE OIL L15W 40</option>
            <option value="HP NATURAL GAS ENGINE OIL A 40">HP NATURAL GAS ENGINE OIL A 40 </option>
            <option value="HP ROLMET N34">HP ROLMET N34 </option>
            <option value="HP ROLMET 40">HP ROLMET 40 </option>
            <option value="HP METAQUENCH 39">HP METAQUENCH 39 </option>
            <option value="HP METAQUENCH 40">HP METAQUENCH 40 </option>
            <option value="HP METAQUENCH 42">HP METAQUENCH 42 </option>
            <option value="HP METAQUENCH 43">HP METAQUENCH 43 </option>
            <option value="HP METAQUENCH 44">HP METAQUENCH 44 </option>
            <option value="HP KOOLKUT 40">HP KOOLKUT 40 </option>
            <option value="HP KOOLKUT 70">HP KOOLKUT 70 </option>
            <option value="HP KOOLKUT 80">HP KOOLKUT 80 </option>
            <option value="HP TRIMOFIN 20">HP TRIMOFIN 20 </option>
            <option value="HP TRIMOFIN 21">HP TRIMOFIN 21</option>
            <option value="HP TRIMOFIN 23">HP TRIMOFIN 23</option>
            <option value="HP TRIMOFIN 54">HP TRIMOFIN 54</option>
            <option value="HP TRIMOFIN 55">HP TRIMOFIN 55</option>
            <option value="HP TRIMOFIN 56">HP TRIMOFIN 56 </option>
            <option value="HP RUSTOP 173">HP RUSTOP 173 </option>
            <option value="HP RUSTOP 184">HP RUSTOP 184 </option>
            <option value="HP RUSTOP 274">HP RUSTOP 274 </option>
            <option value="HP RUSTOP 276">HP RUSTOP 276</option>
            <option value="HP RUSTOP 285">HP RUSTOP 285</option>
            <option value="HP RUSTOP 286">HP RUSTOP 286</option>
            <option value="HP RUSTOP 287">HP RUSTOP 287</option>
            <option value="HP RUSTOP S">HP RUSTOP S</option>
            <option value="HP DRAWMET 15">HP DRAWMET 15</option>
            <option value="HP DRAWMET 15S">HP DRAWMET 15S</option>
            <option value="HP DRAWMET 22">HP DRAWMET 22</option>
            <option value="HP HYTHERM 500">HP HYTHERM 500</option>
            <option value="HP HYTHERM 600">HP HYTHERM 600</option>
            <option value="HP Trasformer Oil">HP Trasformer Oil</option>
            <option value="HP ELASTO 165">HP ELASTO 165</option>
            <option value="HP ELASTO 245">HP ELASTO 245</option>
            <option value="HP ELASTO 255">HP ELASTO 255</option>
            <option value="HP ELASTO 541">HP ELASTO 541</option>
            <option value="HP ELASTO 590">HP ELASTO 590</option>
            <option value="HP ELASTO 710">HP ELASTO 710</option>
            <option value="HP ELASTO 715">HP ELASTO 715</option>
            <option value="HP HYTHERM 600">HP HYTHERM 600</option>
            <option value="HP SN 150">HP SN 150</option>
            <option value="HP SN 500">HP SN 500</option>
            <option value="YANTROL TS 32">YANTROL TS 32</option>
            <option value="YANTROL TS 68">YANTROL TS 68</option>
            <option value="YANTROL TS 100">YANTROL TS 100 </option>
            <option value="YANTROL TS 220">YANTROL TS 220 </option>
            <option value="YANTROL C 32">YANTROL C 32</option>
            <option value="STANTROL 1">STANTROL 1</option>
            <option value="STANTROL 3">STANTROL 3</option>
            <option value="SPINTEK 5">SPINTEK 5</option>
            <option value="SPINTEK 12">SPINTEK 12</option>
            <option value="SPINTEK 15">SPINTEK 15</option>
            <option value="SPINTEK 22">SPINTEK 22</option>
            <option value="Other">Other</option>
          </select> */}
           {/* <label htmlFor="quantity" className="text-lg w-full font-bold mt-6">Select Quantity:</label> */}
           {/* <select name="Quantity" id="Quantity" className="w-full border rounded-lg p-2">

            <option value=""> Quantity </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
          </select> */}
          {/* <label htmlFor="Address" className="text-lg w-full font-bold mt-6">Delivery Address:</label> */}
          <textarea
              name="address"
              placeholder="Delivery Address"
              rows={5}
              value={form.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            ></textarea>
           {/* <label htmlFor="Message" className="text-lg w-full font-bold mt-6">Your Message:</label> */}
           <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Get in touch with us for any inquiries, product information, or support. Our team is here to assist you with all your lubrication needs. Feel free to reach out via phone, email, or by filling out the contact form. We look forward to hearing from you and providing you with the best service possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Our Contact Information</h3>
              <p className="mb-2">Email: hpclcfasatna@gmail.com</p>
              <p className="mb-2">Address: Vikas Automobiles, Infront of Bajaj Finance Gahara Nala, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001</p>
              <div className="flex items-center gap-3">
                <img src={call} alt="Call Us" className="h-6 w-6" />
                <a href="tel:+9827003016" target="_blank" rel="noopener noreferrer">
                  <p className="text-blue-500 hover:text-blue-700 ">Phone: 9827003016</p>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Our Email</h3>
              <div className="flex items-center gap-3">
                <img src={mail} alt="email us" className="h-6 w-6" />
                 <a href="mailto:hpclcfasatna@gmail.com" target="_blank" rel="noopener noreferrer">
                <p className="text-blue-500 hover:text-blue-700 ">Email: hpclcfasatna@gmail.com</p>
              </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Instagram</h3>
              <div className="flex items-center gap-3">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
                <a href="https://www.instagram.com/hpclcfasatna/" target="_blank" rel="noopener noreferrer">
                  <p className="text-purple-500 hover:text-purple-700 ">hpclcfasatna</p>
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Twitter</h3>
              <div className="flex items-center gap-3">
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
                <a href="https://twitter.com/cfa_hp_satna" target="_blank" rel="noopener noreferrer">
                  <p className="text-blue-500 hover:text-blue-700 ">cfa_hp_satna</p>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4">Connect with us on Whatsapp</h3>
              <div className="flex items-center gap-3">
                <img src={whatsapp} alt="whatsapp" className="h-6 w-6" />
<a href="https://wa.me/9827003016" target="_blank" rel="noopener noreferrer">
                  <p className="text-green-500 hover:text-green-700 ">9827003016</p>
                </a>
              </div>
            </div>
           
          </div>
           
        </div>
        <div className="w-full h-50 bg-white rounded-2xl shadow-lg p-6 md:col-span-2">
              <p className="text-center py-2 font-bold text-lg">Our Address</p>
              <p className="text-center py-2">Vikas Automobiles, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001</p>
             <p> <a href="tel:+9827003016" className="text-blue-500 hover:text-blue-700">
                Call us : 9827003016
              </a></p>
            <p className="items-center">  <a href="http://maps.google.com/?q=Vikas Automobiles, Near Yadav Dharmkanta, Rewa Road, Satna, Madhya Pradesh 485001" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-center py-2 ">View on Map</a></p>
            </div>

      </div>
     </div>
     
    </>
  );
}