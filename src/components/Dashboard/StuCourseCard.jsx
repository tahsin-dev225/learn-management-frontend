"use client"
import Link from 'next/link';

const StuCourseCard = ({ title, progress,id }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <div className="w-full bg-gray-200 my-3.5 rounded-full h-2 mb-2">
                <div
                className="bg-indigo-600 h-2 my-3.5 rounded-full"
                style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-sm text-gray-600 my-3.5">{progress}% completed</p>
            <Link href={`/dashboard/enroledCourse/${id}`} className="mt-2 px-4 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600">
                Continue
            </Link>
        </div>
    );
};

export default StuCourseCard;