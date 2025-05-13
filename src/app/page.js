import HomePage from "@/components/HomePage/page";
import Test from "@/components/HomePage/Test";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <HomePage/>
      <Footer/>
{/* 
      <Test/> */}
    </div>
  );
}
