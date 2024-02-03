import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function DropZone({ setImage }) {
  const onDrop = useCallback((acceptedFiles) => {
    const imageFile = acceptedFiles[0];

    // Pass the image file to the parent component
    setImage(imageFile);

  }, [setImage]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container border p-4">
      <div {...getRootProps({ className: 'dropzone  border-2 border-gray-300 p-4 bg-gray-100' })}>
        <input {...getInputProps()} />
        <p className='font-primary'>Drag 'n' drop an image here, or click to select an image</p>
      </div>
      <aside>
        
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DropZone;
