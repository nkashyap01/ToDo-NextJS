import React from 'react'

import nature_image from "../../../assests/images.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Image src={nature_image} alt = "" />
    </div>
  )
}

export default page