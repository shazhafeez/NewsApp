import React, { Component } from 'react';

const News = (props)=> {
    let {title,description,newsimage,newsurl,author,date,source} = props;
    return (
        <div className="container">
            <div class="card" >
              <div style={{display:'flex' , justifyContent:'flex-end',positon:'absolute',left:'0'}}> 
                <span class=" badge rounded-pill text-bg-danger ">{source}</span>
              </div>  
                <img src={newsimage} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">By:{author}</p>
                    <p class="card-text">Published:{date}</p>
                    <p class="card-text">{description}</p>
                    <a href={newsurl} target='_blank' class="btn btn-dark">More</a>
                </div>        
            </div>
        </div>
    );
  }


export default News;
