import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-around py-3 ">
     
     <h1 className="text-lg font-bold py-[20px]">To do app</h1>

        <ul className="flex flex-wrap gap-[50px]">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar