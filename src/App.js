import React from 'react';
import { Route, withRouter } from "react-router-dom";
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const PAGES = [
  {path: '/PageOne'},
  {path: '/PageTwo'}
]

class App extends React.Component {

  state = {
    currentPage: PAGES[0]
  }

  onClick = () => {
    const {currentPage:{path: currentPath}} = this.state;
    const nextPage = PAGES.find(({path: nextPath}) => nextPath !== currentPath);
    this.props.history.push(nextPage.path);
    this.setState({currentPage: nextPage});
  }

  render() {
    return (
      <div>
          <Route exact path='/' component={PageOne}></Route>
          <Route path='/PageOne' component={PageOne}></Route>
          <Route path='/PageTwo' component={PageTwo}></Route>
          <button type='button' onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}

export default withRouter(App);