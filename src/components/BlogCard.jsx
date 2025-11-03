import React, { useState } from 'react';

const BlogCard = ({ blog }) => {
    const {
        id,
        title,
        tag,
        categories,
        description,
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
            <article className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs">
                <img
                    alt=""
                    src={header_image_url}
                    className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                    <h6 className='text-sm mb-3 text-gray-600'>{categories.name}</h6>
                    {/* <h6 className='text-sm mb-3 text-gray-600'></h6> */}
                    <a href="#">
                        <h3 className="text-base md:text-lg font-medium text-gray-900">
                            {title}
                        </h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 line-clamp-3">
                        {description}
                    </p>

                    <div className="group mt-4 flex items-center gap-1 text-sm font-medium justify-between text-[#01101C]">
                        <p>{formatted_published_date}</p>
                        <a href="blog_id" className="inline-flex items-center gap-1 ">
                            Read more

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </div>
            </article>

        </div>
    );
};

export default BlogCard;