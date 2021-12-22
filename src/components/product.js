import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { connect } from 'react-redux';
import {addProduct,inventoryAction} from '../action/action';
import {addToCart} from '../store/cart';

function Products(props) {

  function handleClick(item){
    props.addToCart(item);
    props.addProduct(item);
    props.inventoryAction(item)
  }
  
  return (
    <div>
      {props.products.map(element => {
          return <Card style={{marginLeft:'250px',marginTop:'100px' ,display:'inline-block', width:'300px',border:'2px solid grey', marginBottom:'50px'}} sx={{ maxWidth: 345 }}>
            <CardHeader
              title={element.name}
            />
            <CardMedia
              component="img"
              height="194"
              image= {element.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              {element.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {element.price} - Count {element.inventoryCount}
              </Typography>
            </CardContent>
            <Typography variant="body2" color="text.secondary" style={{marginLeft:'20px',fontSize:'15px'}}>
            Add To Cart --- <CardActions disableSpacing style={{position:'relative',top:'-35px',left:'90px'}} onClick={()=>{handleClick(element)}}>
              <IconButton aria-label="add to favorites">
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
              </Typography>
          </Card>
        // }
      })}
    </div>
  );
}


function mapStateToProps(state){
  return{
    products:state.products.activeProduct,
    category:state.categories.activeCategories,
  } 
}
const mapDispatchToProps = {
  addProduct,inventoryAction,addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)