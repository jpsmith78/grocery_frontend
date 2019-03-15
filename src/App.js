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




  // ===========================================
  // <<<<<<<HANDLE CREATE SHOPPING LIST ITEM>>>>
  // ===========================================

  handleCreateListItem = (item)=>{
    console.log(item);
    fetch('http://localhost:8888/list', {
      body: JSON.stringify(item),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      }
    })
    .then(createdItem => {
      return createdItem.json()
    })
    .then(jData => {
      this.fetchShoppingList()
    })
    .catch(err => console.log(err))
  }



// =========================================
// <<<<<<<<FETCH SHOPPING LIST FUNCTION>>>>>
// =========================================
fetchShoppingList = () => {
  fetch('http://localhost:8888/list')
      .then(data => data.json())
      .then(jData => {
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
  fetch('http://localhost:8888/refrigerator')
      .then(data => data.json())
      .then(jData => {
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
          handleCreateListItem={this.handleCreateListItem}
        />



      </div>
    );
  }
}

export default App;
