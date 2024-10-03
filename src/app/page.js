"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [value, setValue] = useState(false);
  const router = useRouter();
  console.log(router);
  function handleNavigate() {
    router.push("products");
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1> welcome to Next JS </h1>
      <Link href="/products"> Navigate to product page </Link>
      <Link href="/account"> Navigate to account page </Link>
      <h1 className="mt-5 font-bold">
        {" "}
        Alternate way to navigating using use Router hook
      </h1>
      <button onClick={handleNavigate}>
        Navigate to product page using use Router hook
      </button>
    </main>
  );
};

export default Home;
