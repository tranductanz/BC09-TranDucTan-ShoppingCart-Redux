import swal from 'sweetalert';
const initialState = {
    cart: [],
}


const isEmpty = (value) => {
    return Object.keys(value).length === 0;
}





const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_PRODUCT": {
            const cloneCart = [...state.cart];

            const foundIndex = cloneCart.findIndex((item) => {
                return item.itemsCart.id === action.payload.item.itemsCart.id;
            })
            if (foundIndex === -1) {
                cloneCart.push(action.payload.item)
                swal("Thêm sản phẩm thành công!", "", "success");
            }
            else {
                cloneCart[foundIndex].quantity++;
                swal("Đã có sản phẩm trong giỏ hàng", `Số lượng hiện tại : ${cloneCart[foundIndex].quantity}`, "success");
            }
            state.cart = cloneCart;
            return { ...state };
        }
        case "BTN_INCREASE_DECREASE": {
            const cloneCart = [...state.cart];
            const foundIndex = cloneCart.findIndex((item) => {
                return (item.itemsCart.id === action.payload.item);
            })
            const { index, tangGiam, item } = action.payload;

            if (tangGiam) {
                cloneCart[index].quantity++;
            }
            else if (!tangGiam) {
                cloneCart[index].quantity--;
            }
            if (cloneCart[index].quantity < 1) {
                cloneCart.splice(foundIndex, 1);
                if (!isEmpty(cloneCart)) {
                    swal("Đã xoá sản phẩm!", "", "warning");
                }
                if (isEmpty(cloneCart)) {
                    swal("Giỏ hàng trống!", "Không có sản phẩm", "warning");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                }
            }
            state.cart = cloneCart;
            return { ...state }
        };
        case "DELETE_PRODUCT": {
            const cloneCart = [...state.cart];
            const foundIndex = cloneCart.findIndex((item) => {
                return (item.itemsCart.id === action.payload.id);
            })

            if (!isEmpty(cloneCart)) {
                cloneCart.splice(foundIndex, 1);
                swal("Đã xoá sản phẩm!", "", "warning");
                if (isEmpty(cloneCart)) {
                    swal("Giỏ hàng trống!", "Không có sản phẩm", "warning");
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                }
            }
            state.cart = cloneCart;
            return { ...state };
        }
        case "FINISH_PRODUCT": {
            const cloneCart = [...state.cart];

            if (isEmpty(cloneCart)) {
                swal("Giỏ hàng trống!", "Không thể thanh toán", "warning");
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }

            if (!isEmpty(cloneCart)) {
                swal("Đã thanh toán thành công! Trở về trang chủ trong 3 giây", "Cảm ơn bạn đã mua sắm tại cửa hàng", "success");
                setTimeout(() => {
                    state.cart = [];
                    window.location.reload();

                }, 3000)
            }
            return { ...state };
        }
        default:
            return state;
    }
}

export default reducer;
