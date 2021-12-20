import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 75}}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div" >
            Box Store
          </Typography>
        </Toolbar>
        <IconButton aria-label="add to favorites" style={{color:'white',position:'absolute',left:'1250px'}} onClick={()=>{props.show()}}>
          <AddShoppingCartIcon />{props.cart.length}
        </IconButton>
      </AppBar>
    </Box>
  );
}

function mapStateToProps(state){
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);