import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // constructor(props) {
    //     super(props) {
    //         this.state = {};
    //     }
    // }

    render() {
        return (
            <div>
            <h1>Is this working?</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));