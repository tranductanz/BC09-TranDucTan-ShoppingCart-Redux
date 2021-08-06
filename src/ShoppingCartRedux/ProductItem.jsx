import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductItem extends Component {



    addToCart = (prod) => {
        const addItem = {
            itemsCart: prod,
            quantity: 1,
        }
        this.props.dispatch({
            type: "ADD_PRODUCT",
            payload: {
                item: addItem,
            }
        })
    }

    handleSelect = () => {
        const { name, screen, frontCamera, backCamera, img, desc } = this.props.item;
        this.props.dispatch({
            type: "SELECT_PRODUCT",
            payload: {
                name: name,
                img: img,
                screen: screen,
                frontCamera: frontCamera,
                backCamera: backCamera,
                desc: desc,
            }
        })
    }



    render() {
        // console.log(this.props.item);
        const { name, img } = this.props.item;
        return (
            <div className="card">
                <img style={{ height: 250 }} src={img} alt="Hình" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <button onClick={this.handleSelect} className="btn btn-info">Chi tiết</button>
                    <button onClick={() => this.addToCart(this.props.item)} className="btn btn-success">Thêm giỏ hàng</button>
                </div>
            </div>
        );
    }
}



export default connect()(ProductItem);