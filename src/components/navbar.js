import React from 'react'
import { Container } from 'react-bootstrap'

function Navbar() {
    return (
        <div>
            <Container className='text-center'>
                <p className='h3 pt-5'>Categories</p>
                <p className='pt-2 ml-2 selected'>All Items</p>
                <p className='pt-2 ml-2'>Bird</p>
                <p className='pt-2 ml-2'>Cat</p>
                <p className='pt-2 ml-2'>Dog</p>
                <p className='pt-2 ml-2'>Fish</p>
            </Container>
        </div>
    )
}

export default Navbar
