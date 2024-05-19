// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from "../../pages/Home"
import About from "../../pages/About"
import Blog from "../../pages/Blog"
import Features from "../../pages/Features"
import Pricing from '../../pages/Pricing';
import Contact from '../../pages/Contact';
import Faq from '../../pages/Faq';
import Navbar from '../Navbar';
import { Route, Routes } from 'react-router';
import Footers from '../Footers';


const Webroutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footers />
        </>
    );

}

export default Webroutes;
