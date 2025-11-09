import React, { useEffect, useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import ResourceLibrary from '../../components/ResourceLibrary';
import ResourceCard from '../../components/ResourceCard';
import { resourcesApi } from '../../services/resourcesAPI';
import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '../../services/blogsAPI';
import { IoSearch } from 'react-icons/io5';

const ResoucesPage = () => {

    // const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const {
        data: resources = [],
        isLoading: resourcesLoading,
        error: resourcesError,
    } = useQuery({
        queryKey: ["resources"],
        queryFn: () => resourcesApi.getPublishedResources(),
    });


    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: categoriesApi.getAll,
    });

    console.log(resources);

    // Filter resources
    const filteredResources = resources?.filter((resource) => {
        const matchesCategory =
            !selectedCategory || resource.category_id === selectedCategory;
        const matchesSearch =
            !searchQuery ||
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    };


    const [count, setCount] = useState(resources.length);

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

            <div className='filter flex justify-between my-12 gap-4'>
                <div className='flex gap-4'>
                    <div>
                        <label htmlFor="Headline">
                            <select
                                name="Headline"
                                id="Headline"
                                className="mt-0.5 rounded-full p-2 border h-10 border-gray-700 shadow-sm sm:text-sm"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {
                                    categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                                }

                            </select>
                        </label>
                    </div>

                    <div className=''>
                        <label htmlFor="Search">
                            <select
                                name="Headline"
                                id="Headline"
                                className=" w-full rounded-full p-2 border h-10 border-gray-800 shadow-sm sm:text-sm"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >

                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>

                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <div className='relative'>
                        <button><IoSearch className='absolute left-90 bottom-2 z-10 text-2xl text-black' /></button>
                        <input
                            type="text"
                            placeholder="Search Resources"
                            className="input pr-12 bg-transparent border-black rounded-full w-100 z-5 placeholder-black"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                    </div>

                </div>
            </div>
            <div className='divider h-px bg-gray-300 mb-10'></div>
            {/* Resources Grid */}
            {resourcesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="animate-pulse"
                        >
                            <div className="bg-gray-300 rounded mb-4 w-5 h-5"></div>
                            <div className="bg-gray-300 rounded w-3/4 h-10 mb-4"></div>
                            <div className="space-y-3 mb-4">
                                <div className="h-4 bg-gray-300 rounded "></div>
                                <div className="h-4 bg-gray-300 rounded "></div>
                            </div>
                            <div className="bg-gray-300 rounded mb-4 w-1/2 h-8"></div>
                        </div>
                    ))}
                </div>
            ) : resourcesError ? (
                <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                    <p className="font-semibold">Error loading resources</p>
                    <p className="text-sm mt-1">{resourcesError.message}</p>
                </div>
            ) : filteredResources && filteredResources.length > 0 ? (
                <div className='items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                    {
                        filteredResources.map((resource) => (
                            <ResourceCard key={resource.id} resource={resource}></ResourceCard>
                        ))
                    }
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        No resources found
                    </h3>
                    <p className="text-gray-600">
                        {searchQuery || selectedCategory
                            ? "Try adjusting your filters"
                            : "Check back later for new resources"}
                    </p>
                </div>
            )}
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

export default ResoucesPage;