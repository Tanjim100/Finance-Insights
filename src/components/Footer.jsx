import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer sm:footer-horizontal bg-[#01101C] text-base-content py-16 justify-around">
                <aside className='space-y-3'>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className='w-70 text-white font-normal tracking-wide'>
                        Your Trusted source for expert insights on finance, accounting, tax, and market trends, designed for professionals and students.
                    </p>
                    <div className="flex gap-4 mt-3">
                        <a className='p-3 bg-[#344553] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M0.0442708 0.00012207L7.05483 9.37663L0 17.0001H1.58776L7.76425 10.3256L12.7547 17.0001H18.1579L10.7529 7.09621L17.3195 0.00012207H15.7317L10.0435 6.14719L5.44747 0.00012207H0.0442708ZM2.37919 1.17001H4.86143L15.8226 15.8301H13.3404L2.37919 1.17001Z" fill="#E6E8EA" />
                            </svg>
                        </a>
                        <a className='p-3 bg-[#344553] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                <path d="M0.157715 1.97487C0.157715 1.40247 0.362201 0.930245 0.771157 0.558203C1.18011 0.186143 1.71177 0.00012207 2.36611 0.00012207C3.00877 0.00012207 3.52872 0.183276 3.926 0.549617C4.33496 0.927395 4.53944 1.41964 4.53944 2.02638C4.53944 2.57588 4.34081 3.03378 3.94353 3.40012C3.53457 3.7779 2.99708 3.96679 2.33105 3.96679H2.31353C1.67087 3.96679 1.15091 3.7779 0.75363 3.40012C0.356347 3.02234 0.157715 2.54725 0.157715 1.97487ZM0.385565 17.0001V5.52941H4.27654V17.0001H0.385565ZM6.43235 17.0001H10.3233V10.5951C10.3233 10.1944 10.3701 9.88529 10.4635 9.6678C10.6271 9.27857 10.8754 8.94944 11.2084 8.68042C11.5414 8.4114 11.9592 8.27689 12.4616 8.27689C13.7703 8.27689 14.4246 9.14119 14.4246 10.8698V17.0001H18.3156V10.4234C18.3156 8.72907 17.9066 7.44406 17.0887 6.5683C16.2708 5.69255 15.19 5.25467 13.8462 5.25467C12.3389 5.25467 11.1646 5.89002 10.3233 7.16073V7.19507H10.3058L10.3233 7.16073V5.52941H6.43235C6.45571 5.89574 6.4674 7.03479 6.4674 8.94659C6.4674 10.8584 6.45571 13.5429 6.43235 17.0001Z" fill="#E6E8EA" />
                            </svg>
                        </a>
                        <a className='p-3 bg-[#344553] rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4738 5.84387H7.9146V3.71887C7.9146 3.43708 8.07471 3.16683 8.35972 2.96757C8.64472 2.76831 9.03127 2.65637 9.43433 2.65637H10.9541V0.00012207H7.9146C6.70542 0.00012207 5.54577 0.335947 4.69075 0.933719C3.83573 1.53149 3.35539 2.34224 3.35539 3.18762V5.84387H0.315918V8.50012H3.35539V17.0001H7.9146V8.50012H10.9541L12.4738 5.84387Z" fill="#E6E8EA" />
                            </svg>
                        </a>
                    </div>
                </aside>
                <nav className='text-white'>
                    <h6 className="footer-title font-bold text-xl opacity-100">Explore</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Resources</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='space-y-4 text-white'>
                    <h6 className="footer-title font-bold text-xl opacity-100 ">Stay Updated</h6>
                    <p className='w-72'>Get the latest finance and accounting insights delivered to your inbox.</p>
                    <div className='flex gap-2 mt-4 items-center'>
                        <input type="email" placeholder="Enter your Email" className="input rounded-full w-65 h-8 px-4 py-2 bg-[#344553] text-[#B0B7BC] text-xs font-normal" />
                        <button className="btn btn-neutral btn-outline rounded-full bg-white hover:bg-black px-6 py-2 text-xs font-semibold">Subscribe</button>
                    </div>
                    <aside className='pt-5'>
                        <p className='text-xs mt-auto '>Copyright © {new Date().getFullYear()} - All right reserved by FINANCE INSIGHTS</p>
                    </aside>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;