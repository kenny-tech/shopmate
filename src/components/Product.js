import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import '../css/Product.css';
import '../App.css';

import { fetchProducts } from '../actions/product';
import { fetchProductDetail } from '../actions/product';
import { addToCart } from '../actions/cart';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Product extends React.PureComponent {

    componentWillMount() {
        this.props.fetchProducts();   
    }

    state = {
        hover: false,
        productId: 0,
    }

    handleClick = (product_id,product,price,thumbnail,quantity,size,color) => {
        //alert(product_id);
        this.props.addToCart(product_id,product,price,thumbnail,quantity,size,color);
    }

    toggleHover = (product_id) => {
        this.setState({
            hover: !this.state.hover,
            productId: product_id
        });
        //console.log('Current state is: ', this.state);
    }

    handleDetail = (product_id,name,price,description,thumbnail,quantity,size,color) => {
        this.props.fetchProductDetail(product_id,name,price,description,thumbnail,quantity,size,color);
    }

    render() {

        let quantity = 1;
        let size = 'S';
        let color = 'White';

        //console.log('rendering...');
        
        if(!this.props.products) {
            return <div>Loading...</div>
        }
                
        const renderProducts = Object.values(this.props.products.rows).map((product, index) => {
            if(this.state.hover || this.state.productId === product.product_id) {
                return (<div className="col-md-3 productDiv" key={product.product_id} onMouseEnter={() => this.toggleHover(product.product_id)} onMouseLeave={() => this.toggleHover()} style={{ cursor: 'pointer' }}>
                    <div className="card productCard">
                        <div className="card-body">
                            <p className="card-title text-center productTitle">{product.name}</p>
                            <Link to="/details"><p className="card-text text-center textPink" onClick={()=>{this.handleDetail(product.product_id,product.name,product.price,product.description,product.thumbnail,quantity,size,color)}}>${product.price}</p></Link>
                            <form className="form-inline d-flex justify-content-center formContent">
                                <select className="form-control form-control-sm selectSpacing">
                                    <option value="s">S</option>
                                    <option value="m">M</option>
                                    <option value="l">L</option>
                                </select>
                                <select className="form-control form-control-sm">
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="yellow">Yellow</option>
                                </select>
                            </form>
                            <p className="text-center"><button className="btn btn-default btn-xs buttonAddToCart" onClick={()=>this.handleClick(product.product_id,product.name,product.price,product.thumbnail,quantity,size,color)}>Add to cart</button></p>
                        </div>
                    </div>
                </div>)
            } 
            return (
                <div className="col-md-3 productDiv" key={product.product_id} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} style={{ cursor: 'pointer' }}>
                    <div className="card productCard">
                        <img src={imageBaseUrl + product.thumbnail} className="card-img-top img-responsive" alt={product.name} />
                        <div className="card-body">
                            <p className="card-title text-center productTitle">{product.name}</p>
                            <p className="card-text text-center textPink">${product.price}</p>
                        </div>
                    </div>
                </div>
            ) 
        });

        // const productArray = Object.values(this.props.products.rows);
        //console.log('The product array: ', productArray);

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
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

const mapDispatchToProps = (dispatch) => {
    return { 
            fetchProducts: () => {dispatch(fetchProducts())},
            fetchProductDetail: (product_id,name,price,description,thumbnail,quantity,size,color) => {dispatch(fetchProductDetail(product_id,name,price,description,thumbnail,quantity,size,color))},
            addToCart: (product_id,product,price,thumbnail,quantity,size,color) => {dispatch(addToCart(product_id,product,price,thumbnail,quantity,size,color))}
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);