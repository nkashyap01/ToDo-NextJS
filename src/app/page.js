"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Todo from "../../components/Todo";

const Home = () => {

  return (
    <main >
      <form className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 max-auto">
        <input type="text" name="title" placeholder="Enter title" className="border-2 w-full px-3 py-2" />

        <textarea name="description" placeholder="Enter Description" className="border-2 w-full px-3 py-2" />
        <button type="submit" className="bg-orange-600 px-9 py-3 text-white"> Add Todo</button>

      </form>



      <div className="relative overflow-x-auto w-[60%] mt-24 mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
             <Todo/>
            
          </tbody>
        </table>
      </div>


    </main>
  );
};

export default Home;
