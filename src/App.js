import React, { Component } from 'react';//prefix : imrc
import "./App.css";
import Card from './Card';
import Header from './Header';
import { BrandName as BrandYourName, carsData } from "./CommonData"


//App is Parent
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headValue: "VW Showroom",
      flagEnable: true,
      count: 0
    }
    console.log("First Call in APP - Parent Constructor")
  }
  // componentDidMount() {
  //   console.log("Third Call in Header - Child componentDidMount")
  //   setTimeout(() => this.setState({
  //     headValue: "Bugatti Showroom",
  //     flagEnable: false
  //   }), 5000)
  // }

  // Update Phase - First Call
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate -  Update Phase")
    if (this.state.count !== nextState.count && nextState.count > 5) {
      return false
    } else return true
  }

  // Update phase - Called after render
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  render() {
    console.log("Second Call in APP - Parent render")
    let { headValue, flagEnable, count } = this.state
    return (<>
      {/* //Header as a child */}
      <Header
        headerValue={headValue}
        changeHeadValue={(value) =>
          this.setState({ headValue: value })
        }
      />

      <button onClick={() => this.setState({
        count: this.state.count + 1
      })}>
        Count click {count}
      </button>


      {
        flagEnable ? <h1>Loading...</h1> : ""
      }
    </>);
  }
}




export default App;





// //prefix class component = "ccc" (prefix is a shortcut to generate code)
// class App extends React.Component {// Component Name must be Pascal Case
//   constructor(props) {
//     super(props)
//     console.log("First Call in APP")
//     this.state = {
//       count: 0,
//       name: "Ajay",
//       showHideCard: true
//     }
//     this.handleIncrement = this.handleIncrement.bind(this)
//   }

//   handleIncrement() {
//     //Normal Function
//   }

//   handleIncrement = () => {
//     //Arrow Function
//     this.setState({ count: this.state.count + 1 }, () => console.log("Handle Increment", this.state.count))
//   }

//   handleDecrement = () => {
//     const updatedValue = this.state.count - 1
//     this.setState({ count: (updatedValue <= 0 ? this.state.count : updatedValue) })
//   }

//   showHideCardMethod = () => {
//     this.setState({ showHideCard: !this.state.showHideCard })
//   }

//   render() {
//     console.log("Second Call in APP")
//     let { count, showHideCard } = this.state
//     return (
//       <div className="App">
//         {/* Header Component*/}

//         <Header headerValue={BrandYourName} />
//         <h2>{count}</h2>
//         <button onClick={this.handleIncrement}>Increment</button>

//         <button onClick={this.handleDecrement}>Decrement</button>

//         <button onClick={this.showHideCardMethod}>Show/Hide</button>

//         {/* Grids Component --> Show / Hide*/}

//         {
//           showHideCard ? <div className="CardGrid">
//             {carsData.map((item) => <Card carTitle={item.title} thumbnailImg={item.thumbnail} />)}
//           </div> : ""
//         }


//         {/* Footer Component*/}
//         <Footer footerTitle={"Contant Us for more Information"} />
//       </div>
//     )
//   }
// }

// export default App;

// const styleMyFooterComponent = {
//   fontSize: "24px"
// }

// const Footer = (anyProps) => <h1 style={styleMyFooterComponent}>{anyProps.footerTitle}</h1>//Inline Styling

