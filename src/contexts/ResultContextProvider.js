import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        // const response = await fetch(`${baseUrl}${type}`,{
        //     method:'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'd5ef813fc3msh0a8e53e0b1cbbf7p1ea8a7jsn425155b2c2b1',
        //         'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        //       }
        // });

        // const data =await response.json();
        // console.log(data);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1c192b33d2mshdba8d525f1b4261p1c5018jsn8bf2a4a3cc09',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        const data = await fetch(`${baseUrl}${type}`, options)
            .then(response => response.json())
            .then(response => setResults(response))
            .catch(err => console.error(err));
        console.log(data);
        
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);