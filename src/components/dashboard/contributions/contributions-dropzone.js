import { Card, Grid } from "@mui/material";
import { useState } from "react";
import { FileDropzone } from "../../file-dropzone";

export const ContributionsDropZone = (props) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (newFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  const handleRemove = (file) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_file) => _file.path !== file.path)
    );
  };

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const handleSubmit = (files, allFiles) => {
    console.log("submit");
    console.log(files)
    console.log(allFiles)
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
