import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

/*const ImageList = (props) => {

    const image = props.images.map((image) => {
       return <img src={image.urls.regular} alt=""/>
    });

    return(
        <div>{image}</div>
    );
}*/

class ImageList extends React.Component {
  render() {
    const images = this.props.images.map((image) => (
      <ImageCard key={image.id} image={image}/>
    ));

    return (
      <div className="image-list">
        {images}
      </div>
    );
  }
}

export default ImageList;
