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
// <<<<<<<<!!!!!!! SHOPPING LIST !!!!!!>>>>>
// =========================================
// =========================================
// <<<<<<<<FETCH SHOPPING LIST FUNCTION>>>>>
// =========================================
  fetchShoppingList = () => {
    fetch('https://groceries-back.herokuapp.com/list')
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

// ===========================================
// <<<<<<<HANDLE CREATE SHOPPING LIST ITEM>>>>
// ===========================================

  handleCreateListItem = (item)=>{

    fetch('https://groceries-back.herokuapp.com/list', {
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
// <<<<<<<<<<<HANDLE LIST UPDATE>>>>>>>>>>>
// =========================================
  handleListUpdate = (item, arrayIndex, currentArray)=>{

    fetch(`https://groceries-back.herokuapp.com/list/${item.id}`,{
      body: JSON.stringify(item),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedItem =>{
        return updatedItem.json()
      })
      .then(jData => {
        this.fetchShoppingList()
      })
      .catch(err => console.log(err))

  }

  // =========================================
  // <<<<<<<<<<<HANDLE LIST DELETE>>>>>>>>>>>
  // =========================================
  handleListDelete =(itemId, arrayIndex, currentArray)=>{
    fetch(`https://groceries-back.herokuapp.com/list/${itemId}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.fetchShoppingList()
    })
    .catch(err => console.log(err))

  }





// =========================================
// <<<<<<<!!!!!!! REFRIGERATOR !!!!!!!!>>>>>
// =========================================
// =========================================
// <<<<<<<<FETCH REFRIGERATOR FUNCTION>>>>>
// =========================================
fetchRefrigerator = () => {

  fetch('https://groceries-back.herokuapp.com/refrigerator')
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

// ===========================================
// <<<<<<<HANDLE CREATE REFRIGERATOR ITEM>>>>
// ===========================================

  handleCreateFridgeItem = (item)=>{

    fetch('https://groceries-back.herokuapp.com/refrigerator', {
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
      this.fetchRefrigerator()
      this.fetchShoppingList()
    })
    .catch(err => console.log(err))
  }

// =========================================
// <<<<<<<<<<<HANDLE FRIDGE UPDATE>>>>>>>>>>>
// =========================================
  handleFridgeUpdate = (item, arrayIndex, currentArray)=>{

    fetch(`https://groceries-back.herokuapp.com/refrigerator/${item.id}`,{
      body: JSON.stringify(item),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedItem =>{
        return updatedItem.json()
      })
      .then(jData => {
        this.fetchRefrigerator()
      })
      .catch(err => console.log(err))

  }

  // =========================================
  // <<<<<<<<<<<HANDLE FRIDGE DELETE>>>>>>>>>>>
  // =========================================
  handleFridgeDelete =(itemId, arrayIndex, currentArray)=>{
    fetch(`https://groceries-back.herokuapp.com/refrigerator/${itemId}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.fetchRefrigerator()
    })
    .catch(err => console.log(err))

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
          handleCreateFridgeItem={this.handleCreateFridgeItem}
          handleListUpdate={this.handleListUpdate}
          handleFridgeUpdate={this.handleFridgeUpdate}
          handleListDelete={this.handleListDelete}
          handleFridgeDelete={this.handleFridgeDelete}
        />



      </div>
    );
  }
}

export default App;
