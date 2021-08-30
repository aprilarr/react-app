import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';

class Product extends Component{
    state ={
        order: 4,
        name: 'aprilarr'
    }

    handleCounterChange = (newValue)=> {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://placeimg.com/40/15/tech" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://placeimg.com/640/480/arch" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        );
    }
}

export default Product;