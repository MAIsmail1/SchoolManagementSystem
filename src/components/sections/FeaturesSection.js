// src/components/sections/FeaturesSection.jsx
import React from 'react';
import { UserRound, BookOpen, Users2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../common/card';

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Features
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive tools designed to enhance the educational experience for everyone
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <UserRound className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Student Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Efficiently manage enrollments and track student progress. Keep detailed records
                and monitor academic performance with our comprehensive dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Teacher Portal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Easy access to class schedules, student information, and grading tools.
                Streamline your teaching workflow with integrated resources.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-700 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-800 to-green-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users2 className="w-5 h-5 text-green-700" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">Parent Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Monitor your child's progress and communicate with teachers.
                Stay involved in your child's education through real-time updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;