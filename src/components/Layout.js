import React from 'react';
import Menu from "./Menu"

const Layout = ({ title, description, children, className }) => {
    return (<>
        <Menu />
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <div className={className}>{children}</div>
        </div>
    </>);
}

export default Layout;