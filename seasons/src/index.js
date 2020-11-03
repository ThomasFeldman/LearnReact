import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //This is the only time you would ever do direct assignment or "state = something",
        //when you initialize it. To change values later on, always use this.setState({new value})
        this.state = { lat: null, long: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
                this.setState({long: position.coords.longitude})
            },
            (err) => console.log(err)
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br/>
                Longitude: {this.state.long}
            </div>
            );

    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);