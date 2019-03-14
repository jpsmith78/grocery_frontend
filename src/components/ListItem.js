import React, { Component } from 'react';


class ListItem extends Component {
  render(){
    return (
      <React.Fragment>

        <div className="list_item">
          {this.props.item.item}<br/>
          {this.props.item.category}<br/>
          {this.props.item.price}<br/>
        </div>

        <div className="list_action">
          <button>delete</button>
        </div>

      </React.Fragment>
    )
  }
}

export default ListItem
