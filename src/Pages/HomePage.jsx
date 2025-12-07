import React from 'react';
import Banner from '../Component/Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from '../Component/Projects';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default HomePage;