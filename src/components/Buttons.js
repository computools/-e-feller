import React from 'react';

const Button = props => (
  <div className={props.typeOfBtn}>
    <span>{props.title}</span>
  </div>
);

export default Button
