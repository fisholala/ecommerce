import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './layout/MetaData'
import {getProducts}from '../Action/productAction'
import {useDispatch, useSelector} from 'react-redux'
import Product from './product/Product'
import Loader from './layout/Loader'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
 import { useAlert } from 'react-alert'
import Pagination from 'react-js-pagination'
// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range)

//  const createSliderWithTooltip = Slider.createSliderWithTooltip;
//  const Range = createSliderWithTooltip(Slider.Range);

const Home = ({match}) => {
const[currentPage,setCurrentPage]=useState(1)
const [price,setPrice]=useState([1,1000])
const [category,setCategory]=useState('')
  const [rating, setRating] = useState(0)

  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    "Books",
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Outdoor',
    'Home'
]

   const alert =useAlert();
const dispatch=useDispatch();

const { user } = useSelector(state => state.auth)
const {loading,error,products,productsCount,resPerPage, filteredProductsCount}=useSelector(state=>state.products)

const keyword = match.params.keyword

useEffect(() => {
  if(error){
    return alert.error(error)
  }
  dispatch(getProducts(keyword,currentPage,category))

 
},[dispatch,alert,error ,keyword,currentPage,category])
 
function setCurrentPageNo(pageNumber){
    setCurrentPage(pageNumber)
  }
  let count = productsCount;
  if (keyword) {
      count = filteredProductsCount
  }

  return (
    <Fragment>
      {loading ? <Loader /> : (
    <Fragment>
    <MetaData title={'Buy Best Products Online'} />

    <h1 id="products_heading">Latest Products</h1>
    <span>ውድ ደንበኛችን <b>{user && user.name}</b>እንኳን ወደ ድህረ ገፃች በሰላም መጡ።</span>

    <section id="products" className="container mt-5">
        <div className="row">

            {/* {products && products.map(product=>(
                <Product key={product._id}  product={product} />
            ))}

            </div>
            </section> */}

                   {keyword ? (
                    <Fragment>
                       
                         <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            {/* <Range
                                                marks={{
                                                    1: `$1`,
                                                    1000: `$1000`
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={value => `$${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                                value={price}
                                                onChange={price => setPrice(price)}
                                            /> */}
                          
 <hr className="my-5" />

<div className="mt-5">
    <h4 className="mb-3">
        Categories
    </h4>

    <ul className="pl-0">
        {categories.map(category => (
            <li
                style={{
                    cursor: 'pointer',
                    listStyleType: 'none'
                }}
                key={category}
                onClick={() => setCategory(category)}
            >
                {category}
            </li>
        ))}
    </ul>
</div>
</div>
</div>
                    <div className="col-6 col-md-9">
                        <div className="row">
                            {  products.map(product => (
                                <Product key={product._id} product={product} col={4} />
                            ))}
                        </div>
                    </div>
                    
                </Fragment>
            ) : (
                    products.map(product => (
                        <Product key={product._id} product={product} col={3} />
                    ))
                )}

        </div>
    </section> 
  { resPerPage <=  count && (
  <div className="d-flex justify-content-center mt-5" >
    <Pagination
       activePage={currentPage}
       itemsCountPerPage={resPerPage}
       totalItemsCount={ productsCount }
       onChange={setCurrentPageNo}
       nextPageText={'Next'}
       prevPageText={'Prev'}
       firstPageText={'First'}
       lastPageText={'Last'}
       itemClass="page-item"
       linkClass='page-link'
    />

  </div>
   )} 
    </Fragment>
  )}  
    </Fragment>
  )
}

export default Home