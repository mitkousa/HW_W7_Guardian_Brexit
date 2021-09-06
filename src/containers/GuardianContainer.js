import React, {useState, useEffect} from "react";
import NewsDetail from "../components/NewsDetail";
import NewsSelector from "../components/NewsSelect";


const GuardianContainer = () => {
    const [news, setNews]= useState([])
    const [clickedNews, setClickedNews]= useState(null)
    useEffect(() => {
        getNews()
    },[0])
    
    
    const getNews = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(response => response.json())
        .then(data => setNews(data.response.results))
    }

    const onNewsClick = function(singleNews){
        setClickedNews(singleNews);
    }

    return (
            <div>
            <NewsSelector news={news} onNewsClick={onNewsClick} />
            {clickedNews ? <NewsDetail clickedNews={clickedNews} /> : null}
            </div>
            )
}

export default GuardianContainer