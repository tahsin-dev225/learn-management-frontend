"use client"
import { useAddCourseMutation, useAddLessonMutation, useGetCourseQuery, useGetCreatorCourseQuery } from "@/components/redux/course/courseApi";
import StudentRoute from "@/components/routes/StudentRoute";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";


const Page = () => {
    const {id} = useParams()
    const inStyle = 'py-2 px-3 rounded-md border focus:border focus:border-sky-300 focus:outline-0 flex-grow border-gray-400 text-gray-900';

    const [lesson, setLesson] = useState([{ video : "", title : "", id : 0}])
    const [addlesson] = useAddLessonMutation()
    const {data : course } = useGetCourseQuery(id)
    const router = useRouter()

    const updateLesson = async (e) =>{
        e.preventDefault()
        try {
            const lessonInfo ={
                courseId : id,
                lessons : lesson,
            }
            console.log(lessonInfo)

            const resp = await addlesson(lessonInfo);
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Lesson added successfully `,
                showConfirmButton: false,
                timer: 1500
            });
            setLesson([{ video : "", title : "", id : 0}])
             router.push('/dashboard/manageCourse')
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
            <h1 className="text-3xl font-bold mb-8 text-sky-600 text-center">Add lesson lesson .</h1>
            <form onSubmit={updateLesson} className="space-y-4">
              {/* Title */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full">
                    <label className="block text-2xl text-gray-700 font-semibold mb-2">Course Name : {course?.name}</label>
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