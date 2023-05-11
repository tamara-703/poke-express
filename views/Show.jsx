const React = require('react');

class Show extends React.Component {
    render()
    {
        const pokemonInfo = this.props.pokemon;
        const width = "300px";
        const ext = '.jpg';

        return (

            <div>
                {pokemonInfo ?
                <div>
                    <h3>Name: {pokemonInfo.name}</h3>
                    <img src={`${pokemonInfo.img}${ext}`} alt={pokemonInfo.name} width={width}></img>
                    <br></br>
                    <a href='/pokemon'>Back</a>
                    </div>
                : <div>no information found. <a href='/'>Return to homepage</a></div>}
            </div>

        )
    }
}

module.exports = Show;
