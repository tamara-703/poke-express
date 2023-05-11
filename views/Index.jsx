const React = require("react");

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <div>
        <a href="/">Back to homepage</a><br></br>
        <a href='/pokemon/new'>Create new pokemon</a>
        {pokemon ? (
          pokemon.map((pokie, i) => {
            return (
              <div key={i}>
                <h3>Name: <a href={`/pokemon/${i}`}>{pokie.name}</a></h3>
                <br></br>
              </div>
            );
          })
        ) : (
          <div>
            couldn't find any information. <a href="/">Return to homepage</a>
          </div>
        )}
      </div>
    );
  }
}

module.exports = Index;
