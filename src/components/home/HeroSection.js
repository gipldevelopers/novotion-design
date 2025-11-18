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
//     <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-16">
      
//       {/* Enhanced Background Elements */}
//       <div className="absolute inset-0">
//         {/* Animated Gradient Orbs */}
//         <motion.div
//           className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
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
//           className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
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
//           className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-green-100 rounded-full blur-3xl opacity-20"
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

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
//           {/* Left Content */}
//           <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-3 py-1 md:px-4 md:py-2 mb-6 md:mb-8 shadow-sm"
//             >
//               <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse" />
//               <span className="text-xs md:text-sm font-medium text-blue-700">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 justify-center lg:justify-start"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className={`w-1 h-6 md:h-8 ${getBgColor(currentSlideData.accentColor)} rounded-full`} />
//               <span className="text-xs md:text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//                 transition={{ duration: 0.7 }}
//               >
//                 {currentSlideData.title.split(' ').map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-1 md:mr-2"
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
//                 className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
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
//               className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <motion.span
//                   key={feature}
//                   className="inline-flex items-center gap-1 md:gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-gray-700"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 >
//                   <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
//                   {feature}
//                 </motion.span>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//             >
//               <Link href={currentSlideData.buttonLink} className="w-full sm:w-auto">
//                 <Button 
//                   size="lg" 
//                   className={`group bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${getBgColor(currentSlideData.accentColor)} w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base`}
//                 >
//                   {currentSlideData.buttonText}
//                   <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 transform group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
//                 </Button>
//               </Link>
              
//               <Link href="/contact" className="w-full sm:w-auto">
//                 <Button 
//                   variant="outline" 
//                   size="lg"
//                   className="group w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 text-sm md:text-base"
//                 >
//                   <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
//                   Contact Us
//                 </Button>
//               </Link>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8 border-t border-gray-200 justify-center lg:justify-start"
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
//                   <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 flex items-center gap-1 md:gap-2 justify-center lg:justify-start">
//                     <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
//                     {stat.number}
//                   </div>
//                   <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right Content - Image Section */}
//           <motion.div 
//             className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">
//               {/* Main Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100"
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
//                         index === 0 ? "top-4 right-4" :
//                         index === 1 ? "bottom-16 left-4" :
//                         "bottom-4 right-4"
//                       } bg-white/90 backdrop-blur-sm rounded-xl p-2 md:p-4 shadow-lg z-30`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ 
//                         duration: 0.3,
//                         delay: 0.2 + index * 0.1 
//                       }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-1 md:gap-2">
//                         <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${colorClasses[element.color]}`} />
//                         <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>

//               {/* Decorative Elements */}
//               <motion.div
//                 className="absolute -top-2 -right-2 w-16 h-16 md:w-24 md:h-24 bg-blue-200 rounded-2xl blur-xl opacity-50 z-0"
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
//                 className="absolute -bottom-2 -left-2 w-12 h-12 md:w-20 md:h-20 bg-purple-200 rounded-2xl blur-xl opacity-50 z-0"
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
//       <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
//               currentSlide === index 
//                 ? `${getBgColor(currentSlideData.accentColor)} w-6 md:w-8` 
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
//           className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//           aria-label="Previous slide"
//         >
//           <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700 transform rotate-180" />
//         </button>
//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
//           aria-label="Next slide"
//         >
//           <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
//         </button>
//       </div>
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
//   CheckCircle, 
//   Sparkles,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap
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
//       accentColor: "primary",
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "primary" },
//         { icon: Users, text: "Team Building", color: "secondary" },
//         { icon: Target, text: "Strategic Goals", color: "primary" }
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
//       accentColor: "primary",
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Globe, text: "Global Reach", color: "secondary" },
//         { icon: Building, text: "International", color: "primary" },
//         { icon: Users, text: "Diverse Talent", color: "primary" }
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
//       accentColor: "primary",
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "primary" },
//         { icon: Zap, text: "IT Professionals", color: "secondary" },
//         { icon: Target, text: "Success Rate", color: "primary" }
//       ]
//     },
//   ];

//   // Auto slide change
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

//   const getAccentColor = () => `text-primary`;
//   const getBgColor = () => `bg-primary`;

//   const getIconColor = (color) => {
//     return color === "secondary" ? "text-secondary" : "text-primary";
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      
//       {/* Soft Brand Background Bubbles */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
//           animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl"
//           animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
//           {/* LEFT SIDE */}
//           <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
//             >
//               <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//               <span className="text-sm font-medium text-primary">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-4 h-4 text-primary" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <span className="w-2 h-8 bg-primary rounded-full"></span>
//               <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//               >
//                 {currentSlideData.title.split(" ").map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
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
//                 className="text-lg text-gray-600 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 {currentSlideData.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Features */}
//             <motion.div
//               className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <span
//                   key={feature}
//                   className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm text-sm text-gray-700"
//                 >
//                   <CheckCircle className="w-4 h-4 text-primary" />
//                   {feature}
//                 </span>
//               ))}
//             </motion.div>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
//               <Link href={currentSlideData.buttonLink}>
//                 <button className="btn-primary w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2">
//                   {currentSlideData.buttonText}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>

//               <Link href="/contact">
//                 <button className="btn-outline-primary w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center gap-2">
//                   <Users className="w-4 h-4 text-primary" />
//                   Contact Us
//                 </button>
//               </Link>
//             </div>

//             {/* STATS */}
//             <div className="flex gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">{currentSlideData.stats.number}</div>
//                 <div className="text-sm text-gray-600">{currentSlideData.stats.label}</div>
//               </div>
//                             <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">40%</div>
//                 <div className="text-sm text-gray-600">Faster Hiring</div>
//               </div>

//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-gray-600">Global Support</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <motion.div 
//             className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">

//               {/* Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
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
//                     transition={{ duration: 0.4 }}
//                   />
//                 </AnimatePresence>

//                 {/* Soft overlay */}
//                 <div className="absolute inset-0 bg-black/10 z-20" />

//                 {/* Floating Elements */}
//                 {currentSlideData.floatingElements.map((element, index) => {
//                   const IconComponent = element.icon;
//                   return (
//                     <motion.div
//                       key={element.text}
//                       className={`absolute ${
//                         index === 0 ? "top-4 right-4" :
//                         index === 1 ? "bottom-16 left-4" :
//                         "bottom-4 right-4"
//                       } bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <IconComponent className={`w-5 h-5 ${element.color === "secondary" ? "text-secondary" : "text-primary"}`} />
//                         <span className="text-sm font-semibold text-gray-800">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}

//               </motion.div>

//               {/* Decorative Brand Blobs */}
//               <motion.div
//                 className="absolute -top-2 -right-2 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 rounded-full transition-all duration-300 
//               ${currentSlide === index ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}`}
//           />
//         ))}
//       </div>

//       {/* Prev / Next Buttons */}
//       <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-6 z-20 pointer-events-none">
//         <button
//           onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
//         </button>

//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

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
//   CheckCircle, 
//   Sparkles,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "Strategic Talent Solutions",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       stats: { number: "500+", label: "Organizations Served" },
//       features: ["Global Recruitment", "24/7 Support", "Proven Results"],
//       accentColor: "primary",
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "primary" },
//         { icon: Users, text: "Team Building", color: "secondary" },
//         { icon: Target, text: "Strategic Goals", color: "primary" }
//       ]
//     },
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "UK & USA Markets",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       stats: { number: "10K+", label: "Professionals Placed" },
//       features: ["Multi-Region Support", "Cultural Alignment", "Career Growth"],
//       accentColor: "primary",
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Globe, text: "Global Reach", color: "secondary" },
//         { icon: Building, text: "International", color: "primary" },
//         { icon: Users, text: "Diverse Talent", color: "primary" }
//       ]
//     },
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "IT Professionals",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       stats: { number: "90%+", label: "Success Rate" },
//       features: ["Career Support", "Contract Roles", "Skill Development"],
//       accentColor: "primary",
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "primary" },
//         { icon: Zap, text: "IT Professionals", color: "secondary" },
//         { icon: Target, text: "Success Rate", color: "primary" }
//       ]
//     },
//   ];

//   // Auto slide change
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

//   const getAccentColor = () => `text-primary`;
//   const getBgColor = () => `bg-primary`;

//   const getIconColor = (color) => {
//     return color === "secondary" ? "text-secondary" : "text-primary";
//   };

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      
//       {/* Soft Brand Background Bubbles */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
//           animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl"
//           animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
//           {/* LEFT SIDE */}
//           <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
//             >
//               <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//               <span className="text-sm font-medium text-primary">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-4 h-4 text-primary" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <span className="w-2 h-8 bg-primary rounded-full"></span>
//               <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//               >
//                 {currentSlideData.title.split(" ").map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
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
//                 className="text-lg text-gray-600 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 {currentSlideData.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Features */}
//             <motion.div
//               className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <span
//                   key={feature}
//                   className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm text-sm text-gray-700"
//                 >
//                   <CheckCircle className="w-4 h-4 text-primary" />
//                   {feature}
//                 </span>
//               ))}
//             </motion.div>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
//               <Link href={currentSlideData.button1Link}>
//                 <button className="btn-primary w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2">
//                   {currentSlideData.button1Text}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>

//               <Link href={currentSlideData.button2Link}>
//                 <button className="btn-outline-primary w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center gap-2">
//                   <Users className="w-4 h-4 text-primary" />
//                   {currentSlideData.button2Text}
//                 </button>
//               </Link>
//             </div>

//             {/* STATS */}
//             <div className="flex gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">{currentSlideData.stats.number}</div>
//                 <div className="text-sm text-gray-600">{currentSlideData.stats.label}</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">30-60%</div>
//                 <div className="text-sm text-gray-600">Cost Reduction</div>
//               </div>

//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-gray-600">Global Support</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <motion.div 
//             className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">

//               {/* Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
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
//                     transition={{ duration: 0.4 }}
//                   />
//                 </AnimatePresence>

//                 {/* Soft overlay */}
//                 <div className="absolute inset-0 bg-black/10 z-20" />

//                 {/* Floating Elements */}
//                 {currentSlideData.floatingElements.map((element, index) => {
//                   const IconComponent = element.icon;
//                   return (
//                     <motion.div
//                       key={element.text}
//                       className={`absolute ${
//                         index === 0 ? "top-4 right-4" :
//                         index === 1 ? "bottom-16 left-4" :
//                         "bottom-4 right-4"
//                       } bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <IconComponent className={`w-5 h-5 ${element.color === "secondary" ? "text-secondary" : "text-primary"}`} />
//                         <span className="text-sm font-semibold text-gray-800">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}

//               </motion.div>

//               {/* Decorative Brand Blobs */}
//               <motion.div
//                 className="absolute -top-2 -right-2 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 rounded-full transition-all duration-300 
//               ${currentSlide === index ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}`}
//           />
//         ))}
//       </div>

//       {/* Prev / Next Buttons */}
//       <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-6 z-20 pointer-events-none">
//         <button
//           onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
//         </button>

//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

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
//   CheckCircle, 
//   Sparkles,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap,
//   Clock,
//   TrendingUp,
//   Shield
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       title: "Stronger Teams Start With Smarter Hiring",
//       subtitle: "For Organizations",
//       description: "We help UK & USA organizations hire faster, cut recruitment costs, and build high-performing teams through strategic, data-led RPO solutions.",
//       button1Text: "Discover RPO Solutions",
//       button1Link: "/services/rpo",
//       button2Text: "Explore How We Work",
//       button2Link: "/about",
//       features: [
//         "Multi-market recruitment expertise",
//         "Cultural & compliance-aligned hiring"
//       ],
//       stats: { number: "40%", label: "Faster Hiring" },
//       accentColor: "primary",
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "primary" },
//         { icon: Users, text: "Team Building", color: "secondary" },
//         { icon: Target, text: "Strategic Goals", color: "primary" }
//       ]
//     },
//     {
//       title: "Your Next IT Opportunity Starts Here",
//       subtitle: "For IT Professionals",
//       description: "From interview prep to contract placements, we guide IT professionals (Java, .NET, Cloud, DevOps, QA & more) toward high-value career opportunities across the USA.",
//       button1Text: "Find Your Next Role",
//       button1Link: "/services/career-support",
//       button2Text: "Explore Career Support",
//       button2Link: "/services/career-support",
//       features: [
//         "Personalized career guidance",
//         "Contract & project-based roles"
//       ],
//       stats: { number: "10K+", label: "Professionals Placed" },
//       accentColor: "primary",
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "secondary" },
//         { icon: Zap, text: "IT Professionals", color: "primary" },
//         { icon: Target, text: "USA Opportunities", color: "primary" }
//       ]
//     },
//     {
//       title: "Where Talent Strategy Meets Real Results",
//       subtitle: "Recruitment Excellence",
//       description: "Our recruitment solutions blend industry insight, advanced sourcing methods, and transparent reporting to deliver measurable hiring impact across UK & USA markets.",
//       button1Text: "Explore How We Work",
//       button1Link: "/about",
//       button2Text: "Partner With Us",
//       button2Link: "/contact",
//       features: [
//         "End-to-end talent acquisition",
//         "High-quality sourcing & screening",
//       ],
//       stats: { number: "500+", label: "Clients Served" },
//       accentColor: "primary",
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Globe, text: "UK & USA Markets", color: "primary" },
//         { icon: TrendingUp, text: "Measurable Impact", color: "secondary" },
//         { icon: Shield, text: "Trusted Partner", color: "primary" }
//       ]
//     },
//   ];

//   // Auto slide change
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

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      
//       {/* Soft Brand Background Bubbles */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
//           animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl"
//           animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
//           {/* LEFT SIDE */}
//           <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
//             >
//               <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//               <span className="text-sm font-medium text-primary">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-4 h-4 text-primary" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <span className="w-2 h-8 bg-primary rounded-full"></span>
//               <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//               >
//                 {currentSlideData.title.split(" ").map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
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
//                 className="text-lg text-gray-600 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 {currentSlideData.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Features */}
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <div
//                   key={feature}
//                   className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                   <span className="text-sm text-gray-700 font-medium text-left">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
//               <Link href={currentSlideData.button1Link}>
//                 <button className="btn-primary w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform">
//                   {currentSlideData.button1Text}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>

//               <Link href={currentSlideData.button2Link}>
//                 <button className="btn-outline-primary w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
//                   {currentSlideData.button2Text}
//                 </button>
//               </Link>
//             </div>

//             {/* STATS */}
//             <div className="flex gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">{currentSlideData.stats.number}</div>
//                 <div className="text-sm text-gray-600">{currentSlideData.stats.label}</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">30-60%</div>
//                 <div className="text-sm text-gray-600">Cost Reduction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-gray-600">Global Support</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <motion.div 
//             className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">

//               {/* Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
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
//                     transition={{ duration: 0.4 }}
//                   />
//                 </AnimatePresence>

//                 {/* Soft overlay */}
//                 <div className="absolute inset-0 bg-black/10 z-20" />

//                 {/* Floating Elements */}
//                 {currentSlideData.floatingElements.map((element, index) => {
//                   const IconComponent = element.icon;
//                   return (
//                     <motion.div
//                       key={element.text}
//                       className={`absolute ${
//                         index === 0 ? "top-4 right-4" :
//                         index === 1 ? "bottom-16 left-4" :
//                         "bottom-4 right-4"
//                       } bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <IconComponent className={`w-5 h-5 ${element.color === "secondary" ? "text-secondary" : "text-primary"}`} />
//                         <span className="text-sm font-semibold text-gray-800">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}

//               </motion.div>

//               {/* Decorative Brand Blobs */}
//               <motion.div
//                 className="absolute -top-2 -right-2 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 rounded-full transition-all duration-300 
//               ${currentSlide === index ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}`}
//           />
//         ))}
//       </div>

//       {/* Prev / Next Buttons */}
//       <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-6 z-20 pointer-events-none">
//         <button
//           onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
//         </button>

//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

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
//   CheckCircle, 
//   Sparkles,
//   Briefcase,
//   Building,
//   Globe,
//   Users,
//   Target,
//   Zap,
//   Clock,
//   TrendingUp,
//   Shield
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const slides = [
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "For Organizations",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       features: [
//         "Strategic talent acquisition",
//         "Global recruitment expertise"
//       ],
//       stats: { number: "500+", label: "Clients Served" },
//       accentColor: "primary",
//       image: "/images/hero-img.jpg",
//       floatingElements: [
//         { icon: Building, text: "RPO Experts", color: "primary" },
//         { icon: Users, text: "Team Building", color: "secondary" },
//         { icon: Target, text: "Strategic Goals", color: "primary" }
//       ]
//     },
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "For Professionals",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       features: [
//         "Personalized career support",
//         "Contract opportunities"
//       ],
//       stats: { number: "10K+", label: "Professionals Placed" },
//       accentColor: "primary",
//       image: "/images/hero-img4.jpg",
//       floatingElements: [
//         { icon: Briefcase, text: "Career Support", color: "secondary" },
//         { icon: Zap, text: "IT Professionals", color: "primary" },
//         { icon: Target, text: "USA Opportunities", color: "primary" }
//       ]
//     },
//     {
//       title: "Building Careers. Building Teams. Building Success.",
//       subtitle: "Recruitment Excellence",
//       description: "We connect exceptional talent acquisition opportunities with outstanding professionals across the UK and USA because the right recruitment solutions change everything.",
//       button1Text: "Partner With Us",
//       button1Link: "/services/rpo",
//       button2Text: "Advance Your Career",
//       button2Link: "/services/career-support",
//       features: [
//         "End-to-end solutions",
//         "Measurable impact"
//       ],
//       stats: { number: "15+", label: "Industries" },
//       accentColor: "primary",
//       image: "/images/hero-img3.jpg",
//       floatingElements: [
//         { icon: Globe, text: "UK & USA Markets", color: "primary" },
//         { icon: TrendingUp, text: "Proven Results", color: "secondary" },
//         { icon: Shield, text: "Trusted Partner", color: "primary" }
//       ]
//     },
//   ];

//   // Auto slide change
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

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      
//       {/* Soft Brand Background Bubbles */}
//       <div className="absolute inset-0">
//         <motion.div
//           className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
//           animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl"
//           animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
//         <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
//           {/* LEFT SIDE */}
//           <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

//             {/* Trust Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
//             >
//               <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
//               <span className="text-sm font-medium text-primary">
//                 Trusted by 500+ Organizations Worldwide
//               </span>
//               <Sparkles className="w-4 h-4 text-primary" />
//             </motion.div>

//             {/* Subtitle */}
//             <motion.div
//               key={`subtitle-${currentSlide}`}
//               className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <span className="w-2 h-8 bg-primary rounded-full"></span>
//               <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
//                 {currentSlideData.subtitle}
//               </span>
//             </motion.div>

//             {/* Title */}
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={`title-${currentSlide}`}
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -30 }}
//               >
//                 {currentSlideData.title.split(" ").map((word, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block mr-2"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
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
//                 className="text-lg text-gray-600 leading-relaxed mb-8"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 {currentSlideData.description}
//               </motion.p>
//             </AnimatePresence>

//             {/* Features */}
//             <motion.div
//               className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               {currentSlideData.features.map((feature, index) => (
//                 <div
//                   key={feature}
//                   className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                   <span className="text-sm text-gray-700 font-medium text-left">
//                     {feature}
//                   </span>
//                 </div>
//               ))}
//             </motion.div>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
//               <Link href={currentSlideData.button1Link}>
//                 <button className="btn-primary w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform">
//                   {currentSlideData.button1Text}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </Link>

//               <Link href={currentSlideData.button2Link}>
//                 <button className="btn-outline-primary w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
//                   {currentSlideData.button2Text}
//                 </button>
//               </Link>
//             </div>

//             {/* STATS */}
//             <div className="flex gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">{currentSlideData.stats.number}</div>
//                 <div className="text-sm text-gray-600">{currentSlideData.stats.label}</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">30-60%</div>
//                 <div className="text-sm text-gray-600">Cost Reduction</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl font-bold text-primary">24/7</div>
//                 <div className="text-sm text-gray-600">Global Support</div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE */}
//           <motion.div 
//             className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">

//               {/* Image Container */}
//               <motion.div
//                 className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               >
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
//                     transition={{ duration: 0.4 }}
//                   />
//                 </AnimatePresence>

//                 {/* Soft overlay */}
//                 <div className="absolute inset-0 bg-black/10 z-20" />

//                 {/* Floating Elements */}
//                 {currentSlideData.floatingElements.map((element, index) => {
//                   const IconComponent = element.icon;
//                   return (
//                     <motion.div
//                       key={element.text}
//                       className={`absolute ${
//                         index === 0 ? "top-4 right-4" :
//                         index === 1 ? "bottom-16 left-4" :
//                         "bottom-4 right-4"
//                       } bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200`}
//                       initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
//                       whileHover={{ scale: 1.05, y: -5 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <IconComponent className={`w-5 h-5 ${element.color === "secondary" ? "text-secondary" : "text-primary"}`} />
//                         <span className="text-sm font-semibold text-gray-800">{element.text}</span>
//                       </div>
//                     </motion.div>
//                   );
//                 })}

//               </motion.div>

//               {/* Decorative Brand Blobs */}
//               <motion.div
//                 className="absolute -top-2 -right-2 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               />
//               <motion.div
//                 className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-2xl blur-xl"
//                 animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 rounded-full transition-all duration-300 
//               ${currentSlide === index ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}`}
//           />
//         ))}
//       </div>

//       {/* Prev / Next Buttons */}
//       <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-6 z-20 pointer-events-none">
//         <button
//           onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
//         >
//           <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
//         </button>

//         <button
//           onClick={() => goToSlide((currentSlide + 1) % slides.length)}
//           className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
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
  CheckCircle, 
  Sparkles,
  Briefcase,
  Building,
  Globe,
  Users,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Search,
  Rocket,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Stronger Teams Start With Smarter Hiring",
      subtitle: "For Organizations",
      description: "We help UK & USA organizations hire faster, cut recruitment costs, and build high-performing teams through strategic, data-led RPO solutions.",
      button1Text: "Partner With Us",
      button1Link: "/services/rpo",
      button2Text: "Discover RPO Solutions",
      button2Link: "/services/rpo",
      features: [
        "Multi-market recruitment expertise",
        "24/7 sourcing and screening support"
      ],
      stats: { number: "500+", label: "Clients Served" },
      accentColor: "primary",
      image: "/images/hero-img.jpg",
      floatingElements: [
        { icon: Building, text: "RPO Experts", color: "primary" },
        { icon: Users, text: "Team Building", color: "secondary" },
        { icon: Target, text: "Strategic Goals", color: "primary" }
      ]
    },
    {
      title: "Your Next IT Opportunity Starts Here",
      subtitle: "For Professionals",
      description: "From interview prep to contract placements, we guide IT professionals (Java, .NET, Cloud, DevOps, QA & more) toward high-value career opportunities across the USA.",
      button1Text: "Find Your Next Role",
      button1Link: "/services/career-support",
      button2Text: "Advance Your Career",
      button2Link: "/services/career-support",
      features: [
        "Personalized career guidance",
        "Contract & project-based roles",
      ],
      stats: { number: "10K+", label: "Professionals Placed" },
      accentColor: "primary",
      image: "/images/hero-img4.jpg",
      floatingElements: [
        { icon: Briefcase, text: "Career Support", color: "secondary" },
        { icon: Zap, text: "IT Professionals", color: "primary" },
        { icon: Rocket, text: "USA Opportunities", color: "primary" }
      ]
    },
    {
      title: "Where Talent Strategy Meets Real Results",
      subtitle: "Recruitment Excellence",
      description: "Our recruitment solutions blend industry insight, advanced sourcing methods, and transparent reporting to deliver measurable hiring impact across UK & USA markets.",
      button1Text: "Explore How We Work",
      button1Link: "/services",
      button2Text: "Advance Your Career",
      button2Link: "/services/career-support",
      features: [
        "End-to-end talent acquisition",
        "Reduced hiring time & cost"
      ],
      stats: { number: "15+", label: "Industries" },
      accentColor: "primary",
      image: "/images/hero-img3.jpg",
      floatingElements: [
        { icon: Globe, text: "UK & USA Markets", color: "primary" },
        { icon: TrendingUp, text: "Proven Results", color: "secondary" },
        { icon: Star, text: "Excellence", color: "primary" }
      ]
    },
  ];

  // Auto slide change
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      
      {/* Soft Brand Background Bubbles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 md:w-80 md:h-80 bg-secondary/30 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 md:w-60 md:h-60 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl py-8 md:py-0">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          
          {/* LEFT SIDE */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Trusted by 500+ Organizations Worldwide
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>

            {/* Subtitle */}
            <motion.div
              key={`subtitle-${currentSlide}`}
              className="flex items-center gap-3 mb-4 justify-center lg:justify-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold tracking-widest text-gray-600 uppercase">
                {currentSlideData.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
              >
                {currentSlideData.title.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
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
                className="text-lg text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {currentSlideData.description}
              </motion.p>
            </AnimatePresence>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentSlideData.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium text-left">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA BUTTONS - FIXED */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Link href={currentSlideData.button1Link}>
                <Button className="bg-primary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:scale-105 transition-transform">
                  {currentSlideData.button1Text}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href={currentSlideData.button2Link}>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all">
                  {currentSlideData.button2Text}
                </Button>
              </Link>
            </div>

            {/* STATS */}
            <div className="flex gap-8 pt-6 border-t border-gray-200 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{currentSlideData.stats.number}</div>
                <div className="text-sm text-gray-600">{currentSlideData.stats.label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30-60%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Global Support</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div 
            className="relative h-64 sm:h-80 md:h-[450px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full max-w-sm md:max-w-md mx-auto">

              {/* Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-black/10 z-20" />

                {/* Floating Elements */}
                {currentSlideData.floatingElements.map((element, index) => {
                  const IconComponent = element.icon;
                  return (
                    <motion.div
                      key={element.text}
                      className={`absolute ${
                        index === 0 ? "top-4 right-4" :
                        index === 1 ? "bottom-16 left-4" :
                        "bottom-4 right-4"
                      } bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200`}
                      initial={{ opacity: 0, y: index === 0 ? -20 : 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className={`w-5 h-5 ${element.color === "secondary" ? "text-secondary" : "text-primary"}`} />
                        <span className="text-sm font-semibold text-gray-800">{element.text}</span>
                      </div>
                    </motion.div>
                  );
                })}

              </motion.div>

              {/* Decorative Brand Blobs */}
              <motion.div
                className="absolute -top-2 -right-2 w-20 h-20 md:w-28 md:h-28 bg-primary/20 rounded-2xl blur-xl"
                animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-16 h-16 md:w-24 md:h-24 bg-secondary/20 rounded-2xl blur-xl"
                animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 
              ${currentSlide === index ? 'w-8 bg-primary' : 'w-3 bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Prev / Next Buttons */}
      <div className="hidden lg:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-6 z-20 pointer-events-none">
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
        >
          <ArrowRight className="w-6 h-6 text-gray-700 rotate-180" />
        </button>

        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="pointer-events-auto w-12 h-12 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition transform hover:scale-110"
        >
          <ArrowRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

    </section>
  );
};

export default HeroSection;