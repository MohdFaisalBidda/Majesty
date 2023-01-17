import React from 'react'

const Footer = () => {
  const date =new Date();
  return (
    <div className='text-center p-10 mt-auto '>
      <h1 className='text-lg text-blue-500 dark:text-secondary font-extralight font-primary'>{date.getFullYear()} Majesty,Inc.</h1>
    </div>
  )
}

export default Footer
