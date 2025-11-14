// // src/components/Footer.js
// import Link from 'next/link';
// import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="bg-gray-900 text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       <div className="relative container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
//           {/* Company */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">N</span>
//               </div>
//               <span className="text-xl font-bold text-white">Novotion</span>
//             </div>
//             <p className="text-gray-400 text-sm mb-6 leading-relaxed">
//               Empowering businesses across UK & USA markets with strategic recruitment solutions and IT career support services since 2021.
//             </p>
//             <div className="flex space-x-4">
//               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
//                 <span className="text-sm font-semibold">in</span>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
//                 <span className="text-sm font-semibold">f</span>
//               </div>
//               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
//                 <span className="text-sm font-semibold">t</span>
//               </div>
//             </div>
//           </div>

//           {/* For Organizations */}
//           <div>
//             <h4 className="font-semibold mb-6 text-white text-lg">For Organizations</h4>
//             <ul className="space-y-3">
//               {[
//                 'Recruitment Process Outsourcing',
//                 'Offshore Recruitment Support', 
//                 'Talent Sourcing & Headhunting',
//                 'Request RPO Consultation'
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link 
//                     href="#" 
//                     className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* For IT Professionals */}
//           <div>
//             <h4 className="font-semibold mb-6 text-white text-lg">For IT Professionals</h4>
//             <ul className="space-y-3">
//               {[
//                 'Career Support Services',
//                 'Professional Marketing Services',
//                 'Contract Placement Support',
//                 'Schedule Consultation'
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link 
//                     href="#" 
//                     className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-green-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="font-semibold mb-6 text-white text-lg">Resources</h4>
//             <ul className="space-y-3">
//               {[
//                 'Blog & Insights',
//                 'Testimonials',
//                 'FAQ',
//                 'Case Studies'
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link 
//                     href="#" 
//                     className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h4 className="font-semibold mb-6 text-white text-lg">Contact</h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                 <a href="mailto:hello@novotion.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
//                   hello@novotion.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                 <div className="text-gray-400 text-sm">
//                   <div>USA: +1 (786) 652-3950</div>
//                   <div className="mt-1">UK: +44 (XXX) XXX-XXXX</div>
//                   <div className="mt-1">India: +91 (XXX) XXX-XXXX</div>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                 <div className="text-gray-400 text-sm">
//                   <div>United States: Orlando, FL</div>
//                   <div className="mt-1">India: Ahmedabad, Gujarat</div>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-sm text-gray-400 text-center md:text-left">
//               <p className="mb-2">
//                 Copyright © 2025 Novotion. All Rights Reserved.
//               </p>
//               <p>Strategic Recruitment Solutions & IT Career Support Services</p>
//             </div>
//             <div className="flex gap-6 text-sm">
//               <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
//                 Terms of Service
//               </Link>
//               <button 
//                 onClick={scrollToTop}
//                 className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
//               >
//                 Back to Top
//                 <ArrowUp className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// src/components/Footer.js
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 md:mb-6 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-white">Novotion</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 md:mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              Empowering businesses across UK & USA markets with strategic recruitment solutions and IT career support services since 2021.
            </p>
            <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs md:text-sm font-semibold">in</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs md:text-sm font-semibold">f</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-xs md:text-sm font-semibold">t</span>
              </div>
            </div>
          </div>

          {/* For Organizations */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-lg">For Organizations</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Recruitment Process Outsourcing',
                'Offshore Recruitment Support', 
                'Talent Sourcing & Headhunting',
                'Request RPO Consultation'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For IT Professionals */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-lg">For IT Professionals</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Career Support Services',
                'Professional Marketing Services',
                'Contract Placement Support',
                'Schedule Consultation'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-lg">Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                'Blog & Insights',
                'Testimonials',
                'FAQ',
                'Case Studies'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2 md:mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 md:mb-6 text-white text-lg">Contact</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3 justify-center md:justify-start">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@novotion.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  hello@novotion.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm text-center md:text-left">
                  <div>USA: +1 (786) 652-3950</div>
                  <div className="mt-1">UK: +44 (XXX) XXX-XXXX</div>
                  <div className="mt-1">India: +91 (XXX) XXX-XXXX</div>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm text-center md:text-left">
                  <div>United States: Orlando, FL</div>
                  <div className="mt-1">India: Ahmedabad, Gujarat</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p className="mb-1 md:mb-2">
                Copyright © 2025 Novotion. All Rights Reserved.
              </p>
              <p className="text-xs md:text-sm">Strategic Recruitment Solutions & IT Career Support Services</p>
            </div>
            <div className="flex gap-4 md:gap-6 text-sm flex-wrap justify-center">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-xs md:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-xs md:text-sm">
                Terms of Service
              </Link>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-blue-400 transition-colors text-xs md:text-sm"
              >
                Back to Top
                <ArrowUp className="h-3 w-3 md:h-4 md:w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;