import React from "react";

export default class Device extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            maxValue: parseInt(this.props.device.maxValue),
            minValue: parseInt(this.props.device.minValue),
            currentValue: 30,
            tooHigh: false,
            tooLow: false,
            modal: false
        })
    }


    componentDidMount() {
        this.checkTemp()


    }

    checkTemp() {
        if (this.state.currentValue < this.state.minValue) {
            this.setState({ tooLow: true })

        }
        else { this.setState({ tooLow: false }) }
        if (this.state.currentValue > this.state.maxValue) {
            this.setState({ tooHigh: true })
        }
        else { this.setState({ tooHigh: false }) }

    }

    modalChoice = () => {
        this.setState({ modal: !this.state.modal })
    }

    onClick = () => {
        this.modalChoice();
        let currentValue = (this.state.maxValue + this.state.minValue) / 2
        this.setState({ currentValue }, this.checkTemp)
    }



    render() {

        return (
            <>
                <div className="device">
                    <p> {this.props.device.name}</p>
                    <p> Current value: {this.state.currentValue}</p>

                    {(this.state.modal) ?
                        <div>
                            <p>Are you sure? Have you done so and so?</p>
                            <button onClick={this.onClick}>Yes, reset</button>
                            <button onClick={this.modalChoice}>No, abort</button>
                        </div> :
                        <>
                            {(this.state.tooHigh) ? <><div className="alert-div">TOO HIGH <button className="alert-button" onClick={this.modalChoice}>Reset</button></div></> : null}
                            {(this.state.tooLow) ? <><div className="alert-div">TOO LOW <button className="alert-button" onClick={this.modalChoice}>Reset</button> </div></> : null}
                        </>}


                </div>

            </>
        )
    }
}