
import React, { useState ,useEffect} from 'react';
import './Team.css'
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

const Team = () => {
  const [data, setData] = useState([
    // { id: "1", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234" },
    // { id: "2", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234" },
    // { id: "3", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234" },
    // { id: "4", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234" },
    // { id: "5", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234" },
    // { id: "6", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234" }
  ]);

  const fetchData = () => {
    fetch('http://localhost:5000/students')
      .then(res=> res.json())
      .then(data=>{
        setData(data)
      })
      .catch(e=> console.log(e.messege))
  }
  useEffect(()=>{
    fetchData()
  },[]);
  

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (rowsPerPage) => {
    setRowsPerPage(rowsPerPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Header></Header>
      <div className='title'>
        <h1>Manage-Team</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Manage-Team</li>
          </ol>
        </nav>
      </div>

      <div className='team-section'>
        <div>
          <table class='my-table'>
            <thead>
              <tr class="table-row">
                <th class="table-head">Row</th>
                <th class="table-head">Name</th>
                <th class="table-head">Age</th>
                <th class="table-head">Phone number</th>
                <th class="table-head">Email</th>

              </tr>
            </thead>
            <tbody>
              {paginatedData.map((student, index) => (
                <tr class="table-row" key={student.id} onMouseOver={() => console.log(student`${index + 1}`)}>
                  <td class='table-des'>{index + 1}</td>
                  <td class='table-des'>{student.name}</td>
                  <td class='table-des'>{student.age}</td>
                  <td class='table-des'>{student.phonenumber}</td>
                  <td class='table-des'>{student.email}</td>


                </tr>
              ))}
            </tbody>
          </table>
          <div >
            <button onClick={() => handlePageChange(currentPage - 1)} className='btn btn-sm btn-light mt-2 me-2 '>Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)} className='btn btn-sm btn-light mt-2 me-2'>Next</button>
            <select value={rowsPerPage} onChange={(e) => handleRowsPerPageChange(e.target.value)} className='btn btn-sm btn-light mt-2 me-2'>
              <option value={10}>10 rows per page</option>
              <option value={20}>20 rows per page</option>
              <option value={50}>50 rows per page</option>
            </select>
          </div>
        </div>
      </div></div>
  );
};

export default Team;




// import React from 'react'
// import './Team.css'

// const Team = () => {

//     const data = [
//         { id: "1", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234" },
//         { id: "2", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234" },
//         { id: "3", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234" },
//         { id: "4", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234" },
//         { id: "5", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234" },
//         { id: "6", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234" },


//     ]

//     return (
//         <div>
//             <div className='title'>
//                 <h1>Line-Chart</h1>
//                 <nav>
//                     <ol className='breadcrumb'>
//                         <li className='breadcrumb-item'>
//                             <a href='/' >
//                                 <i class="bi bi-house" id='icon'></i></a>
//                         </li>
//                         <li className='breadcrumb-item active'>Linechart</li>
//                     </ol>
//                 </nav>

//             </div>

//             <section className='team-section'>
//                 <table>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>

//                     </tr>
//                     {data.map((val, key) => {
//                         return (
//                             <tr key={key}>
//                                 <td>{val.id}</td>
//                                 <td>{val.name}</td>
//                                 <td>{val.age}</td>
//                                 <td>{val.phonenumber}</td>
//                                 <td>{val.email}</td>

//                             </tr>
//                         )
//                     })}
//                 </table>


//                 <nav aria-label="Page navigation example">
//                     <ul class="pagination justify-content-end mt-2">
//                         <li class="page-item disabled">
//                             <a class="page-link" href="#" tabindex="-1">&laquo;</a>
//                         </li>
//                         <li class="page-item"><a class="page-link" href="#" >1</a></li>
//                         <li class="page-item"><a class="page-link" href="#">2</a></li>
//                         <li class="page-item"><a class="page-link" href="#">3</a></li>
//                         <li class="page-item">
//                             <a class="page-link" href="#">&raquo;</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </section>
//         </div>
//     )
// }

// export default Team