import React, { useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import ResourceLibrary from '../../components/ResourceLibrary';
import ResourceCard from '../../components/ResourceCard';
import AdminResourceCard from '../../components/AdminResourceCard';
import { IoSearch } from 'react-icons/io5';

const AdminResoucePage = () => {

    const features = [
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Student Exam Suggestions",
            description: "Access our extensive library of pre-tested components and integrate them seamlessly into your projects."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Financial Planning Guide",
            description: "Purchase quality-assured components or sell your own creations in our marketplace."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Investment Strategies",
            description: "Get expert guidance and support for your robotics projects from ideation to execution."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Market Analysis Report",
            description: "Enhance your skills with our interactive workshops and comprehensive learning resources."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Tax Planning Checklist",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
        {
            icon: <BsFileEarmarkPdf className="w-6 h-6 text-gray-800" />,
            title: "Retirement Planning Worksheet",
            description: "Collaborate, discuss, and grow with a vibrant community of enthusiasts and professionals."
        },
    ];


    const [count, setCount] = useState(features.length);

    const [itemsPerPage, setItemPerPage] = useState(6);
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const [currentPage, setCurrentPage] = useState(0);

    const pages = [...Array(numberOfPages).keys()];

    const handleItemsPerPage = (e) => {
        const val = e.target.value;
        console.log(val);

        setItemPerPage(val);

        setCurrentPage(0);
    }

    const handleprev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    }

    const handlenext = () => {
        if (currentPage < numberOfPages - 1) setCurrentPage(currentPage + 1);
    }

    return (
        <div className='max-w-7xl mx-auto px-5'>
            <HeaderTitle title={"Resource Library"} para={"Download helpful guides, worksheets, and reference materials"}></HeaderTitle>

            <div className='filter flex justify-between my-12'>
                <div className='flex gap-4'>
                    <div>
                        <label htmlFor="Headline">
                            <select
                                name="Headline"
                                id="Headline"
                                className="mt-0.5 rounded-full p-2 border h-10 border-gray-700 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="Headline">
                            <select
                                name="Headline"
                                id="Headline"
                                className="mt-0.5 w-full rounded-full p-2 border h-10 border-gray-800 shadow-sm sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <div className='relative my-2'>
                        <button><IoSearch className='absolute left-30 md:left-50 lg:left-70 bottom-2 z-10 text-2xl' /></button>
                        <input type="text" placeholder="Type here" className="input pr-12 bg-transparent w-40 md:w-60 border border-black rounded-full lg:w-80 z-5" />

                    </div>


                </div>
            </div>
            <div className='divider h-px bg-gray-300 mb-10'></div>
            <div className='items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    features.map((feature, idx) => (
                        <AdminResourceCard key={idx} feature={feature}></AdminResourceCard>
                    ))
                }
            </div>
            <div className='pagination flex justify-center gap-2 my-16'>
                {/* <p>Current Page: {currentPage}</p> */}
                <button className='btn btn-xs md:btn-md bg-[#E6E8EA] text-black border-none shadow-none' onClick={handleprev}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                {
                    pages.map(page => <button className={`btn btn-xs md:btn-md border-none shadow-none ${(page == currentPage) ? `bg-black text-white` : `bg-[#E6E8EA] text-black`}`} key={page} onClick={() => setCurrentPage(page)}>{page + 1}</button>)
                }
                <button className='btn btn-xs md:btn-md bg-[#E6E8EA] text-black border-none shadow-none' onClick={handlenext}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                {/* <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                        </select> */}
            </div>
        </div>
    );
};

export default AdminResoucePage;