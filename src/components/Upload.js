import React, { useState, useEffect } from "react";
import * as Papa from "papaparse";
import BellIcon from "../assets/BellIcon.svg";
import Profile from "../assets/ProfilePhoto.png";
import Excel from "../assets/ExcelIcon.svg";
import { AiOutlineUpload } from "react-icons/ai";
import { RiLoader4Line } from "react-icons/ri";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const tagsList = [
  "Technology",
  "Fashion",
  "Food",
  "Travel",
  "Sports",
  "Music",
  "Art",
  "Health",
  "Education",
  "Finance",
];

const Upload = () => {
  const [selectedDropdownTags, setSelectedDropdownTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      const file = selectedFiles[0];

      Papa.parse(file, {
        header: true,
        complete: (result) => {
          const jsonData = result.data;

          // Update uploadedFiles state with parsed data
          setUploadedFiles(
            jsonData.map((row) => ({
              id: row.id || "",
              links: row.links || "",
              prefix: row.prefix || "",
              tags : [],
            }))
          );
          setTags(new Array(jsonData.length).fill([]));
        },
        skipEmptyLines: true,
      });
    }
  }, [selectedFiles]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const file = files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const result = Papa.parse(text, { header: true });

        // Process the parsed data
        const parsedData = result.data.map((row) => ({
          id: row.id || "",
          links: row.links || "",
          prefix: row.prefix || "",
          tags : [],
        }));

        setUploadedFiles(parsedData);
      };

      reader.readAsText(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles([...files]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setLoading(true);

      // Simulate uploading to a server by adding the files to the list
      setTimeout(() => {
        setSelectedFiles([]);
        setLoading(false);
      }, 1000); // Simulating a 1-second delay
    }
  };

  const handleTagRemove = (fileIndex, tagIndex) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles[fileIndex].tags.splice(tagIndex, 1);
    setUploadedFiles(updatedFiles);
  
    const updatedTags = [...tags];
    updatedTags[fileIndex] = updatedFiles[fileIndex].tags;
    setTags(updatedTags);
  };
  
  const handleDropdownChange = (index, event) => {
    const newTag = event.target.value;
  
    // Ensure that the selected tag is not an empty string
    if (newTag.trim() !== "") {
      const updatedFiles = [...uploadedFiles];
      const existingTags = updatedFiles[index].tags || [];
      
      // Check if the tag is not already in the array
      if (!existingTags.includes(newTag)) {
        updatedFiles[index].tags = [...existingTags, newTag];
        setUploadedFiles(updatedFiles);
  
        const updatedTags = [...tags];
        updatedTags[index] = updatedFiles[index].tags;
        setTags(updatedTags);
  
        // Clear the selected tag in the dropdown
        const newTags = [...selectedDropdownTags];
        newTags[index] = "";
        setSelectedDropdownTags(newTags);
      }
    }
  };
  
  return (
    <div className="">
      {/* Mobile */}
      <div className="md:hidden flex flex-col h-full w-full">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-full h-auto pt-[28px] bg-slate-50">
          <div className="text-slate-950 pl-[32px] pb-[24px] font-bold text-base">
            Upload CSV
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-auto bg-white p-4 flex flex-col justify-center items-center">
              <div
                className="w-full h-full flex flex-col items-center space-y-4 justify-center text-neutral-400 border-dashed border-gray-400 border rounded-md"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <img src={Excel} alt="excel" className="p-4 mt-4"/>
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
                  accept=".xls,.xlsx,.csv,.tsv"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  multiple
                />
              </div>
              <button
                className="mt-4 bg-indigo-500 text-white px-8 py-2 rounded flex justify-center w-full"
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

          <div className="p-3 pb-4 overflow-auto">
  {uploadedFiles.length > 0 && (
    <div className="text-black text-xl font-semibold leading-loose">
      Uploads
    </div>
  )}
  {uploadedFiles.length > 0 && (
    <div className="bg-gray-200 px-4 pb-4 rounded-md overflow-auto w-full">
      {uploadedFiles.length > 0 && (
        <div className="w-full bg-gray-200 mt-8 py-4 whitespace-nowrap rounded-md">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-5 gap-8">
                <th className="font-semibold">S.No.</th>
                <th className="font-semibold">Links</th>
                <th className="font-semibold">Prefix</th>
                <th className="font-semibold px-4 whitespace-nowrap">Add Tags</th>
                <th className="font-semibold mx-8">Selected Tags</th>
              </tr>
            </thead>
          </table>
        </div>
      )}
      <table className="w-full">
        <tbody>
          {uploadedFiles.map((file, index) => (
            <tr
              key={index}
              className="w-full bg-white mt-8 py-4 px-2 whitespace-nowrap rounded-md"
            >
              <td>{index + 1}</td>
              <td className="w-50px px-3 whitespace-nowrap">
                <a
                  href={file.links}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm whitespace-nowrap"
                >
                  {file.links}
                </a>
              </td>
              <td className="px-3 text-sm whitespace-nowrap">{file.prefix}</td>
              <td>
                <select
                  value={selectedDropdownTags[index] || ""}
                  onChange={(event) => handleDropdownChange(index, event)}
                  className="border border-gray-400 rounded-md px-2 py-1 whitespace-nowrap"
                >
                  <option value="" disabled>
                    Select Tag
                  </option>
                  {tagsList.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </td>
              <td className="flex flex-col gap-2 whitespace-nowrap">
                {uploadedFiles[index].tags &&
                  uploadedFiles[index].tags.map((tag, tagIndex) => (
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

        </div>
      </div>

      {/* Desktop */}
      <div className="md:flex hidden h-full w-full">
        <Navbar />
        <div className="w-full h-auto bg-neutral-50">
          <div className="mt-[50px] flex justify-between px-[30px] text-black text-2xl font-semibold">
            <div>Upload CSV</div>
            <div className="flex items-center space-x-6">
              <img src={BellIcon} alt="bell" />
              <img
                src={Profile}
                alt="description"
                className="rounded-full h-9 w-9 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[596px] h-[367px] bg-white mt-[137px] p-4 flex flex-col justify-center items-center">
              <div
                className="w-full h-full flex flex-col items-center space-y-4 justify-center text-neutral-400 border-dashed border-gray-400 border rounded-md"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <img src={Excel} alt="excel" />
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
                  //accept=".xls,.xlsx,.csv,.tsv"
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
          <div className="px-[84px] pb-4 transition-all ease-in delay-75">
            {uploadedFiles.length > 0 && (
              <div className="text-black text-2xl font-semibold leading-loose">
                Uploads
              </div>
            )}
            {uploadedFiles.length > 0 && (
              <div className="bg-gray-200 px-4 pb-4 rounded-md overflow-x-auto">
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
                      <div>{index + 1}</div>
                      <div>
                        <a
                          href={file.links}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500"
                        >
                          {file.links}
                        </a>
                      </div>
                      <div>{file.prefix}</div>
                      <div>
                        <select
                          value={selectedDropdownTags[index] || ""}
                          onChange={(event) =>
                            handleDropdownChange(index, event)
                          }
                          className="border border-gray-400 rounded-md px-2 py-1"
                        >
                          <option value="" disabled>
                            Select Tag
                          </option>
                          {tagsList.map((tag) => (
                            <option key={tag} value={tag}>
                              {tag}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {uploadedFiles[index].tags &&
                          uploadedFiles[index].tags.map((tag, tagIndex) => (
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
      </div>
    </div>
  );
};

export default Upload;
