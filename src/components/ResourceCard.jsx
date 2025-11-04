import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ResourceCard = ({ feature }) => {
    const {
        icon,
        title,
        description,
        file_url,
    } = feature;
    return (
        <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
            <div className="mb-4">{icon}</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-cypher-900">{title}</h3>
            <p className="text-gray-600 text-xs md:text-base">{description}</p>
            <Link to={`${file_url}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-4 w-60 hover:bg-[#01101C]">
                <MdOutlineFileDownload /> Download
            </Link>
        </div>
    );
};

export default ResourceCard;