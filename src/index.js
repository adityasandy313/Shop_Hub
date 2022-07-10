import React from 'react'
import ReactDom from 'react-dom'
import "./index.css"

import {prods} from './products'
import Product from  './Product'
function Greet()
{
  return (
    <section className='shelf'>
          {prods.map((prod)=>{
            return <Product key={prod.id} {...prod}></Product>
          })}
    </section>
  )
}

// const Img=()=><img src="https://images-eu.ssl-images-amazon.com/images/I/410llGwMZGL._AC_SR400,600_.jpg" 
// alt="this is a pic" ></img>
// const Bname=()=><h2 style={{color:'green',fontSize:'2.5rem'}}>Alchemist</h2>
//const Auth=()=><h3>Panlo cohelo</h3>
 ReactDom.render(<Greet/>,document.getElementById('root'))