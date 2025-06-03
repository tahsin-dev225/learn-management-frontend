'use client';
import { BookOpenCheck, GraduationCap, BadgeCheck, DollarSign } from 'lucide-react';

const StudentContent = ({stats}) => {
    
    return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center hover:-translate-y-2 transition-transform duration-300 gap-4 p-6 bg-white rounded-2xl shadow hover:shadow-md "
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