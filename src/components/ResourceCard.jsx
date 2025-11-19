import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const ResourceCard = ({ resource }) => {
  const { title, description, file_url } = resource;
  return (
    <div className="p-6 h-full border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="mb-2">
          <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-cypher-900 ">{title}</h3>
        <p className="text-gray-600 text-base line-clamp-2">{description}</p>
      </div>
      <Link
        to={`${file_url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-4 w-fit hover:underline bg-transparent hover:bg-transparent border-none hover:border-none hover:shadow-none underline-offset-4 duration-300"
      >
        <MdOutlineFileDownload /> Download
      </Link>
    </div>
  );
};

export default ResourceCard;
