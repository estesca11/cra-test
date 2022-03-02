import React from "react";
import style from './button2.module.css';

function Button({ size }) {
    if (size === 'big') {
        return <button className={`${style.button} ${style.big}`}>Big</button>;
    } else {
        return <button className={`${style.button} ${style.small}`}>Small</button>;
    }
}
console.log(style);
export default Button;