"use client"
import { useAddCourseMutation } from "@/components/redux/course/courseApi";
import StudentRoute from "@/components/routes/StudentRoute";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Page = () => {
    const inStyle = 'py-2 px-3 rounded-md border focus:border focus:border-sky-300 focus:outline-0 flex-grow border-gray-400 text-gray-900';

    const [lesson, setLesson] = useState([{ video : "", title : "", id : 0}])
    const [addCourse] = useAddCourseMutation()
    const currentUser = useSelector(state => state?.userReducer?.userInfo);

    const createCourse = async (e) =>{
      e.preventDefault()
      try {
        const imageFile ={image : e.target.photo.files[0]}
        const res =await  axios.post(image_hosting_api, imageFile,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        } )

        if(res.data.success  === true){ 
          const courseInfo ={
              name : e.target.name.value,
              description : e.target.description.value,
              image : res?.data?.data?.display_url,
              category : e.target.category.value,
              price : e.target.price.value,
              lessons : lesson,
              creator : currentUser?._id
            }
          console.log(courseInfo)
        
            const resp = await addCourse(courseInfo);
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Course created successfully `,
                showConfirmButton: false,
                timer: 1500
            });
            setLesson([{ video : "", title : "", id : 0}])
        }
      } catch (err) {
          console.log('error from create course', err)
      }
    }

    const handleDelete = (id)=>{
        // console.log(id)
        const lessons = [...lesson];
        const newlessons = lessons.filter(cId => cId.id !== id)
        setLesson(newlessons)
    }

    return (
      <StudentRoute role={"teacher"}>
        <section className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
            <h1 className="text-3xl font-bold mb-8 text-gray-700 text-center">Create a New Course</h1>
            <form onSubmit={createCourse} className="space-y-4">
              {/* Title */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                    <label className="block text-gray-700 font-semibold mb-2">Course Name</label>
                    <input type="text"  placeholder="Enter course name..." name="name" required
                      className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 font-semibold mb-2">Course Price</label>
                    <input type="number"  placeholder="Course price..." name="price" required
                      className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>
              </div>
              {/* Description */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea name="description" required placeholder="Write a short description about your course..."
                  rows="4" 
                  className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
              </div>
              {/* Thumbnail */}
              <div className="flex flex-col lg:flex-row justify-center gap-4">
                  <div className="w-full">
                      <label className="block text-gray-700 font-semibold mb-2">Thumbnail Image</label>
                      <input name="photo" type="file" required className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 " />
                  </div>
                  <div className="w-full">
                      <label className="block text-gray-700 font-semibold mb-2">Select Category</label>
                      <select placeholder="chose an option" name="category" required
                          className="w-full border text-gray-800 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                          <option value="Web Development">Web Development</option>
                          <option value="Design">Design</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Business">Business</option>
                      </select>
                  </div>
              </div>
              <div className="w-full flex justify-end ">
                <h1 onClick={()=> setLesson([...lesson, { video : "", title : "", id: Date.now() + Math.random()}])}
                className='bg-blue-400 hover:cursor-pointer hover:bg-blue-600 text-white font-semibold px-4 py-1.5 rounded-lg shadow-lg transition'>+ Add video</h1>
              </div>
              {
                  lesson.map((lessonObject,idx) =><div key={idx} className="flex rounded-2xl flex-col lg:flex-row gap-3 my-3">
                    <h1 className='py-2 px-3 w-min rounded-md border bg-sky-400'>{idx+1}</h1>

                      <input required type="text" onChange={e => {
                          const preData = [...lesson]
                          preData[idx].video = e.target.value
                          setLesson(preData)
                      }} className={inStyle} value={lessonObject.video}  placeholder='Enter video link...' name="video"  />

                      <input required type="text" onChange={e => {
                          const preData = [...lesson]
                          preData[idx].title = e.target.value;
                          // preData[idx].id = idx;
                          setLesson(preData)
                      }} className={inStyle} placeholder='Enter video title' name="title"  />
                      
                      <h1 className='py-2 px-3 rounded-md border bg-red-600 text-white text-center cursor-pointer'
                      onClick={()=>handleDelete(lessonObject.id)}
                      >Delete</h1>
                </div> )
              }
              {/* Submit Button */}
              <div className="text-center my-10">
                <input type="submit" value="Add course"
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white w-[80%] font-semibold px-8 py-3 rounded-lg shadow-lg transition"
                />
              </div>
            </form>
          </div>
        </section>
      </StudentRoute>
    );
  }

export default Page;