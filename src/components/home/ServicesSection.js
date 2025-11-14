// // src/components/home/ServicesSection.js
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Building,
//   Briefcase,
//   Users
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('rpo');

//   const services = {
//     rpo: {
//       title: 'RPO Solutions',
//       subtitle: 'For Organizations',
//       description: 'Complete recruitment outsourcing for UK & USA businesses',
//       icon: Building,
//       color: 'blue',
//       features: [
//         'End-to-End Recruitment',
//         'Talent Sourcing',
//         'Cost Optimization',
//         'Scalable Operations'
//       ],
//       stats: '500+ Clients • 40% Cost Save',
//       gradient: 'from-blue-500 to-blue-600'
//     },
//     career: {
//       title: 'Career Support',
//       subtitle: 'For Professionals',
//       description: 'USA market placement for IT professionals',
//       icon: Briefcase,
//       color: 'green',
//       features: [
//         'Job Placement',
//         'Interview Support',
//         'Contract Negotiation',
//         'Career Guidance'
//       ],
//       stats: '10K+ Placed • 85% Success',
//       gradient: 'from-green-500 to-green-600'
//     }
//   };

//   const currentService = services[activeTab];

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-48 h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//         <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//       </div>

//       <div className="container mx-auto px-4 relative">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
//             Our Services
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Strategic Talent Solutions
//             <span className="block text-gradient">For Your Success</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Specialized services designed for both organizations and IT professionals
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-gray-100 rounded-xl p-2 inline-flex">
//             {Object.entries(services).map(([key, service]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
//                   activeTab === key
//                     ? `bg-white text-${service.color}-600 shadow-md`
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <service.icon className="h-4 w-4" />
//                 {service.subtitle}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="grid md:grid-cols-12 gap-6 items-start">
//               {/* Icon and Header */}
//               <div className="md:col-span-2 flex justify-center md:justify-start">
//                 <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${currentService.gradient} flex items-center justify-center shadow-lg`}>
//                   <currentService.icon className="h-8 w-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="md:col-span-10">
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                       {currentService.title}
//                     </h3>
//                     <p className="text-gray-600 text-lg mb-3">
//                       {currentService.description}
//                     </p>
//                     <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
//                       {currentService.stats}
//                     </div>
//                   </div>
                  
//                   <Link href={`/services/${activeTab}`}>
//                     <Button className={`bg-gradient-to-r ${currentService.gradient} hover:shadow-lg text-white px-6 py-2 font-medium group transition-all duration-300`}>
//                       Explore Service
//                       <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 gap-3">
//                   {currentService.features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors duration-200"
//                     >
//                       <div className={`h-6 w-6 rounded-full bg-${currentService.color}-100 flex items-center justify-center flex-shrink-0`}>
//                         <CheckCircle className={`h-3 w-3 text-${currentService.color}-600`} />
//                       </div>
//                       <span className="text-gray-700 font-medium text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
//           <div className="text-center p-6 rounded-xl bg-blue-50/50 border border-blue-100 hover:shadow-md transition-shadow duration-300">
//             <Building className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//             <h4 className="font-bold text-gray-900 text-lg mb-2">For Organizations</h4>
//             <p className="text-gray-600 mb-3">Scale your team with our RPO solutions</p>
//             <div className="text-sm text-blue-600 font-semibold">500+ Clients Served</div>
//           </div>
//           <div className="text-center p-6 rounded-xl bg-green-50/50 border border-green-100 hover:shadow-md transition-shadow duration-300">
//             <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
//             <h4 className="font-bold text-gray-900 text-lg mb-2">For Professionals</h4>
//             <p className="text-gray-600 mb-3">Advance your career with our support</p>
//             <div className="text-sm text-green-600 font-semibold">10,000+ Placed</div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// // src/components/home/ServicesSection.js
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   Building,
//   Briefcase,
//   Users
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const ServicesSection = () => {
//   const [activeTab, setActiveTab] = useState('rpo');

//   const services = {
//     rpo: {
//       title: 'RPO Solutions',
//       subtitle: 'For Organizations',
//       description: 'Complete recruitment outsourcing for UK & USA businesses',
//       icon: Building,
//       color: 'blue',
//       features: [
//         'End-to-End Recruitment',
//         'Talent Sourcing',
//         'Cost Optimization',
//         'Scalable Operations'
//       ],
//       stats: '500+ Clients • 40% Cost Save',
//       gradient: 'from-blue-500 to-blue-600'
//     },
//     career: {
//       title: 'Career Support',
//       subtitle: 'For Professionals',
//       description: 'USA market placement for IT professionals',
//       icon: Briefcase,
//       color: 'green',
//       features: [
//         'Job Placement',
//         'Interview Support',
//         'Contract Negotiation',
//         'Career Guidance'
//       ],
//       stats: '10K+ Placed • 85% Success',
//       gradient: 'from-green-500 to-green-600'
//     }
//   };

//   const currentService = services[activeTab];

//   return (
//     <section className="py-12 md:py-20 bg-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 text-xs md:text-sm font-medium mb-3 md:mb-4">
//             Our Services
//           </div>
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
//             Strategic Talent Solutions
//             <span className="block text-gradient">For Your Success</span>
//           </h2>
//           <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//             Specialized services designed for both organizations and IT professionals
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-6 md:mb-8">
//           <div className="bg-gray-100 rounded-xl p-1 md:p-2 inline-flex">
//             {Object.entries(services).map(([key, service]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 flex items-center gap-1 md:gap-2 ${
//                   activeTab === key
//                     ? `bg-white text-${service.color}-600 shadow-md`
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <service.icon className="h-3 w-3 md:h-4 md:w-4" />
//                 {service.subtitle}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content Card */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
//             <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
//               {/* Icon and Header */}
//               <div className="md:col-span-2 flex justify-center md:justify-start">
//                 <div className={`h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${currentService.gradient} flex items-center justify-center shadow-lg`}>
//                   <currentService.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="md:col-span-10">
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 md:gap-4 mb-4 md:mb-6">
//                   <div className="text-center md:text-left">
//                     <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
//                       {currentService.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm md:text-lg mb-2 md:mb-3">
//                       {currentService.description}
//                     </p>
//                     <div className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-medium">
//                       {currentService.stats}
//                     </div>
//                   </div>
                  
//                   <Link href={`/services/${activeTab}`} className="mt-3 md:mt-0 flex justify-center md:justify-start">
//                     <Button className={`bg-gradient-to-r ${currentService.gradient} hover:shadow-lg text-white px-4 py-2 md:px-6 md:py-2 font-medium group transition-all duration-300 text-xs md:text-sm`}>
//                       Explore Service
//                       <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </div>

//                 {/* Features Grid */}
//                 <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
//                   {currentService.features.map((feature, index) => (
//                     <div 
//                       key={index}
//                       className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors duration-200"
//                     >
//                       <div className={`h-5 w-5 md:h-6 md:w-6 rounded-full bg-${currentService.color}-100 flex items-center justify-center flex-shrink-0`}>
//                         <CheckCircle className={`h-2.5 w-2.5 md:h-3 md:w-3 text-${currentService.color}-600`} />
//                       </div>
//                       <span className="text-gray-700 font-medium text-xs md:text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// src/components/home/WhyChooseUs.js
'use client';
import { useState, useEffect } from 'react';
import { Globe, CheckCircle, Users, Award, Shield, Zap, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { 
      icon: Globe, 
      title: 'Global Operations', 
      description: 'UK, USA, and India hubs for 24/7 support and cost-effective delivery',
      gradient: 'from-blue-500 to-cyan-600',
      color: 'blue'
    },
    { 
      icon: Shield, 
      title: 'Fully Compliant', 
      description: 'GDPR and ISO standards compliant with international data protection',
      gradient: 'from-green-500 to-emerald-600',
      color: 'green'
    },
    { 
      icon: Users, 
      title: 'Industry Experts', 
      description: 'Specialists across 15+ industries with deep IT and staffing knowledge',
      gradient: 'from-purple-500 to-pink-600',
      color: 'purple'
    },
    { 
      icon: Award, 
      title: 'Proven Results', 
      description: '500+ clients, 10,000+ placements with 85%+ success rate',
      gradient: 'from-orange-500 to-red-600',
      color: 'orange'
    },
  ];

  const currentFeature = features[activeFeature];

  if (!mounted) {
    return (
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden py-8 md:py-12">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header - More Compact */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1 md:mr-2 animate-pulse"></div>
              Why Choose Novotion
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              Trusted by Organizations &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Professionals Worldwide
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Delivering measurable results through proven recruitment strategies and dedicated expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Side - Feature Showcase */}
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className={`h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-gradient-to-br ${currentFeature.gradient} flex items-center justify-center shadow-lg`}>
                    <currentFeature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {currentFeature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                  {currentFeature.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                          activeFeature === index 
                            ? `bg-${currentFeature.color}-500` 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {activeFeature + 1} / {features.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`group bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    activeFeature === index
                      ? `border-${feature.color}-500 shadow-md scale-105`
                      : 'border-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`h-8 w-8 md:h-10 md:w-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm group-hover:text-gray-800 transition-colors">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mt-8 md:mt-12">
            {[
              { value: '500+', label: 'Clients' },
              { value: '10K+', label: 'Placements' },
              { value: '85%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;