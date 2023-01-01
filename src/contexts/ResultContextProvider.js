import React, { createContext, useState } from "react";

const ResultContext =createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com/search';

export const ResultContextProvider =({children})=>{
    const [results,setResults] =useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');

    const getResults = async (type)=>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`,{
            method:'GET',
            headers: {
                'X-RapidAPI-Key': '1c192b33d2mshdba8d525f1b4261p1c5018jsn8bf2a4a3cc09',
                'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
              }
        });

        const data =await response.json();
        setResults(data)
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext =()=>useContext(ResultContext);