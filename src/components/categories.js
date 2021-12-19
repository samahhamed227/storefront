import React from 'react';
import { connect } from 'react-redux';
import {active} from '../store/category';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function Categories(props) {
    return (
        <>
          <Breadcrumbs aria-label="breadcrumb" style={{marginLeft:'550px',marginTop:'50px', fontSize:'25px'}}>
            {props.categories.map(element => {
    
              return <Link color="inherit" onClick={() => { props.active(element.name) }}>
                {element.name}
              </Link>
            })}
          </Breadcrumbs>
          <div  style={{marginLeft:'560px', fontSize:'50px', marginTop:'30px' ,fontFamily:'monospace'}}>{props.activeCategory.name}</div>
          <div style={{marginLeft:'400px', fontSize:'30px', marginTop:'30px' ,fontFamily:'monospace', color:'Gray'}}>{props.activeCategory.description}</div>
        </>
      )
}

const mapStateToProps = (state) => {
    return state.categories;
  }

const mapDispatchToProps = {active};

export default connect(mapStateToProps,mapDispatchToProps)(Categories);