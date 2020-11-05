import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //This is the only time you would ever do direct assignment or "state = something",
        //when you initialize it. To change values later on, always use this.setState({new value})
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount() {
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!');
    }

    render() {

        if(!this.state.lat && this.state.errorMessage){
            return(
            <div> 
                Error: {this.state.errorMessage}
            </div>
            );
        }
        if(this.state.lat && !this.state.errorMessage){
            return(
                <div>
                    Latitude: {this.state.lat}
                </div>
            );
        }
        return(
            <div>
                Loading...
            </div>
        );
    };


}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);