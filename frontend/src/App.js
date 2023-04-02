import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
 import { useEffect } from 'react';
 import store from './store'
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
// import Payment from './components/cart/Payment';
import OrderSuccess from './components/cart/OrderSuccess';
import ListOrders from './components/order/ListOrders';

import { loadUser } from './Action/userAction';
import Profile from './components/user/Profile';
import UpdatePassword from './components/user/UpdatePassword';
import UpdateProfile from './components/user/UpdateProfile';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import ProtectedRoute from './components/Route/ProtectedRoute';
 import Dashboard from './components/Admin/Dashboard';
 import ProductsList from './components/Admin/ProductList';
 import NewProduct from './components/Admin/NewProduct';
 import UpdateProduct from './components/Admin/UpdateProduct';
 import OrdersList from './components/Admin/OrdersList';
 import ProcessOrder from './components/Admin/ProcessOrder';
 import UsersList from './components/Admin/UsersList';
 import UpdateUser from './components/Admin/UpdateUser';
 import ProductReviews from './components/Admin/ProductReviews';
import { useSelector } from 'react-redux';

// import axios from 'axios';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';


// 
function App() {
  // const [stripeApiKey, setStripeApiKey] = useState('');

  // useEffect(() => {
  //   store.dispatch(loadUser())

  //   async function getStripApiKey() {
  //     const { data } = await axios.get('/api/v1/stripeapi');

  //     setStripeApiKey(data.stripeApiKey)
  //   }

  //   getStripApiKey();

  // }, [])
useEffect(() => {

  store.dispatch(loadUser())

}, [])
const { user, isAuthenticated, loading } = useSelector(state => state.auth)

 return (
   
    <div className="App">
  <Router>
  
    <Header />
    <div className='container container-fluid'>
    
    {/* <Route path='/' element={<Home />} exact/>
    <Route path='/search/:keyword' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetails />} exact/> */}
    <Route path="/" component={Home} exact />
    <Route path="/search/:keyword" component={Home} />
    <Route path="/product/:id" component={ProductDetails} exact />
    <Route path="/login" component={Login} />
    <Route path="/cart" component={Cart} exact />
    <ProtectedRoute path="/shipping" component={Shipping} />
    <ProtectedRoute path="/order/confirm" component={ConfirmOrder} />
    <ProtectedRoute path="/success" component={OrderSuccess} />
    {/* {stripeApiKey &&
      <Elements stripe={loadStripe(stripeApiKey)}>
        <ProtectedRoute path="/payment" component={Payment} />
      </Elements>
    } */}

    <Route path="/register" component={Register} />
    <Route path="/passward/forgot" component={ForgotPassword} exact />
    <Route path="/passward/reset/:token" component={NewPassword } exact />
    <ProtectedRoute path="/me" component={Profile} exact />
    <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
    <ProtectedRoute path="/passward/update" component={UpdatePassword} exact />
    <ProtectedRoute path="/orders/me" component={ListOrders} exact />
    
    </div>
    <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
  <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact/>
  <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact/>
  <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact/>
  <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact/>
  <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact/>
  <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact/>
  <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact/> 
  <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} exact/>

    {!loading && (!isAuthenticated || user.role !== 'admin') && (
          <Footer/> 
        )}
  </Router>
  </div>

  );
}

export default App;
