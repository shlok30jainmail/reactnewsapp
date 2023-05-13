import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export default class News extends Component {
  
static defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
static propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string

}

// for capitalize first letter of any string 

capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  constructor(props){
    super(props);
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: true,
      page:1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsHaunter`
  }

  // async updated(){
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07358537db8e4ba0a7cf7fa537104a2a&page=1&pageSize=${this.props.pageSize}`;
  //   this.setState({loaging: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({loaging: false});

  //   // console.log(parsedData);
  //   this.setState({
  //     articles : parsedData.articles, 
  //     totalarticals: parsedData.totalResults,
  //   loading: false});
  // }


  async componentDidMount(){
    console.log("hi");
    // let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07358537db8e4ba0a7cf7fa537104a2a";
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07358537db8e4ba0a7cf7fa537104a2a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loaging: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loaging: false});

    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles, 
      totalarticals: parsedData.totalResults,
    loading: false});
   

  }


  handleNextClick = async()=>{

    if(!(this.state.page + 1 > Math.ceil(this.state.totalarticals/this.props.pageSize))){
        
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07358537db8e4ba0a7cf7fa537104a2a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loaging: true});
      let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({loaging: false});


    console.log("next");
    this.setState({
      page : this.state.page+1,
      articles: parsedData.articles,
      loading: false   
    })
  }
    

  }

  handlePreviousClick = async()=>{
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=07358537db8e4ba0a7cf7fa537104a2a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loaging: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({loaging: false});


    // console.log("next");
    this.setState({
      page : this.state.page-1,
      articles: parsedData.articles,
      loading: false
    })
  }

  render() {
    // console.log("shlok");
    // console.log(this.state.totalarticals);


    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsHaunter - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        { ! this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4  d-flex justify-content-center" key={element.url}> 
          {/* unique key is to be given at where , where we return somthing uniquely */}

           <NewsItem  title={element.title ? element.title.slice(0,45) : ""} description={element.description ? element.description.slice(0,88) : ""} imageUrl ={element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt}/>
         </div>
        })}
        
        </div>

        <div className="container  d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalarticals/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr; </button>
        </div>
      </div>
    )
  }
}
