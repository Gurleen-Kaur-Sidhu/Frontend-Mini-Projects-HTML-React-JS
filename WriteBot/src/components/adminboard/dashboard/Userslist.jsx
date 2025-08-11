import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'City', headerName: 'City', width: 130 },
    { field: 'Phone', headerName: 'Phone', width: 160 },
  ];
const Userslist = () => {

      
        const [rows, setRows] = useState([]); 
      
      
  return (
    <div>
          <div className="transcription">
      <Card className="p-2">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Title style={{ fontSize: "25px" }}>User List</Card.Title>
          <div className="d-flex justify-content-between align-items-center" style={{ columnGap: "20px" }}>
            <div className="search">
              <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />
            </div>
            <Form.Select aria-label="Default select example">
              <option>Default</option>
              <option value="1">Sort By Folder</option>
              <option value="2">Sort By File</option>
            </Form.Select>
            
            
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5">
        <Paper sx={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10]} checkboxSelection />
        </Paper>
      
        
      </Card>
    </div></div>
  )
}

export default Userslist
