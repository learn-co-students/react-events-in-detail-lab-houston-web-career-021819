import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

// mouseCoordinates is args
ReactDOM.render(
  <div>  
    <CoordinatesButton onReceiveCoordinates={ /*mouseCoordinates */array => console.log(array/*mouseCoordinates */) }  />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
