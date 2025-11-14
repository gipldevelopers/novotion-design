// // src/app/page.js
// 'use client';
// import { useEffect, useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import HeroSection from '@/components/home/HeroSection';
// import ServicesSection from '@/components/home/ServicesSection';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import { ArrowRight, CheckCircle, Building, Users, Star, TrendingUp, Shield } from 'lucide-react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// // Company Logo Components
// const CompanyLogos = {
//   Amazon: () => (
//     <svg viewBox="0 0 100 30" className="w-20 h-6">
//       <path fill="#FF9900" d="M86.4 21.9h-2.8c-1.1 0-2.1-.9-2.1-2.1v-7.5c0-1.1.9-2.1 2.1-2.1h2.8c1.1 0 2.1.9 2.1 2.1v7.5c0 1.2-.9 2.1-2.1 2.1zM92.9 9.3h-2.8c-1.1 0-2.1.9-2.1 2.1v10.5c0 1.1.9 2.1 2.1 2.1h2.8c1.1 0 2.1-.9 2.1-2.1V11.4c0-1.2-.9-2.1-2.1-2.1z"/>
//       <path fill="#000" d="M40.1 12.2c0-1.6-1.3-2.9-2.9-2.9-1.6 0-2.9 1.3-2.9 2.9 0 1.6 1.3 2.9 2.9 2.9 1.6 0 2.9-1.3 2.9-2.9z"/>
//     </svg>
//   ),
//   Meta: () => (
//     <svg viewBox="0 0 100 20" className="w-16 h-6">
//       <path fill="#1877F2" d="M80 0h-8c-4.4 0-8 3.6-8 8v4c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8z"/>
//       <path fill="#1877F2" d="M40 0h-8c-4.4 0-8 3.6-8 8v4c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8z"/>
//     </svg>
//   ),
//   Google: () => (
//     <svg viewBox="0 0 100 33" className="w-20 h-7">
//       <path fill="#4285F4" d="M32 16.5c0-1.1-.1-2.1-.3-3.1H16v5.9h9.1c-.4 2-1.5 3.7-3.2 4.8v4h5.2c3-2.8 4.8-6.9 4.8-11.6z"/>
//       <path fill="#34A853" d="M16 32c4.3 0 7.9-1.4 10.5-3.8l-5.2-4c-1.4.9-3.2 1.5-5.3 1.5-4.1 0-7.5-2.7-8.8-6.4H1.7v4.1C4.3 28.6 9.7 32 16 32z"/>
//       <path fill="#FBBC05" d="M7.2 19.3c-.3-.9-.5-1.9-.5-2.9s.2-2 .5-2.9v-4.1H1.7C.6 11.7 0 13.8 0 16.4s.6 4.7 1.7 6.6l5.5-4.1z"/>
//       <path fill="#EA4335" d="M16 6.4c2.3 0 4.3.8 5.9 2.3l4.4-4.4C23.9 1.7 20.3 0 16 0 9.7 0 4.3 3.4 1.7 8.3l5.5 4.1c1.3-3.7 4.7-6.4 8.8-6.4z"/>
//     </svg>
//   ),
//   Microsoft: () => (
//     <svg viewBox="0 0 100 21" className="w-20 h-6">
//       <path fill="#F25022" d="M0 0h48v21H0z"/>
//       <path fill="#7FBA00" d="M52 0h48v21H52z"/>
//       <path fill="#00A4EF" d="M0 25h48v21H0z"/>
//       <path fill="#FFB900" d="M52 25h48v21H52z"/>
//     </svg>
//   ),
//   IBM: () => (
//     <svg viewBox="0 0 100 40" className="w-16 h-8">
//       <path fill="#054ADA" d="M40 0h20v40H40z"/>
//       <path fill="#054ADA" d="M0 0h20v40H0z"/>
//       <path fill="#054ADA" d="M20 0h20v40H20z"/>
//       <path fill="#054ADA" d="M60 0h20v40H60z"/>
//       <path fill="#054ADA" d="M80 0h20v40H80z"/>
//     </svg>
//   ),
//   Oracle: () => (
//     <svg viewBox="0 0 100 20" className="w-16 h-6">
//       <path fill="#F80000" d="M50 0L30 20h40z"/>
//       <path fill="#000" d="M60 0L40 20h40z"/>
//     </svg>
//   ),
//   UPS: () => (
//     <svg viewBox="0 0 100 30" className="w-12 h-6">
//       <path fill="#351C15" d="M40 0h20v30H40z"/>
//       <path fill="#FFB500" d="M45 5h10v20H45z"/>
//     </svg>
//   ),
//   Honeywell: () => (
//     <svg viewBox="0 0 100 25" className="w-20 h-6">
//       <path fill="#0033A0" d="M30 0h40v25H30z"/>
//       <path fill="#FFFFFF" d="M35 5h30v15H35z"/>
//     </svg>
//   ),
//   Intel: () => (
//     <svg viewBox="0 0 100 20" className="w-16 h-6">
//       <path fill="#0071C5" d="M20 0h60v20H20z"/>
//       <path fill="#FFFFFF" d="M25 5h50v10H25z"/>
//     </svg>
//   )
// };

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//     setIsVisible(true);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in-up');
//             entry.target.classList.remove('opacity-0', 'translate-y-8');
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: '50px'
//       }
//     );

//     const animatedElements = document.querySelectorAll('.observe');
//     animatedElements.forEach((el) => {
//       el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const stats = [
//     { 
//       value: '500+', 
//       label: 'Organizations Served', 
//       delay: '100',
//       icon: Building
//     },
//     { 
//       value: '10,000+', 
//       label: 'Professionals Placed', 
//       delay: '200',
//       icon: Users
//     },
//     { 
//       value: '15+', 
//       label: 'Industry Verticals', 
//       delay: '300',
//       icon: TrendingUp
//     },
//     { 
//       value: '85%+', 
//       label: 'Placement Success Rate', 
//       delay: '400',
//       icon: Star
//     },
//   ];

//   const companies = [
//     { name: 'Amazon', component: CompanyLogos.Amazon },
//     { name: 'Meta', component: CompanyLogos.Meta },
//     { name: 'Google', component: CompanyLogos.Google },
//     { name: 'Microsoft', component: CompanyLogos.Microsoft },
//     { name: 'IBM', component: CompanyLogos.IBM },
//     { name: 'Oracle', component: CompanyLogos.Oracle },
//     { name: 'UPS', component: CompanyLogos.UPS },
//     { name: 'Honeywell', component: CompanyLogos.Honeywell },
//     { name: 'Intel', component: CompanyLogos.Intel },
//   ];

//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <Header />
      
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Introduction Section */}
//       <section className="min-h-screen flex items-center bg-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div>
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        
//         <div className="container mx-auto px-4 py-20 relative z-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <div className="space-y-8 observe">
//                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
//                   Since 2021
//                 </div>
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                   Your Strategic RPO Partner for 
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
//                     Global Excellence
//                   </span>
//                 </h2>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   Since 2021, Novotion has been redefining recruitment for organizations and IT professionals across the UK and USA.
//                 </p>
//               </div>
              
//               <div className="space-y-8 observe" style={{ animationDelay: '200ms' }}>
//                 <div className="space-y-6 text-gray-600">
//                   <p className="text-lg leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                     We specialize in two core areas: Recruitment Process Outsourcing for UK and USA businesses, and Career Support Services & Recruitment Facilitation for IT professionals in the USA.
//                   </p>
//                   <p className="text-lg leading-relaxed">
//                     Unlike traditional staffing firms, we go beyond resume matching. We understand business goals, industry challenges, and talent strategies while helping professionals market their skills effectively.
//                   </p>
//                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300">
//                     <p className="text-lg font-semibold text-gray-900 text-center leading-relaxed">
//                       With 500+ clients, 10,000+ placements, and presence across 15+ industries, our India-based support team provides 24/7 recruitment operations for our global network.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <ServicesSection />

//       {/* Why Choose Us Section */}
//       <WhyChooseUs />

//       {/* Enhanced Stats Section */}
//       <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 to-blue-900/0"></div>
//           <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-400/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse delay-1000"></div>
//         </div>
//         <div className="relative container mx-auto px-4 py-20 text-center">
//           <div className="mb-20">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
//               Our Track Record of
//               <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-2">
//                 Excellence
//               </span>
//             </h2>
//             <p className="text-xl text-blue-200 max-w-2xl mx-auto">
//               Delivering measurable results through data-driven recruitment strategies and proven methodologies.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {stats.map((stat, index) => (
//               <div 
//                 key={index} 
//                 className="text-center observe group"
//                 style={{ animationDelay: `${stat.delay}ms` }}
//               >
//                 <div className="relative inline-flex items-center justify-center mb-6">
//                   <div className="absolute inset-0 bg-white/20 rounded-full scale-150 group-hover:scale-125 transition-transform duration-500"></div>
//                   <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300">
//                     <stat.icon className="h-8 w-8 text-cyan-300" />
//                   </div>
//                 </div>
//                 <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-blue-200 font-medium text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Trusted By Section */}
//       <section className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"></div>
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
//         <div className="container mx-auto px-4 py-20 text-center relative z-10">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-6">
//             Trusted By Industry Leaders
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
//             Partnering with
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
//               Global Innovators
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
//             Our professionals and candidates thrive at industry-leading companies worldwide, delivering excellence across diverse sectors.
//           </p>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
//             {companies.map((company, index) => (
//               <div 
//                 key={index} 
//                 className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 observe group border border-gray-100 hover:border-blue-200"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="transform group-hover:scale-110 transition-transform duration-300">
//                   <company.component />
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto observe">
//             <p className="text-gray-700 font-semibold text-lg">
//               And <span className="text-blue-600">490+ more organizations</span> across UK and USA markets trust our recruitment expertise
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float-delayed"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
//         </div>
        
//         <div className="relative container mx-auto px-4 py-20 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
//               Ready to Transform Your
//               <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
//                 Recruitment Strategy?
//               </span>
//             </h2>
            
//             <p className="text-xl mb-12 text-blue-100 leading-relaxed">
//               Whether you represent an organization in the UK or USA seeking to optimize hiring operations, or you're an IT professional in the USA market pursuing your next contract opportunity, Novotion is positioned to support your objectives with proven methodologies and dedicated expertise.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
//               <Link href="/services/rpo">
//                 <Button size="lg" className="group bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
//                   Discuss RPO Solutions
//                   <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               <Link href="/services/career-support">
//                 <Button size="lg" variant="outline" className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
//                   Explore Career Support
//                   <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-200">
//               <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <CheckCircle className="h-5 w-5 text-cyan-400" />
//                 <span className="font-medium">No upfront costs</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <CheckCircle className="h-5 w-5 text-cyan-400" />
//                 <span className="font-medium">24/7 Global Support</span>
//               </div>
//               <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
//                 <CheckCircle className="h-5 w-5 text-cyan-400" />
//                 <span className="font-medium">GDPR Compliant</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
      
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-15px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

// // src/app/page.js
// 'use client';
// import { useEffect, useState } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import HeroSection from '@/components/home/HeroSection';
// import ServicesSection from '@/components/home/ServicesSection';
// import WhyChooseUs from '@/components/home/WhyChooseUs';
// import { ArrowRight, CheckCircle } from 'lucide-react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import StatsSection from '@/components/home/StatsSection';
// import TrustedBySection from '@/components/home/TrustedBySection';

// const Home = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-fade-in-up');
//             entry.target.classList.remove('opacity-0', 'translate-y-8');
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: '50px'
//       }
//     );

//     const animatedElements = document.querySelectorAll('.observe');
//     animatedElements.forEach((el) => {
//       el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const companies = [
//     { name: 'Amazon', logo: '/images/amazon-logo.png' },
//     { name: 'Meta', logo: '/images/meta-logo.png' },
//     { name: 'Google', logo: '/images/google-logo.png' },
//     { name: 'Microsoft', logo: '/images/microsoft-logo.png' },
//     { name: 'IBM', logo: '/images/ibm-logo.png' },
//     { name: 'Oracle', logo: '/images/oracle-logo.png' },
//     { name: 'UPS', logo: '/images/ups-logo.png' },
//     { name: 'Honeywell', logo: '/images/honeywell-logo.png' },
//     { name: 'Intel', logo: '/images/intel-logo.png' },
//   ];

//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <Header />
      
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Introduction Section */}
//       <section className="min-h-[80vh] flex items-center bg-white relative overflow-hidden">
//         {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"></div> */}
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        
//         <div className="container mx-auto px-4 py-16 relative z-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6 observe">
//                 <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
//                   Since 2021
//                 </div>
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Your Strategic RPO Partner for 
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
//                     Global Excellence
//                   </span>
//                 </h2>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   Since 2021, Novotion has been redefining recruitment for organizations and IT professionals across the UK and USA.
//                 </p>
//               </div>
              
//               <div className="space-y-6 observe" style={{ animationDelay: '200ms' }}>
//                 <div className="space-y-4 text-gray-600">
//                   <p className="text-lg leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                     We specialize in two core areas: Recruitment Process Outsourcing for UK and USA businesses, and Career Support Services for IT professionals.
//                   </p>
//                   <p className="text-lg leading-relaxed">
//                     Unlike traditional staffing firms, we go beyond resume matching. We understand business goals, industry challenges, and talent strategies.
//                   </p>
//                   <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
//                     <p className="text-lg font-semibold text-gray-900 text-center leading-relaxed">
//                       With 500+ clients, 10,000+ placements, and presence across 15+ industries.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <ServicesSection />

//       {/* Why Choose Us Section */}
//       <WhyChooseUs />

//       {/* Stats Section */}
//       <StatsSection />

//       {/* Trusted By Section */}
//       {/* <section className="min-h-[80vh] flex items-center bg-gray-50 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"></div>
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
//         <div className="container mx-auto px-4 py-16 text-center relative z-10">
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-6">
//             Trusted By Industry Leaders
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
//             Partnering with
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
//               Global Innovators
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
//             Our professionals and candidates thrive at industry-leading companies worldwide.
//           </p>
          
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
//             {companies.map((company, index) => (
//               <div 
//                 key={index} 
//                 className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 observe group border border-gray-100 hover:border-blue-200"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="relative w-24 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
//                   <Image
//                     src={company.logo}
//                     alt={company.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-2xl mx-auto observe">
//             <p className="text-gray-700 font-semibold">
//               And <span className="text-blue-600">490+ more organizations</span> across UK and USA markets
//             </p>
//           </div>
//         </div>
//       </section> */}
//       <TrustedBySection />

//       {/* CTA Section */}
//       <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float-delayed"></div>
//         </div>
        
//         <div className="relative container mx-auto px-4 py-16 text-center">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
//               Ready to Transform Your
//               <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
//                 Recruitment Strategy?
//               </span>
//             </h2>
            
//             <p className="text-lg mb-8 text-blue-100 leading-relaxed">
//               Whether you're an organization seeking to optimize hiring or an IT professional pursuing opportunities, Novotion supports your objectives.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
//               <Link href="/services/rpo">
//                 <Button size="lg" className="group bg-white text-gray-900 hover:bg-white/90 px-6 py-3 text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
//                   Discuss RPO Solutions
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               {/* <Link href="/services/career-support">
//                 <Button size="lg" variant="outline" className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
//                   Explore Career Support
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link> */}
//               <Link href="/services/career-support">
//   <Button size="lg" variant="outline" className="group border-2 border-gray-600 text-gray-800 bg-white hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-6 py-3 text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md">
//     Explore Career Support
//     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//   </Button>
// </Link>
//             </div>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
//                 <CheckCircle className="h-4 w-4 text-cyan-400" />
//                 <span className="text-sm font-medium">No upfront costs</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
//                 <CheckCircle className="h-4 w-4 text-cyan-400" />
//                 <span className="text-sm font-medium">24/7 Support</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
//                 <CheckCircle className="h-4 w-4 text-cyan-400" />
//                 <span className="text-sm font-medium">GDPR Compliant</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
      
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-10px) rotate(180deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-8px) rotate(180deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

// src/app/page.js
'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import StatsSection from '@/components/home/StatsSection';
import TrustedBySection from '@/components/home/TrustedBySection';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const animatedElements = document.querySelectorAll('.observe');
    animatedElements.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-12 md:py-20 lg:min-h-[80vh] flex items-center bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
        
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6 observe text-center lg:text-left">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-600 text-xs md:text-sm font-medium">
                  Since 2021
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Your Strategic RPO Partner for 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block mt-1 md:mt-2">
                    Global Excellence
                  </span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Since 2021, Novotion has been redefining recruitment for organizations and IT professionals across the UK and USA.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6 observe" style={{ animationDelay: '200ms' }}>
                <div className="space-y-3 md:space-y-4 text-gray-600">
                  <p className="text-base md:text-lg leading-relaxed bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center lg:text-left">
                    We specialize in two core areas: Recruitment Process Outsourcing for UK and USA businesses, and Career Support Services for IT professionals.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-center lg:text-left">
                    Unlike traditional staffing firms, we go beyond resume matching. We understand business goals, industry challenges, and talent strategies.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-100 shadow-sm">
                    <p className="text-base md:text-lg font-semibold text-gray-900 text-center leading-relaxed">
                      With 500+ clients, 10,000+ placements, and presence across 15+ industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Section */}
      <StatsSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* CTA Section */}
      <section className="py-12 md:py-20 lg:min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6 py-8 md:py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-1 md:mt-2">
                Recruitment Strategy?
              </span>
            </h2>
            
            <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-100 leading-relaxed px-4">
              Whether you're an organization seeking to optimize hiring or an IT professional pursuing opportunities, Novotion supports your objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4">
              <Link href="/services/rpo" className="w-full sm:w-auto">
                <Button size="lg" className="group bg-white text-gray-900 hover:bg-white/90 px-4 md:px-6 py-3 text-sm md:text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                  Discuss RPO Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services/career-support" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="group border-2 border-gray-600 text-gray-800 bg-white hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 px-4 md:px-6 py-3 text-sm md:text-base font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 shadow-md w-full sm:w-auto">
                  Explore Career Support
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 text-blue-200 px-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
                <span className="text-xs md:text-sm font-medium">No upfront costs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
                <span className="text-xs md:text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
                <span className="text-xs md:text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;