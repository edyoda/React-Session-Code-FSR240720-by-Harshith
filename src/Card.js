import React from 'react';

const Card = ({ carTitle, thumbnailImg }) => { // Destructuring carTitle, thumbnailImg
    return (<div className="Card">
        <img src={thumbnailImg} className="Thumbnail" alt="Car" />
        <h3 className="CardTitle">{carTitle}</h3>
    </div>);
}

export default Card;