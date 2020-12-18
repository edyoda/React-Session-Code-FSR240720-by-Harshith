import React, { Component } from 'react';//prefix : imrc
import "./App.css";
import Card from './Card';
import Header from './Header';
import { BrandName, carsData } from "./CommonData"

//prefix class component = "ccc" (prefix is a shortcut to generate code)
class App extends React.Component {// Component Name must be Pascal Case
  constructor(props) {
    super(props)
    console.log("First Call in APP")
    this.state = {
      count: 0,
      name: "Ajay",
      showHideCard: true
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    //Normal Function
  }

  handleIncrement = () => {
    //Arrow Function
    this.setState({ count: this.state.count + 1 }, () => console.log("Handle Increment", this.state.count))
  }

  handleDecrement = () => {
    const updatedValue = this.state.count - 1
    this.setState({ count: (updatedValue <= 0 ? this.state.count : updatedValue) })
  }

  showHideCardMethod = () => {
    this.setState({ showHideCard: !this.state.showHideCard })
  }

  render() {
    console.log("Second Call in APP")
    let { count, showHideCard } = this.state
    return (
      <div className="App">
        {/* Header Component*/}

        <Header headerValue={BrandName} />
        <h2>{count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>

        <button onClick={this.handleDecrement}>Decrement</button>

        <button onClick={this.showHideCardMethod}>Show/Hide</button>

        {/* Grids Component --> Show / Hide*/}

        {
          showHideCard ? <div className="CardGrid">
            {carsData.map((item) => <Card carTitle={item.title} thumbnailImg={item.thumbnail} />)}
          </div> : ""
        }


        {/* Footer Component*/}
        <Footer footerTitle={"Contant Us for more Information"} />
      </div>
    )
  }
}

export default App;

const styleMyFooterComponent = {
  fontSize: "24px"
}

const Footer = (anyProps) => <h1 style={styleMyFooterComponent}>{anyProps.footerTitle}</h1>//Inline Styling

