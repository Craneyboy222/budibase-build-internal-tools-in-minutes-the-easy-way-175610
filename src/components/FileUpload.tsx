import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface FileUploadProps {
  onUpload: (files: FileList) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, className = '' }) => {
  const [error, setError] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (!e.target.files) return;
    if (e.target.files.length > 5) {
      setError('You can upload up to 5 files only.');
      return;
    }
    onUpload(e.target.files);
  };

  return (
    <div className={`file-upload-container ${className}`} role="region" aria-label="file upload">
      <input type="file" multiple onChange={handleFileChange} className="p-2" aria-labelledby="file-upload" />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

FileUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default FileUpload;
