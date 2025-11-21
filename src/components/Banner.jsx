
import React from 'react';

import banner3 from '../assets/BannerLogo/herosection asset 1.svg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen border bg-bottom bg-contain md:bg-cover bg-no-repeat " style={{ backgroundImage: `url(${banner3})` }}>
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ">
                    <div className="max-w-prose h-80 text-left">
                        <h1 className="text-2xl font-bold text-gray-900 md:text-5xl">
                            Expert Insights on Finance,<br />
                            <strong className="text-[#01101C]"> Accounting </strong>
                            and Beyond
                        </h1>

                        <p className="mt-4 text-xs text-pretty text-gray-700 sm:text-lg/relaxed">
                            Stay ahead with in-depth analysis on tax, auditing, market trends,
                            and more- tailored for professionals and students alike
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <Link to="/blogs" className='btn btn-sm rounded-full md:btn-lg hover:bg-white hover:text-black shadow-none'>
                                <span className='mx-2'>Explore Posts</span>
                            </Link>

                            <Link
                                className="btn btn-sm btn-outline rounded-full md:btn-lg"
                                to="/about"
                            >
                                <span className='mx-2'>About Me</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Banner;
