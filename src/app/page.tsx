import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import Categorys from "@/components/Categorys";
import Music from "@/components/Music";
import Products from "@/components/Products";


export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categorys />
      <Products/>
      <Music />
      
    </div>
  );
}
