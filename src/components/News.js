import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2dcb017ac2724f14ac1cb50700166f4f"
        let data=await fetch(url);
        let parseData= await data.json();
        console.log(parseData)
        
        this.setState({articles : parseData.articles})
    }

    
  render() {
    function handlePrevious(){
        
        console.log("previous  clicked...")

    }
    function handleNext(){
        console.log("Next clicked")
    }
    return (
      <div className='container my-3 '>
        <h2>NewsMaina - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return(

                    <div className='col-md-4'>
                        <NewsItem  title ={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={ element.url}/>
                    </div>
            )
        }
        )}
           
            
        </div>
    
       <div className='container d-flex justify-content-between'>
       <button type="button" className="btn btn-dark" onClick={handlePrevious}>&larr; Previous</button>
       <button type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
       </div>
      
      </div>
    )
  }
}

export default News
