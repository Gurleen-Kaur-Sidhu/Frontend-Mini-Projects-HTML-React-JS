
// import React, { useContext } from 'react';

// import { CartProvider, CartContext } from './CartContext';
// import Navbar from '../navbar/Navbar';

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   return (
//     <div>
//         <Navbar></Navbar>
//       <h1 className='text-center m-5' style={{fontSize:"40px",fontWeight:"500"}}>Cart <i class="bi bi-cart4"></i></h1>

    
      
//       <ul>
//         <h3>Add to Cart Items</h3>
//         <div className='container border border-2 '>
//         {cart.map((product) => (
        
//           <li key={product.id}>
//             <div className='border border-2 border-secondary m-3 d-flex'>
//             <div className='w-25  d-flex align-items-center justify-content-center'>
//             <img src={product.image} height={130} width={130}></img>
//             </div>
//             <div className='w-25  d-flex align-items-center justify-content-center' style={{fontSize:"20px",fontWeight:"700"}}>
//             {product.title}
//             </div>
// <div className='w-25  d-flex align-items-center justify-content-center'style={{fontSize:"20px",fontWeight:"700"}}>
// ${product.price}
// </div>
//              <div className='w-25  d-flex align-items-center justify-content-center'>
//                 <button onClick={() => removeFromCart(product.id)}  style={{fontSize:"20px",fontWeight:"700"}}>Remove</button></div>
            
//             </div>
//           </li>
          
//         ))}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Cart;












// import React, { useContext } from 'react';

// import { CartProvider, CartContext } from './CartContext';
// import Navbar from '../navbar/Navbar';
// import './Cart.css'

// const Cart = () => {
//     const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);

//   return (
//     <div>
//         <Navbar></Navbar>
        
//       <h1 className='text-center m-5' style={{fontSize:"40px",fontWeight:"500"}}>Cart <i class="bi bi-cart4"></i></h1>
  
      
//       <ul>
       
//         <div className='d-flex justify-content-between'>
//         <h3>Add to Cart Items</h3>
//         <button onClick={() => clearCart()} className='btn btn-primary border border-primary buttonnnn m-2 me-5' style={{fontSize:"13px",fontWeight:"700",width:'100px'}}>Remove All</button>
//         </div>
//         <div className='container border border-2 '>
//         {cart.map((product) => (
        
//           <li key={product.id}>
//             <div className='border border-2 border-secondary m-3 d-flex'>
//             <div className='w-25  d-flex align-items-center justify-content-center'>
//             <img src={product.image} height={130} width={130}></img>
//             </div>
//             <div className='w-25  d-flex align-items-center justify-content-center' style={{fontSize:"20px",fontWeight:"700"}}>
//             {product.title}
//             </div>
// <div className='w-25  d-flex align-items-center justify-content-center'style={{fontSize:"20px",fontWeight:"700"}}>
// ${product.price}
// </div>
//              <div className='w-25  d-flex align-items-center justify-content-center'>
//                 <button className='btn btn-primary buttonnn' onClick={() => removeFromCart(product.id)}  style={{fontSize:"20px",fontWeight:"700"}}>-</button>
//                 <span style={{fontSize:"20px",fontWeight:"700",margin:"10px"}}> {product.quantity} </span>
//                 {/* <button className='btn btn-primary buttonnn' onClick={() => removeFromCart(product.id)}  style={{fontSize:"20px",fontWeight:"700"}}>+</button> */}
//                 <button className='btn btn-primary buttonnn' onClick={() => addToCart(product)}  style={{fontSize:"20px",fontWeight:"700"}}>+</button>
                
//               </div>
            
//             </div>
//           </li>
          
//         ))}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Cart;




import React, { useContext } from 'react';

import { CartProvider, CartContext } from './CartContext';
import Navbar from '../navbar/Navbar';
import './Cart.css'

const Cart = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div>
        <Navbar></Navbar>
        
      <h1 className='text-center m-5' style={{fontSize:"40px",fontWeight:"500"}}>Cart <i class="bi bi-cart4"></i></h1>
  
      
      <ul>
       
        <div className='d-flex justify-content-between'>
        <h3>Add to Cart Items</h3>
        <button onClick={() => clearCart()} className='btn btn-primary border border-primary buttonnnn m-2 me-5' style={{fontSize:"13px",fontWeight:"700",width:'100px'}}>Remove All</button>
        </div>
        <div className='container border border-2 '>
        {cart.map((product) => (
        
          <li key={product.id}>
            <div className='border border-2 border-secondary m-3 d-flex' style={{height:'180px'}}>
            <div className='w-25 d-flex align-items-center justify-content-center'>
            <img src={product.image} height={130} width={130}></img>
            </div>
            <div className='w-25  d-flex align-items-center justify-content-center' style={{fontSize:"20px",fontWeight:"700"}}>
            {product.title}
            </div>
<div className='w-25  d-flex align-items-center justify-content-center'style={{fontSize:"20px",fontWeight:"700"}}>
${product.price}
</div>
             <div className='w-25  d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary buttonnn' onClick={() => removeFromCart(product.id)}  style={{fontSize:"20px",fontWeight:"700"}}>-</button>
                <span style={{fontSize:"20px",fontWeight:"700",margin:"10px"}}> {product.quantity} </span>
                {/* <button className='btn btn-primary buttonnn' onClick={() => removeFromCart(product.id)}  style={{fontSize:"20px",fontWeight:"700"}}>+</button> */}
                <button className='btn btn-primary buttonnn' onClick={() => addToCart(product)}  style={{fontSize:"20px",fontWeight:"700"}}>+</button>
                
              </div>
            
            </div>
          </li>
          
        ))}
        </div>
        <div className='d-flex justify-content-end'>
          <h3 className='btn btn-primary border border-primary buttonnnn m-2 me-5' style={{fontSize:"20px",fontWeight:"700"}}>Total: ${calculateTotal()}</h3>
        </div>
      </ul>
    </div>
  );
};

export default Cart;