import React from 'react';
import Banner from './Banner';
import CourseSection from './CourseSection';
import WhyChose from './WhyChose';
import Teachers from './Teachers';
import Testimonials from './Testimonials';
import Cta from './Cta';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <CourseSection/>
            <WhyChose/>
            <Teachers/>
            <Testimonials/>
            <Cta/>
        </div>
    );
};

export default HomePage;