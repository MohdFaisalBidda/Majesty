import React from 'react'

const Footer = () => {
  const date =new Date();
  return (
    <div className='text-center p-10 mt-10 border-t border-yellow-300 dark:border-yellow-500'>
      <h1 className='text-lg text-yellow-400 font-medium'>{date.getFullYear()} Majesty,Inc.</h1>
    </div>
  )
}

export default Footer
