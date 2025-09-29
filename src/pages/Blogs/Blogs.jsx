import React, { useState } from 'react';
import BlogCard from '../../components/BlogCard';
import HeaderTitle from '../../components/HeaderTitle';
// import button from 'daisyui/components/button';
// import blogImage from '../../assets/BlogPic/futuristic-robot-interacting-with-money.jpg'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "5 Smart Ways to Save More on Taxes",
            category: "tax",
            tag: "tax planning",
            details: "Learn actionable strategies to reduce taxable income legally and boost your savings.",
            publishedDate: "2025-01-14",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 2,
            title: "The Future of Mobile Banking in 2025",
            category: "banking",
            tag: "money",
            details: "Exploring how AI and blockchain are reshaping mobile banking services worldwide.",
            publishedDate: "2025-02-01",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 3,
            title: "Top 7 Accounting Tools for Small Businesses",
            category: "accounting",
            tag: "audit",
            details: "A roundup of user-friendly and affordable accounting software solutions for startups.",
            publishedDate: "2025-02-10",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 4,
            title: "Global Finance Trends You Should Watch",
            category: "finance",
            tag: "investing",
            details: "An in-depth analysis of global finance trends impacting investments and policies.",
            publishedDate: "2025-03-05",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 5,
            title: "Understanding Corporate Tax in Simple Terms",
            category: "tax",
            tag: "compliance",
            details: "Breaking down complex corporate tax regulations into easy-to-understand concepts.",
            publishedDate: "2025-03-21",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 6,
            title: "How AI is Transforming the Finance Industry",
            category: "industry",
            tag: "stocks",
            details: "A look at how artificial intelligence is driving change across finance operations.",
            publishedDate: "2025-04-11",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 7,
            title: "The Role of Auditors in Modern Accounting",
            category: "accounting",
            tag: "audit",
            details: "Exploring how auditors ensure compliance and accuracy in today’s business world.",
            publishedDate: "2025-05-02",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 8,
            title: "Why Digital Wallets Are Taking Over Banking",
            category: "banking",
            tag: "money",
            details: "Examining the rise of e-wallets and how they are changing the way people bank.",
            publishedDate: "2025-05-19",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 9,
            title: "Industry Insights: Mergers & Acquisitions 2025",
            category: "industry",
            tag: "inflation",
            details: "Key takeaways on the current wave of global M&A activity shaping industries.",
            publishedDate: "2025-06-08",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 10,
            title: "Personal Finance Tips for Young Professionals",
            category: "finance",
            tag: "money",
            details: "Practical advice on budgeting, investing, and saving for millennials and Gen Z.",
            publishedDate: "2025-06-25",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 11,
            title: "How Banking Regulations Affect Startups",
            category: "banking",
            tag: "compliance",
            details: "An overview of how compliance and regulations impact small businesses in banking.",
            publishedDate: "2025-07-10",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 12,
            title: "Latest Tax Policy Changes in 2025",
            category: "tax",
            tag: "tax planning",
            details: "Highlights of new tax reforms and how they affect individuals and corporations.",
            publishedDate: "2025-07-22",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 13,
            title: "The Rise of Sustainable Finance",
            category: "finance",
            tag: "investing",
            details: "Why green bonds and ESG investments are gaining momentum in global markets.",
            publishedDate: "2025-08-05",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 14,
            title: "AI-Powered Accounting: The Next Frontier",
            category: "accounting",
            tag: "compliance",
            details: "How automation and AI are revolutionizing bookkeeping and financial reporting.",
            publishedDate: "2025-08-19",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 15,
            title: "Industry Outlook: Banking in the Digital Age",
            category: "industry",
            tag: "stocks",
            details: "A closer look at how traditional banks are adapting to digital transformation.",
            publishedDate: "2025-09-01",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 16,
            title: "Understanding Tax Deductions for Freelancers",
            category: "tax",
            tag: "tax planning",
            details: "A guide for freelancers to maximize deductions and reduce tax liability.",
            publishedDate: "2025-07-05",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 17,
            title: "Top Banking Trends to Watch in 2025",
            category: "banking",
            tag: "money",
            details: "How digital banking innovations are reshaping customer experience.",
            publishedDate: "2025-07-12",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 18,
            title: "The Role of Compliance in Global Finance",
            category: "finance",
            tag: "compliance",
            details: "Why compliance is critical in today’s interconnected financial markets.",
            publishedDate: "2025-07-18",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 19,
            title: "Audit Essentials for Small Businesses",
            category: "accounting",
            tag: "audit",
            details: "Key auditing practices every small business owner should know.",
            publishedDate: "2025-07-24",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 20,
            title: "How Inflation Impacts Investment Decisions",
            category: "finance",
            tag: "inflation",
            details: "An analysis of how rising inflation changes stock market strategies.",
            publishedDate: "2025-08-01",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 21,
            title: "Mastering Corporate Tax Compliance",
            category: "tax",
            tag: "compliance",
            details: "Steps companies must take to avoid penalties and stay tax compliant.",
            publishedDate: "2025-08-07",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 22,
            title: "Investing in the Stock Market: A Beginner’s Guide",
            category: "finance",
            tag: "stocks",
            details: "A simple guide for beginners to start investing in the stock market.",
            publishedDate: "2025-08-13",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 23,
            title: "How AI is Automating Accounting Workflows",
            category: "accounting",
            tag: "audit",
            details: "AI-driven tools that reduce manual accounting tasks and errors.",
            publishedDate: "2025-08-20",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 24,
            title: "The Rise of Green Banking Initiatives",
            category: "banking",
            tag: "investing",
            details: "How banks are integrating sustainability into their financial services.",
            publishedDate: "2025-08-28",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 25,
            title: "Managing Personal Finances During Inflation",
            category: "finance",
            tag: "inflation",
            details: "Tips for handling personal budgets when inflation rates are high.",
            publishedDate: "2025-09-02",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 26,
            title: "Accounting Compliance in the Digital Era",
            category: "accounting",
            tag: "compliance",
            details: "How digital transformation is reshaping compliance requirements.",
            publishedDate: "2025-09-09",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 27,
            title: "Best Investment Strategies for 2025",
            category: "finance",
            tag: "investing",
            details: "Smart investment strategies to maximize returns in a volatile market.",
            publishedDate: "2025-09-15",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 28,
            title: "The Importance of Tax Planning Before Retirement",
            category: "tax",
            tag: "tax planning",
            details: "How smart tax planning can secure your financial future post-retirement.",
            publishedDate: "2025-09-21",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 29,
            title: "Industry Outlook: Global Mergers in 2025",
            category: "industry",
            tag: "stocks",
            details: "An overview of major M&A deals and their effect on the global market.",
            publishedDate: "2025-09-26",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 30,
            title: "How Startups Can Manage Banking Compliance",
            category: "banking",
            tag: "compliance",
            details: "A compliance checklist tailored for startup banking operations.",
            publishedDate: "2025-10-03",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        },
        {
            id: 31,
            title: "Top Accounting Mistakes to Avoid in 2025",
            category: "accounting",
            tag: "audit",
            details: "A breakdown of the most common accounting mistakes and fixes.",
            publishedDate: "2025-10-11",
            image: "/src/assets/BlogPic/shopping-banking-accounting-webpage-text-search-concept.jpg"
        },
        {
            id: 32,
            title: "The Future of Digital Finance",
            category: "finance",
            tag: "money",
            details: "Exploring how digital currencies are reshaping personal finance.",
            publishedDate: "2025-10-17",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 33,
            title: "Why Inflation Matters for Business Leaders",
            category: "industry",
            tag: "inflation",
            details: "A business leader’s perspective on managing inflation challenges.",
            publishedDate: "2025-10-23",
            image: "/src/assets/BlogPic/43398.jpg"
        },
        {
            id: 34,
            title: "Tax Planning Tips for Entrepreneurs",
            category: "tax",
            tag: "tax planning",
            details: "How entrepreneurs can leverage tax planning to boost profitability.",
            publishedDate: "2025-10-30",
            image: "/src/assets/BlogPic/futuristic-robot-interacting-with-money.jpg"
        },
        {
            id: 35,
            title: "Banking in the Age of AI",
            category: "banking",
            tag: "investing",
            details: "How AI is transforming banking services and customer investments.",
            publishedDate: "2025-11-05",
            image: "/src/assets/BlogPic/2003.i105.019..isometric bank flowchart.jpg"
        }
    ];

    const categorys = ["tax", "finance", "accounting", "banking", "industry"];
    const tags = ["tax planning", "audit", "compliance", "money", "investing", "stocks", "inflation"];

    const [count, setCount] = useState(blogs.length);

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
                        <h3>Total blogs: {blogs.length}</h3>
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
                            blogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
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
                                    <button key={idx} className="btn btn-outline border-none rounded-full bg-white hover:bg-black m-2">{tag}</button>
                                ))
                            }
                        </div>
                        <button className="btn btn-neutral w-full rounded-full mt-3">Neutral</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;