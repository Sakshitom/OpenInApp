import React from "react";
import BellIcon from "../assets/BellIcon.svg";
import Profile from "../assets/ProfilePhoto.png";
import { useState } from "react";
import Excel from "../assets/ExcelIcon.svg";
import { AiOutlineUpload } from "react-icons/ai";
import { RiLoader4Line } from "react-icons/ri";
const randomTags = ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"];

const Upload = () => {
  const [selectedDropdownTag, setSelectedDropdownTag] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setLoading(true);
      // Simulate uploading to a server by adding the files to the list

      setTimeout(() => {
        const newFiles = selectedFiles.map((file) => ({
          file,
          tags: [],
        }));
        setUploadedFiles([...uploadedFiles, ...newFiles]);
        setSelectedFiles([]);
        setLoading(false);
      }, 1000); // Simulating a 1-second delay
    }
  };
  const handleTagChange = (index, newTags) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[index].tags = newTags;
    setUploadedFiles(updatedFiles);
  };

  const handleTagRemove = (fileIndex, tagIndex) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[fileIndex].tags.splice(tagIndex, 1);
    setUploadedFiles(updatedFiles);
  };
  const handleDropdownChange = (event) => {
    setSelectedDropdownTag(event.target.value);
  };

  const handleAddDropdownTag = () => {
    if (selectedDropdownTag) {
      setTags([...tags, selectedDropdownTag]);
      setSelectedDropdownTag("");
    }
  };

  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-auto    bg-neutral-50">
      {/* Profile part */}
      <div className="mt-[50px] flex justify-between px-[30px] text-black text-2xl font-semibold">
        <div>Upload CSV</div>
        <div className="flex items-center space-x-6">
          <img src={BellIcon} alt="bell"></img>
          <img
            src={Profile}
            alt=" description"
            class="rounded-full h-9 w-9 object-cover"
          />
        </div>
      </div>
      {/* Upload part */}
      <div className="flex flex-col justify-center items-center">
        {/* upload ares */}
        <div className="w-[596px] h-[367px] bg-white mt-[137px] p-4 flex flex-col justify-center items-center">
          <div
            className=" w-full h-full flex flex-col items-center space-y-4 justify-center text-neutral-400 border-dashed border-gray-400 border rounded-md "
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <img src={Excel} alt="excel"></img>
            <div className="flex">
              <p>
                {selectedFiles.length > 0
                  ? `Uploaded file: ${selectedFiles[0].name}`
                  : "Drop your excel sheets here or"}
              </p>
              <label
                htmlFor="fileInput"
                className="cursor-pointer pl-1 text-blue-500"
              >
                {selectedFiles.length === 0 && " Browse"}
              </label>
            </div>

            <input
              type="file"
              id="fileInput"
              accept=".xls, .xlsx"
              onChange={handleFileChange}
              style={{ display: "none" }}
              multiple
            />
          </div>
          <button
            className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded flex justify-center w-full"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <RiLoader4Line size={20} className="animate-spin mr-2" />
              </span>
            ) : (
              <span className="flex items-center">
                <AiOutlineUpload size={20} className="mr-2" />
                Upload
              </span>
            )}
          </button>
        </div>
      </div>
      {/* uploaded */}
      <div className="px-[84px] pb-4 transition-all ease-in delay-75">
        {uploadedFiles.length > 0 && (
          <div className="text-black text-2xl font-semibold leading-loose">
            Uploads
          </div>
        )}
        {uploadedFiles.length > 0 && (
          <div className="bg-gray-200 px-4 pb-4 rounded-md">
            {uploadedFiles.length > 0 && (
              <div className="w-full bg-gray-200 mt-8 p-4 rounded-md">
                <div className="grid grid-cols-5 gap-4">
                  <div className="font-semibold">S.No.</div>
                  <div className="font-semibold">Links</div>
                  <div className="font-semibold">Prefix</div>
                  <div className="font-semibold">Add Tags</div>
                  <div className="font-semibold">Selected Tags</div>
                </div>
              </div>
            )}
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="w-full bg-white mt-8 py-4 px-2 rounded-md"
              >
                <div className="grid grid-cols-5 gap-4">
                  {/* name */}
                  <div>{index + 1}</div>
                  <div>
                    <a
                      href={URL.createObjectURL(file.file)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      {file.file.name}
                    </a>
                  </div>
                  {/* prefix */}
                  <div>prefixSample</div>
                  {/* tags */}
                  <div>
                    <select
                      value={selectedDropdownTag}
                      onChange={handleDropdownChange}
                      className="border border-gray-400 rounded-md px-2 py-1"
                    >
                      <option value="" disabled>
                        Select Tag
                      </option>
                      {randomTags.map((tag) => (
                        <option key={tag} value={tag}>
                          {tag}
                        </option>
                      ))}
                    </select>
                    <button
                      className="ml-2 bg-indigo-500 text-white px-2 py-1 rounded"
                      onClick={handleAddDropdownTag}
                      disabled={tags.includes(selectedDropdownTag)}
                    >
                      Add
                    </button>
                  </div>
                  {/* tags selected */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center"
                      >
                        {tag}
                        <span
                          className="ml-2 cursor-pointer"
                          onClick={() => handleTagRemove(index, tagIndex)}
                        >
                          &times;
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
