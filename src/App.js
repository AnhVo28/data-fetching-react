import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios'
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs:[],
      loading: true
    }
  }

  componentDidMount(){
    this.performSearch()
  }

  performSearch=(text ='cat')=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${text}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(dataResponse =>{
        this.setState({
          gifs: dataResponse.data.data,
          loading: false
        })

      })
      .catch(err => {
        console.log('error fetching data and parsing data', err);
      })
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />
          }

        </div>
      </div>
    );
  }
}
