const Book=(props)=>{
   const eventHandler=()=>{
    alert('click ');
   };
   const complex=(Auth)=>{
    console.log(Auth)
   }
        const {Img,Bname,Auth}=props;
               return( <div className='bookstore'>
                <img src={Img} alt="no" />
                <h2>{Bname}</h2>
                <h4>{Auth}</h4>
                <button type='button' onMouseOver={eventHandler}>examp</button>
                <button type='button' onClick={()=>complex(Auth)}>comp</button>
                </div>)}
export default Book;