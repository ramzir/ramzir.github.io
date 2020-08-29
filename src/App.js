import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import importedData from './assets/resumeData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/stylesheets/App.scss'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: importedData
    };
  }

  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home} data={this.state.resumeData}/>
      </Switch>
    </Router>
  }
}

export default App