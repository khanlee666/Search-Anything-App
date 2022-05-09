import React, { Component } from 'react'
import ShearchBar from "./SearchBar/ShearchBar";
import ImageList from "./ImageList/ImageList";
import "./App.css";
import axios from "axios";

class App extends Component {

  state={
    images:[]
  }

  onSearchImage = async (search) => {
    const result = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: search
      },
      headers: {
        Authorization: `Client-ID Vc1QTFNz827jc4b-t5P_qe-EyqaM0TWOX1Zt_-vPx5U`
      }
    })
    this.setState({
      images: result.data.results
    })
  }
  render() {
    return (
      <div className="App-Container">
        <ShearchBar onSearchImage={this.onSearchImage} />
        <ImageList images = {this.state.images}/>
      </div>
    ); 
  }

}

export default App;





