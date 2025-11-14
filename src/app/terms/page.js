// // src/app/terms/page.js
// "use client";

// import React, { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const TermsAndConditionsPage = () => {
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
//             Terms & Conditions
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
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">1. Services</h2>
//               <div className="space-y-3 md:space-y-4">
//                 <p>
//                   Novotion provides specialized, results-driven career development and job
//                   attainment programs. Depending on the selected plan, services may
//                   include one-on-one consultations, curated interview opportunities,
//                   personalized coaching, skill-building workshops, resume and LinkedIn
//                   optimization, recruiter engagement, AI-driven marketing, and access to
//                   premium career resources.
//                 </p>
//                 <p>
//                   Service delivery methods are determined solely by Novotion.
//                 </p>
//                 <p>
//                   In recognition of Novotion's continued career support and post-placement
//                   assistance, clients agree to a <strong className="text-white">Career Success Contribution</strong> that
//                   reflects the value of services rendered throughout and after successful
//                   hiring outcomes.
//                 </p>

//                 <div className="space-y-4 md:space-y-6">
//                   <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                     <h3 className="text-base sm:text-lg md:text-lg font-semibold text-cyan-400 mb-2">Basic Plan</h3>
//                     <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                       <li><strong className="text-white">Enrollment Fee:</strong> $2,500 (due at enrollment)</li>
//                       <li><strong className="text-white">Flexible Payment:</strong> 4 easy installments</li>
//                       <li>
//                         <strong className="text-white">Includes:</strong> One-on-one consultation, 10 curated interview
//                         opportunities, 2 complimentary proxy interviews, resume optimization,
//                         LinkedIn review, weekly job market insights, recruiter engagement,
//                         AI-driven profile marketing, and access to career resources.
//                       </li>
//                       <li>
//                         <strong className="text-white">Career Success Contribution:</strong> Applies upon attainment of a verified
//                         job offer and completion of post-placement support services.
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                     <h3 className="text-base sm:text-lg md:text-lg font-semibold text-cyan-400 mb-2">Standard Plan</h3>
//                     <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                       <li><strong className="text-white">Enrollment Fee:</strong> $3,500 (due at enrollment)</li>
//                       <li><strong className="text-white">Flexible Payment:</strong> 4 easy installments</li>
//                       <li>
//                         <strong className="text-white">Includes:</strong> 15 interview opportunities, 2 proxy interviews,
//                         personalized resume rebuild, mock interviews, recruiter network
//                         access, priority submissions, and AI profile marketing.
//                       </li>
//                       <li>
//                         <strong className="text-white">Career Success Contribution:</strong> Linked to successful job outcomes and
//                         activation of premium support services.
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                     <h3 className="text-base sm:text-lg md:text-lg font-semibold text-cyan-400 mb-2">Advanced Plan</h3>
//                     <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                       <li><strong className="text-white">Enrollment Fee:</strong> $4,000 (due at enrollment)</li>
//                       <li><strong className="text-white">Flexible Payment:</strong> 4 easy installments</li>
//                       <li>
//                         <strong className="text-white">Includes:</strong> 18 interview opportunities, unlimited proxy interviews,
//                         intensive coaching, real-time sessions, LinkedIn optimization, and
//                         AI-powered visibility.
//                       </li>
//                       <li>
//                         <strong className="text-white">Career Success Contribution:</strong> Due upon completion of successful
//                         placement support and transition guidance.
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="bg-white/5 rounded-lg p-3 md:p-4">
//                     <h3 className="text-base sm:text-lg md:text-lg font-semibold text-cyan-400 mb-2">Premium Plan</h3>
//                     <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
//                       <li><strong className="text-white">Enrollment Fee:</strong> $5,000 (due at enrollment)</li>
//                       <li><strong className="text-white">Flexible Payment:</strong> 4 easy installments</li>
//                       <li>
//                         <strong className="text-white">Includes:</strong> 22 interviews, unlimited proxy support, lifetime resume
//                         updates, 24/7 portal access, direct hiring manager introductions, and
//                         VIP coaching.
//                       </li>
//                       <li>
//                         <strong className="text-white">Career Success Contribution:</strong> Reflects lifetime access, employer
//                         introductions, and ongoing advisory services following successful
//                         career placement.
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* SECTION 2 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">2. Payments & Financial Terms</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>All enrollment fees are non-refundable once services are initiated.</li>
//                 <li>
//                   Career Success Contributions are assessed only after a verified job
//                   offer or equivalent placement milestone, and reflect continued access
//                   to post-placement resources.
//                 </li>
//                 <li>Payments must be made according to the agreed schedule; delays may
//                   result in suspension or termination of services.</li>
//                 <li>Failure to pay may authorize Novotion to collect via ACH, Stripe, or
//                   other approved payment mechanisms.</li>
//                 <li>Disputes regarding payments shall follow the Dispute Resolution
//                   clause.</li>
//               </ul>
//             </section>

//             {/* SECTION 3 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">3. Client Responsibilities</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>Clients must actively participate in all training, coaching, and
//                   interview processes.</li>
//                 <li>Defaulting on payments results in loss of access to services; re-entry
//                   may require new enrollment.</li>
//                 <li>Clients agree to indemnify Novotion against claims arising from their
//                   actions or omissions.</li>
//               </ul>
//             </section>

//             {/* SECTION 4 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">4. Warranties & Liability</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>Novotion provides training and placement support but makes no
//                   guarantee of employment outcomes.</li>
//                 <li>Hiring decisions are solely at the discretion of employers or
//                   third-party organizations.</li>
//               </ul>
//             </section>

//             {/* SECTION 5 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">5. Dispute Resolution</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li>All disputes shall first be addressed through good-faith negotiation.</li>
//                 <li>If unresolved, disputes shall proceed to mediation and binding
//                   arbitration in the State of Delaware.</li>
//               </ul>
//             </section>

//             {/* SECTION 6 */}
//             <section className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 lg:p-8 border border-white/10">
//               <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-blue-400 mb-3">6. Legal & Miscellaneous</h2>
//               <ul className="list-disc list-inside space-y-2 md:space-y-3 text-sm md:text-base">
//                 <li><strong className="text-white">Governing Law:</strong> State of Delaware.</li>
//                 <li>Novotion acts as an independent contractor, not an employer.</li>
//                 <li><strong className="text-white">Force Majeure:</strong> Novotion is not liable for delays caused by events
//                   beyond its control (e.g., disasters, pandemics, strikes).</li>
//                 <li>If any clause is deemed invalid, the remainder of the agreement
//                   remains enforceable.</li>
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

// export default TermsAndConditionsPage;