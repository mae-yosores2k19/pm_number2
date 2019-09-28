import React, { Component } from 'react'

class SimpleCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = { num1: 0, num2: 0, answer: " "}
    }
    handleFirstNum = (e) => {
        this.setState({ num1: e.target.value });
    }
    handleSecondNum = (e) => {
        this.setState({ num2: e.target.value });
    }
    handleOption = (e) => {
        e.preventDefault();
        if(e.target.value === "+"){
            this.setState({answer:this.state.num1 + this.state.num2})
        }
        if(e.target.value === "-"){
            this.setState({answer:this.state.num1 - this.state.num2})
        }
        if(e.target.value === "*"){
            this.setState({answer:this.state.num1 * this.state.num2})
        }
        if(e.target.value === "/"){
            this.setState({answer:this.state.num1 / this.state.num2})
        }
        if(e.target.value === "^"){
            this.setState({answer:this.state.num1 ** this.state.num2})
        }
        
        
    }

    render() {
        return (
            <center>
                <div>
                    {this.state.num1}
                    {this.state.num2}
                    <form>
                        <input style={{ color: "black",fontSize:"20px", borderRadius: "10px", borderStyle: "inset" }} type="text" placeholder="Enter Number" onChange={(e) => this.handleFirstNum(e)}></input><span></span>
                        <input style={{ color: "black",fontSize:"20px", borderRadius: "10px", borderStyle: "inset" }} type="text" placeholder="Enter Number" onChange={(e) => this.handleSecondNum(e)}></input>

                    </form>

                    <div style={{ color: "black", width: "50px",fontSize:"20px" }} >Result: {this.state.answer}</div><br></br>
                    <div>
                        <select onClick={(e)=>this.handleOption(e)}>
                            <option value="+">Add</option>
                            <option value="-">Subtract</option>
                            <option value="*">Multiply</option>
                            <option value="/">Divide</option>
                            <option value="^">Exponent</option>
                        </select>
                    </div>
                </div>
            </center>

        )
    }
}
export default SimpleCalculator;