import React,{useState} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Product from './components/product';
import Categories from './components/categories';
import AddToCart from './components/ addToCart';

export default function App (props){
    const [cartList, setCartList] = useState(false);
    function handleShow(){
        setCartList(!cartList);
    }
    return (
        <>
            <Header show={handleShow}/>
            {
                cartList && <AddToCart/>
            }
            <Categories/>
            <Product/>
            <Footer/>
        </>
    )
} ;