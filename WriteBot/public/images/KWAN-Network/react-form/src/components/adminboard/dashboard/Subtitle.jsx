// import React, { useState, useEffect } from "react";
// import { Card, Form } from "react-bootstrap";
// import TextField from "@mui/material/TextField";
// import Button from "react-bootstrap/Button";
// import { FaPlus } from "react-icons/fa";
// import Modal from "react-bootstrap/Modal";
// import { useDropzone } from "react-dropzone";
// import { DataGrid } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';
// import { useLocation } from "react-router-dom"; 

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 200 },
//   { field: 'size', headerName: 'Size', width: 130 },
//   { field: 'uploaded', headerName: 'Uploaded', width: 160 },
// ];

// const Subtitle = () => {
//   const location = useLocation();
//   const [rows, setRows] = useState(location.state?.audioFiles || []); 
//   useEffect(() => {
//     const pastAudioFiles = [
//       { id: 1, name: 'Audio File 1.mp3', size: '3.4 MB', uploaded: '2024-12-01 14:30:00' },
//       { id: 2, name: 'Audio File 2.wav', size: '2.1 MB', uploaded: '2024-11-28 10:00:00' },
//       { id: 3, name: 'Audio File 3.flac', size: '5.6 MB', uploaded: '2024-11-25 09:00:00' },
//     ];
//     setRows(pastAudioFiles);
//   }, []);
//   const [show, setShow] = useState(false);
//   const [audioFiles, setAudioFiles] = useState([]); 

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const onDrop = (acceptedFiles) => {
//     const newFiles = acceptedFiles.map((file, index) => ({
//       id: rows.length + index + 1, 
//       name: file.name,
//       size: (file.size / 1024).toFixed(2) + " KB",
//       uploaded: new Date().toLocaleString(), 
//       audioURL: URL.createObjectURL(file), 
//     }));

//     setRows((prevRows) => [...prevRows, ...newFiles]);
//     setAudioFiles((prevFiles) => [
//       ...prevFiles,
//       ...newFiles.map((fileData) => ({ file: fileData, audioURL: fileData.audioURL })),
//     ]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//   });

//   return (
//     <div className="transcription">
//       <Card className="p-2">
//         <Card.Body className="d-flex justify-content-between align-items-center">
//           <Card.Title style={{ fontSize: "25px" }}>Past Audios</Card.Title>
//           <div className="d-flex justify-content-between align-items-center" style={{ columnGap: "20px" }}>
//             <div className="search">
//               <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />
//             </div>
//             <Form.Select aria-label="Default select example">
//               <option>Default</option>
//               <option value="1">Sort By Folder</option>
//               <option value="2">Sort By File</option>
//             </Form.Select>
//             <Button variant="dark" onClick={handleShow}>
//               <FaPlus /> New Transcription
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mt-5">
//         <Paper sx={{ height: 400, width: '100%' }}>
//           <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10]} checkboxSelection />
//         </Paper>
//       </Card>
//     </div>
//   );
// };

// export default Subtitle;



import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDropzone } from "react-dropzone";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useLocation } from "react-router-dom";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'size', headerName: 'Size', width: 130 },
  { field: 'uploaded', headerName: 'Uploaded', width: 160 },
];

const Subtitle = () => {
  const location = useLocation();
  const [rows, setRows] = useState(location.state?.audioFiles || []); 

  const [show, setShow] = useState(false);
  const [audioFiles, setAudioFiles] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDrop = (acceptedFiles) => {
    const newFiles = acceptedFiles.map((file, index) => ({
      id: rows.length + index + 1,
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      uploaded: new Date().toLocaleString(),
      audioURL: URL.createObjectURL(file),
    }));

    setRows((prevRows) => [...prevRows, ...newFiles]);
    setAudioFiles((prevFiles) => [
      ...prevFiles,
      ...newFiles.map((fileData) => ({ file: fileData, audioURL: fileData.audioURL })),
    ]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div className="transcription">
      <Card className="p-2">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Title style={{ fontSize: "25px" }}>Past Audios</Card.Title>
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
    </div>
  );
};

export default Subtitle;

