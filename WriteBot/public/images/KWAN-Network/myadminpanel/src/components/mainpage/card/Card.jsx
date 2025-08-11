
import Chart from "react-apexcharts";
import React from 'react'

  const Card = () => {
    
    const options = {
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug","Sep","oct","nov","dec"]
      }
    };
    const series = [
      {
        name: "series-1",
        data: [30, 40, 25, 50, 49, 21, 70, 51,34,45,30,20],
        color:"black"
      },
      {
        name: "series-2",
        data: [23, 12, 54, 61, 32, 56, 81, 19,]
      },
      {
        name: "series-3",
        data: [24, 20, 5, 75, 42, 79, 72, 35]
      }
    ];
  
  return (
    <div>
      <Chart options={options} series={series} type="area" height={320} />
      </div>
  )
}

export default Card


// import React, { useEffect, useState } from 'react';
// import Chart from "react-apexcharts";




// const Card = () => {

//   const [mydata, setData] = useState({ categories: [], series: [] });

//   // const [mydata1, setData1] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/series'); 
//         const response1 = await fetch('http://localhost:5000/categories'); 
  
//         const jsonData = await response.json();   // series data
//         const jsonData1 = await response1.json(); // categories data
  
//         setData({
//           series: jsonData,      
//           categories: jsonData1  
//         });

//         // setData1(jsonData);
        
//       } catch (error) {
//         console.log(error);
//       } 
//     };
  
//     fetchData();
//   }, []);


//   const options = {
//     xaxis: {
//       categories: mydata.categories
//     }
//   };

//   return(
//     <div>
    
//       <Chart options={options} series={mydata.series} type="area" height={320} />
//     </div>
//   );
// };

// export default Card;


