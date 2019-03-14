import React, { Component } from 'react'

import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

// =========================================
// <<<<<<<<<<<<<<<<CLASS>>>>>>>>>>>>>>>>>>>>
// =========================================
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'shoppinglist'
    }
  }

// =========================================
// <<<<<<<<<<<HANDLE VIEW FUNCTION>>>>>>>>>>
// =========================================
handleView = (view)=>{
  this.setState({currentView: view})
}

// =========================================
// <<<<<<<<<<<RENDER VIEW>>>>>>>>>>>>>>>>>>>
// =========================================
  render() {
    return (
      <div className="main_container">
        <Header
          currentView={this.state.currentView}
          handleView={this.handleView}
        />

        <List
          currentView={this.state.currentView}
        />

        <Form />

      </div>
    );
  }
}

export default App;
