import React from 'react';

export default class PageOne extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        This is Page Two
      </div>
    );
  }
}
