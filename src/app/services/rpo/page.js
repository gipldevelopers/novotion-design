// // src\app\services\rpo\page.js
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { CheckCircle, Clock, DollarSign, TrendingUp, Users, Zap, ArrowRight, Play, Pause } from 'lucide-react';
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
//             className="w-full px-6 py-4 text-left font-semibold hover:text-blue-600 transition-colors flex justify-between items-center"
//           >
//             {item.question}
//             <ChevronDown className={`h-5 w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
//           </button>
//           {openItem === index && (
//             <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
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

// // Animated Counter Component
// const AnimatedCounter = ({ value, suffix = '' }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const duration = 2000;
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
//   }, [value]);

//   return <span>{count}{suffix}</span>;
// };

// const ServicesRPO = () => {
//   const [activePhase, setActivePhase] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);

//   const benefits = [
//     { icon: DollarSign, title: 'Predictable Costs, Deeper Savings', description: 'Move away from volatile 15-25% agency fees. RPO offers transparent pricing that typically cuts recruitment spending by 30-60%.' },
//     { icon: TrendingUp, title: 'Scalability on Demand', description: 'Scale your hiring efforts up or down instantly. We adjust our resources to fit your exact needs without hiring or firing internal recruiters.' },
//     { icon: Zap, title: 'Specialized Expertise & Technology', description: 'Get immediate access to sourcing specialists, compliance experts, and advanced AI-powered tools—all managed for you.' },
//     { icon: Clock, title: 'Reclaim Your Strategic Focus', description: 'Your leaders focus on culture, talent development, and strategic goals while we handle the operational engine of recruitment.' },
//   ];

//   const services = [
//     {
//       title: 'End-to-End Recruitment Process Outsourcing',
//       description: 'Our most comprehensive partnership. We become your dedicated, full-service hiring department managing the entire recruitment lifecycle.',
//       bestFor: 'UK/USA organizations ready to fully outsource talent acquisition, especially those in high-growth or expansion phases.'
//     },
//     {
//       title: 'Offshore Recruitment Support',
//       description: 'A powerful "engine" for your existing team. Our dedicated offshore recruiters in India work 24/7 as a cost-effective extension of your in-house staff.',
//       bestFor: 'Organizations with existing teams looking to supercharge sourcing power and handle high-volume hiring.'
//     },
//     {
//       title: 'Talent Sourcing & Headhunting',
//       description: 'Specialized search for hard-to-fill, senior, or niche positions. Our expert headhunters leverage extensive networks and market intelligence.',
//       bestFor: 'Organizations seeking executive talent or specialized technical roles that require targeted search.'
//     },
//     {
//       title: 'CV Formatting & Candidate Preparation',
//       description: 'Professional resume optimization and candidate coaching to ensure your prospects present their best selves.',
//       bestFor: 'Organizations wanting to enhance candidate quality and interview performance rates.'
//     }
//   ];

//   const phases = [
//     {
//       title: 'Phase 1: Discovery & Planning',
//       subtitle: 'The Deep Dive',
//       description: 'We interview stakeholders from HR to leadership to understand your culture, goals, and pain points. We define what success looks like and build the Service Level Agreements (SLAs) and implementation roadmap.'
//     },
//     {
//       title: 'Phase 2: Team Deployment & Integration',
//       subtitle: 'Becoming Your Team',
//       description: 'We assemble your dedicated team of onshore and offshore experts and immerse them in your brand. They are trained on your systems, culture, and processes.'
//     },
//     {
//       title: 'Phase 3: Operational Launch',
//       subtitle: 'Ignition',
//       description: 'The engine starts. We launch active sourcing for priority roles, begin formal intake meetings, and establish reporting and feedback loops for transparent communication.'
//     },
//     {
//       title: 'Phase 4: Optimization & Scaling',
//       subtitle: 'Continuous Improvement',
//       description: 'We continuously monitor performance metrics, gather feedback, and refine our processes. We are built to scale with you, adjusting our team size and focus as your business evolves.'
//     }
//   ];

//   const faqs = [
//     {
//       question: 'What markets do you specialize in?',
//       answer: 'Our RPO services are focused exclusively on the UK and USA markets. Our deep expertise in these two regions, supported by our India-based offshore center, allows us to provide a specialized, compliant, and cost-effective service that generic global providers can\'t match.'
//     },
//     {
//       question: 'How do you maintain quality with an offshore team from India?',
//       answer: 'This is our core strength. Our offshore teams are not freelancers. They are full-time, highly trained Novotion employees trained on your brand, your processes, and your quality standards. We use a structured quality assurance framework, multi-level reviews, and regular calibration with your team.'
//     },
//     {
//       question: 'What if we already have an in-house recruitment team?',
//       answer: 'Perfect. RPO is designed to be flexible. We can complement your team, not just replace it. A "Hybrid Model" is very common: we can handle your high-volume or specialized technical roles while your team focuses on executive hires. Or, our "Offshore Support Model" can simply supercharge your existing team\'s sourcing power.'
//     },
//     {
//       question: 'How is RPO different from just using a staffing agency?',
//       answer: 'It\'s the difference between a transactional vendor and a strategic partner. Agencies fill one job at a time for a high percentage fee. As your RPO partner, we manage your entire process for a predictable, lower cost. We become an extension of your team, improve your brand, provide analytics, and drive your long-term talent strategy.'
//     },
//     {
//       question: 'How long does it take to implement an RPO solution?',
//       answer: 'A typical RPO implementation takes 4-6 weeks. This "Phase 1 & 2" period is crucial for us to do the deep-dive discovery, training, and systems integration that ensures a seamless and successful launch. For urgent, project-based needs, this can be accelerated.'
//     }
//   ];

//   // Auto-play phases
//   useEffect(() => {
//     if (!autoPlay) return;
    
//     const interval = setInterval(() => {
//       setActivePhase((prev) => (prev + 1) % phases.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [autoPlay, phases.length]);

//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-blue-50 to-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold">Your Hiring Goals, Accelerated</h1>
//             <p className="text-xl md:text-2xl text-gray-600">
//               Strategic RPO for the UK & USA. We build the high-performance teams you need, while you focus on building your business.
//             </p>
//             <Link href="/contact">
//               <Button size="lg">
//                 Schedule Your RPO Consultation <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-blue-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-3xl md:text-4xl font-bold mb-2"><AnimatedCounter value="500" />+</div>
//               <div className="text-blue-100">Organizations Served</div>
//             </div>
//             <div>
//               <div className="text-3xl md:text-4xl font-bold mb-2"><AnimatedCounter value="85" />%+</div>
//               <div className="text-blue-100">Placement Success</div>
//             </div>
//             <div>
//               <div className="text-3xl md:text-4xl font-bold mb-2"><AnimatedCounter value="60" />%</div>
//               <div className="text-blue-100">Cost Reduction</div>
//             </div>
//             <div>
//               <div className="text-3xl md:text-4xl font-bold mb-2"><AnimatedCounter value="24" />/7</div>
//               <div className="text-blue-100">Global Support</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What is RPO */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="text-center">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">What is Recruitment Process Outsourcing (RPO)?</h2>
//               <h3 className="text-2xl text-blue-600 mb-6">From Cost Center to Strategic Asset</h3>
//             </div>
//             <div className="space-y-6 text-gray-600">
//               <p className="text-lg">
//                 Let's be honest: for many growing companies, traditional recruitment is a bottleneck. It's reactive, expensive, and pulls your key leaders away from their core mission. You're stuck in a cycle of paying high agency fees for one-off hires, with no long-term strategy.
//               </p>
//               <p className="text-lg">
//                 Recruitment Process Outsourcing (RPO) is the strategic shift that breaks this cycle.
//               </p>
//               <p className="text-lg">
//                 RPO isn't just "outsourcing" your hiring. It's embedding a dedicated team of recruitment experts directly into your organization. We become a seamless extension of your Talent Acquisition team. We learn your culture, adopt your brand, and manage your entire hiring process from sourcing and screening to offers and onboarding—with a focus on driving your long-term business goals.
//               </p>
//               <p className="text-lg font-semibold text-gray-900">
//                 At Novotion, we combine on-the-ground expertise in the UK and USA with a powerful 24/7 offshore support engine in India. This "best-of-both-worlds" model delivers scalability, cost-efficiency, and a continuous pipeline of high-quality talent, all without the overhead of a large in-house team.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why RPO */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RPO is a Strategic Imperative</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
//                 <CardContent className="p-6 space-y-3">
//                   <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                     <benefit.icon className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-semibold">{benefit.title}</h3>
//                   <p className="text-gray-600">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section id="services" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our RPO Services: Your Solution, Your Way</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               A one-size-fits-all approach doesn't work. At Novotion, our RPO services are modular, allowing you to build the precise solution you need.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
//                 <CardContent className="p-6 space-y-4">
//                   <h3 className="text-xl font-bold">{service.title}</h3>
//                   <p className="text-gray-600">{service.description}</p>
//                   <div className="pt-2 border-t">
//                     <p className="text-sm">
//                       <span className="font-semibold text-blue-600">Best For:</span> {service.bestFor}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Interactive Implementation Process */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Implementation: A Blueprint for Success</h2>
//             <p className="text-lg text-gray-600">
//               We don't just flip a switch. We build a partnership through a deliberate, transparent process.
//             </p>
//           </div>
          
//           {/* Phase Navigation */}
//           <div className="flex justify-center mb-8">
//             <div className="flex space-x-4 bg-white p-2 rounded-lg shadow-sm">
//               {phases.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setActivePhase(index);
//                     setAutoPlay(false);
//                   }}
//                   className={`px-4 py-2 rounded-md transition-colors ${
//                     activePhase === index 
//                       ? 'bg-blue-600 text-white' 
//                       : 'text-gray-600 hover:text-blue-600'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setAutoPlay(!autoPlay)}
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 {autoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Active Phase Display */}
//           <div className="max-w-4xl mx-auto">
//             <Card className="hover:shadow-lg transition-shadow">
//               <CardContent className="p-8">
//                 <div className="flex gap-6 items-start">
//                   <div className="flex-shrink-0">
//                     <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl">
//                       {activePhase + 1}
//                     </div>
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold mb-3">{phases[activePhase].title}</h3>
//                     <p className="text-blue-600 font-semibold text-lg mb-4">{phases[activePhase].subtitle}</p>
//                     <p className="text-gray-600 text-lg leading-relaxed">{phases[activePhase].description}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
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
//       <section className="py-20 bg-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Better Hiring Engine?</h2>
//           <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100">
//             If your organization in the UK or USA is facing hiring delays, high agency fees, or the challenge of scaling, RPO could be the strategic shift you need. The first step is a simple, no-obligation conversation.
//           </p>
//           <Link href="/contact">
//             <Button size="lg" variant="secondary">
//               Schedule Your Consultation
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesRPO;

// src/app/services/rpo/page.js
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { 
//   CheckCircle, 
//   Clock, 
//   DollarSign, 
//   TrendingUp, 
//   Users, 
//   Zap, 
//   ArrowRight, 
//   Play, 
//   Pause,
//   ChevronRight,
//   Star,
//   Shield,
//   Globe,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Rocket,
//   Quote
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Minimal Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div className={`rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${className}`} {...props}>
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
//         <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
//           <button
//             onClick={() => setOpenItem(openItem === index ? null : index)}
//             className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors flex justify-between items-center bg-white"
//           >
//             {item.question}
//             <ChevronRight className={`h-5 w-5 transition-transform ${openItem === index ? 'rotate-90' : ''}`} />
//           </button>
//           {openItem === index && (
//             <div className="px-6 pb-4 text-gray-600 bg-gray-50">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const ServicesRPO = () => {
//   const [activePhase, setActivePhase] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const benefits = [
//     { 
//       icon: DollarSign, 
//       title: 'Predictable Costs', 
//       description: 'Transparent pricing that typically cuts recruitment spending by 30-60% compared to agency fees.'
//     },
//     { 
//       icon: TrendingUp, 
//       title: 'Scalability', 
//       description: 'Scale your hiring efforts instantly without the overhead of internal recruiters.'
//     },
//     { 
//       icon: Zap, 
//       title: 'Expertise & Technology', 
//       description: 'Access to sourcing specialists and advanced AI-powered tools managed for you.'
//     },
//     { 
//       icon: Clock, 
//       title: 'Strategic Focus', 
//       description: 'Your leaders focus on business goals while we handle recruitment operations.'
//     },
//   ];

//   const services = [
//     {
//       title: 'End-to-End RPO',
//       description: 'Full-service hiring department managing the entire recruitment lifecycle.',
//       bestFor: 'Organizations ready to fully outsource talent acquisition.'
//     },
//     {
//       title: 'Offshore Recruitment Support',
//       description: 'Dedicated offshore recruiters as a cost-effective extension of your team.',
//       bestFor: 'Teams needing to supercharge sourcing power and handle volume.'
//     },
//     {
//       title: 'Talent Sourcing',
//       description: 'Specialized search for hard-to-fill, senior, or niche positions.',
//       bestFor: 'Seeking executive talent or specialized technical roles.'
//     },
//     {
//       title: 'Candidate Preparation',
//       description: 'Professional resume optimization and interview coaching.',
//       bestFor: 'Enhancing candidate quality and interview performance.'
//     }
//   ];

//   const phases = [
//     {
//       title: 'Discovery & Planning',
//       description: 'Understand your culture, goals, and build implementation roadmap.'
//     },
//     {
//       title: 'Team Integration',
//       description: 'Assemble dedicated team trained on your systems and processes.'
//     },
//     {
//       title: 'Operational Launch',
//       description: 'Begin active sourcing and establish communication workflows.'
//     },
//     {
//       title: 'Optimization',
//       description: 'Continuous monitoring and refinement of recruitment processes.'
//     }
//   ];

//   const faqs = [
//     {
//       question: 'What markets do you specialize in?',
//       answer: 'Our RPO services are focused exclusively on the UK and USA markets, supported by our India-based offshore center.'
//     },
//     {
//       question: 'How do you maintain quality with offshore teams?',
//       answer: 'Our offshore teams are full-time Novotion employees trained on your brand and quality standards with multi-level reviews.'
//     },
//     {
//       question: 'What if we have an in-house recruitment team?',
//       answer: 'We complement existing teams, handling high-volume or specialized roles while your team focuses on strategic hires.'
//     },
//     {
//       question: 'How is RPO different from staffing agencies?',
//       answer: 'RPO is a strategic partnership managing your entire process, while agencies fill individual roles for high fees.'
//     }
//   ];

//   const testimonials = [
//     {
//       name: 'Sarah Chen',
//       title: 'Head of Talent Acquisition',
//       text: "Novotion's RPO solution transformed our hiring. We reduced time-to-hire by 40% and cut costs by 60%.",
//       company: 'TechScale Inc.'
//     },
//     {
//       name: 'Michael Rodriguez',
//       title: 'CEO',
//       text: 'The offshore support gave us 24/7 recruitment capabilities without overhead. Hiring capacity tripled.',
//       company: 'GrowthStack'
//     }
//   ];

//   // Auto-play phases
//   useEffect(() => {
//     if (!autoPlay) return;
    
//     const interval = setInterval(() => {
//       setActivePhase((prev) => (prev + 1) % phases.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [autoPlay, phases.length]);

//   if (!mounted) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Minimal Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
//               Recruitment Process Outsourcing
//             </div>
            
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Strategic RPO Solutions for
//               <span className="block text-blue-600 mt-2">UK & USA Markets</span>
//             </h1>
            
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               Transform your hiring from a cost center to a strategic advantage with predictable costs and faster placements.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
//               <Link href="/contact">
//                 <Button 
//                   size="lg" 
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <span className="flex items-center gap-2 font-semibold">
//                     Schedule Consultation
//                     <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Simple Stats */}
//       <section className="py-12 bg-blue-600 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-2xl md:text-3xl font-bold mb-2">500+</div>
//               <div className="text-blue-100 text-sm">Organizations</div>
//             </div>
//             <div>
//               <div className="text-2xl md:text-3xl font-bold mb-2">85%+</div>
//               <div className="text-blue-100 text-sm">Success Rate</div>
//             </div>
//             <div>
//               <div className="text-2xl md:text-3xl font-bold mb-2">60%</div>
//               <div className="text-blue-100 text-sm">Cost Reduction</div>
//             </div>
//             <div>
//               <div className="text-2xl md:text-3xl font-bold mb-2">24/7</div>
//               <div className="text-blue-100 text-sm">Global Support</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What is RPO */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//               What is Recruitment Process Outsourcing?
//             </h2>
            
//             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
//               <p>
//                 RPO transforms recruitment from a reactive cost center to a strategic asset. Instead of paying high agency fees for individual hires, you embed a dedicated team that manages your entire hiring process.
//               </p>
//               <p>
//                 We combine on-the-ground expertise in the UK and USA with 24/7 offshore support, delivering scalability and cost-efficiency without the overhead of a large in-house team.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Strategic Benefits
//             </h2>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="hover:border-blue-300">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                       <benefit.icon className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-gray-600">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section id="services" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our RPO Services
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Flexible solutions tailored to your specific needs
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index} className="hover:border-blue-300 border-l-4 border-l-blue-500">
//                 <CardContent className="p-6 space-y-4">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600">
//                     {service.description}
//                   </p>
//                   <div className="pt-2">
//                     <p className="text-sm text-gray-500">
//                       <span className="font-semibold">Best for:</span> {service.bestFor}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Implementation Process */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Implementation Process
//             </h2>
//           </div>
          
//           {/* Phase Navigation */}
//           <div className="flex justify-center mb-8">
//             <div className="flex space-x-2 bg-white p-2 rounded-lg shadow-sm">
//               {phases.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setActivePhase(index);
//                     setAutoPlay(false);
//                   }}
//                   className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${
//                     activePhase === index 
//                       ? 'bg-blue-600 text-white' 
//                       : 'text-gray-600 hover:text-blue-600'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setAutoPlay(!autoPlay)}
//                 className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
//               </button>
//             </div>
//           </div>

//           {/* Active Phase Display */}
//           <div className="max-w-2xl mx-auto">
//             <Card>
//               <CardContent className="p-8 text-center">
//                 <div className="text-2xl font-bold text-blue-600 mb-4">
//                   Phase {activePhase + 1}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   {phases[activePhase].title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {phases[activePhase].description}
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Client Success Stories
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index}>
//                 <CardContent className="p-6 space-y-4">
//                   <div className="text-blue-100">
//                     <Quote className="h-6 w-6" />
//                   </div>
                  
//                   <p className="text-gray-600 italic">
//                     "{testimonial.text}"
//                   </p>
                  
//                   <div className="pt-4 border-t border-gray-100">
//                     <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                     <p className="text-sm text-gray-600">{testimonial.title}</p>
//                     <p className="text-sm text-gray-500">{testimonial.company}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Frequently Asked Questions
//             </h2>
//           </div>
//           <div className="max-w-3xl mx-auto">
//             <Accordion items={faqs} />
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 bg-blue-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Transform Your Hiring?
//           </h2>
//           <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
//             Schedule a consultation to discuss how RPO can solve your recruitment challenges.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact">
//               <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
//                 Get Started
//               </Button>
//             </Link>
//             <Link href="/services">
//               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
//                 Learn More
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesRPO;

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Clock, DollarSign, TrendingUp, Users, Zap, ArrowRight, Play, Pause } from 'lucide-react';
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
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold hover:text-blue-600 transition-colors flex justify-between items-center text-sm sm:text-base"
          >
            {item.question}
            <ChevronDown className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
          </button>
          {openItem === index && (
            <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base animate-fadeIn">
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

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
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
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const ServicesRPO = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const benefits = [
    { icon: DollarSign, title: 'Predictable Costs, Deeper Savings', description: 'Move away from volatile 15-25% agency fees. RPO offers transparent pricing that typically cuts recruitment spending by 30-60%.' },
    { icon: TrendingUp, title: 'Scalability on Demand', description: 'Scale your hiring efforts up or down instantly. We adjust our resources to fit your exact needs without hiring or firing internal recruiters.' },
    { icon: Zap, title: 'Specialized Expertise & Technology', description: 'Get immediate access to sourcing specialists, compliance experts, and advanced AI-powered tools—all managed for you.' },
    { icon: Clock, title: 'Reclaim Your Strategic Focus', description: 'Your leaders focus on culture, talent development, and strategic goals while we handle the operational engine of recruitment.' },
  ];

  const services = [
    {
      title: 'End-to-End Recruitment Process Outsourcing',
      description: 'Our most comprehensive partnership. We become your dedicated, full-service hiring department managing the entire recruitment lifecycle.',
      bestFor: 'UK/USA organizations ready to fully outsource talent acquisition, especially those in high-growth or expansion phases.'
    },
    {
      title: 'Offshore Recruitment Support',
      description: 'A powerful "engine" for your existing team. Our dedicated offshore recruiters in India work 24/7 as a cost-effective extension of your in-house staff.',
      bestFor: 'Organizations with existing teams looking to supercharge sourcing power and handle high-volume hiring.'
    },
    {
      title: 'Talent Sourcing & Headhunting',
      description: 'Specialized search for hard-to-fill, senior, or niche positions. Our expert headhunters leverage extensive networks and market intelligence.',
      bestFor: 'Organizations seeking executive talent or specialized technical roles that require targeted search.'
    },
    {
      title: 'CV Formatting & Candidate Preparation',
      description: 'Professional resume optimization and candidate coaching to ensure your prospects present their best selves.',
      bestFor: 'Organizations wanting to enhance candidate quality and interview performance rates.'
    }
  ];

  const phases = [
    {
      title: 'Phase 1: Discovery & Planning',
      subtitle: 'The Deep Dive',
      description: 'We interview stakeholders from HR to leadership to understand your culture, goals, and pain points. We define what success looks like and build the Service Level Agreements (SLAs) and implementation roadmap.'
    },
    {
      title: 'Phase 2: Team Deployment & Integration',
      subtitle: 'Becoming Your Team',
      description: 'We assemble your dedicated team of onshore and offshore experts and immerse them in your brand. They are trained on your systems, culture, and processes.'
    },
    {
      title: 'Phase 3: Operational Launch',
      subtitle: 'Ignition',
      description: 'The engine starts. We launch active sourcing for priority roles, begin formal intake meetings, and establish reporting and feedback loops for transparent communication.'
    },
    {
      title: 'Phase 4: Optimization & Scaling',
      subtitle: 'Continuous Improvement',
      description: 'We continuously monitor performance metrics, gather feedback, and refine our processes. We are built to scale with you, adjusting our team size and focus as your business evolves.'
    }
  ];

  const faqs = [
    {
      question: 'What markets do you specialize in?',
      answer: 'Our RPO services are focused exclusively on the UK and USA markets. Our deep expertise in these two regions, supported by our India-based offshore center, allows us to provide a specialized, compliant, and cost-effective service that generic global providers can\'t match.'
    },
    {
      question: 'How do you maintain quality with an offshore team from India?',
      answer: 'This is our core strength. Our offshore teams are not freelancers. They are full-time, highly trained Novotion employees trained on your brand, your processes, and your quality standards. We use a structured quality assurance framework, multi-level reviews, and regular calibration with your team.'
    },
    {
      question: 'What if we already have an in-house recruitment team?',
      answer: 'Perfect. RPO is designed to be flexible. We can complement your team, not just replace it. A "Hybrid Model" is very common: we can handle your high-volume or specialized technical roles while your team focuses on executive hires. Or, our "Offshore Support Model" can simply supercharge your existing team\'s sourcing power.'
    },
    {
      question: 'How is RPO different from just using a staffing agency?',
      answer: 'It\'s the difference between a transactional vendor and a strategic partner. Agencies fill one job at a time for a high percentage fee. As your RPO partner, we manage your entire process for a predictable, lower cost. We become an extension of your team, improve your brand, provide analytics, and drive your long-term talent strategy.'
    },
    {
      question: 'How long does it take to implement an RPO solution?',
      answer: 'A typical RPO implementation takes 4-6 weeks. This "Phase 1 & 2" period is crucial for us to do the deep-dive discovery, training, and systems integration that ensures a seamless and successful launch. For urgent, project-based needs, this can be accelerated.'
    }
  ];

  // Auto-play phases
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, phases.length]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Your Hiring Goals, Accelerated
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              Strategic RPO for the UK & USA. We build the high-performance teams you need, while you focus on building your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                Schedule Your RPO Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"><AnimatedCounter value="500" />+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Organizations Served</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"><AnimatedCounter value="85" />%+</div>
              <div className="text-blue-100 text-xs sm:text-sm">Placement Success</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"><AnimatedCounter value="60" />%</div>
              <div className="text-blue-100 text-xs sm:text-sm">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"><AnimatedCounter value="24" />/7</div>
              <div className="text-blue-100 text-xs sm:text-sm">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is RPO */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">What is Recruitment Process Outsourcing (RPO)?</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl text-blue-600 mb-4 sm:mb-6">From Cost Center to Strategic Asset</h3>
            </div>
            <div className="space-y-4 sm:space-y-6 text-gray-600">
              <p className="text-base sm:text-lg leading-relaxed">
                Let's be honest: for many growing companies, traditional recruitment is a bottleneck. It's reactive, expensive, and pulls your key leaders away from their core mission. You're stuck in a cycle of paying high agency fees for one-off hires, with no long-term strategy.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Recruitment Process Outsourcing (RPO) is the strategic shift that breaks this cycle.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                RPO isn't just "outsourcing" your hiring. It's embedding a dedicated team of recruitment experts directly into your organization. We become a seamless extension of your Talent Acquisition team. We learn your culture, adopt your brand, and manage your entire hiring process from sourcing and screening to offers and onboarding—with a focus on driving your long-term business goals.
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed">
                At Novotion, we combine on-the-ground expertise in the UK and USA with a powerful 24/7 offshore support engine in India. This "best-of-both-worlds" model delivers scalability, cost-efficiency, and a continuous pipeline of high-quality talent, all without the overhead of a large in-house team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPO */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why RPO is a Strategic Imperative</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-[1.02] sm:hover:scale-105 transition-transform">
                <CardContent className="space-y-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our RPO Services: Your Solution, Your Way</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              A one-size-fits-all approach doesn't work. At Novotion, our RPO services are modular, allowing you to build the precise solution you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardContent className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                  <div className="pt-2 sm:pt-3 border-t">
                    <p className="text-xs sm:text-sm">
                      <span className="font-semibold text-blue-600">Best For:</span> {service.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Implementation Process */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Implementation: A Blueprint for Success</h2>
            <p className="text-base sm:text-lg text-gray-600">
              We don't just flip a switch. We build a partnership through a deliberate, transparent process.
            </p>
          </div>
          
          {/* Phase Navigation */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded-lg shadow-sm">
              {phases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActivePhase(index);
                    setAutoPlay(false);
                  }}
                  className={`px-3 sm:px-4 py-2 rounded-md transition-colors text-sm sm:text-base ${
                    activePhase === index 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className="px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {autoPlay ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>

          {/* Active Phase Display */}
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg sm:text-2xl">
                      {activePhase + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{phases[activePhase].title}</h3>
                    <p className="text-blue-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4">{phases[activePhase].subtitle}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{phases[activePhase].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      <section className="py-12 sm:py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Build a Better Hiring Engine?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100">
            If your organization in the UK or USA is facing hiring delays, high agency fees, or the challenge of scaling, RPO could be the strategic shift you need. The first step is a simple, no-obligation conversation.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesRPO;