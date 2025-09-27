import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
                <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                    <div className="max-w-prose text-left">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Expert Insights on Finance,
                            <strong className="text-[#01101C]"> Accounting </strong>
                            and Beyond
                        </h1>

                        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                            Stay ahead with in-depth analysis on tax, auditing, market trends, and more- tailored for professionals and students alike
                        </p>

                        <div className="mt-4 flex gap-4 sm:mt-6">
                            <a
                                className="inline-block rounded-full border bg-gray-800 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-black"
                                href="#"
                            >
                                Explore Posts
                            </a>

                            <a
                                className="inline-block rounded-full border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                                href="#"
                            >
                                About Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;