"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
   
  return (
    <main >
      <form className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 max-auto">
       <input type="text" name="title" placeholder="Enter title" className="border-2 w-full px-3 py-2"/>

         </form>
     
    </main>
  );
};

export default Home;
