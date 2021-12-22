import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({ items, removeItem, addItems, ...props }) => {
    let total = 0;
    let totalItems = 0;
    return (
        <div className='col-9'>
            <div aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                </ol>
            </div>
            <h5 className="card-title">Review your order</h5>
            <hr />
            {
                items.length ?

                    <>
                        {
                            items.map((item) => {
                                total += item.quantity * item.price;
                                totalItems += item.quantity
                                return (
                                    <div className='card'>
                                        <div className="card-body">

                                            <div className='row'>
                                                <div className='col-2'>
                                                    <img src={item.image} className="imgS" alt="pics" />
                                                </div>
                                                <div className='col-6'>
                                                    <h6>{item.title}</h6>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div className='col-2'>
                                                    <div className='d-flex flex-row m-1 p-2' style={{}}>
                                                        <div className='m-1 p-1'> <button className='btn btn-danger btn-number' onClick={() => { removeItem(item) }}>-</button></div>
                                                        <div className='m-1p-1'><h5>{item.quantity}</h5></div>
                                                        <div className='m-1 p-1'><button className='btn btn-danger btn-number' onClick={() => { addItems(item) }}>+</button></div>
                                                    </div>
                                                </div>
                                                <div className='col-2'>
                                                    <h3>${item.price * item.quantity}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h5 className='py-2'>Item Total <sub>({totalItems})</sub></h5>
                            <p>${total}</p>
                        </div>
                        <Link to='/cart' className='btn btn-warning w-100 py-2 text-white'>Check Out</Link>
                    </>
                    : <div className='w-100 d-flex text-center' style={{ justifyContent: 'center', minHeight: '50vh', flexDirection: 'column', backgroundImage: 'src(https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-Free-PNG.png)' }}>
                        <img style={{ maxWidth: '30%', margin: 'auto' }} src='https://www.pngplay.com/wp-content/uploads/7/Cart-Transparent-Free-PNG.png' alt='...' />
                        <h3 className='display-6'>Your Cart is Empty</h3>
                    </div>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    items: state.cart
})
const mapDispatchToProps = dispatch => ({
    clearItems: () => dispatch({ type: 'CLARE_CART' }),
    removeItem: item => dispatch({ type: 'REMOVE_TO_CART', payload: item }),
    addItems: item => dispatch({ type: 'ADD_TO_CART', payload: item })
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
