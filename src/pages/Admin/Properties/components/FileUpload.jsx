import React, { useRef } from 'react';
import { Upload, Minus, FileText } from 'lucide-react';

const FileUpload = ({
  label,
  accept = "image/*",
  multiple = true,
  onChange,
  files = [],
  preview = true
}) => {
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const newFiles = multiple ? [...files, ...droppedFiles] : droppedFiles;
    onChange(newFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = multiple ? [...files, ...selectedFiles] : selectedFiles;
    onChange(newFiles);
  };

  const handleRemoveFile = (indexToRemove) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove);
    onChange(newFiles);
  };

  const renderPreviews = () => {
    if (!preview || files.length === 0) return null;

    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Selected files ({files.length})</span>
          {files.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              className="text-red-500 text-sm hover:text-red-600"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file, index) => (
            <div key={index} className="relative group">
              {file.type.startsWith('image/') ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-2">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 truncate">
                      {file.name}
                    </p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg 
                opacity-0 group-hover:opacity-100 transition-opacity duration-200
                flex flex-col justify-between p-2">
                <div className="text-white text-xs truncate">
                  {file.name}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="p-1 bg-red-500 text-white rounded-full 
                      hover:bg-red-600 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className="border-2 border-dashed rounded-lg p-6 hover:bg-gray-50 
          transition-colors cursor-pointer relative"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center py-4">
          <Upload className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-500 mb-1">
            Drag and drop files here, or click to select
          </p>
          <p className="text-xs text-gray-400">
            {multiple ? 'You can select multiple files' : 'Select a file'}
          </p>
        </div>
        {renderPreviews()}
      </div>
    </div>
  );
};

export default FileUpload; 