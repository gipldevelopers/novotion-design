// // src/components/home/HeroSection.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ArrowRight, Star, CheckCircle, Play } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       title: "Strategic RPO Partner for Global Excellence",
//       subtitle: "Recruitment Process Outsourcing",
//       description: "Delivering measurable recruitment outcomes across UK and USA markets with transparent, data-driven RPO solutions.",
//       buttonText: "Explore RPO Services",
//       buttonLink: "/services/rpo",
//       stats: { number: "500+", label: "Organizations Served" },
//       features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Optimization"],
//       bgGradient: "from-blue-900 via-blue-800 to-indigo-900",
//       accentColor: "blue"
//     },
//     {
//       title: "Career Support for IT Professionals",
//       subtitle: "USA Market Specialists",
//       description: "Comprehensive career support and placement services for IT professionals seeking contract roles in the USA market.",
//       buttonText: "Career Support",
//       buttonLink: "/services/career-support",
//       stats: { number: "85%+", label: "Success Rate" },
//       features: ["Interview Coaching", "Contract Negotiation", "Skill Marketing"],
//       bgGradient: "from-indigo-900 via-purple-800 to-blue-900",
//       accentColor: "purple"
//     },
//     {
//       title: "Global Talent Connection Platform",
//       subtitle: "UK & USA Markets",
//       description: "Seamlessly connect organizations with top talent through our strategic recruitment process outsourcing.",
//       buttonText: "Learn More",
//       buttonLink: "/about",
//       stats: { number: "10,000+", label: "Professionals Placed" },
//       features: ["Multi-Region Support", "24/7 Operations", "GDPR Compliant"],
//       bgGradient: "from-slate-900 via-blue-900 to-indigo-900",
//       accentColor: "cyan"
//     },
//   ];

//   // Smooth slide transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setIsTransitioning(false);
//       }, 300);
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     if (index === currentSlide) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setIsTransitioning(false);
//     }, 300);
//   };

//   const currentSlideData = slides[currentSlide];

//   const getAccentColor = (color) => {
//     const colors = {
//       blue: 'text-blue-400',
//       purple: 'text-purple-400',
//       cyan: 'text-cyan-400'
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <section className={`relative h-screen flex items-center justify-center bg-gradient-to-br ${currentSlideData.bgGradient} transition-all duration-700 ease-in-out overflow-hidden`}>
      
//       {/* Enhanced Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
//         <div className="absolute top-1/4 -left-10 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-float-slow"></div>
//         <div className="absolute top-1/2 -right-10 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-soft-light filter blur-3xl animate-float-medium"></div>
//         <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-soft-light filter blur-3xl animate-float-slow delay-1000"></div>
        
//         {/* Grid Pattern Overlay */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
//       </div>

//       <div className="relative container mx-auto px-4 z-10 mt-8"> {/* Added mt-8 to account for header */}
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]"> {/* Reduced min-height */}
            
//             {/* Left Content */}
//             <div className={`space-y-6 transition-all duration-700 transform ${
//               isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
//             }`}>
              
//               {/* Badge */}
//               <div className="inline-flex items-center gap-3">
//                 <div className="flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//                   <Star className="h-4 w-4 text-yellow-400" />
//                   <span className="ml-2 text-sm text-white font-medium">Trusted Since 2021</span>
//                 </div>
//                 <div className="h-px w-12 bg-white/30"></div>
//                 <span className="text-sm text-white/80 font-medium">{currentSlideData.subtitle}</span>
//               </div>

//               {/* Main Heading */}
//               <div className="space-y-4"> {/* Reduced spacing */}
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
//                   {currentSlideData.title}
//                 </h1>
                
//                 <p className="text-lg text-blue-100/90 leading-relaxed max-w-2xl">
//                   {currentSlideData.description}
//                 </p>
//               </div>

//               {/* Features */}
//               <div className="space-y-2"> {/* Reduced spacing */
//                 currentSlideData.features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-3 group">
//                     <div className={`w-5 h-5 rounded-full bg-${currentSlideData.accentColor}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
//                       <CheckCircle className={`h-3 w-3 ${getAccentColor(currentSlideData.accentColor)}`} />
//                     </div>
//                     <span className="text-white/90 text-base">{feature}</span>
//                   </div>
//                 ))
//               }</div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3 pt-2"> 
//                 <Link href={currentSlideData.buttonLink}>
//                   <Button size="lg" className="group bg-white text-gray-900 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl">
//                     {currentSlideData.buttonText}
//                     <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button size="lg" variant="outline" className="group border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
//                     <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
//                     Free Consultation
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Content - Stats Card */}
//             <div className={`transition-all duration-700 delay-200 transform ${
//               isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'
//             }`}>
//               <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
//                 <div className="text-center mb-6">
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2">
//                     {currentSlideData.stats.number}
//                   </div>
//                   <div className="text-blue-200/90 text-base font-medium">
//                     {currentSlideData.stats.label}
//                   </div>
//                 </div>
                
//                 {/* Additional Stats */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="text-center">
//                     <div className="text-xl font-bold text-white mb-1">40%</div>
//                     <div className="text-blue-200/80 text-xs">Faster Hiring</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl font-bold text-white mb-1">24/7</div>
//                     <div className="text-blue-200/80 text-xs">Global Support</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl font-bold text-white mb-1">15+</div>
//                     <div className="text-blue-200/80 text-xs">Industries</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl font-bold text-white mb-1">99%</div>
//                     <div className="text-blue-200/80 text-xs">Satisfaction</div>
//                   </div>
//                 </div>

//                 {/* Trust Badge */}
//                 <div className="mt-6 pt-4 border-t border-white/20">
//                   <div className="flex items-center justify-center gap-2 text-white/70 text-xs">
//                     <div className="flex -space-x-1">
//                       {[1, 2, 3, 4].map((item) => (
//                         <div key={item} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border border-white flex items-center justify-center text-xs font-bold text-white">
//                           {item}
//                         </div>
//                       ))}
//                     </div>
//                     <span>500+ companies</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Slide Indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`group relative transition-all duration-500 ${
//               currentSlide === index ? 'w-10' : 'w-5 hover:w-6'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             <div className={`h-1 rounded-full transition-all duration-500 ${
//               currentSlide === index 
//                 ? `bg-${currentSlideData.accentColor}-400` 
//                 : 'bg-white/40 group-hover:bg-white/60'
//             }`} />
//             {currentSlide === index && (
//               <div className="absolute -top-2 left-0 w-full text-center">
//                 <span className="text-xs text-white/80 font-medium">{index + 1}</span>
//               </div>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
//         <div className="flex flex-col items-center gap-1">
//           <span className="text-white/60 text-xs font-medium">Scroll</span>
//           <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
//             <div className="w-0.5 h-2 bg-white/60 rounded-full mt-2"></div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default HeroSection;
// // src/components/home/HeroSection.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Star, 
//   CheckCircle, 
//   Play,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap,
//   Sparkles
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const slides = [
//     {
//       title: "Strategic RPO Partner",
//       subtitle: "Recruitment Excellence",
//       description: "Delivering measurable recruitment outcomes across UK and USA markets with transparent, data-driven RPO solutions.",
//       buttonText: "Explore RPO Services",
//       buttonLink: "/services/rpo",
//       stats: { number: "500+", label: "Organizations Served" },
//       color: "blue",
//       features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Reduction"],
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "blue" },
//         { icon: Users, text: "Team Building", color: "green" },
//         { icon: Target, text: "Strategic Goals", color: "purple" }
//       ]
//     },
//     {
//       title: "Global Talent Connection",
//       subtitle: "UK & USA Markets",
//       description: "Seamlessly connect with top talent and leading organizations through our strategic recruitment process outsourcing.",
//       buttonText: "Go Global",
//       buttonLink: "/about",
//       stats: { number: "10K+", label: "Professionals Placed" },
//       color: "purple",
//       features: ["Multi-Region Support", "Cultural Alignment", "24/7 Operations"],
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Globe, text: "Global Reach", color: "green" },
//         { icon: Building, text: "International", color: "blue" },
//         { icon: Users, text: "Diverse Talent", color: "purple" }
//       ]
//     },
//     {
//       title: "Career Advancement",
//       subtitle: "IT Professionals",
//       description: "Comprehensive career support and placement services for IT professionals seeking contract roles in the USA market.",
//       buttonText: "Career Support",
//       buttonLink: "/services/career-support",
//       stats: { number: "90%+", label: "Success Rate" },
//       color: "green",
//       features: ["Interview Coaching", "Contract Negotiation", "Skill Development"],
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "purple" },
//         { icon: Zap, text: "IT Professionals", color: "blue" },
//         { icon: Target, text: "Success Rate", color: "green" }
//       ]
//     },
//   ];

//   // Check for mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Autoplay
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentSlideData = slides[currentSlide];

//   const getColorClasses = (color) => {
//     const colors = {
//       blue: {
//         text: 'text-blue-600',
//         bg: 'bg-blue-600',
//         border: 'border-blue-600',
//         light: 'bg-blue-50',
//         gradient: 'from-blue-500 to-blue-600'
//       },
//       purple: {
//         text: 'text-purple-600',
//         bg: 'bg-purple-600',
//         border: 'border-purple-600',
//         light: 'bg-purple-50',
//         gradient: 'from-purple-500 to-purple-600'
//       },
//       green: {
//         text: 'text-green-600',
//         bg: 'bg-green-600',
//         border: 'border-green-600',
//         light: 'bg-green-50',
//         gradient: 'from-green-500 to-green-600'
//       }
//     };
//     return colors[color] || colors.blue;
//   };

//   const colorClasses = getColorClasses(currentSlideData.color);

//   return (
//     <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
//       {/* Enhanced Background Elements */}
//       <div className="absolute inset-0">
//         {/* Animated Gradient Orbs */}
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
//           animate={{
//             x: [0, -20, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-60 h-60 bg-green-100 rounded-full blur-3xl opacity-20"
//           animate={{
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex items-center pt-16 lg:pt-0">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Text Content */}
//             <div className="max-w-2xl lg:mt-12">
//               {/* Trust Badge */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 lg:mb-10 shadow-sm"
//               >
//                 <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
//                 <span className="text-xs font-medium text-blue-700">
//                   Trusted by 500+ Organizations Worldwide
//                 </span>
//                 <Sparkles className="w-3 h-3 text-blue-600" />
//               </motion.div>

//               {/* Subtitle */}
//               <motion.div
//                 key={`subtitle-${currentSlide}`}
//                 className="flex items-center gap-3 mb-4 lg:mb-6"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className={`w-1 h-6 lg:h-8 ${colorClasses.bg} rounded-full`} />
//                 <span className={`text-xs lg:text-sm font-semibold tracking-widest ${colorClasses.text} uppercase`}>
//                   {currentSlideData.subtitle}
//                 </span>
//               </motion.div>

//               {/* Title */}
//               <AnimatePresence mode="wait">
//                 <motion.h1
//                   key={`title-${currentSlide}`}
//                   className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -30 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   {currentSlideData.title.split(' ').map((word, index) => (
//                     <motion.span
//                       key={index}
//                       className="inline-block mr-2"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                     >
//                       {word}
//                     </motion.span>
//                   ))}
//                 </motion.h1>
//               </AnimatePresence>

//               {/* Description */}
//               <AnimatePresence mode="wait">
//                 <motion.p
//                   key={`desc-${currentSlide}`}
//                   className="text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8 max-w-xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.7, delay: 0.1 }}
//                 >
//                   {currentSlideData.description}
//                 </motion.p>
//               </AnimatePresence>

//               {/* Features List */}
//               <motion.div
//                 className="flex flex-wrap gap-3 mb-6 lg:mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//               >
//                 {currentSlideData.features.map((feature, index) => (
//                   <motion.span
//                     key={feature}
//                     className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                   >
//                     <CheckCircle className="w-3 h-3 text-blue-600" />
//                     {feature}
//                   </motion.span>
//                 ))}
//               </motion.div>

//               {/* CTA Buttons */}
//               <motion.div
//                 className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//               >
//                 <Link href={currentSlideData.buttonLink}>
//                   <Button 
//                     size="lg" 
//                     className={`group relative px-8 py-4 ${colorClasses.bg} text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0`}
//                   >
//                     <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//                     <span className="relative z-10 flex items-center gap-3 justify-center">
//                       {currentSlideData.buttonText}
//                       <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
//                     </span>
//                   </Button>
//                 </Link>

//                 <Link href="/contact">
//                   <Button 
//                     size="lg" 
//                     variant="outline" 
//                     className="group px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105"
//                   >
//                     <span className="flex items-center gap-3 justify-center">
//                       <Play className="w-5 h-5" />
//                       Free Consultation
//                     </span>
//                   </Button>
//                 </Link>
//               </motion.div>

//               {/* Stats */}
//               <motion.div
//                 className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-gray-200"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//               >
//                 {[
//                   { number: currentSlideData.stats.number, label: currentSlideData.stats.label },
//                   { number: "40%", label: "Faster Hiring" },
//                   { number: "24/7", label: "Global Support" },
//                 ].map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     className="text-center sm:text-left"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
//                       <Zap className="w-5 h-5 text-yellow-500" />
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Slide Indicators */}
//               <div className="flex items-center gap-3 mt-8 lg:mt-12">
//                 {slides.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       currentSlide === index 
//                         ? `${colorClasses.bg} w-8` 
//                         : 'bg-gray-300 hover:bg-gray-400'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="relative h-[450px] sm:h-[550px] lg:h-[650px] flex items-center justify-center lg:mt-12">
//               <motion.div
//                 className="relative w-full h-full max-w-md mx-auto"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//               >
//                 {/* Main Image Container */}
//                 <motion.div
//                   className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   {/* Background Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                  
//                   {/* Main Image */}
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={currentSlideData.image}
//                       src={currentSlideData.image}
//                       alt={currentSlideData.title}
//                       className="absolute inset-0 w-full h-full object-cover"
//                       initial={{ opacity: 0, scale: 1.05 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.95 }}
//                       transition={{ 
//                         duration: 0.4,
//                         ease: "easeInOut" 
//                       }}
//                     />
//                   </AnimatePresence>
                  
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20" />
                  
//                   {/* Floating Elements */}
//                   {currentSlideData.floatingElements.map((element, index) => {
//                     const IconComponent = element.icon;
//                     const elementColorClasses = getColorClasses(element.color);

//                     return (
//                       <motion.div
//                         key={element.text}
//                         className={`absolute ${
//                           index === 0 ? "top-6 right-6" :
//                           index === 1 ? "bottom-20 left-6" :
//                           "bottom-6 right-6"
//                         } bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg z-30`}
//                         initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         transition={{ 
//                           duration: 0.3,
//                           delay: 0.2 + index * 0.1 
//                         }}
//                         whileHover={{ scale: 1.05, y: -5 }}
//                       >
//                         <div className="flex items-center gap-2">
//                           <IconComponent className={`w-5 h-5 ${elementColorClasses.text}`} />
//                           <span className="text-sm font-semibold text-gray-700">{element.text}</span>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </motion.div>

//                 {/* Decorative Elements */}
//                 <motion.div
//                   className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-2xl blur-xl opacity-50 z-0"
//                   animate={{
//                     rotate: [0, 10, 0],
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-2xl blur-xl opacity-50 z-0"
//                   animate={{
//                     rotate: [0, -10, 0],
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       {!isMobile && (
//         <div className="hidden lg:flex absolute top-1/2 left-4 right-4 transform -translate-y-1/2 justify-between pointer-events-none z-20">
//           <button
//             onClick={prevSlide}
//             className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//             aria-label="Previous slide"
//           >
//             <ArrowRight className="w-6 h-6 text-gray-700 transform rotate-180" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//             aria-label="Next slide"
//           >
//             <ArrowRight className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroSection;

// // src/components/home/HeroSection.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Star, 
//   CheckCircle, 
//   Play,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap,
//   Sparkles
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       title: "Strategic RPO Partner",
//       subtitle: "Recruitment Excellence",
//       description: "Delivering measurable recruitment outcomes across UK and USA markets with transparent, data-driven RPO solutions.",
//       buttonText: "Explore RPO Services",
//       buttonLink: "/services/rpo",
//       stats: { number: "500+", label: "Organizations Served" },
//       features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Reduction"],
//       accentColor: "blue",
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "blue" },
//         { icon: Users, text: "Team Building", color: "green" },
//         { icon: Target, text: "Strategic Goals", color: "purple" }
//       ]
//     },
//     {
//       title: "Global Talent Connection",
//       subtitle: "UK & USA Markets",
//       description: "Seamlessly connect with top talent and leading organizations through our strategic recruitment process outsourcing.",
//       buttonText: "Go Global",
//       buttonLink: "/about",
//       stats: { number: "10K+", label: "Professionals Placed" },
//       features: ["Multi-Region Support", "Cultural Alignment", "24/7 Operations"],
//       accentColor: "purple",
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Globe, text: "Global Reach", color: "green" },
//         { icon: Building, text: "International", color: "blue" },
//         { icon: Users, text: "Diverse Talent", color: "purple" }
//       ]
//     },
//     {
//       title: "Career Advancement",
//       subtitle: "IT Professionals",
//       description: "Comprehensive career support and placement services for IT professionals seeking contract roles in the USA market.",
//       buttonText: "Career Support",
//       buttonLink: "/services/career-support",
//       stats: { number: "90%+", label: "Success Rate" },
//       features: ["Interview Coaching", "Contract Negotiation", "Skill Development"],
//       accentColor: "green",
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "purple" },
//         { icon: Zap, text: "IT Professionals", color: "blue" },
//         { icon: Target, text: "Success Rate", color: "green" }
//       ]
//     },
//   ];

//   // Smooth slide transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       setTimeout(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setIsTransitioning(false);
//       }, 300);
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     if (index === currentSlide) return;
//     setIsTransitioning(true);
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setIsTransitioning(false);
//     }, 300);
//   };

//   const currentSlideData = slides[currentSlide];

//   const getAccentColor = (color) => {
//     const colors = {
//       blue: 'text-blue-600',
//       purple: 'text-purple-600',
//       green: 'text-green-600'
//     };
//     return colors[color] || colors.blue;
//   };

//   const getBgColor = (color) => {
//     const colors = {
//       blue: 'bg-blue-600',
//       purple: 'bg-purple-600',
//       green: 'bg-green-600'
//     };
//     return colors[color] || colors.blue;
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      
//       {/* Enhanced Background Elements from old project */}
//       <div className="absolute inset-0">
//         {/* Animated Gradient Orbs */}
//         <motion.div
//           className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
//           animate={{
//             x: [0, -20, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-60 h-60 bg-green-100 rounded-full blur-3xl opacity-20"
//           animate={{
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
//           {/* Left Content - Enhanced with old project animations */}
//           <div className="max-w-2xl">
//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 shadow-sm"
//             >
//               <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
//               <span className="text-xs font-medium text-blue-700">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-3 h-3 text-blue-600" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-3 mb-6"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className={`w-1 h-8 ${getBgColor(currentSlideData.accentColor)} rounded-full`} />
//               <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 {currentSlideData.title.split(' ').map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//               </motion.h1>
//             </AnimatePresence>

//             {/* Description */}
//             <AnimatePresence mode="wait">
//               <motion.p
//                 key={`desc-${currentSlide}`}
//                 className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//               >
//                 {currentSlideData.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Features List */}
//             <motion.div
//               className="flex flex-wrap gap-3 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <motion.span
//                   key={feature}
//                   className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 >
//                   <CheckCircle className="w-4 h-4 text-blue-600" />
//                   {feature}
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <Link href={currentSlideData.buttonLink}>
//                 <Button 
//                   size="lg" 
//                   className={`group bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${getBgColor(currentSlideData.accentColor)}`}
//                 >
//                   {currentSlideData.buttonText}
//                   <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
//                 </Button>
//               </Link>
              
//               {/* <Link href="/contact">
//                 <Button 
//                   size="lg" 
//                   variant="outline" 
//                   className="group border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300"
//                 >
//                   <Users className="w-4 h-4 mr-2" />
//                   Contact Us
//                 </Button>
//               </Link> */}
//             <Link href="/contact">
//   <Button 
//     variant="outline" 
//     size="lg"
//     className="group"
//   >
//     <Users className="w-4 h-4 mr-2" />
//     Contact Us
//   </Button>
// </Link>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="flex flex-wrap gap-6 lg:gap-8 pt-8 border-t border-gray-200"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//             >
//               {[
//                 { number: currentSlideData.stats.number, label: currentSlideData.stats.label },
//                 { number: "40%", label: "Faster Hiring" },
//                 { number: "24/7", label: "Global Support" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   className="text-center sm:text-left"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <div className="text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-2">
//                     <Zap className="w-5 h-5 text-yellow-500" />
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Content - Image Section from old project */}
//           <motion.div 
//             className="relative h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-md mx-auto">
//               {/* Main Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                
//                 {/* Main Image */}
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={currentSlideData.image}
//                     src={currentSlideData.image}
//                     alt={currentSlideData.title}
//                     className="absolute inset-0 w-full h-full object-cover"
//                     initial={{ opacity: 0, scale: 1.05 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ 
//                       duration: 0.4,
//                       ease: "easeInOut" 
//                     }}
//                   />
//                 </AnimatePresence>
                
//                 {/* Overlay Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20" />
                
//                 {/* Floating Elements */}
//                 {currentSlideData.floatingElements.map((element, index) => {
//                   const IconComponent = element.icon;
//                   const colorClasses = {
//                     blue: "text-blue-600",
//                     purple: "text-purple-600",
//                     green: "text-green-600"
//                   };

//                   return (
//                     <motion.div
//                       key={element.text}
//                       className={`absolute ${
//                         index === 0 ? "top-6 right-6" :
//                         index === 1 ? "bottom-20 left-6" :
//                         "bottom-6 right-6"
//                       } bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg z-30`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ 
//                         duration: 0.3,
//                         delay: 0.2 + index * 0.1 
//                       }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <IconComponent className={`w-5 h-5 ${colorClasses[element.color]}`} />
//                         <span className="text-sm font-semibold text-gray-700">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* Decorative Elements */}
//               <motion.div
//                 className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-2xl blur-xl opacity-50 z-0"
//                 animate={{
//                   rotate: [0, 10, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//               <motion.div
//                 className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-2xl blur-xl opacity-50 z-0"
//                 animate={{
//                   rotate: [0, -10, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Enhanced Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index 
//                 ? `${getBgColor(currentSlideData.accentColor)} w-8` 
//                 : 'bg-gray-300 hover:bg-gray-400'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="hidden lg:flex absolute top-1/2 left-4 right-4 transform -translate-y-1/2 justify-between pointer-events-none z-20">
//         <button
//           onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//           aria-label="Previous slide"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700 transform rotate-180" />
//         </button>
//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//           aria-label="Next slide"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// src/components/home/HeroSection.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Play,
  Briefcase,
  Building,
  Globe,
  Users,
  Target,
  Zap,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Strategic RPO Partner",
      subtitle: "Recruitment Excellence",
      description: "Delivering measurable recruitment outcomes across UK and USA markets with transparent, data-driven RPO solutions.",
      buttonText: "Explore RPO Services",
      buttonLink: "/services/rpo",
      stats: { number: "500+", label: "Organizations Served" },
      features: ["End-to-End Recruitment", "Talent Sourcing", "Cost Reduction"],
      accentColor: "blue",
      image: "/images/hero-img.jpg",
      floatingElements: [
        { icon: Building, text: "RPO Experts", color: "blue" },
        { icon: Users, text: "Team Building", color: "green" },
        { icon: Target, text: "Strategic Goals", color: "purple" }
      ]
    },
    {
      title: "Global Talent Connection",
      subtitle: "UK & USA Markets",
      description: "Seamlessly connect with top talent and leading organizations through our strategic recruitment process outsourcing.",
      buttonText: "Go Global",
      buttonLink: "/about",
      stats: { number: "10K+", label: "Professionals Placed" },
      features: ["Multi-Region Support", "Cultural Alignment", "24/7 Operations"],
      accentColor: "purple",
      image: "/images/hero-img4.jpg",
      floatingElements: [
        { icon: Globe, text: "Global Reach", color: "green" },
        { icon: Building, text: "International", color: "blue" },
        { icon: Users, text: "Diverse Talent", color: "purple" }
      ]
    },
    {
      title: "Career Advancement",
      subtitle: "IT Professionals",
      description: "Comprehensive career support and placement services for IT professionals seeking contract roles in the USA market.",
      buttonText: "Career Support",
      buttonLink: "/services/career-support",
      stats: { number: "90%+", label: "Success Rate" },
      features: ["Interview Coaching", "Contract Negotiation", "Skill Development"],
      accentColor: "green",
      image: "/images/hero-img3.jpg",
      floatingElements: [
        { icon: Briefcase, text: "Career Support", color: "purple" },
        { icon: Zap, text: "IT Professionals", color: "blue" },
        { icon: Target, text: "Success Rate", color: "green" }
      ]
    },
  ];

  // Smooth slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const currentSlideData = slides[currentSlide];

  const getAccentColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600'
    };
    return colors[color] || colors.blue;
  };

  const getBgColor = (color) => {
    const colors = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-16">
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-green-100 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-3 py-1 md:px-4 md:py-2 mb-6 md:mb-8 shadow-sm"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-blue-700">
                Trusted by 500+ Organizations Worldwide
              </span>
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              key={`subtitle-${currentSlide}`}
              className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 justify-center lg:justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-1 h-6 md:h-8 ${getBgColor(currentSlideData.accentColor)} rounded-full`} />
              <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-600 uppercase">
                {currentSlideData.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7 }}
              >
                {currentSlideData.title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1 md:mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {currentSlideData.description}
              </motion.p>
            </AnimatePresence>

            {/* Features List */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {currentSlideData.features.map((feature, index) => (
                <motion.span
                  key={feature}
                  className="inline-flex items-center gap-1 md:gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-gray-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link href={currentSlideData.buttonLink} className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className={`group bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${getBgColor(currentSlideData.accentColor)} w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base`}
                >
                  {currentSlideData.buttonText}
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base"
                >
                  <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8 border-t border-gray-200 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {[
                { number: currentSlideData.stats.number, label: currentSlideData.stats.label },
                { number: "40%", label: "Faster Hiring" },
                { number: "24/7", label: "Global Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-1 md:gap-2 justify-center lg:justify-start">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image Section */}
          <motion.div 
            className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">
              {/* Main Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                
                {/* Main Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlideData.image}
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeInOut" 
                    }}
                  />
                </AnimatePresence>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20" />
                
                {/* Floating Elements */}
                {currentSlideData.floatingElements.map((element, index) => {
                  const IconComponent = element.icon;
                  const colorClasses = {
                    blue: "text-blue-600",
                    purple: "text-purple-600",
                    green: "text-green-600"
                  };

                  return (
                    <motion.div
                      key={element.text}
                      className={`absolute ${
                        index === 0 ? "top-4 right-4" :
                        index === 1 ? "bottom-16 left-4" :
                        "bottom-4 right-4"
                      } bg-white/90 backdrop-blur-sm rounded-xl p-2 md:p-4 shadow-lg z-30`}
                      initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.2 + index * 0.1 
                      }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-1 md:gap-2">
                        <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${colorClasses[element.color]}`} />
                        <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">{element.text}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-16 h-16 md:w-24 md:h-24 bg-blue-200 rounded-2xl blur-xl opacity-50 z-0"
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-12 h-12 md:w-20 md:h-20 bg-purple-200 rounded-2xl blur-xl opacity-50 z-0"
                animate={{
                  rotate: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? `${getBgColor(currentSlideData.accentColor)} w-6 md:w-8` 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hidden lg:flex absolute top-1/2 left-4 right-4 transform -translate-y-1/2 justify-between pointer-events-none z-20">
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700 transform rotate-180" />
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;