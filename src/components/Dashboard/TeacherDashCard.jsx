import React from 'react';

const TeacherDashCard = ({ title, value }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-xl font-bold text-indigo-600">{value}</div>
            <div className="text-sm text-gray-600">{title}</div>
        </div>
    );
};

export default TeacherDashCard;