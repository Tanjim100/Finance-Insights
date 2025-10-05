import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const AdminResourceCard = ({ feature }) => {
    const {
        icon,
        title,
        description,
    } = feature;
    return (
        <div className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
            <div className="mb-4">{icon}</div>
            <h3 className="text-base md:text-lg font-semibold mb-2 text-cypher-900">{title}</h3>
            <p className="text-gray-600 text-xs md:text-base">{description}</p>
            <div className='mt-4 flex items-center justify-between'>
                <button className="btn btn-ghost  w-60 hover:bg-[#01101C]">
                    <MdOutlineFileDownload /> Download PDF
                </button>
                <div className='flex gap-1'>
                    <button className="inline-block rounded-sm bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 focus:outline-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M7.92837 1.94311L2.54858 7.63744C2.34544 7.85368 2.14886 8.2796 2.10954 8.57448L1.86709 10.6976C1.78191 11.4642 2.33234 11.9884 3.09245 11.8574L5.20242 11.497C5.4973 11.4446 5.91014 11.2283 6.11327 11.0055L11.493 5.31121C12.4235 4.3283 12.8429 3.20779 11.3948 1.83827C9.95316 0.481858 8.85886 0.960206 7.92837 1.94311Z" stroke="#55636F" stroke-width="0.982907" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.03027 2.89331C7.31204 4.70186 8.77985 6.08448 10.6015 6.26792" stroke="#55636F" stroke-width="0.982907" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.20508 14.0001H13" stroke="#55636F" stroke-width="0.982907" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className="inline-block rounded-sm bg-white px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 focus:outline-hidden"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 13 13" fill="none">
                            <path d="M3.25 1.30012C3.25 0.955341 3.38696 0.62468 3.63076 0.380883C3.87456 0.137086 4.20522 0.00012207 4.55 0.00012207H8.45C8.79478 0.00012207 9.12544 0.137086 9.36924 0.380883C9.61304 0.62468 9.75 0.955341 9.75 1.30012V2.60012H12.35C12.5224 2.60012 12.6877 2.6686 12.8096 2.7905C12.9315 2.9124 13 3.07773 13 3.25012C13 3.42251 12.9315 3.58784 12.8096 3.70974C12.6877 3.83164 12.5224 3.90012 12.35 3.90012H11.6551L11.0916 11.7924C11.0683 12.1204 10.9215 12.4274 10.6809 12.6514C10.4403 12.8755 10.1237 13.0001 9.79485 13.0001H3.2045C2.87569 13.0001 2.55909 12.8755 2.31848 12.6514C2.07786 12.4274 1.9311 12.1204 1.90775 11.7924L1.3455 3.90012H0.65C0.477609 3.90012 0.312279 3.83164 0.190381 3.70974C0.0684819 3.58784 0 3.42251 0 3.25012C0 3.07773 0.0684819 2.9124 0.190381 2.7905C0.312279 2.6686 0.477609 2.60012 0.65 2.60012H3.25V1.30012ZM4.55 2.60012H8.45V1.30012H4.55V2.60012ZM2.6481 3.90012L3.20515 11.7001H9.7955L10.3525 3.90012H2.6481ZM5.2 5.20012C5.37239 5.20012 5.53772 5.2686 5.65962 5.3905C5.78152 5.5124 5.85 5.67773 5.85 5.85012V9.75012C5.85 9.92251 5.78152 10.0878 5.65962 10.2097C5.53772 10.3316 5.37239 10.4001 5.2 10.4001C5.02761 10.4001 4.86228 10.3316 4.74038 10.2097C4.61848 10.0878 4.55 9.92251 4.55 9.75012V5.85012C4.55 5.67773 4.61848 5.5124 4.74038 5.3905C4.86228 5.2686 5.02761 5.20012 5.2 5.20012ZM7.8 5.20012C7.97239 5.20012 8.13772 5.2686 8.25962 5.3905C8.38152 5.5124 8.45 5.67773 8.45 5.85012V9.75012C8.45 9.92251 8.38152 10.0878 8.25962 10.2097C8.13772 10.3316 7.97239 10.4001 7.8 10.4001C7.62761 10.4001 7.46228 10.3316 7.34038 10.2097C7.21848 10.0878 7.15 9.92251 7.15 9.75012V5.85012C7.15 5.67773 7.21848 5.5124 7.34038 5.3905C7.46228 5.2686 7.62761 5.20012 7.8 5.20012Z" fill="#55636F" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default AdminResourceCard;