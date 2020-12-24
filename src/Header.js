import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log("First Call in Header - Child constructor")
    }
    componentDidMount() {
        console.log("Third Call in Header - Child componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate -  Update Phase")
        if (this.props.headerValue !== nextProps.headerValue) {
            return false
        } else return true
    }
    render() {
        console.log("Second Call in Header - Child render")
        let { headerValue, changeHeadValue } = this.props
        return (<>

            <h1>{headerValue}</h1>
            <button
                onClick={
                    () =>
                        changeHeadValue("Skoda Showroom")
                }>
                Change Name
            </button>
        </>);
    }
}

export default Header;