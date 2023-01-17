import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='fixed top-1/2 left-1/2  xl:fixed xl:top-1/2 xl:left-1/2 '>
      <HashLoader color="#309fdc" />
    </div>
  )
}

export default Loader
