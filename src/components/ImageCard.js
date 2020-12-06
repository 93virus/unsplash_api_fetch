import React from "react";

class ImageCard extends React.Component {
  constructor() {
    super();
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
    this.state = { span: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ span: spans });
  }

  render() {
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img
          ref={this.imageRef}
          alt={this.props.image.alt_description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
