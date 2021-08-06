import React, { Component } from 'react';
import Detail from './Detail';
import ProductList from './ProductList';
import Cart from './Cart';
import { connect } from 'react-redux'
class Home extends Component {
    counterCart = () => {
        let count = 0;
        this.props.cart.map((counter) => {
            count += counter.quantity;
        })
        return count;
    }
    render() {
        let counter = this.counterCart();
        return (
            <div>
                <h1 className="text-center">Bài tập Redux</h1>
                <div className="text-center">
                    <button data-toggle="modal"
                        data-target="#modelId"
                        className="btn btn-danger mb-5">
                        {counter > 0 ? `Giỏ hàng (${counter}) ` : "Giỏ hàng"}
                    </button>
                </div>
                <ProductList />
                <Detail />
                <Cart counterCart={this.counterCart} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps)(Home);