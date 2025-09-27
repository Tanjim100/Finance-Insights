import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen">

            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {children}
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;