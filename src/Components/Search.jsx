import React, { useState, useEffect } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider';
import Links from './Links'
import { useDebounce } from 'use-debounce';

const Search = () => {
  const [text, setText] = useState("Elon Musk");
  const {setSearchTerm}=useResultContext();
  const [debounceValue]=useDebounce(text,1000)

  useEffect(()=>{
    if(debounceValue) setSearchTerm(debounceValue);
  },[debounceValue])

  return (
    <>
    <div className='relative sm:ml-48 md:ml-72 xl:w-1/2 sm:-mt-10 xl:-mt-14 mx-2 mt-2'>
      <input
        value={text}
        className="sm:w-96 w-80  h-10 border rounded-full shadow-md outline-black bg-blue-200 dark:bg-primary dark:border-secondary dark:outline-secondary dark:text-secondary p-6 text-black dark:placeholder:text-secondary"
        placeholder='Search or Type URL'
        onChange={(e) => setText(e.target.value)}
      />
      {text && <button type='button' className='absolute top-3 -mx-6 text-xl dark:text-secondary' onClick={() => setText("")}>X</button>}
    </div>
      <Links />
      </>
  )
}

export default Search
