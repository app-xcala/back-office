import { Card, Grid } from "@mui/material";
import { useState } from "react";
import { FileDropzone } from "../../file-dropzone";

export const ContributionsDropZone = (props) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log(newFiles)
  };
  const handleRemove = (file) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_file) => _file.path !== file.path)
    );
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const handleSubmit = () => {
    console.log("submit ===>", files);
    setFiles([]);
  };

  const readFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
  };

  return (
    <Grid container spacing={4} {...props}>
      <Grid item xs={12}>
        <Card sx={{ p: 1 }}>
          <FileDropzone
            accept="text/*"
            files={files}
            onDrop={handleDrop}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
            onUpload={handleSubmit}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
