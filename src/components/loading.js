import React, { Component } from 'react';
import loading from './Spinner-1s-200px.gif';

const Spinner = () =>  {
    return (
    <div>
      <img src={loading} alt =" Loading"></img>
    </div>
  );
}

export default Spinner;
