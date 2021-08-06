import React, { } from 'react';
import { connect } from 'react-redux'
import { PureComponent } from 'react'
class Cart extends PureComponent {

    increaseBtn = (index, tangGiam, id) => {
        this.props.dispatch({
            type: "BTN_INCREASE_DECREASE",
            payload: {
                index,
                tangGiam,
                item: id,
            }
        })
    }

    deleteBtn = (index, id, name) => {
        this.props.dispatch({
            type: "DELETE_PRODUCT",
            payload: {
                index,
                id,
                name,
            }
        })
    }

    makePayment = () => {
        this.props.dispatch({
            type: "FINISH_PRODUCT",
            payload: {
            }
        })
    }

    renderCart = () => {


        return this.props.cart.map((item, index) => {


            const { id, name, img, price } = item.itemsCart;
            return (
                <tr key={index}>
                    <td>{id}</td>
                    <td><img width={100} height={100} src={img} alt="Hình ảnh" /></td>
                    <td>{name}</td>
                    <td>
                        <button
                            onClick={() => this.increaseBtn(index, true, id, name)}
                            className="btn btn-primary mr-1">+</button>
                        {item.quantity}
                        <button
                            onClick={() => this.increaseBtn(index, false, id)}
                            className="btn btn-danger ml-1">-</button>
                    </td>
                    <td>{price}</td>
                    <td>{price * item.quantity}</td>
                    <td>
                        <button
                            onClick={() => this.deleteBtn(index, id, name)}
                            className="btn btn-danger">
                            Xoá
                        </button>
                    </td>
                </tr>
            )
        })
    }


    render() {
        let counter = this.props.counterCart();
        return (
            <div
                className="modal fade"
                id="modelId"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-danger">{counter > 0 ? `Giỏ hàng có : ${counter} Sản phẩm` : ""}</h3>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã SP</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                onClick={this.makePayment}
                                type="button"
                                className="btn btn-primary"
                            >
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}
export default connect(mapStateToProps)(Cart);