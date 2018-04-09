import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
          Hi this is the home.
          <button onClick={this.onSave}>
            Save
          </button>
        </div>
    );
  }
}

export default Home;
