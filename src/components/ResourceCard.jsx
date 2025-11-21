import React from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const ResourceCard = ({ resource }) => {
  const { title, description, file_url } = resource;
  return (
    <div className="p-4 h-full border border-[#E6E8EA] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <BsFileEarmarkPdf className="w-6 h-6 text-[#01101C]" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#01101C] line-clamp-2">{title}</h3>
        <p className="text-[#55636F] text-base line-clamp-3 mb-5">{description}</p>
      </div>
      <Link
        to={`${file_url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline w-50"
      >
        <MdOutlineFileDownload /> Download
      </Link>
    </div>
  );
};


export default ResourceCard;
