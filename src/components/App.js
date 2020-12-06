import React from "react";
import SearchBar from "./SearchBar";
import { SearchImages } from "../Api/Unsplash";
import ImageList from "./ImageList";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  async onSubmit(term) {
    const response = await SearchImages(term);
    this.setState({ images: response.data.results });
  }


  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
