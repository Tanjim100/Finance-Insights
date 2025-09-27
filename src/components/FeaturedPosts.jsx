import React from 'react';
import BlogCard from './BlogCard';

const FeaturedPosts = () => {
    const featuredPosts = [
        {
            id: 1,
            title: "5 Smart Ways to Save More on Taxes",
            category: "tax",
            details: "Learn actionable strategies to reduce taxable income legally and boost your savings.",
            publishedDate: "2025-01-14",
            image: "https://source.unsplash.com/600x400/?tax"
        },
        {
            id: 2,
            title: "The Future of Mobile Banking in 2025",
            category: "banking",
            details: "Exploring how AI and blockchain are reshaping mobile banking services worldwide.",
            publishedDate: "2025-02-01",
            image: "https://source.unsplash.com/600x400/?banking"
        },
        {
            id: 3,
            title: "Top 7 Accounting Tools for Small Businesses",
            category: "accounting",
            details: "A roundup of user-friendly and affordable accounting software solutions for startups.",
            publishedDate: "2025-02-10",
            image: "https://source.unsplash.com/600x400/?accounting"
        },
        {
            id: 4,
            title: "Global Finance Trends You Should Watch",
            category: "finance",
            details: "An in-depth analysis of global finance trends impacting investments and policies.",
            publishedDate: "2025-03-05",
            image: "https://source.unsplash.com/600x400/?finance"
        },
    ]
    return (
        <div className='max-w-7xl mx-auto space-y-10 my-10'>
            <h2 className='text-2xl font-bold'>Featured Posts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    featuredPosts.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                }
            </div>
            <div className='flex items-center  justify-center'>
                <a
                    className="inline-block rounded-full border  bg-gray-800 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#01101C]"
                    href="#"
                >
                    Explore Posts
                </a>
            </div>
        </div>
    );
};

export default FeaturedPosts;