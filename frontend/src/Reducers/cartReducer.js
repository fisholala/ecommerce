import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '../Constants/cartConstants'

export const cartReducer = (state = { orderItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.orderItems.find(i => i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                    orderItems: state.orderItems.map(i => i.product === isItemExist.product ? item : i)
                }
            } else {
                return {
                    ...state,
                  orderItems: [...state.orderItems, item]
                }
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                orderItems: state.orderItems.filter(i => i.product !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}