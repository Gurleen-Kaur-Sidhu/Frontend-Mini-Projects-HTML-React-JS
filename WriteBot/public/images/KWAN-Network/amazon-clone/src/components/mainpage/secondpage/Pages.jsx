import React from 'react'
import Secondcards from './Secondcards'
import Thirdcard from './Thirdcard'
import Fourthcard from './Fourthcard'
import Fivecard from './Fivecard'
import Footer from '../../footer/Footer'
import Sixcard from './Sixcard'
import Seventh from './Seventh'
import Signin from '../../navbar/Signin'

const Pages = () => {
  return (
    <div className='d-block w-100 pages pt-3' style={{backgroundColor:"rgb(192, 194, 197)"}}>
      <Secondcards></Secondcards>
      <Thirdcard></Thirdcard>
      <Fourthcard></Fourthcard>
      <Fivecard></Fivecard>
      <Secondcards></Secondcards>
      <Sixcard></Sixcard>
      <Fourthcard></Fourthcard>
      
      <Seventh></Seventh>

     
      
      <Footer></Footer>
  
      
    </div>
  )
}

export default Pages
