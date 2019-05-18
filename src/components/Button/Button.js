import React from 'react';
import '../Button/Button.css';


const Button = (props) => (
    <button onClick={props.clicked} className="lighter_switcher">{props.text}</button>
);

export default Button;