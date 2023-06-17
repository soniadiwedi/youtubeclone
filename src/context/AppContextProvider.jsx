import { createContext, useEffect, useState } from "react";
import {  fetchDataFromApi } from "../utilities/api";


export const ApiContext=createContext()

export const AppContextProvider=({children})=>{
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };
    return(
        <ApiContext.Provider value={{loading,setLoading,searchResults,selectedCategory,setSelectedCategory,mobileMenu,setMobileMenu}}>{children}</ApiContext.Provider>
    )
}
