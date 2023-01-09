import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider.js";


const Results = () => {
  const { getResults, results, searchTerm, isLoading } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults('?q=javascript');
    // console.log(results);
  }, [])

  if (isLoading) return "Loading"

  switch (location.pathname) {
    case '/':
      return (
        <div className="flex justify-center flex-wrap space-y-6 sm:px-56">
          {results?.value?.map(({ title, url, description }) => {
            return (
              <div>
                <h3>{url}</h3>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      )

    case '/news':
      return 'news'

    case '/videos':
      return 'videos'

    case '/images':
      return 'images'

    default:
      return 'Error'
  }
};

export default Results;
