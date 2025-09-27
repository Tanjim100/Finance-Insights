// import { Link, useLocation } from 'react-router-dom';
import Banner from './Banner';
import ExploreTopics from './ExploreTopics';
import FeaturedPosts from './FeaturedPosts';
import Footer from './Footer';
import Navbar from './Navbar';
import ResourceLibrary from './ResourceLibrary';

const Layout = ({ children }) => {
  // const location = useLocation();
  
  // const navLinks = [
  //   { path: '/', label: 'Home' },
  //   { path: '/about', label: 'About' },
  //   { path: '/users', label: 'Users' }
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center font-bold">
                  R
                </div>
                <span className="text-xl font-bold text-gray-900">React Boilerplate</span>
              </Link>
            </div>
            
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'bg-gray-100 text-gray-900 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav> */}
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
      {/* <Banner></Banner>
      <FeaturedPosts></FeaturedPosts>
      <ExploreTopics></ExploreTopics>
      <ResourceLibrary></ResourceLibrary> */}
      
      <main>
        {children}
      </main>
      
      <Footer></Footer>
    </div>
  );
};

export default Layout;