import React, { Component } from 'react';


class Header extends Component {
  render(){
    return(
      <div className="header">

        <h1>Welcome To Shopping List</h1>
        <h1>
          {this.props.currentView === 'shoppinglist' ? 'This Is Your List' : 'This Is Your Refrigerator'}
        </h1>

          <button onClick={()=>{this.props.handleView('shoppinglist')}}>{this.props.listCount} Items On Your Shopping List</button>

          <button
          onClick={()=>{this.props.handleView('refrigerator')}}> {this.props.fridgeCount} Items In Your Refrigerator</button>


      </div>
    )
  }
}

export default Header
