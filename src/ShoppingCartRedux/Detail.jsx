import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Detail.css'
class Detail extends Component {
    isEmpty = (value) => {
        return Object.keys(value).length === 0;
    }
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="detail col-5">
                        <div className={this.isEmpty(this.props.selectedProducts) ? "detail__hide" : "detail__show"}>
                            <h4 className="text-center mt-5 mb-1">{this.props.selectedProducts.name}</h4>
                            <img style={{ width: 80, height: 250 }} className="w-100" src={this.props.selectedProducts.img} alt="Tên điện thoại" />
                        </div>
                    </div>
                    <div className="col-7">
                        <h5 className="mt-5">Thông số kỹ thuật</h5>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{this.props.selectedProducts.screen}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{this.props.selectedProducts.frontCamera}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{this.props.selectedProducts.backCamera}</td>
                                </tr>
                                <tr>
                                    <td>Mô tả</td>
                                    <td>{this.props.selectedProducts.desc}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
export default connect(mapStateToProps)(Detail);