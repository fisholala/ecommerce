import { legacy_createStore as createStore} from 'redux'
 import {applyMiddleware, } from 'redux'
 import thunk from 'redux-thunk'
 import {composeWithDevTools} from 'redux-devtools-extension'
 import rootReducer from './Reducers'
 

 let initialState={
    cart:{
       orderItems: localStorage.getItem('orderItems')  
            ? JSON.parse(localStorage.getItem('orderItems'))
            : [],
      shippingInfo:localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo')):{}
    }
 }
const middleWare=[thunk]
 const store=createStore(rootReducer,initialState,
   composeWithDevTools(applyMiddleware(...middleWare)),{devtools:false})




 export default store