import React from 'react'
import { connect } from 'react-redux';

const ProductItem = ({ item, addToCart }) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <div className='p-2'>
                <img style={{ width: '50px ' }} src={item.image} alt='imgae' />
            </div>
            <div className='p-2'>
                <h5>{item.title}</h5>
                <p><b>${item.price}</b></p>
                <p>{item.description}</p>
            </div>
            <div>
                <button className='btn border' style={{ minWidth: '75px' }} onClick={() => addToCart(item)}>Add +</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => dispatch({ type: "ADD_TO_CART", payload: item })
})

export default connect(null, mapDispatchToProps)(ProductItem);