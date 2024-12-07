import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Categorys from "@/components/Categorys";
import Music from "@/components/Music";
import Products from "@/components/Products";
import Flash from '@/components/Flash';


export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Flash/>
      <Categorys />
      <Products/>
      <Music />
      
      
    </div>
  );
}
