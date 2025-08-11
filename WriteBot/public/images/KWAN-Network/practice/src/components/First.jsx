import React,{useRef} from 'react'
import ThreeSixty from 'react-360-view'
import usePictureInPicture from 'react-use-pip'


const First = () => {
  const videoRef = useRef(null)
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef)
  return (
    <div>
     <div style={{width:"500px",height:"600px"}}>
     <div className="App">
      <video ref={videoRef} autoPlay muted controls  loop width="100%">
        {/* <source src="https://dawchihliou.github.io/react-use-pip/video-sample.mp4" /> */}
        {/* <source src="https://cdn.pixabay.com/video/2022/10/19/135658-764361528_large.mp4" /> */}
        <source src="https://cldnr.rarecarat.com/video/upload/v1722272873/home-next-gen/360-ring-desktop.mp4" />


      </video>
      {isPictureInPictureAvailable && (
        <button
          onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
        >
          {isPictureInPictureActive ? 'Disable' : 'Enable'} Picture in Picture
        </button>
      )}
    </div>
    

    
     </div>


     <h2>fghjkl;bnm,</h2>
     <div style={{height:"500px",width:"500px"}}>
    <ThreeSixty
    amount={75}
    imagePath="https://fastly-production.24c.in/webin/360"
    fileName="output_{index}.jpeg"
        spinReverse
/>
    </div>
    
    
    
   
    
    
    
    </div>
  )
}

export default First



