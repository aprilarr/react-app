import React, { Component } from 'react';
// import './Product.css';

class CardProduct extends Component{
    state ={
        order: 4,
        name: 'aprilarr'
    }
    
    handleCounterChange= (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = ()=> {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMin = ()=> {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }else{
            alert('Sudah Batas Bawah');
        }
    }

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://placeimg.com/640/480/any" alt="" />
                    </div>
                    <p className="product-title">Sikat</p>
                    <p className="product-price">34000</p>
                    <div className="counter">
                        <button onClick={this.handleMin} className="minus">-</button>
                        <input type="text" value={this.state.order} />
                        <button onClick={this.handlePlus} className="plus">+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;