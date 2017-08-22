import React, { Component } from 'react';
import Find from './Find';
import Add from './Add';

class Control extends Component {
  getView = () => {
    switch(this.props.view) {
      case 'find':
        return <Find />;
      case 'add':
        return <Add />;
      default:
        console.log('UNKNOWN VIEW');
        return <Find />;
    }
  }

  render() {
    return (
      <div className="Control">
        { this.getView() }
      </div>
    )
  }
}

export default Control;
