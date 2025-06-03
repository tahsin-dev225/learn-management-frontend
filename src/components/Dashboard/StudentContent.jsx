'use client';
import { BookOpenCheck, GraduationCap, BadgeCheck, DollarSign } from 'lucide-react';

const StudentContent = () => {
    const stats = [
  {
    label: 'Enrolled Courses',
    value: 1,
    icon: <BookOpenCheck className="w-6 h-6 text-indigo-500" />,
  },
  {
    label: 'Completed Courses',
    value: 2,
    icon: <GraduationCap className="w-6 h-6 text-green-500" />,
  },
  {
    label: 'Total Spend',
    value: 2500,
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
  {
    label: 'Certificates',
    value: 2,
    icon: <BadgeCheck className="w-6 h-6 text-blue-500" />,
  },
];
    return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">🎓 Student Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
          >
            <div className="bg-gray-100 p-3 rounded-xl">
              {stat.icon}
            </div>
            <div>
              <p className="text-xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default StudentContent;