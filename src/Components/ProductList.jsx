import React from 'react'
import Product from './Product'
import './ProductList.css'
import {products} from '../data.js'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl_text'>
        <h1 className="pl_title">Create & inspire. It's myWebsite</h1>
        <p className="pl_desc">
          myWebsite is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
        </div>
        <div className='pl_list'>

        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
          
        </div>
    </div>
  )
}

export default ProductList