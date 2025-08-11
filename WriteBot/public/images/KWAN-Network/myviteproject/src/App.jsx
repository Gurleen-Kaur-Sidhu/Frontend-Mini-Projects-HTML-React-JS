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



// import React, { useState } from 'react';
// function App() {
//   const [value, setValue] = useState('');

//   return (
//     <div className="container">
//       <div className="calculator">
//         <form action="">
//           <div className='display'>
//             <input type= "text" value={value}/>
//             </div>
//           <div>
//             <input type="button" value="AC" onClick={e => setValue('')}/>
//             {/* <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/> */}
//             <input type="button" value="+-" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          

//           </div>
//           <div>
//             <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
//           </div>
//           <div>
//             <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
//             <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


import React,{useState} from 'react'

const App = () => {

  let [value , setValue] =useState('')

  let handleValue = (e) =>{
    setValue(value + e.target.value)
    console.log(`${e.target.value} clicked`)
  }

  let acValue = (e) =>{
    setValue('')
    console.log(`AC clicked`)
  }

  let equalValue = (e) =>{
    setValue(eval(value))
    console.log(`= clicked`)
    console.log(`Output : ${eval(value)}`)
  }

  let deValue = (e)=>{
    setValue(value.slice(0, -1))
    console.log(`DE clicked`)
  }


  return (
    <div className="container">
      <div className='calculator'>
        <form>
        <div className='display'>
        <input type= "text" value={value}/>
         </div>
         <div>
            <input type="button" value="AC" onClick={acValue} />
            <input type="button" value="DE" onClick={deValue}/>
            <input type="button" value="." onClick={handleValue}/>
            <input type="button" value="/" onClick={handleValue}/>
          

          </div>
          <div>
            <input type="button" value="7" onClick={handleValue}/>
            <input type="button" value="8" onClick={handleValue} />
            <input type="button" value="9" onClick={handleValue}/>
            <input type="button" value="*" onClick={handleValue}/>
          </div>
          <div>
            <input type="button" value="4" onClick={handleValue}/>
            <input type="button" value="5" onClick={handleValue}/>
            <input type="button" value="6" onClick={handleValue}/>
            <input type="button" value="+" onClick={handleValue}/>
          </div>
          <div>
            <input type="button" value="2" onClick={handleValue}/> 
            <input type="button" value="3" onClick={handleValue}/>
            <input type="button" value="1" onClick={handleValue}/>
            <input type="button" value="-" onClick={handleValue}/>
          </div>
          <div>
            <input type="button" value="00" onClick={handleValue}/>
            <input type="button" value="0" onClick={handleValue}/>
            <input type="button" value="=" className="equal" onClick={equalValue}/>
          </div>

        </form>

      </div>
      
    </div>
  )
}

export default App
