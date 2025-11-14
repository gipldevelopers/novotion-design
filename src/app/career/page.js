// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Briefcase, Heart, TrendingUp, Users, MapPin, Clock, ArrowRight, Star, Target, Zap } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Simple Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props}>
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// // Animated Counter Component
// const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
//   const [count, setCount] = useState(0);

//   React.useEffect(() => {
//     const steps = 60;
//     const increment = parseInt(value) / steps;
//     let current = 0;
//     let step = 0;

//     const timer = setInterval(() => {
//       step++;
//       current = Math.min(increment * step, parseInt(value));
//       setCount(Math.floor(current));
      
//       if (step >= steps) {
//         clearInterval(timer);
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, [value, duration]);

//   return <span className="font-bold">{count}{suffix}</span>;
// };

// const Career = () => {
//   const [activeTab, setActiveTab] = useState('all');

//   const benefits = [
//     { icon: TrendingUp, title: 'Growth Opportunities', description: 'Continuous learning and career advancement in the recruitment industry', color: 'blue' },
//     { icon: Users, title: 'Collaborative Culture', description: 'Work with a diverse, talented team across UK, USA, and India', color: 'green' },
//     { icon: Heart, title: 'Work-Life Balance', description: 'Flexible arrangements and supportive environment', color: 'pink' },
//     { icon: Briefcase, title: 'Meaningful Impact', description: 'Help shape careers and build successful organizations', color: 'purple' },
//     { icon: Target, title: 'Clear Career Path', description: 'Structured progression with regular performance reviews', color: 'orange' },
//     { icon: Zap, title: 'Cutting-Edge Tools', description: 'Access to latest recruitment technologies and AI tools', color: 'yellow' },
//   ];

//   const openings = [
//     {
//       title: 'Senior Recruitment Consultant',
//       location: 'Orlando, FL / Remote',
//       type: 'Full-time',
//       department: 'RPO Services',
//       experience: '3+ years',
//       description: 'Join our growing RPO team and help UK/USA clients build exceptional teams. Manage end-to-end recruitment processes.',
//       tags: ['RPO', 'Client Management', 'Full-Cycle Recruitment']
//     },
//     {
//       title: 'IT Recruiter Specialist',
//       location: 'Ahmedabad, India / Hybrid',
//       type: 'Full-time',
//       department: 'Career Services',
//       experience: '2+ years',
//       description: 'Support our Career Services division by connecting IT professionals with opportunities in the US market.',
//       tags: ['IT Recruitment', 'US Market', 'Candidate Sourcing']
//     },
//     {
//       title: 'Talent Sourcer',
//       location: 'Remote',
//       type: 'Full-time',
//       department: 'Talent Acquisition',
//       experience: '1+ years',
//       description: 'Leverage your sourcing expertise to build talent pipelines for our global clients across multiple industries.',
//       tags: ['Sourcing', 'Talent Pipeline', 'Market Research']
//     },
//     {
//       title: 'Client Relationship Manager',
//       location: 'Orlando, FL',
//       type: 'Full-time',
//       department: 'Business Development',
//       experience: '4+ years',
//       description: 'Build and maintain relationships with enterprise clients, understanding their talent needs and delivering solutions.',
//       tags: ['Client Relations', 'Account Management', 'Strategic Planning']
//     },
//     {
//       title: 'Recruitment Coordinator',
//       location: 'Ahmedabad, India',
//       type: 'Full-time',
//       department: 'Operations',
//       experience: '1+ years',
//       description: 'Support recruitment operations by coordinating interviews, managing schedules, and ensuring smooth candidate experience.',
//       tags: ['Coordination', 'Operations', 'Candidate Experience']
//     },
//     {
//       title: 'Digital Marketing Specialist',
//       location: 'Remote',
//       type: 'Full-time',
//       department: 'Marketing',
//       experience: '2+ years',
//       description: 'Drive our digital presence and employer branding initiatives across social media and professional networks.',
//       tags: ['Digital Marketing', 'Employer Branding', 'Social Media']
//     }
//   ];

//   const departments = ['all', 'RPO Services', 'Career Services', 'Business Development', 'Operations', 'Marketing', 'Talent Acquisition'];

//   const filteredOpenings = activeTab === 'all' 
//     ? openings 
//     : openings.filter(opening => opening.department === activeTab);

//   const colorClasses = {
//     blue: 'bg-blue-100 text-blue-600',
//     green: 'bg-green-100 text-green-600',
//     pink: 'bg-pink-100 text-pink-600',
//     purple: 'bg-purple-100 text-purple-600',
//     orange: 'bg-orange-100 text-orange-600',
//     yellow: 'bg-yellow-100 text-yellow-600'
//   };

//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold">Build Your Career at Novotion</h1>
//             <p className="text-xl md:text-2xl text-purple-100">
//               Join a global recruitment powerhouse that's redefining how organizations and professionals connect
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//               <Link href="#openings">
//                 <Button size="lg" variant="secondary">
//                   View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>
//               {/* <Link href="/contact">
//                 <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
//                   Send Your Resume
//                 </Button>
//               </Link> */}
//               <Link href="/contact">
//   <Button size="lg" variant="outline">
//     Send Your Resume
//   </Button>
// </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold mb-2 text-purple-600"><AnimatedCounter value="50" />+</div>
//               <div className="text-gray-600">Team Members</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold mb-2 text-blue-600"><AnimatedCounter value="3" /></div>
//               <div className="text-gray-600">Continents</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold mb-2 text-green-600"><AnimatedCounter value="15" />+</div>
//               <div className="text-gray-600">Industries</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-600"><AnimatedCounter value="500" />+</div>
//               <div className="text-gray-600">Clients Served</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Join Us */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Build Your Career With Us?</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               We're more than just a recruitment company. We're a team committed to excellence, innovation, and making a real difference in people's careers.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
//                 <CardContent className="p-6 space-y-3 text-center">
//                   <div className={`h-16 w-16 rounded-2xl ${colorClasses[benefit.color]} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
//                     <benefit.icon className="h-8 w-8" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Culture */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture & Values</h2>
//               <p className="text-lg text-gray-600">
//                 At Novotion, we believe in integrity, excellence, commitment, innovation, and empowerment
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="space-y-6 text-gray-600">
//                 <p className="text-lg">
//                   Since 2021, we've built a reputation for being a trusted partner in recruitment. Our team spans three continents, working together to deliver exceptional results for clients and candidates alike.
//                 </p>
//                 <p className="text-lg">
//                   We invest in our people. From day one, you'll receive comprehensive training, ongoing mentorship, and opportunities to grow your skills. Whether you're passionate about RPO services, IT staffing, or talent strategy, you'll find a home at Novotion.
//                 </p>
//               </div>
//               <div className="space-y-6">
//                 <div className="flex items-start gap-3">
//                   <Star className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
//                     <p className="text-gray-600">Regular training sessions and skill development programs</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <Users className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Global Team</h4>
//                     <p className="text-gray-600">Collaborate with colleagues across UK, USA, and India</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <TrendingUp className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Career Growth</h4>
//                     <p className="text-gray-600">Clear progression paths and promotion opportunities</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Open Positions */}
//       <section id="openings" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Open Positions</h2>
//             <p className="text-lg text-gray-600">
//               Explore opportunities to join our growing team across different departments
//             </p>
//           </div>

//           {/* Department Filter */}
//           <div className="flex flex-wrap justify-center gap-2 mb-8">
//             {departments.map((department) => (
//               <button
//                 key={department}
//                 onClick={() => setActiveTab(department)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   activeTab === department
//                     ? 'bg-purple-600 text-white'
//                     : 'bg-white text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 {department === 'all' ? 'All Departments' : department}
//               </button>
//             ))}
//           </div>

//           <div className="max-w-6xl mx-auto space-y-6">
//             {filteredOpenings.map((opening, index) => (
//               <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-600">
//                 <CardContent className="p-6">
//                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold mb-3 text-gray-900">{opening.title}</h3>
//                       <p className="text-gray-600 mb-4">{opening.description}</p>
                      
//                       <div className="flex flex-wrap gap-3 mb-4">
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <MapPin className="h-4 w-4" />
//                           {opening.location}
//                         </div>
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <Clock className="h-4 w-4" />
//                           {opening.type}
//                         </div>
//                         <div className="flex items-center gap-1 text-sm text-gray-500">
//                           <Briefcase className="h-4 w-4" />
//                           {opening.experience} experience
//                         </div>
//                       </div>

//                       <div className="flex flex-wrap gap-2">
//                         {opening.tags.map((tag, tagIndex) => (
//                           <span
//                             key={tagIndex}
//                             className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex flex-col gap-3">
//                       <Link href="/contact">
//                         <Button size="lg" className="w-full lg:w-auto">
//                           Apply Now
//                         </Button>
//                       </Link>
//                       <Link href="/contact">
//                         <Button variant="outline" size="lg" className="w-full lg:w-auto">
//                           Learn More
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Match?</h3>
//               <p className="text-gray-600 mb-6">
//                 We're always looking for talented individuals who share our passion for recruitment and talent solutions.
//                 Send us your resume and we'll keep you in mind for future opportunities.
//               </p>
//               <Link href="/contact">
//                 <Button size="lg" variant="outline">
//                   Send Us Your Resume
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Career;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Heart, TrendingUp, Users, MapPin, Clock, ArrowRight, Star, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Simple Card components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg sm:rounded-xl border bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-4 sm:p-6 ${className}`} {...props}>
    {children}
  </div>
);

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    const steps = 60;
    const increment = parseInt(value) / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, parseInt(value));
      setCount(Math.floor(current));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="font-bold">{count}{suffix}</span>;
};

const Career = () => {
  const [activeTab, setActiveTab] = useState('all');

  const benefits = [
    { icon: TrendingUp, title: 'Growth Opportunities', description: 'Continuous learning and career advancement in the recruitment industry', color: 'blue' },
    { icon: Users, title: 'Collaborative Culture', description: 'Work with a diverse, talented team across UK, USA, and India', color: 'green' },
    { icon: Heart, title: 'Work-Life Balance', description: 'Flexible arrangements and supportive environment', color: 'pink' },
    { icon: Briefcase, title: 'Meaningful Impact', description: 'Help shape careers and build successful organizations', color: 'purple' },
    { icon: Target, title: 'Clear Career Path', description: 'Structured progression with regular performance reviews', color: 'orange' },
    { icon: Zap, title: 'Cutting-Edge Tools', description: 'Access to latest recruitment technologies and AI tools', color: 'yellow' },
  ];

  const openings = [
    {
      title: 'Senior Recruitment Consultant',
      location: 'Orlando, FL / Remote',
      type: 'Full-time',
      department: 'RPO Services',
      experience: '3+ years',
      description: 'Join our growing RPO team and help UK/USA clients build exceptional teams. Manage end-to-end recruitment processes.',
      tags: ['RPO', 'Client Management', 'Full-Cycle Recruitment']
    },
    {
      title: 'IT Recruiter Specialist',
      location: 'Ahmedabad, India / Hybrid',
      type: 'Full-time',
      department: 'Career Services',
      experience: '2+ years',
      description: 'Support our Career Services division by connecting IT professionals with opportunities in the US market.',
      tags: ['IT Recruitment', 'US Market', 'Candidate Sourcing']
    },
    {
      title: 'Talent Sourcer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Talent Acquisition',
      experience: '1+ years',
      description: 'Leverage your sourcing expertise to build talent pipelines for our global clients across multiple industries.',
      tags: ['Sourcing', 'Talent Pipeline', 'Market Research']
    },
    {
      title: 'Client Relationship Manager',
      location: 'Orlando, FL',
      type: 'Full-time',
      department: 'Business Development',
      experience: '4+ years',
      description: 'Build and maintain relationships with enterprise clients, understanding their talent needs and delivering solutions.',
      tags: ['Client Relations', 'Account Management', 'Strategic Planning']
    },
    {
      title: 'Recruitment Coordinator',
      location: 'Ahmedabad, India',
      type: 'Full-time',
      department: 'Operations',
      experience: '1+ years',
      description: 'Support recruitment operations by coordinating interviews, managing schedules, and ensuring smooth candidate experience.',
      tags: ['Coordination', 'Operations', 'Candidate Experience']
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing',
      experience: '2+ years',
      description: 'Drive our digital presence and employer branding initiatives across social media and professional networks.',
      tags: ['Digital Marketing', 'Employer Branding', 'Social Media']
    }
  ];

  const departments = ['all', 'RPO Services', 'Career Services', 'Business Development', 'Operations', 'Marketing', 'Talent Acquisition'];

  const filteredOpenings = activeTab === 'all' 
    ? openings 
    : openings.filter(opening => opening.department === activeTab);

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    pink: 'bg-pink-100 text-pink-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Build Your Career at Novotion
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-purple-100 leading-relaxed">
              Join a global recruitment powerhouse that's redefining how organizations and professionals connect
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
              <Link href="#openings">
                <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Send Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-purple-600"><AnimatedCounter value="50" />+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-blue-600"><AnimatedCounter value="3" /></div>
              <div className="text-gray-600 text-xs sm:text-sm">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-green-600"><AnimatedCounter value="15" />+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-orange-600"><AnimatedCounter value="500" />+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Clients Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why Build Your Career With Us?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just a recruitment company. We're a team committed to excellence, innovation, and making a real difference in people's careers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 group">
                <CardContent className="space-y-3 text-center">
                  <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-xl sm:rounded-2xl ${colorClasses[benefit.color]} flex items-center justify-center mx-auto group-hover:scale-105 sm:group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Culture & Values</h2>
              <p className="text-base sm:text-lg text-gray-600">
                At Novotion, we believe in integrity, excellence, commitment, innovation, and empowerment
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Since 2021, we've built a reputation for being a trusted partner in recruitment. Our team spans three continents, working together to deliver exceptional results for clients and candidates alike.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We invest in our people. From day one, you'll receive comprehensive training, ongoing mentorship, and opportunities to grow your skills. Whether you're passionate about RPO services, IT staffing, or talent strategy, you'll find a home at Novotion.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Continuous Learning</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Regular training sessions and skill development programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Global Team</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Collaborate with colleagues across UK, USA, and India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Career Growth</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Clear progression paths and promotion opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Current Open Positions</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Explore opportunities to join our growing team across different departments
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveTab(department)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === department
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {department === 'all' ? 'All Departments' : department}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
            {filteredOpenings.map((opening, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-600">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{opening.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{opening.description}</p>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                          {opening.location}
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          {opening.type}
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                          <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                          {opening.experience} experience
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {opening.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 sm:gap-3 mt-4 lg:mt-0">
                      <Link href="/contact">
                        <Button size="lg" className="w-full lg:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                          Apply Now
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full lg:w-auto text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white rounded-lg p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Don't See a Perfect Match?</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                We're always looking for talented individuals who share our passion for recruitment and talent solutions.
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                  Send Us Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;