import React, { useEffect, useMemo, useState } from 'react';
import BlogCard from '../../components/BlogCard';
import HeaderTitle from '../../components/HeaderTitle';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { categoriesApi, postsApi, tagsApi } from '../../services/blogsAPI';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IoSearch } from 'react-icons/io5';
// import button from 'daisyui/components/button';
// import blogImage from '../../assets/BlogPic/futuristic-robot-interacting-with-money.jpg'

const Blogs = () => {

    // const queryClient = useQueryClient();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const [itemsPerPage, setItemPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const {
        data: blogs = [],
        isLoading: blogsLoading,
        error: blogsError,
    } = useQuery({
        queryKey: ["publishedPosts"],
        queryFn: () => postsApi.getPublishedPosts(),
    });

    const {
        data: totalPosts,
        isLoading: totalPostsLoading,
        error: totalPostsError,
    } = useQuery({
        queryKey: ["totalPublishedPosts"], // unique key
        queryFn: postsApi.getTotalPublishedPosts, // call the API function
    });

    // const [blogs, setBlogs] = useState(data);
    // console.log(totalPosts);

    const {
        data: tags = [],
        isLoading: tagsLoading,
        error: tagsError,
    } = useQuery({
        queryKey: ["tags"],
        queryFn: () => tagsApi.getAll(),
    });


    const {
        data: categories = [],
        isLoading: categoriesLoading,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesApi.getAll(),
    })

    // console.log(blogs);



    const postCounts = useMemo(() => {
        if (!blogs) return { categories: {}, tags: {} };

        const categoryCounts = {};
        const tagCounts = {};

        blogs.forEach((post) => {
            // Count categories
            if (post.category_id) {
                categoryCounts[post.category_id] =
                    (categoryCounts[post.category_id] || 0) + 1;
            }

            // Count tags
            if (post.post_tags) {
                post.post_tags.forEach((pt) => {
                    const tagId = pt.tags.id;
                    tagCounts[tagId] = (tagCounts[tagId] || 0) + 1;
                });
            }
        });

        return { categories: categoryCounts, tags: tagCounts };
    }, [blogs]);


    // Filter and sort posts
    const filteredAndSortedPosts = useMemo(() => {
        if (!blogs) return [];

        let filtered = [...blogs];

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(
                (post) => post.category_id === selectedCategory
            );
        }

        // Filter by tags (posts must have at least one selected tag)
        if (selectedTags.length > 0) {
            filtered = filtered.filter((post) => {
                if (!post.post_tags) return false;
                const postTagIds = post.post_tags.map((pt) => pt.tags.id);
                return selectedTags.some((tagId) => postTagIds.includes(tagId));
            });
        }

        //  Search Filter (supports title and description)
        if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (post) =>
                    post.title?.toLowerCase().includes(q) ||
                    post.description?.toLowerCase().includes(q)
            );
        }

        // Sort posts
        filtered.sort((a, b) => {
            if (sortBy === "newest") {
                return (
                    new Date(b.published_at || b.created_at) -
                    new Date(a.published_at || a.created_at)
                );
            } else if (sortBy === "oldest") {
                return (
                    new Date(a.published_at || a.created_at) -
                    new Date(b.published_at || b.created_at)
                );
            }
            return 0;
        });

        return filtered;
    }, [blogs, selectedCategory, selectedTags, sortBy, searchQuery]);


    //   console.log(categorys);
    //   console.log(tagsApi);

    // console.log(blogs);

    // const categorys = ["tax", "finance", "accounting", "banking", "industry"];
    // const tags = ["tax planning", "audit", "compliance", "money", "investing", "stocks", "inflation"];

    // const [bcount, setCount] = useState(5);


    const numberOfPages = Math.ceil(20 / itemsPerPage);


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


    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    };


    const handleTagChange = (tagId) => {
        setSelectedTags((prev) =>
            prev.includes(tagId)
                ? prev.filter((id) => id !== tagId)
                : [...prev, tagId]
        );
    };
    console.log(sortBy);

    const handleResetFilters = () => {
        setSelectedCategory(null);
        setSelectedTags([]);
    };

    return (
        <div className='max-w-7xl mx-auto mb-5 px-5'>
            <HeaderTitle title={"All Blog Posts"} para={"Browse our collection of financial insights and expert advice."}></HeaderTitle>
            <div className='divider h-px bg-gray-300 my-10'></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10">
                <div className=" rounded  lg:col-span-3 order-2 md:order-1 mb-16">
                    <div className='flex justify-between mb-5 items-end'>
                        <div className='relative'>
                            <button><IoSearch className='absolute left-40 md:left-90 bottom-2 z-10 text-2xl text-black' /></button>
                            <input
                                type="text"
                                placeholder="Search Blogs"
                                className="input pr-12 bg-transparent border-black rounded-full w-50 md:w-100 z-5 placeholder-black"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                        </div>
                        <div>
                            <label htmlFor="Headline">
                                <select
                                    name="Headline"
                                    id="Headline"
                                    className="mt-0.5 w-full rounded-full p-2 border h-10 border-gray-800 shadow-sm sm:text-sm"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >

                                    <option value="newest">Newest</option>
                                    <option value="oldest">Oldest</option>

                                </select>
                            </label>
                        </div>
                    </div>

                    <div className='my-2'>
                        <h3>
                            Showing {filteredAndSortedPosts.length} of{" "}
                            {blogs?.length || 0}{" "}
                            {blogs?.length === 1 ? "post" : "posts"}
                        </h3>
                    </div>

                    {/* Loading State */}
                    {blogsLoading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="animate-pulse"
                                >
                                    <div className="bg-gray-300 rounded-2xl h-48 mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Error State */}
                    {blogsError && (
                        <div className="max-w-2xl mx-auto">
                            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl text-center">
                                <svg
                                    className="w-12 h-12 text-red-500 mx-auto mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <h3 className="text-xl font-semibold text-red-800 mb-2">
                                    Error Loading Posts
                                </h3>
                                <p className="text-red-600">{blogsError.message}</p>
                            </div>
                        </div>
                    )}
                    {
                        filteredAndSortedPosts.length > 0 && (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                {
                                    filteredAndSortedPosts.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                                }
                            </div>
                        )
                    }

                    {!blogsLoading &&
                        !blogsError &&
                        blogs &&
                        blogs.length > 0 &&
                        filteredAndSortedPosts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto">
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
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        No posts found
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-6">
                                        Try adjusting your filters to find more content.
                                    </p>
                                    <button
                                        onClick={handleResetFilters}
                                        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                        Reset Filters
                                    </button>
                                </div>
                            </div>
                        )
                    }

                    {/* Empty State */}
                    {!blogsLoading && !blogsError && blogs && blogs.length === 0 && (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
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
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    No posts yet
                                </h3>
                                <p className="text-gray-600 text-lg mb-6">
                                    We're working on some amazing content. Check back soon!
                                </p>
                            </div>
                        </div>
                    )}


                    {/* Pagination  */}
                    {
                        (filteredAndSortedPosts.length > itemsPerPage) && (
                            <div className='pagination flex justify-center gap-2 mt-12'>
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
                        )
                    }

                </div>



                {/* Side bar */}
                <div className=" rounded-lg order-1 md:order-2 bg-[#E6E8EA] py-4 px-2 h-fit">
                    <div>
                        <h3 className='text-xl p-2 font-bold'>
                            Filter By
                        </h3>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-white"></span>
                        </span>
                        <div className="py-2">
                            {categoriesLoading ? (
                                <div className="space-y-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="animate-pulse flex items-center justify-between p-1"
                                        >
                                            <div className="h-5 bg-gray-300 rounded w-24"></div>
                                            <div className="h-5 bg-gray-300 rounded-full w-5"></div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                categories &&
                                categories.length > 0 && (
                                    <div className="space-y-1">
                                        {categories.map((category) => {
                                            const count = postCounts.categories?.[category.id] || 0;
                                            return (
                                                <button
                                                    key={category.id}
                                                    onClick={() => handleCategoryChange(category.id)}
                                                    className={`w-full flex items-center justify-between p-2 rounded transition-all duration-200 text-left ${selectedCategory === category.id
                                                        ? "bg-black text-white"
                                                        : "hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <span className="font-medium text-lg">
                                                        {category.name}
                                                    </span>
                                                    <span
                                                        className={`text-sm font-bold px-2.5 py-1.5 rounded ${selectedCategory === category.id
                                                            ? "bg-white/20"
                                                            : "bg-white w-8 h-8 text-center rounded-full text-gray-700"
                                                            }`}
                                                    >
                                                        {count}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className='my-2'>
                        <h3 className='text-xl p-2 font-bold'>
                            Popular Tags
                        </h3>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-white"></span>
                        </span>
                        {/* <div className='py-2'>
                            {
                                tags.map((tag, idx) => (
                                    <button key={idx} className="btn btn-outline border-none rounded-full bg-white hover:bg-black m-2">{tag.name}</button>
                                ))
                            }
                        </div> */}
                        <div className="py-4">
                            {/* <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3> */}
                            {tagsLoading ? (
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div
                                            key={i}
                                            className="animate-pulse h-9 bg-gray-300 rounded-full w-24"
                                        ></div>
                                    ))}
                                </div>
                            ) : (
                                tags &&
                                tags.length > 0 && (
                                    <div className="flex flex-wrap gap-4">
                                        {tags.map((tag) => {
                                            const isSelected = selectedTags.includes(tag.id);
                                            return (
                                                <button
                                                    key={tag.id}
                                                    onClick={() => handleTagChange(tag.id)}
                                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isSelected
                                                        ? "bg-black text-white"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        }`}
                                                >
                                                    {tag.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                )
                            )}
                        </div>
                        <button onClick={handleResetFilters} className="btn btn-neutral w-full rounded-full mt-3">Reset Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Blogs;