import React from 'react';
import Banner from './Banner';
import CourseSection from './CourseSection';
import WhyChose from './WhyChose';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import Cta from './Cta';
import WebDevelopment from './WebDevelopment';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <CourseSection/>
            {/* <WebDevelopment/> */}
            <WhyChose/>
            <Teachers/>
            <Testimonials/>
            <Cta/>
        </div>
    );
};

export default HomePage;