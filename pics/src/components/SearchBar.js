import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: '' };

    //First way to solve error
    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.term);
    }


    
    // onFormSubmit(event){
    //     event.preventDefault();

    //     console.log(this.state.term);
    // }

    // <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
               


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value }) } />
                    </div>
                </form>
            </div>
            );
    }
}

export default SearchBar;