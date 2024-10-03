import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1> Next JS post:{params.post}</h1>
    </div>
  )
}

export default page
