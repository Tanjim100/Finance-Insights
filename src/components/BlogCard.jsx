import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const {
        id,
        title,
        tag,
        categories,
        description,
        slug,
        published_at,
        header_image_url,
    } = blog;

    const date = new Date(published_at);
    const formatted_published_date = date.toLocaleDateString("en-US", {
        month: "long", // Full month name
        day: "numeric",
        year: "numeric",
    });

    return (
        <div>
            <article className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs ">
                <img
                    alt=""
                    src={header_image_url}
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <div className='h-40'>
                        <h6 className='text-sm mb-2 text-gray-600'>{categories.name}</h6>
                        {/* <h6 className='text-sm mb-3 text-gray-600'></h6> */}
                        {/* <a href="#"> */}
                            <h3 className="text-base md:text-lg font-medium text-gray-900 line-clamp-2">
                                {title}
                            </h3>
                        {/* </a> */}

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {description}
                        </p>
                    </div>

                    <div className="group mt-4 flex items-center gap-1 justify-between text-[#01101C]">
                        <p className='text-xs'>{formatted_published_date}</p>
                        <Link to={`/blogs/${slug}`} className="inline-flex items-center gap-1 font-medium">
                            Read more

                            <span aria-hidden="true" className="text-sm block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </Link>
                    </div>
                </div>
            </article>

        </div>
    );
};

export default BlogCard;