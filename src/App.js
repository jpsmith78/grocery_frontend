import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'

// =========================================
// <<<<<<<<<<<<<<<<CLASS>>>>>>>>>>>>>>>>>>>>
// =========================================
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'shoppinglist',
      listItems: [],
      fridgeItems: [],
    }
  }

// =========================================
// <<<<<<<<<<<HANDLE VIEW FUNCTION>>>>>>>>>>
// =========================================
handleView = (view)=>{
  this.setState({currentView: view})
}

// =========================================
// <<<<<<<<FETCH SHOPPING LIST FUNCTION>>>>>
// =========================================
fetchShoppingList = () => {
  fetch('https://groceries-back.herokuapp.com/list')
      .then(data => data.json())
      .then(jData => {
        console.log(jData)
        this.setItems(jData)
      })
}

// =========================================
// <<<<<<<<<<<SET SHOPPING LIST ITEMS>>>>>>>>
// =========================================
setItems =(list)=>{
  this.setState({
    listItems: list
  })
}

// =========================================
// <<<<<<<<FETCH REFRIGERATOR FUNCTION>>>>>
// =========================================
fetchRefrigerator = () => {
  fetch('https://groceries-back.herokuapp.com/refrigerator')
      .then(data => data.json())
      .then(jData => {
        console.log(jData)
        this.setFridge(jData)
      })
}

// =========================================
// <<<<<<<<<<<SET REFRIGERATOR ITEMS>>>>>>>>
// =========================================
setFridge =(fridgeList)=>{
  this.setState({
    fridgeItems: fridgeList
  })
}

// =========================================
// <<<<<<<<<<<COMPONENT DID MOUNT>>>>>>>>>>>
// =========================================
componentDidMount() {
    this.fetchShoppingList()
    this.fetchRefrigerator()
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
          listCount={this.state.listItems.length}
          fridgeCount={this.state.fridgeItems.length}
        />

        <List
          currentView={this.state.currentView}
          listItems={this.state.listItems}
          fridgeItems={this.state.fridgeItems}
        />


      </div>
    );
  }
}

export default App;
