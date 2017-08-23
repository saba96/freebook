import React, { Component } from 'react';
import Finder from './Finder';
import Add from './Add';

class Control extends Component {
  getView = () => {
    switch(this.props.view) {
      case 'find':
        return <Finder />;
      case 'add':
        return <Add />;
      default:
        console.log('UNKNOWN VIEW');
        return <Finder />;
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
