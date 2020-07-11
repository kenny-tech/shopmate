import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import '../css/Product.css';
import '../App.css';

import { fetchProducts } from '../actions/product';
import { fetchProductDetail } from '../actions/product';
import { addToCart } from '../actions/cart';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

const Product = () => {
    // set states
    const [hover, setHover] = React.useState(false);
    const [productId, setProductId] = React.useState(0);
    const [size, setSize] = React.useState('S');
    const [color, setColor] = React.useState('White');
    const [quantity, setQuantity] = React.useState(1);

    const products = useSelector(state => state.products.allProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(this.props.fetchProducts());
    })

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }    

    const handleColorChange = (e) => {
        setColor(e.target.value)
    }    

    const handleClick = (event,product_id,product,price,thumbnail,quantity,size,color) => {
        dispatch(addToCart(product_id,product,price,thumbnail,quantity,size,color));
        setSize('S');
        setColor('White');
        event.preventDefault();
    }

    const toggleHover = (product_id) => {
        setHover(!hover);
        setProductId(product_id);
    }

    const handleDetail = (product_id,name,price,description,thumbnail,quantity,size,color) => {
        dispatch(fetchProductDetail(product_id,name,price,description,thumbnail,quantity,size,color));
    }

    if(!products) {
        return <div>Loading...</div>
    }
            
    const renderProducts = Object.values(products.rows).map((product, index) => {
        if(hover || productId === product.product_id) {
            return (<div className="col-md-3 productDiv" key={product.product_id} onMouseEnter={() => toggleHover(product.product_id)} onMouseLeave={() => toggleHover()} style={{ cursor: 'pointer' }}>
                <div className="card productCard">
                    <div className="card-body">
                        <p className="card-title text-center productTitle">{product.name}</p>
                        <Link to="/details" className="text-decoration-none"><h5 className="card-text text-center textPink p-3" onClick={()=>{handleDetail(product.product_id,product.name,product.price,product.description,product.thumbnail,quantity,size,color)}}>${product.price}</h5></Link>
                        <form className="form-inline d-flex justify-content-center formContent">
                            <select className="form-control form-control-sm selectSpacing" onChange={() => handleSizeChange}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                            <select className="form-control form-control-sm" onChange={() => handleColorChange}>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Yellow">Yellow</option>
                            </select>
                        </form>
                        <p className="text-center"><button className="btn btn-default btn-xs buttonAddToCart" onClick={(event)=>handleClick(event,product.product_id,product.name,product.price,product.thumbnail,this.state.quantity,this.state.size,this.state.color)}>Add to cart</button></p>
                    </div>
                </div>
            </div>)
        } 
        return (
            <div className="col-md-3 productDiv" key={product.product_id} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()} style={{ cursor: 'pointer' }}>
                <div className="card productCard">
                    <img src={imageBaseUrl + product.thumbnail} className="card-img-top img-responsive" alt={product.name} />
                    <div className="card-body">
                        <p className="card-title text-center productTitle">{product.name}</p>
                        <p className="card-text font-weight-bold text-center textPink">${product.price}</p>
                    </div>
                </div>
            </div>
        ) 
    });

    return (
        <React.Fragment>    
            <div className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-3">
                    <Sidebar />
                    </div>
                    <div className="col-md-9 row">
                        {renderProducts}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product;