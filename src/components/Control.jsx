import React, { Component } from 'react';
import Finder from '../containers/Finder';
import Adder from '../containers/Adder';

class Control extends Component {
  getView = () => {
    switch(this.props.view) {
      case 'find':
        return <Finder />;
      case 'add':
        return <Adder />;
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
