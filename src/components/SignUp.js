import React, { Component } from 'react';
import { Redirect } from "react-router"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reDirectToAbout: false
        }

    }

    firstName = React.createRef()
    lastName = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault()

        /*Api */
        debugger
        console.log(this.props)
        this.setState({ reDirectToAbout: true })
        //     , () => {
        // useHistory.push("/about")
        //     return this.props.history.push("/about")
        // }
        console.log("Ref", this.firstName.current.value, this.lastName.current.value)
    }
    render() {
        let name = this.state.reDirectToAbout ? <Redirect to="/about" /> : ""
        // this.state.reDirectToAbout && <Redirect to="/about" />

        return (<>
            <h1>Create Account UnControlled Component</h1>

            {/* <form onSubmit={(e) => this.handleSubmit(e)}> */}
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name
            </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    ref={this.firstName}
                />

                <br />
                <label>
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    ref={this.lastName}
                />
                <br />


                <input type="submit" />
            </form>

        </>);
    }
}

export default SignUp;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: ""
        }
    }

    handleChange = (event) => {
        console.log("handleChange", event.target.value, event.target.name)
        const { name, value } = event.target
        this.setState({
            [name]: value //[variablename] to use a variable name as a key in an object
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //post the api  axios.post().then(response => )
        console.log("Handle Submit", this.state)
    }

    render() {
        let { firstName, lastName, age } = this.state
        return (<>
            <h1>Create an Account</h1>

            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    Age
                </label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    value={age}
                    onChange={this.handleChange}
                />
                <br />
                <input type="submit" />
            </form>
        </>);
    }
}



// const SignUp = () => {
// const [firstName, setFisrtName] = React.useState("")
// const [lastName, setLastName] = React.useState("")
// const [age, setAge] = React.useState("")


// const handleChange = (event) => {

//     const { name, value } = event.target

// }

//     return ( <>
//     <h1>Create an Account</h1>

// <form onSubmit={this.handleSubmit}>
//     <label>
//         First Name
//     </label>
//     <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         placeholder="Enter First Name"
//         value={firstName}
//         onChange={(e) => setFisrtName(e.target.value)}
//     />
//     <br />
//     <label>
//         Last Name
//     </label>
//     <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         placeholder="Enter Last Name"
//         value={lastName}
//         onChange={this.handleChange}
//     />
//     <br />
//     <label>
//         Age
//     </label>
//     <input
//         type="number"
//         id="age"
//         name="age"
//         placeholder="Age"
//         value={age}
//         onChange={this.handleChange}
//     />
//     <br />
//     <input type="submit" />
// </form>
//     </> );
// }

// export default SignUp;