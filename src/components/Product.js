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
        size: 'S',
        color: 'White',
        quantity: 1
    }

    handleSizeChange = (e) => {
        this.setState({size:e.target.value});
    }    

    handleColorChange = (e) => {
        this.setState({color:e.target.value});
    }    

    handleClick = (event,product_id,product,price,thumbnail,quantity,size,color) => {
        this.props.addToCart(product_id,product,price,thumbnail,quantity,size,color);
        this.setState({size:'S', color: 'White'});
        event.preventDefault();
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
                            <Link to="/details" className="text-decoration-none"><h5 className="card-text text-center textPink p-3" onClick={()=>{this.handleDetail(product.product_id,product.name,product.price,product.description,product.thumbnail,this.state.quantity,this.state.size,this.state.color)}}>${product.price}</h5></Link>
                            <form className="form-inline d-flex justify-content-center formContent">
                                <select className="form-control form-control-sm selectSpacing" onChange={this.handleSizeChange}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                                <select className="form-control form-control-sm" onChange={this.handleColorChange}>
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Yellow">Yellow</option>
                                </select>
                            </form>
                            <p className="text-center"><button className="btn btn-default btn-xs buttonAddToCart" onClick={(event)=>this.handleClick(event,product.product_id,product.name,product.price,product.thumbnail,this.state.quantity,this.state.size,this.state.color)}>Add to cart</button></p>
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
                            <p className="card-text font-weight-bold text-center textPink">${product.price}</p>
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