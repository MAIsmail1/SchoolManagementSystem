import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  Shield, 
  MessageCircle,
  Clock,
  Target,
  Zap,
  TrendingUp,
  Award,
  Headphones,
  FileText,
  Briefcase,
  PieChart
} from 'lucide-react';

const BenefitCard = ({ icon, title, description, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6 relative overflow-hidden group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex items-center mb-4">
        <div className="bg-green-50 text-green-600 p-3 rounded-xl mr-4">
          {React.cloneElement(icon, { className: "w-7 h-7" })}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <div className={`transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="space-y-2 text-xs text-gray-600">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <Zap className="w-3 h-3 mr-2 text-green-500" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

const BenefitsSection1 = () => {
  const stakeholderBenefits = [
    {
      category: 'For Administrators',
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <PieChart className="w-6 h-6 text-green-600" />,
          title: "Comprehensive Management",
          description: "Streamline administrative processes with an all-in-one platform",
          details: [
            "Centralized student and teacher records",
            "Real-time performance tracking",
            "Automated reporting and analytics",
            "Simplified enrollment and registration"
          ]
        },
        {
          icon: <Shield className="w-6 h-6 text-green-600" />,
          title: "Enhanced Security",
          description: "Robust data protection and access control",
          details: [
            "Multi-level user permission management",
            "Secure data encryption",
            "Comprehensive audit trails",
            "Compliance with educational data regulations"
          ]
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-green-600" />,
          title: "Strategic Insights",
          description: "Data-driven decision making for institutional growth",
          details: [
            "Detailed performance analytics",
            "Comparative reporting",
            "Predictive student success modeling",
            "Resource allocation optimization"
          ]
        }
      ]
    },
    {
      category: 'For Teachers',
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <FileText className="w-6 h-6 text-green-600" />,
          title: "Efficient Classroom Management",
          description: "Simplify teaching and administrative tasks",
          details: [
            "Digital lesson planning",
            "Student progress tracking",
            "Automated attendance management",
            "Easy grade recording and analysis"
          ]
        },
        {
          icon: <MessageCircle className="w-6 h-6 text-green-600" />,
          title: "Enhanced Communication",
          description: "Seamless interaction with students and parents",
          details: [
            "Direct messaging systems",
            "Progress report generation",
            "Parent-teacher communication portal",
            "Scheduled consultation booking"
          ]
        },
        {
          icon: <Clock className="w-6 h-6 text-green-600" />,
          title: "Time Management",
          description: "Reduce administrative overhead",
          details: [
            "Automated administrative tasks",
            "Quick student information access",
            "Integrated scheduling tools",
            "Streamlined grading processes"
          ]
        }
      ]
    },
    {
      category: 'For Parents',
      icon: <Users className="w-8 h-8 text-green-600" />,
      benefits: [
        {
          icon: <Target className="w-6 h-6 text-green-600" />,
          title: "Student Progress Tracking",
          description: "Stay informed about your child's educational journey",
          details: [
            "Real-time academic performance updates",
            "Detailed progress reports",
            "Attendance tracking",
            "Performance trend analysis"
          ]
        },
        {
          icon: <Headphones className="w-6 h-6 text-green-600" />,
          title: "Direct Communication",
          description: "Stay connected with teachers and administration",
          details: [
            "Instant messaging with teachers",
            "Scheduled parent-teacher conferences",
            "Notification systems",
            "Easy access to school information"
          ]
        },
        {
          icon: <Award className="w-6 h-6 text-green-600" />,
          title: "Holistic Child Development",
          description: "Comprehensive insight into educational growth",
          details: [
            "Behavioral progress tracking",
            "Academic and extracurricular insights",
            "Personalized learning recommendations",
            "Goal setting and achievement tracking"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Empowering Education, Transforming Lives
        </h2>
        
        {stakeholderBenefits.map((stakeholder, catIndex) => (
          <div key={catIndex} className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-green-50 text-green-600 p-4 rounded-xl mr-4">
                {stakeholder.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-800">
                {stakeholder.category}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stakeholder.benefits.map((benefit, index) => (
                <BenefitCard 
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  details={benefit.details}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection1;