// Code DelayedButton Component Here
import React from "react";

export default class DelayedButton extends React.Component {
  render() {
    return (
      <button
        onClick={e => {
          setTimeout(() => {
            e.persist();
            this.props.onDelayedClick(e);
          }, this.props.delay);
        }}
      >
        Delayed Button
      </button>
    );
  }
}
