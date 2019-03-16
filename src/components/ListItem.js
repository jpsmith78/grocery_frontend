import React, { Component } from 'react';


class ListItem extends Component {
  render(){
    return (
      <React.Fragment>

        <div className="list_item">
          {this.props.item.item}<br/>
          {this.props.item.category}<br/>
          {this.props.item.price}<br/>
          {this.props.item.quantity}<br/>
          {this.props.item.unit}<br/>
          {this.props.item.recipe}<br/>
          {this.props.item.have_at_home ?
            this.props.item.have_at_home.map((fridge_item, index)=>{
              return(
                <ul key={index}>
                  <li>{fridge_item.fridge_item}</li>
                  <li>{fridge_item.fridge_category}</li>
                  <li>{fridge_item.fridge_quantity}</li>
                  <li>{fridge_item.fridge_unit}</li>
                </ul>
              )
            }) : ""}
        </div>

        <div className="list_action">
          <button>delete</button>
        </div>

      </React.Fragment>
    )
  }
}

export default ListItem
