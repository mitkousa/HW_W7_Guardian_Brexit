import React from "react";

const NewsSelector = ({news, onNewsClick}) => {

    const handleClick = function(event) {
        const chosenNews = news[event.target.value];
        onNewsClick(chosenNews);
    }
    
    const newsList = news.map((singleNews, index) => {
      return <li value={index} key={index} onClick={handleClick}>"{singleNews.webTitle}"</li>
    })

    return (
        <div className = "newsList" >
            <h3>
            {newsList}
            </h3>
        </div>
    )
}

export default NewsSelector