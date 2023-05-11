const React = require("react");

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Pokemon App!</h1>
        <br></br>
        <h3><a href="/pokemon">Click here to get started</a></h3>
      </div>
    );
  }
}

module.exports = Homepage;
