import React, { Component } from "react";
import SimpleCalculator from "./SimpleCalculator";
import "./Style.css";


class App extends Component {
  render() {
    return (
      <div>
          <link
          rel="stylesheet"
          href="Style.css"
        />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <SimpleCalculator />
      </div>
    );
  }
}
export default App;
