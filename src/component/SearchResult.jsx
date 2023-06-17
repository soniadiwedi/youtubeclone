

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LeftNavbar } from './LeftNavbar';
import { SearchResultVideoCard } from './SearchResultVideoCard';
import { ApiContext } from '../context/AppContextProvider';
import { fetchDataFromApi } from "../utilities/api";



export const SearchResult = () => {
  const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(ApiContext);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNavbar/>
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
  )
}
