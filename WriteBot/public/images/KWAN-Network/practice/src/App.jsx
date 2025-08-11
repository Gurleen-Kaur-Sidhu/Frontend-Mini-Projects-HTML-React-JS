// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App






import React from 'react'
import First from './components/First'
import Second from './components/Second'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from './components/Image';
import ImageZoom from './components/ImageZoom';
import Third from './components/Third';
import Fourth from './components/Fourth';

const App = () => {
  return (
    <div>
      {/* <First></First> */}
      <Second></Second>
      <Image></Image>
      <ImageZoom></ImageZoom>
      {/* <Third></Third> */}
      <Fourth></Fourth>
    </div>
  )
}

export default App
