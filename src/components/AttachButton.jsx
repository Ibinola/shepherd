import React, { useState } from "react";
import AttachButton from "./AttachButton";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="App text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Attach File Example</h1>
      <AttachButton onFileSelect={handleFileSelect} />
      {selectedFile && (
        <div className="mt-4">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
