import React, { useState,useEffect } from 'react';
import News from './News';
import Spinner from './loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const NewComponent  = (props) =>{
   
    const [page, setpage] = useState(1);
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [totalResults, settotalResults] = useState(0);

    const update =  async()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1cc2ca6a9f894a2db465700c266e49a3&page=${page}&pagesize=${props.pagesize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseddata = await data.json();
        props.setProgress(50);
        setarticles(parseddata.articles)
        settotalResults(parseddata.totalResults)
        setloading(false)
        props.setProgress(100);
      }
    
      useEffect(() => {
        return () => {
          document.title = `${props.category} - NewsMonkey`;
          update();
        };
      }, []);

    const fetchMoreData = async () => {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1cc2ca6a9f894a2db465700c266e49a3&page=${page+1}&pagesize=${props.pagesize}`;
        setpage(page + 1 )
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles))
        settotalResults(parseddata.totalResults)
      };
    return (
        <>
        
        <div className="container my-4">
            <div className="text-center" style={{margin : '40px 0px 40px 0px',marginTop:'90px' }}><h2>NewsMonkey - Top Headlines on {props.category} of the day</h2></div>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="row equal-height-column">
            { articles.map((element)=>{return(     
                        <div className="col-md-4" key={element.url}>
                        <News title={element.title?element.title.split(0,45):" "} description={element.description?element.description.split(0,88):" "} newsimage={element.urlToImage} newsurl={element.url} author={!element.author?"":element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
            )})}
            </div>
        </InfiniteScroll>
        </div>
        </>
         
            
      
    );
            } 


NewComponent.defaultProps = {
  country : 'us',
  pagesize  : 7 ,
  category : 'general'
}
    
NewComponent.propTypes = {
  country : PropTypes.string,
  pagesize : PropTypes.number,
  category : PropTypes.string,
}
export default NewComponent;
