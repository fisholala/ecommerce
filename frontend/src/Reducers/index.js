
import {productsReducer,productDetailReducer,newReviewReducer,newProductReducer,productReducer,productReviewsReducer,reviewReducer} from './productReducer'
import {authReducer,userReducer, forgotPasswordReducer,allUsersReducer,userDetailsReducer,userDetailReducer} from './userReducers'
import { newOrderReducer,myOrdersReducer,orderDetailsReducer,allOrdersReducer,orderReducer } from './OrderReducers'
import { cartReducer } from './cartReducer'
import { combineReducers } from 'redux'
export default combineReducers({
    products:productsReducer,
   productDetails: productDetailReducer,
   auth:authReducer,
   user:userReducer,
   forgotPassword:forgotPasswordReducer,
   cart:cartReducer,
   newOrder: newOrderReducer,
   myOrders:myOrdersReducer,
   orderDetails:orderDetailsReducer,
   newReview:newReviewReducer,
   newProduct:newProductReducer,
   product:productReducer,
   allOrders:allOrdersReducer,
   order:orderReducer,
   allUsers:allUsersReducer,
   userDetails:userDetailsReducer,
   productReviews:productReviewsReducer,
   review:reviewReducer,
   userDetail:userDetailReducer
  })
