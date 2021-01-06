import React, { Component } from 'react';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<>
            Home Component

            <Child name="Venkat" />
        </>);
    }
}

export default Parent;

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Grand_Child name={this.props.name} />);
    }
}

class Grand_Child extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<h1>{this.props.name}</h1>);
    }
}