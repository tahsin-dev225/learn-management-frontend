import React from 'react';

const TeacherCourseCard = ({ title, students, status }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">Enrolled: {students}</p>
            <span
            className={`text-xs px-2 py-1 rounded ${
                status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
            >
            {status}
            </span>
            <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-indigo-500 text-white rounded hover:bg-indigo-600">
                    Edit
                </button>
                <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                    View
                </button>
            </div>
        </div>
    );
};

export default TeacherCourseCard;