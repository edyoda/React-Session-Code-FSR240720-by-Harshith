import React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/actionCreator';

const Card = ({ product, addProductToCart, index }) => {
    let { name, brand, description, preview, id, price } = product
    return (<div className="card col-3 m-2" key={index}>
        <img className="card-img-top" src={preview} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{name} - {id}</h5>
            <p className="card-text">{description?.substring(0, 20)}</p>
            <p className="black">{brand}</p>
            <p className="black-10 card-p">Rs. {price} </p>
            <button className="btn-primary" onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
    </div>);
}

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addProduct(product))
})

export default connect(null, mapDispatchToProps)(Card);

// connect(mapStatetoProps, mapDispatchToProps)
// mapStatetoProps => Used to consume the values from Global Store
// mapDispatchToProps => Used to dispatch our data to Action