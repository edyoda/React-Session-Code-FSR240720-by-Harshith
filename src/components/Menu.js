import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Menu = ({ count, cartProducts }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">SHOP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <Link
                            className="nav-link"
                            to="/"
                        >

                            Home
                        </Link>

                    </li>
                    <li className="nav-item active ">
                        <Link
                            className="nav-link"
                            to="/cart"
                        >

                            Cart<sup>{count}</sup>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>);
}

const mapStateToProps = (globalStore) => ({
    count: globalStore?.cartProducts?.length,
    cartProducts: globalStore?.cartProducts
})

export default connect(mapStateToProps)(Menu);

