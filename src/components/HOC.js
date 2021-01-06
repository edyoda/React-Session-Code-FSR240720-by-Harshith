import React, { Component } from 'react';

const Button = ({ onClick, text, style }) => {
    return (
        <button
            style={style}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

// const higherOrderComp = (Comp) => {
//     return (props) => {
//         return <Comp {...props}/>
//     }
// }


const buttonWithStyles = (Comp, name = "default") => {
    const colorStyles = [
        {
            name: "success",
            backgroundColor: "green",
            color: "#fffff"
        },
        {
            name: "default",
            backgroundColor: "black",
            color: "#fff"
        },
        {
            name: "info",
            backgroundColor: "blue",
            color: "#fff"
        },
        {
            name: "warning",
            backgroundColor: "yellow",
            color: "#fff"
        },
        {
            name: "danger",
            backgroundColor: "red",
            color: "#fff"
        },
    ]

    const { backgroundColor, color } = colorStyles.find(item => item.name == name)

    const buttonStyle = {
        backgroundColor: backgroundColor,
        padding: "10px 45px",
        fontSize: "1.25 rem",
        color: color
    }

    return (props) => {
        return <Comp  {...props} style={buttonStyle} />
    }


}


const NewButton = buttonWithStyles(Button)
const InfoButton = buttonWithStyles(Button, "info")
const WarningButton = buttonWithStyles(Button, "warning")
const DangerButton = buttonWithStyles(Button, "danger")

class HOC extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<>
            <h1>HOC Component</h1>
            <Button text="No Style Button" />
            <NewButton
                text="Default"
            />

            <InfoButton
                text="Info Button"
                onClick={() => alert("Clicked on Info")}
            />

            <WarningButton
                text="Warning Button"
                onClick={() => alert("Clicked on Warning")}
            />

            <DangerButton
                text="Danger Button"
                onClick={() => alert("Clicked on Danger")}
            />
        </>);
    }
}

export default HOC;


// const higherOrderComp = (Comp) => {
//     return (props) => {
//         return <Comp {...props}/>
//     }
// }

// const hocFunc = (funcName) => {
//     const style = {}

//     return funcName(style)
// }

// const callMe = (st) => {
//     return at
// }

// hocFunc(calMe)
