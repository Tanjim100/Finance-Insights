import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#01101C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block"
            >
              <h2 className="text-2xl font-bold">FINANCE INSIGHTS</h2>
            </Link>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              Expert insights on finance, accounting, and market trends.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Blogs
            </Link>
            <Link
              to="/resources"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Finance Insights. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <Link
              to=""
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 19 17"
                fill="currentColor"
              >
                <path d="M0.0442708 0.00012207L7.05483 9.37663L0 17.0001H1.58776L7.76425 10.3256L12.7547 17.0001H18.1579L10.7529 7.09621L17.3195 0.00012207H15.7317L10.0435 6.14719L5.44747 0.00012207H0.0442708ZM2.37919 1.17001H4.86143L15.8226 15.8301H13.3404L2.37919 1.17001Z" />
              </svg>
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 19 17"
                fill="currentColor"
              >
                <path d="M0.157715 1.97487C0.157715 1.40247 0.362201 0.930245 0.771157 0.558203C1.18011 0.186143 1.71177 0.00012207 2.36611 0.00012207C3.00877 0.00012207 3.52872 0.183276 3.926 0.549617C4.33496 0.927395 4.53944 1.41964 4.53944 2.02638C4.53944 2.57588 4.34081 3.03378 3.94353 3.40012C3.53457 3.7779 2.99708 3.96679 2.33105 3.96679H2.31353C1.67087 3.96679 1.15091 3.7779 0.75363 3.40012C0.356347 3.02234 0.157715 2.54725 0.157715 1.97487ZM0.385565 17.0001V5.52941H4.27654V17.0001H0.385565ZM6.43235 17.0001H10.3233V10.5951C10.3233 10.1944 10.3701 9.88529 10.4635 9.6678C10.6271 9.27857 10.8754 8.94944 11.2084 8.68042C11.5414 8.4114 11.9592 8.27689 12.4616 8.27689C13.7703 8.27689 14.4246 9.14119 14.4246 10.8698V17.0001H18.3156V10.4234C18.3156 8.72907 17.9066 7.44406 17.0887 6.5683C16.2708 5.69255 15.19 5.25467 13.8462 5.25467C12.3389 5.25467 11.1646 5.89002 10.3233 7.16073V7.19507H10.3058L10.3233 7.16073V5.52941H6.43235C6.45571 5.89574 6.4674 7.03479 6.4674 8.94659C6.4674 10.8584 6.45571 13.5429 6.43235 17.0001Z" />
              </svg>
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 13 17"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4738 5.84387H7.9146V3.71887C7.9146 3.43708 8.07471 3.16683 8.35972 2.96757C8.64472 2.76831 9.03127 2.65637 9.43433 2.65637H10.9541V0.00012207H7.9146C6.70542 0.00012207 5.54577 0.335947 4.69075 0.933719C3.83573 1.53149 3.35539 2.34224 3.35539 3.18762V5.84387H0.315918V8.50012H3.35539V17.0001H7.9146V8.50012H10.9541L12.4738 5.84387Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
