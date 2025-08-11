
// import React, { useState, useEffect } from "react";
// import { Card, Form } from "react-bootstrap";
// import TextField from "@mui/material/TextField";
// import Button from "react-bootstrap/Button";
// import { FaPlus } from "react-icons/fa";
// import Modal from "react-bootstrap/Modal";
// import { useDropzone } from "react-dropzone";
// import { Link } from "react-router-dom"; 
// import { DataGrid } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 200 },
//   { field: 'size', headerName: 'Size', width: 130 },
//   { field: 'uploaded', headerName: 'Uploaded', width: 160 },
//   { field: 'download' , headerName: 'Download', width: 200 },
//   { field: 'preview' , headerName: 'Preview', width: 200 },

// ];

// const Transcription = () => {
//   const [show, setShow] = useState(false);
//   const [audioFiles, setAudioFiles] = useState([]); 
//   const [rows, setRows] = useState([]); 

//   useEffect(() => {
//     const pastAudioFiles = [
//       { id: 1, name: 'Audio File 1.mp3', size: '3.4 MB', uploaded: '2024-12-01 14:30:00' },
//       { id: 2, name: 'Audio File 2.wav', size: '2.1 MB', uploaded: '2024-11-28 10:00:00' },
//       { id: 3, name: 'Audio File 3.flac', size: '5.6 MB', uploaded: '2024-11-25 09:00:00' },
//     ];
//     setRows(pastAudioFiles);
//   }, []);

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
//           <Card.Title style={{ fontSize: "25px" }}>Transcription</Card.Title>
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
//             <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
//               <Modal.Header closeButton>
//                 <Modal.Title>Upload Your Files</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", margin: "30px auto", width: "300px" }}>
//                   <input {...getInputProps()} />
//                   <p>Drag & drop audio files here, or click to select files</p>
//                 </div>
//                 {audioFiles.length > 0 && (
//         <div style={{ margin: '20px' }}>         
//               {audioFiles.map((fileData, index) => (
//                 <div key={index}>
//                   <h4>Uploaded Audio Files : {fileData.file.name}</h4>
//                 </div>
//               ))}
            
       
//         </div>
//       )}
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="primary" onClick={handleClose}>
//                   OK
//                 </Button>
//               </Modal.Footer>
//             </Modal>
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

// export default Transcription;

import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { useDropzone } from "react-dropzone";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import './dashboard.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'size', headerName: 'Size', width: 130 },
  { field: 'uploaded', headerName: 'Uploaded', width: 160 },
  { field: 'status', headerName: 'Status', width: 160 },
  {
    field: 'download',
    headerName: 'Download',
    width: 200,
    renderCell: (params) => {
      const audioURL = params.row.audioURL;
      return (
        <a href={audioURL} download={params.row.name}>
          <Button variant="primary" className="h-50 py-0" style={{fontSize:"14px"}}>Download</Button>
        </a>
      );
    }
  },
  { field: 'preview', headerName: 'Preview', width: 200,
      renderCell: (params) => {
        const audioURL = params.row.audioURL;
        // const isPlaying = params.row.isPlaying;
        return (
          <Button
            variant="primary"
            className="h-50 py-0"
            style={{fontSize:"14px"}}
            // onClick={() => {
            //   const audio = new Audio(audioURL);
            //   audio.play();
            // }}
          // >
          // onClick={() => handlePreviewClick(params.row.id, audioURL, isPlaying)}
        >
          {/* {isPlaying ? 'Stop' : 'Preview'} */}
            Preview
          </Button>
        )}}
      
  
];

const Transcription = () => {
  const [show, setShow] = useState(false);
  const [audioFiles, setAudioFiles] = useState([]);
  const [rows, setRows] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  const [newFileName, setNewFileName] = useState('');
  const [processing, setProcessing] = useState(false); 
 
  useEffect(() => {
    const pastAudioFiles = [
      { id: 1, name: 'Audio File 1.mp3', size: '3.4 MB', uploaded: '2024-12-01 14:30:00', audioURL: 'audioFile1.mp3' },
      { id: 2, name: 'Audio File 2.wav', size: '2.1 MB', uploaded: '2024-11-28 10:00:00', audioURL: 'audioFile2.wav' },
      { id: 3, name: 'Audio File 3.flac', size: '5.6 MB', uploaded: '2024-11-25 09:00:00', audioURL: 'audioFile3.flac' },
    ];
    setRows(pastAudioFiles);
  }, []);

  const handleClose = () => {
    setShow(false);
    setAudioFiles([]);
  };

  const handleShow = () => setShow(true);

  const onDrop = (acceptedFiles) => {
    setProcessing(true); 

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

    setTimeout(() => {
      setProcessing(false); 
    }, 2000); 
  };

      
  

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const handleRename = (index) => {
    const updatedFiles = [...audioFiles];
    const updatedRows = [...rows];

    updatedFiles[index].file.name = newFileName;
    updatedRows[index].name = newFileName;

    setAudioFiles(updatedFiles);
    setRows(updatedRows);
    setCurrentFile(null);
    setNewFileName('');
  };

  const startRenaming = (index, currentName) => {
    setCurrentFile(index);
    setNewFileName(currentName);
  };

  return (
    <div className="transcription">
      <Card className="p-2">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Title style={{ fontSize: "25px" }}>Transcription</Card.Title>
          <div className="d-flex justify-content-between align-items-center" style={{ columnGap: "20px" }}>
            <div className="search">
              <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />
            </div>
            <Form.Select aria-label="Default select example">
              <option>Default</option>
              <option value="1">Sort By Folder</option>
              <option value="2">Sort By File</option>
            </Form.Select>
            <Button variant="dark" onClick={handleShow}>
              <FaPlus /> New Transcription
            </Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
              <Modal.Header closeButton>
                <Modal.Title>Upload Your Files</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", margin: "30px auto", width: "300px" }}>
                  <input {...getInputProps()} />
                  <p>Drag & drop audio files here, or click to select files</p>
                </div>
                {processing ? (
                  <div style={{ textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>
                    <p>Processing your file...</p>
                    
                  </div>
                ) : (
                  <div>
                    {audioFiles.length > 0 && (
                      <div style={{ margin: '20px' }}>
                        {audioFiles.map((fileData, index) => (
                          <div key={index}>
                            {currentFile === index ? (
                              <div>
                                <input
                                  type="text"
                                  value={newFileName}
                                  onChange={(e) => setNewFileName(e.target.value)}
                                />
                                <Button variant="dark" className="ms-3" onClick={() => handleRename(index)}>
                                  Rename
                                </Button>
                              </div>
                            ) : (
                              <div className="d-flex align-items-center justify-content-between">
                                <h4>Uploaded Audio File : {fileData.file.name}</h4>
                                <div variant="link" style={{fontSize:"18px",fontWeight:"600px"}} onClick={() => startRenaming(index, fileData.file.name)}>
                                  Rename
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5" style={{maxWidth:"1199.2px", overflow:"scroll"}}>
        <Paper sx={{ height: '100%', maxWidth: '100%'}}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10]} checkboxSelection />
        </Paper>
      </Card>
    </div>
  );
};

export default Transcription;




// import React, { useState, useEffect } from "react";
// import { Card, Form } from "react-bootstrap";
// import TextField from "@mui/material/TextField";
// import Modal from "react-bootstrap/Modal";
// import { useDropzone } from "react-dropzone";
// import { useNavigate } from "react-router-dom";  
// import { DataGrid } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';
// import {Button} from "react-bootstrap";

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 200 },
//   { field: 'size', headerName: 'Size', width: 130 },
//   { field: 'uploaded', headerName: 'Uploaded', width: 160 },
// ];

// const Transcription = () => {
//   const [show, setShow] = useState(false);
//   const [audioFiles, setAudioFiles] = useState([]); 
//   const [rows, setRows] = useState([]); 

//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const pastAudioFiles = [
//       { id: 1, name: 'Audio File 1.mp3', size: '3.4 MB', uploaded: '2024-12-01 14:30:00' },
//       { id: 2, name: 'Audio File 2.wav', size: '2.1 MB', uploaded: '2024-11-28 10:00:00' },
//       { id: 3, name: 'Audio File 3.flac', size: '5.6 MB', uploaded: '2024-11-25 09:00:00' },
//     ];
//     setRows(pastAudioFiles);
//   }, []);

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
    

//     navigate("/subtitle", { state: { audioFiles: newFiles } });
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//   });

//   return (
//     <div className="transcription">
//       <Card className="p-2">
//         <Card.Body className="d-flex justify-content-between align-items-center">
//           <Card.Title style={{ fontSize: "25px" }}>Transcription</Card.Title>
//           <div className="d-flex justify-content-between align-items-center" style={{ columnGap: "20px" }}>
//             <div className="search">
//               <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />
//             </div>
//             <Form.Select aria-label="Default select example">
//               <option>Default</option>
//               <option value="1">Sort By Folder</option>
//               <option value="2">Sort By File</option>
//             </Form.Select>
//           </div>
//         </Card.Body>
//       </Card>

//       <Card className="mt-5">
//         <Paper sx={{ height: 400, width: '100%' }}>
//           <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10]} checkboxSelection />
//         </Paper>
//       </Card>

     
//       <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload Your Files</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", margin: "30px auto", width: "300px" }}>
//             <input {...getInputProps()} />
//             <p>Drag & drop audio files here, or click to select files</p>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleClose}>
//             OK
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Transcription;


