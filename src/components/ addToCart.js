import React from "react";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function AddToCart(props) {  
    function handleList() {
      let temp = [];
      props.cart.map((element) => {
        if (temp.includes(element)) {
          temp.forEach(item => {
            if (item.name === element.name) {
              item.inCart += 1;
            }
          })
        } else {
          element.inCart = 1;
          temp.push(element)
        }
      })
  
      let list = temp.map((element, idx) => {
        return (<ListItem key={idx} button>
          <ListItemText primary={`${element.name} - Quantity: ${element.inCart}`} />
        </ListItem>)
      })
      return list;
    }
    return (
      <div>
        <List component="nav" aria-label="secondary mailbox folders" style={{ zIndex: '3', position: 'absolute', right: '1%' }}>
          {handleList()}
        </List>
      </div>
    )
}
  
function mapStateToProps(state) {
    return state;
}
  
export default connect(mapStateToProps)(AddToCart);