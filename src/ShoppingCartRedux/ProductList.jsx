import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductList = () => {
        return this.props.productList.map((item) => {
            return (
                <div key={item.id} className="col-3">
                    <ProductItem item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        productList: state.productList.products,
        selectedProducts: state.productList.selectedProducts,
    }
}
export default connect(mapStateToProps)(ProductList);