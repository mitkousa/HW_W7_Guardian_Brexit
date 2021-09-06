import React from "react";

const NewsDetail = ({clickedNews}) => {
    return (
        <>
        <div className="newsDetail">
        <hr></hr>
            <h3> |  {clickedNews.pillarName}  |  {clickedNews.sectionName}  |  {clickedNews.type}  |</h3>
            <h2> "{clickedNews.webTitle}" </h2>
            <h3><a href={clickedNews.webUrl}>Read full article >></a></h3>
        </div>
        </>
    )
  }
  
  export default NewsDetail;
  