import AllCourse from "@/components/Courses/AllCourse";
import CoursBanner from "@/components/Courses/CoursBanner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const page = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="min-h-screen">
                <CoursBanner/>
                <AllCourse/>
            </div>
            <Footer/>
        </div>
    );
};

export default page;