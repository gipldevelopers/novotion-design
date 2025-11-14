// "use client";

// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const PrivacyPolicyPage = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [inView, controls]);

//   const textVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 80, damping: 15, staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100">
//       <Header />

//       {/* Main content */}
//       <div className="pt-16 md:pt-20 pb-12 md:pb-20">
//         {/* Soft animated background glow */}
//         <div className="absolute inset-0 z-0 opacity-20">
//           <div className="absolute top-1/3 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-blue-700 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>

//         {/* Main content */}
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={textVariants}
//           className="relative z-10 container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl lg:max-w-5xl"
//         >
//           <motion.h1
//             variants={itemVariants}
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white"
//           >
//             Privacy Policy
//           </motion.h1>

//           <motion.div
//             variants={itemVariants}
//             className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6 md:mb-10"
//           ></motion.div>

//           <motion.div
//             variants={itemVariants}
//             className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-6 md:space-y-8 lg:space-y-10"
//           >
//             {/* SECTION 1 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">
//                 1. Information We Collect
//               </h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>
//                   Personal details provided during enrollment (name, contact info, payment details).
//                 </li>
//                 <li>
//                   Employment-related information (salary, job offer details) necessary to calculate service fees.
//                 </li>
//                 <li>
//                   Data voluntarily shared during training and support interactions.
//                 </li>
//               </ul>
//             </section>

//             {/* SECTION 2 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">
//                 2. How We Use Your Information
//               </h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>To provide career training, coaching, and support services.</li>
//                 <li>To manage billing, invoicing, and service fee collection.</li>
//                 <li>To improve our services and offer relevant content.</li>
//                 <li>To comply with legal obligations.</li>
//               </ul>
//             </section>

//             {/* SECTION 3 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">3. Confidentiality</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>
//                   All proprietary and personal information shared by the Client will be treated as confidential.
//                 </li>
//                 <li>
//                   Information will not be disclosed to third parties without consent, except as required by law or for payment collection purposes.
//                 </li>
//               </ul>
//             </section>

//             {/* SECTION 4 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">4. Data Protection</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>Payments are processed securely via ACH or Stripe.</li>
//                 <li>
//                   Novotion takes reasonable measures to protect personal data from unauthorized access or misuse.
//                 </li>
//               </ul>
//             </section>

//             {/* SECTION 5 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">5. Client Rights</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>Clients may request clarification on how their data is used.</li>
//                 <li>
//                   By using our services, Clients consent to the terms outlined in this Privacy Policy.
//                 </li>
//               </ul>
//             </section>
//           </motion.div>

//           {/* Bottom spacing for mobile */}
//           <div className="h-8 md:h-12"></div>
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicyPage;