import React, { useState } from "react";
import "./Dashboard.css"; // Import your CSS file for styling

const GenerateForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can implement your upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // You can send the selectedFile to your backend or perform any other action
    } else {
      console.log('No file selected');
    }
  };

  const handleDownload = () => {
    // You can implement your download logic here
    console.log('Downloading file...');
    // You can send the selectedFile to your backend or perform any other action
  };

  return (
    <div className="page">
      <div className="search-container">
        <h2 className="heading">Nexa Sphere</h2>
        <div className="box">
        <div className="image-upload">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
          <div className="search">
            <button className="search-btn" onClick={handleUpload}>Upload</button>
            <button className="search-btn" onClick={handleDownload}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateForm;
