import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/BlogCard';
import HeaderTitle from '../../components/HeaderTitle';
import { SupabaseClient } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import { postsApi, tagsApi } from '../../services/blogsAPI';
import { useQuery, useQueryClient } from '@tanstack/react-query';
// import button from 'daisyui/components/button';
// import blogImage from '../../assets/BlogPic/futuristic-robot-interacting-with-money.jpg'

const Blogs = () => {

    const queryClient = useQueryClient();

    const {
        data: myBlogs = [],
        isLoading: postsLoading,
        error: postsError,
    } = useQuery({
        queryKey: ["publishedPosts"],
        queryFn: () => postsApi.getPublishedPosts(),
    });

    const {
        data: tags = [],
        isLoading: tagsLoading,
        error: tagsError,
    } = useQuery({
        queryKey: ["tags"],
        queryFn: () => tagsApi.getAll(),
    });


      console.log(tags);
    //   console.log(tagsApi);

    // console.log(myBlogs);

    const categorys = ["tax", "finance", "accounting", "banking", "industry"];
    // const tags = ["tax planning", "audit", "compliance", "money", "investing", "stocks", "inflation"];

    const [count, setCount] = useState(myBlogs.length);

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
        <div className='max-w-7xl mx-auto mb-5 px-5'>
            <HeaderTitle title={"All Blog Posts"} para={"Browse our collection of financial insights and expert advice."}></HeaderTitle>
            <div className='divider h-px bg-gray-300 my-12'></div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10">
                <div className=" rounded  lg:col-span-3 order-2 md:order-1 mb-16">
                    <div className='flex justify-between mb-10 items-end'>
                        <h3>Total blogs: {myBlogs.length}</h3>
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
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
                        {
                            myBlogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                        }
                    </div>
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
                        <div className='py-2 flex flex-col'>
                            {
                                categorys.map((blogcategory, idx) => (
                                    <button key={idx}>
                                        <div className='flex justify-between p-2'>
                                            <p>{blogcategory}</p>
                                            <span className='p-1 bg-white rounded-full text-xs'>50</span>
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='my-2'>
                        <h3 className='text-xl p-2'>
                            Popular Tags
                        </h3>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-white"></span>
                        </span>
                        <div className='py-2'>
                            {
                                tags.map((tag, idx) => (
                                    <button key={idx} className="btn btn-outline border-none rounded-full bg-white hover:bg-black m-2">{tag.name}</button>
                                ))
                            }
                        </div>
                        <button className="btn btn-neutral w-full rounded-full mt-3">Reset Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;