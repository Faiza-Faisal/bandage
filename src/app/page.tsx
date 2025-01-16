import Navbar from "@/components/Navbar";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <div className="header font-semibold bg-blue-950 text-white py-4 flex items-center justify-around">
        <p><IoCallOutline className="inline h-6 w-6" /> (255) 555-0118</p>
        <p> <CiMail className="inline h-6 w-6" /> michelle.rivera@example.com</p>
        <p>Follow Us  and get a chance to win 80% off</p>
        <p>Follow Us  :
          <FaInstagram className="inline h-6 w-6 mx-2"/>
          <FaYoutube  className="inline h-6 w-6 mx-2"/>
          <FaFacebook  className="inline h-6 w-6 mx-2"/>
          <FaTwitter  className="inline h-6 w-6 mx-2"/>
        </p>
      </div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
