const Product=(props)=>{
   const eventHandler=()=>{
    alert('click ');
   };
   const complex=()=>{
    window.alert('Order Placed')
   }
        const {Img,Pname,price}=props;
               return( 
               <div className='bgprod'>
                <img className="pic" src={Img} alt="no" />
                <h3>{Pname}</h3>
                <h5>{price}</h5>
                <button type='button' className="btn" onClick={eventHandler} >Add to cart</button>
                <button type='button' className="btn" onClick={()=>complex()}>buy</button>
               </div> )}
export default Product;