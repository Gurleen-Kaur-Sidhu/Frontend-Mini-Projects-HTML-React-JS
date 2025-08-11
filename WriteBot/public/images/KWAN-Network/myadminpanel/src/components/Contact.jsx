import React, { useState,useEffect } from 'react'
import './Contact.css'
import Header from './header/Header';

const Contact = () => {
  const [data, setData] = useState([
    // { id: "1", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234", address: "Punjab", city: "India" },
    // { id: "2", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234", address: "Punjab", city: "India" },
    // { id: "3", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234", address: "Haryana", city: "India" },
    // { id: "4", name: "John", age: "23", phonenumber: "+9123456789", email: "my@1234", address: "Himachal", city: "India" },
    // { id: "5", name: "Amol", age: "22", phonenumber: "+9123456789", email: "myadmin@1234", address: "Bihar", city: "India" },
    // { id: "6", name: "Sham", age: "25", phonenumber: "+912349876789", email: "sham@1234", address: "Punjab", city: "India" }
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
        <h1>Contact Info</h1>
        <nav>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='/' >
                <i class="bi bi-house" id='icon'></i></a>
            </li>
            <li className='breadcrumb-item active'>Contact-Info</li>
          </ol>
        </nav>
      </div>

      <section className='contact-section'>
        <div>
          <table class='my-table'>
            <thead>
              <tr class="table-row">
                <th class="table-head">Row</th>
                <th class="table-head">Name</th>
                <th class="table-head">Age</th>
                <th class="table-head">Phone number</th>
                <th class="table-head">Email</th>
                <th class="table-head">Address</th>
                <th class="table-head">City</th>

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
                  <td class='table-des'>{student.address}</td>
                  <td class='table-des'>{student.city}</td>



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
      </section>
    </div>
  )
}

export default Contact
