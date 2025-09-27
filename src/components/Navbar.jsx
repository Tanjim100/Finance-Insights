import { IoSearch } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/blogs', label: 'Blogs' },
        { path: '/resources', label: 'Resources' },
        { path: '/about', label: 'About' }
    ];

    return (
        <div className="bg-[#01101C]">
            {/* <nav className="bg-[#01101C] sticky top-0 z-50 py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-3">
                                <span className="text-lg font-bold text-white">FINANCE<br/>INSIGHTS</span>
                            </Link>
                        </div>

                        <div className='relative'>
                            <button><IoSearch className='absolute left-90 bottom-2 z-10 text-2xl text-white' /></button>
                            <input type="text" placeholder="Type here" className="input text-white border-white rounded-full w-100 z-5 placeholder-white" />
                            
                        </div>

                        <div className="flex space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 transition-colors text-sm ${location.pathname === link.path
                                            ? 'bg-gray-100 text-gray-900 font-medium'
                                            : 'text-white hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav> */}



            <div className="navbar shadow-sm max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#01101C] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2  transition-colors text-sm ${location.pathname === link.path
                                            ? 'bg-gray-100 text-gray-900 font-medium'
                                            : 'text-white hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <a href='/' className="text-lg font-bold text-white pl-4">FINANCE<br />INSIGHTS</a>
                </div>
                <div className='navbar-center pr-2'>
                    <div className='relative'>
                        <button><IoSearch className='absolute left-30 md:left-50 lg:left-70 bottom-2 z-10 text-2xl text-white' /></button>
                        <input type="text" placeholder="Type here" className="input bg-transparent text-white w-40 md:w-60 border-white rounded-full lg:w-80 z-5 placeholder-white" />

                    </div>
                </div>
                <div className="navbar-end hidden lg:flex text-white">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`px-4 py-2 mx-1 transition-colors text-sm ${location.pathname === link.path
                                            ? 'bg-gray-100 text-gray-900 font-medium'
                                            : 'text-white hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;