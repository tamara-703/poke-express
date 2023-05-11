const React = require('react');

class New extends React.Component {
    render()
    {
        return (
           <div>
             <h1>Create new Pokemon</h1>
            <form action='/pokemon' method='POST'>
                <input type='text' placeholder='enter pokie name' name='name'></input>
                <input type='submit' value='create'></input>
            </form>
            <br></br>
            <a href='/pokemon'>Back</a>
           </div>
        )
    }
}

module.exports = New;
