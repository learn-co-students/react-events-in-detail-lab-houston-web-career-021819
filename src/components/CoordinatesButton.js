import React from "react";

export default class CoordinatesButton extends React.Component {
  render() {
    return (
      <button
        onClick={e => {
          let coordinates = [e.clientX, e.clientY];
          this.props.onReceiveCoordinates(coordinates);
        }}
      >
        Coordinates Button
      </button>
    );
  }
}
