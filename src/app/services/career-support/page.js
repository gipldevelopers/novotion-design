// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { CheckCircle, FileText, MessageSquare, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
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

// // Accordion Component
// const Accordion = ({ items }) => {
//   const [openItem, setOpenItem] = useState(null);

//   return (
//     <div className="space-y-4">
//       {items.map((item, index) => (
//         <div key={index} className="border rounded-lg overflow-hidden">
//           <button
//             onClick={() => setOpenItem(openItem === index ? null : index)}
//             className="w-full px-6 py-4 text-left font-semibold hover:text-green-600 transition-colors flex justify-between items-center"
//           >
//             {item.question}
//             <ChevronDown className={`h-5 w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
//           </button>
//           {openItem === index && (
//             <div className="px-6 pb-4 text-gray-600">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Chevron Icon for Accordion
// const ChevronDown = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//   </svg>
// );

// const ServicesCareer = () => {
//   const services = [
//     {
//       icon: FileText,
//       title: 'Professional Marketing & Profile Positioning',
//       description: 'We craft a compelling professional narrative that highlights your technical achievements and unique value. We proactively market your brand across our exclusive vendor networks and direct client channels.',
//       result: 'You get noticed by the right decision-makers for the right roles.'
//     },
//     {
//       icon: Target,
//       title: 'Precision-Matched Submissions',
//       description: 'We analyze thousands of live client requirements daily using advanced tools and deep market expertise to find the perfect match for your skills, experience, and career goals.',
//       result: 'A dramatic reduction in "bench time" and significantly higher interview-to-offer ratio.'
//     },
//     {
//       icon: MessageSquare,
//       title: 'Seamless Interview & Feedback Management',
//       description: 'We manage the entire communication loop, acting as the professional bridge between you, the vendor, and the end client. We handle scheduling, provide pre-interview briefings, and gather detailed feedback.',
//       result: 'A smooth, responsive interview process that builds confidence and helps you close offers.'
//     },
//     {
//       icon: CheckCircle,
//       title: 'Contract Negotiation & Onboarding Support',
//       description: 'Our support doesn\'t stop at the verbal "yes." We guide you through rate negotiations and manage all onboarding and compliance paperwork for a seamless project start.',
//       result: 'You start your new project with clarity, confidence, and a team behind you.'
//     }
//   ];

//   const technologies = [
//     { category: 'Programming & Development', skills: 'Java, .NET, Python, C++, Node.js, React, Angular' },
//     { category: 'Cloud Technologies', skills: 'AWS, Azure, Google Cloud (GCP)' },
//     { category: 'Data & Analytics', skills: 'Data Science, Big Data, SQL, Power BI, Snowflake' },
//     { category: 'ERP & CRM Systems', skills: 'SAP, Salesforce, Oracle' },
//     { category: 'Cybersecurity & Infrastructure', skills: 'Network Engineering, DevOps, System Administration' },
//     { category: 'QA & Automation', skills: 'Selenium, API Testing, Manual & Automation QA' },
//     { category: 'Design & UI/UX', skills: 'Figma, Adobe XD, Product Design, Wireframing' }
//   ];

//   const phases = [
//     {
//       title: 'Phase 1: Professional Onboarding & Profiling',
//       description: 'We work to understand your technical skills, project history, career goals, and ideal next role. We optimize your resume, LinkedIn, and professional profile to create a powerful, market-ready brand.'
//     },
//     {
//       title: 'Phase 2: Active Marketing & Requirement Matching',
//       description: 'Our team scans live U.S. client requirements 24/7, identifies the most relevant opportunities, and begins targeted marketing campaigns through our vast vendor and client network.'
//     },
//     {
//       title: 'Phase 3: Submission, Interviews & Feedback',
//       description: 'We manage the entire submission and interview process. We position your profile, coordinate with all parties, provide prep, gather feedback, and keep you in the loop.'
//     },
//     {
//       title: 'Phase 4: Placement, Onboarding & Post-Placement Support',
//       description: 'When the offer is confirmed, we manage negotiation and onboarding. We stay connected, supporting you through the project, managing extensions, and proactively planning your next deployment.'
//     }
//   ];

//   const faqs = [
//     {
//       question: 'What are Career Support Services?',
//       answer: 'Think of it as having a personal marketing agent. Our service is designed to market available IT professionals (on "bench") to client companies for contract roles in the U.S. market. Instead of you waiting for projects, our team actively markets your profile, finds matching requirements, coordinates interviews, and helps you secure assignments quickly.'
//     },
//     {
//       question: 'Which market do you serve for this service?',
//       answer: 'Our Career Support services operate exclusively in the United States. We work with consulting firms, vendors, and direct clients across all major tech hubs. Our India-based offshore team provides 24/7 support to ensure continuous marketing and faster submissions.'
//     },
//     {
//       question: 'What types of professionals do you work with?',
//       answer: 'We specialize in IT professionals across all major technologies, including Java, .NET, Python, Cloud (AWS, Azure), Data Science, DevOps, SAP, Salesforce, and QA. Our recruiters understand these technical skills deeply, leading to better requirement matching and more successful placements.'
//     },
//     {
//       question: 'How fast can I get placed?',
//       answer: 'While placement speed varies based on your specific skill set and current market demand, most professionals in our program secure interviews within 1-2 weeks. Our goal is to close placements within 2-4 weeks of active marketing, leveraging our structured process and strong vendor network.'
//     },
//     {
//       question: 'What contract types do you support?',
//       answer: 'We are flexible and support the models most common in the U.S. market, including Corp-to-Corp (C2C), W2, and 1099, depending on professional and client preferences. We guide both sides through the compliance and coordination for each.'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-green-50 to-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold">Stop Waiting. Start Connecting.</h1>
//             <p className="text-xl md:text-2xl text-gray-600">
//               We are the U.S. IT market's premier career partner. We actively market your skills, connect you with top-tier projects, and manage your next career move.
//             </p>
//             <Link href="/contact">
//               <Button size="lg">
//                 Schedule Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* The Challenge */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenge: From "On the Bench" to "In-Demand"</h2>
//             </div>
//             <div className="space-y-6 text-gray-600">
//               <p className="text-lg">
//                 For a skilled IT professional, being "on the bench" isn't a vacation. It's a period of uncertainty. For a consulting firm, it's a drain on revenue and resources. The U.S. IT market is fast-paced, and every day not on a project is a missed opportunity.
//               </p>
//               <p className="text-lg">
//                 This is where Novotion's Career Support Services come in.
//               </p>
//               <p className="text-lg">
//                 We are not a passive job board or a simple resume-forwarding service. We are a proactive marketing and placement partner dedicated exclusively to the U.S. IT market.
//               </p>
//               <p className="text-lg font-semibold text-gray-900">
//                 We act as your strategic agent. Our job is to connect your unique expertise with our vast, established network of clients and vendors. From polishing your professional brand and marketing your profile to coordinating interviews and negotiating contracts, we handle the entire process. We turn your downtime into your next great opportunity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Career Support Services: Your Talent, Our Strategy</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our approach is strategic, personal, and built for the speed of the U.S. tech market. We function as a high-performance extension of your team.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
//                     <service.icon className="h-6 w-6 text-green-600" />
//                   </div>
//                   <h3 className="text-xl font-bold">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                   <div className="pt-3 border-t">
//                     <p className="text-sm">
//                       <span className="font-semibold text-green-600">The Result:</span> {service.result}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path From Bench to Billable</h2>
//           </div>
//           <div className="max-w-4xl mx-auto space-y-6">
//             {phases.map((phase, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="flex gap-4">
//                     <div className="flex-shrink-0">
//                       <div className="h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
//                         {index + 1}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
//                       <p className="text-gray-600">{phase.description}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technologies */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies & Skills We Cover</h2>
//             <p className="text-lg text-gray-600">
//               We Speak Your Language
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {technologies.map((tech, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow">
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold mb-3 text-blue-600">{tech.category}</h3>
//                   <p className="text-gray-600">{tech.skills}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <Accordion items={faqs} />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-green-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Project?</h2>
//           <p className="text-lg mb-8 max-w-3xl mx-auto text-green-100">
//             Whether you're an individual IT professional or a consulting firm managing a team, Novotion provides the strategy, network, and support to maximize your placements and profitability.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact">
//               <Button size="lg" variant="secondary">
//                 Schedule Your Free Consultation
//               </Button>
//             </Link>
//             <Link href="/contact">
//               <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
//                 Request Service Brochure
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesCareer;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, FileText, MessageSquare, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
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

// Accordion Component
const Accordion = ({ items }) => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold hover:text-green-600 transition-colors flex justify-between items-center text-sm sm:text-base"
          >
            {item.question}
            <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
          </button>
          {openItem === index && (
            <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Chevron Icon for Accordion
const ChevronDown = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ServicesCareer = () => {
  const services = [
    {
      icon: FileText,
      title: 'Professional Marketing & Profile Positioning',
      description: 'We craft a compelling professional narrative that highlights your technical achievements and unique value. We proactively market your brand across our exclusive vendor networks and direct client channels.',
      result: 'You get noticed by the right decision-makers for the right roles.'
    },
    {
      icon: Target,
      title: 'Precision-Matched Submissions',
      description: 'We analyze thousands of live client requirements daily using advanced tools and deep market expertise to find the perfect match for your skills, experience, and career goals.',
      result: 'A dramatic reduction in "bench time" and significantly higher interview-to-offer ratio.'
    },
    {
      icon: MessageSquare,
      title: 'Seamless Interview & Feedback Management',
      description: 'We manage the entire communication loop, acting as the professional bridge between you, the vendor, and the end client. We handle scheduling, provide pre-interview briefings, and gather detailed feedback.',
      result: 'A smooth, responsive interview process that builds confidence and helps you close offers.'
    },
    {
      icon: CheckCircle,
      title: 'Contract Negotiation & Onboarding Support',
      description: 'Our support doesn\'t stop at the verbal "yes." We guide you through rate negotiations and manage all onboarding and compliance paperwork for a seamless project start.',
      result: 'You start your new project with clarity, confidence, and a team behind you.'
    }
  ];

  const technologies = [
    { category: 'Programming & Development', skills: 'Java, .NET, Python, C++, Node.js, React, Angular' },
    { category: 'Cloud Technologies', skills: 'AWS, Azure, Google Cloud (GCP)' },
    { category: 'Data & Analytics', skills: 'Data Science, Big Data, SQL, Power BI, Snowflake' },
    { category: 'ERP & CRM Systems', skills: 'SAP, Salesforce, Oracle' },
    { category: 'Cybersecurity & Infrastructure', skills: 'Network Engineering, DevOps, System Administration' },
    { category: 'QA & Automation', skills: 'Selenium, API Testing, Manual & Automation QA' },
    { category: 'Design & UI/UX', skills: 'Figma, Adobe XD, Product Design, Wireframing' }
  ];

  const phases = [
    {
      title: 'Phase 1: Professional Onboarding & Profiling',
      description: 'We work to understand your technical skills, project history, career goals, and ideal next role. We optimize your resume, LinkedIn, and professional profile to create a powerful, market-ready brand.'
    },
    {
      title: 'Phase 2: Active Marketing & Requirement Matching',
      description: 'Our team scans live U.S. client requirements 24/7, identifies the most relevant opportunities, and begins targeted marketing campaigns through our vast vendor and client network.'
    },
    {
      title: 'Phase 3: Submission, Interviews & Feedback',
      description: 'We manage the entire submission and interview process. We position your profile, coordinate with all parties, provide prep, gather feedback, and keep you in the loop.'
    },
    {
      title: 'Phase 4: Placement, Onboarding & Post-Placement Support',
      description: 'When the offer is confirmed, we manage negotiation and onboarding. We stay connected, supporting you through the project, managing extensions, and proactively planning your next deployment.'
    }
  ];

  const faqs = [
    {
      question: 'What are Career Support Services?',
      answer: 'Think of it as having a personal marketing agent. Our service is designed to market available IT professionals (on "bench") to client companies for contract roles in the U.S. market. Instead of you waiting for projects, our team actively markets your profile, finds matching requirements, coordinates interviews, and helps you secure assignments quickly.'
    },
    {
      question: 'Which market do you serve for this service?',
      answer: 'Our Career Support services operate exclusively in the United States. We work with consulting firms, vendors, and direct clients across all major tech hubs. Our India-based offshore team provides 24/7 support to ensure continuous marketing and faster submissions.'
    },
    {
      question: 'What types of professionals do you work with?',
      answer: 'We specialize in IT professionals across all major technologies, including Java, .NET, Python, Cloud (AWS, Azure), Data Science, DevOps, SAP, Salesforce, and QA. Our recruiters understand these technical skills deeply, leading to better requirement matching and more successful placements.'
    },
    {
      question: 'How fast can I get placed?',
      answer: 'While placement speed varies based on your specific skill set and current market demand, most professionals in our program secure interviews within 1-2 weeks. Our goal is to close placements within 2-4 weeks of active marketing, leveraging our structured process and strong vendor network.'
    },
    {
      question: 'What contract types do you support?',
      answer: 'We are flexible and support the models most common in the U.S. market, including Corp-to-Corp (C2C), W2, and 1099, depending on professional and client preferences. We guide both sides through the compliance and coordination for each.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Stop Waiting. Start Connecting.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              We are the U.S. IT market's premier career partner. We actively market your skills, connect you with top-tier projects, and manage your next career move.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">The Challenge: From "On the Bench" to "In-Demand"</h2>
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                For a skilled IT professional, being "on the bench" isn't a vacation. It's a period of uncertainty. For a consulting firm, it's a drain on revenue and resources. The U.S. IT market is fast-paced, and every day not on a project is a missed opportunity.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                This is where Novotion's Career Support Services come in.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                We are not a passive job board or a simple resume-forwarding service. We are a proactive marketing and placement partner dedicated exclusively to the U.S. IT market.
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed">
                We act as your strategic agent. Our job is to connect your unique expertise with our vast, established network of clients and vendors. From polishing your professional brand and marketing your profile to coordinating interviews and negotiating contracts, we handle the entire process. We turn your downtime into your next great opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Career Support Services: Your Talent, Our Strategy</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our approach is strategic, personal, and built for the speed of the U.S. tech market. We function as a high-performance extension of your team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-[1.02] sm:hover:scale-105 transition-transform">
                <CardContent className="space-y-3 sm:space-y-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                  <div className="pt-2 sm:pt-3 border-t">
                    <p className="text-xs sm:text-sm">
                      <span className="font-semibold text-green-600">The Result:</span> {service.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Your Path From Bench to Billable</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-base sm:text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{phase.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{phase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Technologies & Skills We Cover</h2>
            <p className="text-base sm:text-lg text-gray-600">
              We Speak Your Language
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-blue-600">{tech.category}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{tech.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Find Your Next Project?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto text-green-100">
            Whether you're an individual IT professional or a consulting firm managing a team, Novotion provides the strategy, network, and support to maximize your placements and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Schedule Your Free Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Request Service Brochure
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesCareer;