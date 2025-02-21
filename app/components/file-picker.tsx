"use client"

import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JSON"];

interface FilePickerProps {
  uploadHandler: (file: File) => void;
  onTypeError?: () => void;
  onSizeError?: () => void;
  error?: string;
}

function FilePicker({ uploadHandler, onSizeError, onTypeError, error }: FilePickerProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setFile(file);

    uploadHandler(file);
  };

  return (
    <div className="grid-rows-2">
      <FileUploader 
        handleChange={handleUpload}
        name="file"

        // Maximum file size is 2MB
        // We do that to prevent DoS
        maxSize="2"
        types={fileTypes}

        onSizeError={onSizeError ? onSizeError : () => {}}
        onTypeError={onTypeError ? onTypeError : () => {}}

        uploadedLabel={file ? file.name : ""}
      />
      {error ? <ErrorBox error={error} /> : ""}
    </div>
  );
}

interface ErrorBoxProps {
  error: string;
}

function ErrorBox({ error }:ErrorBoxProps) {
  return (
    <div className="mt-2 border-dashed border-2 border-red-700 rounded-md p-3 max-w-[508px]">
      <p className="text-red-500 text-sm text-center">
        { error }
      </p>
    </div>
  );
}

export default FilePicker;