"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Todo from "../../components/Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const [formData,setFormData] = useState({
  title:"",
  description:"",
});

const onChangeHandler = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setFormData(form => ({...form, [name]:value}));
  console.log(formData);

}
const onSubmitHandler = async (e) => {
  e.preventDefault();
  try{

    toast.success("From Submitted Successfully")
  }
  catch {

  }
}
  return (
    <main >
      <ToastContainer/>
      <form onSubmit = {onSubmitHandler} className="flex item-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 max-auto">
        <input value = {formData.title} onChange = {onChangeHandler} type="text" name="title" placeholder="Enter title" className="border-2 w-full px-3 py-2" />

        <textarea value = {formData.description} onChange = {onChangeHandler} name="description" placeholder="Enter Description" className="border-2 w-full px-3 py-2" />
        <button type="submit" className="bg-orange-600 px-9 py-1 text-white"> Add Todo</button>

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
             
             <Todo/>
             
             <Todo/>
             
             <Todo/>
            
          </tbody>
        </table>
      </div>


    </main>
  );
};

export default Home;
