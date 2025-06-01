import React from 'react';
import Banner from './Banner';
import CourseSection from './CourseSection';
import WhyChose from './WhyChose';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import Cta from './Cta';
import WebDevelopment from './WebDevelopment';
import HowItWorks from './HowItWorks';
import PopularCourse from './PopularCourse';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <CourseSection/>
            <PopularCourse />
            {/* <WebDevelopment/> */}
            <WhyChose/>
            <Teachers/>
            <HowItWorks/>
            <Testimonials/>
            <Cta/>
        </div>
    );
};

export default HomePage;