import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };
  // Generally push all ajax calls in DidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }
  // // Runs when component updates; ie such as a state change event
  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }
  // // When component receives new props this will
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
