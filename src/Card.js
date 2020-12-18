import React from 'react';
import classes from "./Card.module.css"//CSS modules Import

const Card = ({ carTitle, thumbnailImg }) => { // Destructuring carTitle, thumbnailImg
    return (<div className="Card">
        <img src={thumbnailImg} className={classes.Thumbnail} alt="Car" />
        <h3 className={classes.CardTitle}>{carTitle}</h3>
    </div>);
}

export default Card;