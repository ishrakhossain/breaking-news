import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=8f040ff3428c407bbc12b93ee970d588'
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticles(data.articles)) ;       
   
    }, [])
    return (
        <div>
        <h1>Top headlines: {articles.length}</h1>   
        {
            articles.map(article => <News article = {article}></News>)
        } 
        
        </div>
    );
};

export default TopHeadline;