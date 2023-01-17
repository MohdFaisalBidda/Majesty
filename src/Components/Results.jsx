import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider.js";
import Loader from "./Loader.jsx";


const Results = () => {
  const { allResult, imgResult, newsResult, searchTerm, isLoading, getallResult, getImgResult, getNewsResult } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      getallResult(`?q=${searchTerm}&pageSize=40`);
    }
    if (location.pathname === "/images") {
      getImgResult(`?q=${searchTerm}&pageSize=40`);
    }
    if (location.pathname === "/news") {
      getNewsResult(`?q=${searchTerm}&pageSize=40`);
    }

    console.log(location.pathname);
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loader />

  switch (location.pathname) {
    case '/':
      return (
        <div className="min-h-screen flex justify-center flex-wrap space-y-6 sm:px-56 overflow-hidden">
          {allResult?.value?.map(({ title, url }, i) => {
            return (
              <div key={i} className=" w-full h-full px-4 my-4">
                <a href={url} target="_blank" rel="noreferrer">
                  <p className="text-sm dark:text-gray-400 break-words">{url ? url.slice(0,100): url}</p>
                </a>
                <p className="text-xl hover:underline text-purple-500 font-primary dark:text-secondary">
                  <a href={url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </p>
              </div>
            )
          })}
        </div>
      )

    case '/news':
      return (
        <div className="w-full min-h-screen flex justify-center flex-wrap space-y-6 sm:px-56">
          {newsResult?.value?.map(({ url, title, description },i) => {
            return (
              <div key={i} className=" w-full h-full px-4 my-4 py-2">
                <h4 className="dark:text-gray-400 break-words">{title}</h4>
                <a href={url} target="_blank" rel="noreferrer">
                  <h3 className="text-xl text-purple-500 dark:text-secondary hover:underline break-words">{url ? url.slice(0,45):url}</h3>
                </a>
                <div className="flex flex-wrap dark:text-gray-300 text-gray-500 break-words">
                  <p >{description ? description.slice(0, 100) : description}...</p>
                </div>

              </div>
            )
          })}
        </div>
      )

    case '/images':
      return (
        <div className="min-h-screen grid xl:grid-cols-5 gap-5 text-center mt-8 ">
          {imgResult?.value?.map(({ url, title, thumbnail }, i) => {
            return (
              <div key={i} className="py-4 mx-4 shadow-xl shadow-slate-200 dark:shadow-xl dark:shadow-black">
                <img src={thumbnail} alt={title} loading="lazy" className=" h-60 object-contain mx-auto" />
                <div className="">
                  <a className="" href={url} key={i} target="_blank" rel="noreferrer">
                    <p className="text-purple-500 dark:text-secondary mt-2 hover:underline">{title}</p>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )

    default:
      return 'Error'
  }
};

export default Results;
