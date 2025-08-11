import React,{useRef} from 'react'

import usePictureInPicture from 'react-use-pip'
import ImageZoom from './ImageZoom';
const Second = () => {
    const videoRef = useRef(null)
    const {
      isPictureInPictureActive,
      isPictureInPictureAvailable,
      togglePictureInPicture,
    } = usePictureInPicture(videoRef)
  return (
    <div>
    <div style={{display:"flex",alignItems:"center",justifyContent:'center',height:"600px"}}>
      <div style={{width:"50%",height:"600px"}}>
      <video ref={videoRef} autoPlay muted controls loop width="100%">
        <source src="https://cdn.pixabay.com/video/2022/10/19/135658-764361528_large.mp4" />


      </video>
      {isPictureInPictureAvailable && (
        <button
          onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
        >
          {isPictureInPictureActive ? 'Disable' : 'Enable'} Picture in Picture
        </button>
      )}
      </div>
      <div style={{width:"50%",height:"600px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
       <h1 style={{fontSize:"44px",letterSpacing:"-.88px",lineHeight:"52px",textAlign:"center"}}>This is the future of<br></br>
       jewelry buying.</h1>
      
       </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
       <p style={{fontSize:"18px",lineHeight:"24px",textAlign:"center"}}>We didn’t say that. 
Our customers
 did.</p>
       </div>
      </div>
    </div>
    
    
    
    
    </div>
  )
}

export default Second
