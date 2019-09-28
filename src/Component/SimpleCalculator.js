import React, { Component } from "react";

class SimpleCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, answer: " " };
  }
  handleFirstNum = e => {
    this.setState({ num1: e.target.value });
  };
  handleSecondNum = e => {
    this.setState({ num2: e.target.value });
  };
  handleOption = e => {
    e.preventDefault();
    if (e.target.value === "+") {
      this.setState({ answer: Number(this.state.num1) + Number(this.state.num2 )});
    }
    if (e.target.value === "-") {
      this.setState({ answer: Number(this.state.num1) - Number(this.state.num2) });
    }
    if (e.target.value === "*") {
      this.setState({ answer: Number(this.state.num1) * Number(this.state.num2) });
    }
    if (e.target.value === "/") {
      this.setState({ answer: Number(this.state.num1) / Number(this.state.num2)});
    }
    if (e.target.value === "^") {
      this.setState({ answer: Number(this.state.num1) ** Number(this.state.num2)});
    }
  };

  render() {
    return (
      <div>
        <center style={{ paddingTop: "20%" }}>
          <div class="ui raised card " >
            <div
              class="content"
              style={{
                background:
                  "linear-gradient(rgba(255,255,255,0.5),rgba(10,255,10,0.5)) , url(" +
                  "https://previews.123rf.com/images/hermandesign2015/hermandesign20151801/hermandesign2015180100439/93381085-two-cute-pandas-in-a-bamboo-forest.jpg" +
                  ") ",
                backgroundSize: "cover",paddingBottom:"40%"
              }}
            >
              <center>
              <h1 style={{color:"red"}}> Basic Calculator </h1>
                <div>
                  
                  <form>
                    <div class="ui  focus left icon input">
                      <input
                        style={{
                          color: "black",
                          borderStyle: "1px solid inset"
                        }}
                        type="number"
                        placeholder="Enter Number"
                        onChange={e => this.handleFirstNum(e)}
                      ></input>
                      <i aria-hidden="true" class="hashtag icon"></i>
                    </div>
                    <span></span>
                    <br/>
                    <br/>
                    <div class="ui  focus left icon input">
                    <input
                      style={{
                      }}
                      type="number"
                      placeholder="Enter Number"
                      onChange={e => this.handleSecondNum(e)}
                    ></input>
                     <i aria-hidden="true" class="hashtag icon"></i>
                    </div>
                  </form>

                  <div  class="ui tiny teal message"
                    style={{width:"78%"}}
                  >
                    Result: {this.state.answer}
                  </div>
                  <br></br>
                  <div>

                      
                    <select onClick={e => this.handleOption(e)}>
                      <option value="null">Select Operation: </option>
                      <option value="+">Add</option>
                      <option value="-">Subtract</option>
                      <option value="*">Multiply</option>
                      <option value="/">Divide</option>
                      <option value="^">Exponent</option>
                    </select>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </center>
        
      </div>
    );
  }
}
export default SimpleCalculator;
