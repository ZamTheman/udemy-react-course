import React from "react";
import './Card.css';


export interface Props  { 
    children: React.ReactNode;
    className: string;
}

const Card: React.FC<Props> = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;