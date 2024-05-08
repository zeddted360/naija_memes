'use client'
import React, { useState,Dispatch } from 'react';

interface FileInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onChange }) => (
  <input type='file' multiple onChange={onChange} />
);

const UploadFile = ({selectedFiles,setSelectedFiles}:{selectedFiles:(FileList | null),setSelectedFiles:Dispatch<React.SetStateAction<FileList | null>>}) =>{

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />
    </div>
  );
}

export default UploadFile;
