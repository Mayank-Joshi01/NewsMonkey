import React from 'react'
import loading from "./loading_gif.gif"

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="" height="100px" />
    </div>
  )
}


export default Spinner