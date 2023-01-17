import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();
const baseUrl1 = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI';
const baseUrl2 = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI';

export const ResultContextProvider = ({ children }) => {
    const [allResult, setallResult] = useState([]);
    const [imgResult, setimgResult] = useState([]);
    const [newsResult, setnewsResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c192b33d2mshdba8d525f1b4261p1c5018jsn8bf2a4a3cc09',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };

    const getallResult = async (type) => {
        setIsLoading(true);


        await fetch(`${baseUrl1}${type}`, options)
            .then(response => response.json())
            .then(response => setallResult(response))
            .catch(err => console.error(err));

        setIsLoading(false);
    }

    const getImgResult = async (type) => {
        setIsLoading(true);

        await fetch(`${baseUrl2}${type}`, options)
            .then(response => response.json())
            .then(response => setimgResult(response))
            .catch(err => console.error(err));

        setIsLoading(false);
    }


    const getNewsResult = async (type) => {

        setIsLoading(true);
        await fetch(`${baseUrl1}${type}`, options)
            .then(response => response.json())
            .then(response => setnewsResult(response))
            .catch(err => console.error(err));

        setIsLoading(false);
    }




    return (
        <ResultContext.Provider value={{ getallResult, getNewsResult, getImgResult, newsResult, allResult, imgResult, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);