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
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//           }}
//         ></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          
//           {/* Company */}
//           <div className="lg:col-span-1 text-center md:text-left">
//             <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
//               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">N</span>
//               </div>
//               <span className="text-xl font-bold">Novotion</span>
//             </div>

//             <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
//               Empowering businesses across UK & USA markets with strategic recruitment solutions and IT career support services since 2021.
//             </p>

//             <div className="flex space-x-4 justify-center md:justify-start">
//               {['in', 'f', 't'].map((item, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
//                   hover:bg-primary transition-colors cursor-pointer"
//                 >
//                   <span className="font-semibold text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* For Organizations */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">For Organizations</h4>
//             <ul className="space-y-3">
//               {[
//                 'Recruitment Process Outsourcing',
//                 'Offshore Recruitment Support',
//                 'Talent Sourcing & Headhunting',
//                 'Request RPO Consultation',
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* For IT Professionals */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">For IT Professionals</h4>
//             <ul className="space-y-3">
//               {[
//                 'Career Support Services',
//                 'Professional Marketing Services',
//                 'Contract Placement Support',
//                 'Schedule Consultation',
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">Resources</h4>
//             <ul className="space-y-3">
//               {['Blog & Insights', 'Testimonials', 'FAQ', 'Case Studies'].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">Contact</h4>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <Mail className="h-5 w-5 text-primary mt-0.5" />
//                 <a href="mailto:hello@novotion.com" className="text-gray-400 hover:text-primary text-sm transition-colors">
//                   hello@novotion.com
//                 </a>
//               </li>

//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <Phone className="h-5 w-5 text-primary mt-0.5" />
//                 <div className="text-gray-400 text-sm">
//                   <div>USA: +1 (786) 652-3950</div>
//                   <div className="mt-1">UK: +44 (XXX) XXX-XXXX</div>
//                   <div className="mt-1">India: +91 (XXX) XXX-XXXX</div>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <MapPin className="h-5 w-5 text-primary mt-0.5" />
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
            
//             <div className="text-gray-400 text-center md:text-left text-sm">
//               <p className="mb-1">Copyright © 2025 Novotion. All Rights Reserved.</p>
//               <p className="text-xs md:text-sm">Strategic Recruitment Solutions & IT Career Support Services</p>
//             </div>

//             <div className="flex gap-6 text-sm flex-wrap justify-center">
//               <Link href="/privacy" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
//                 Terms of Service
//               </Link>
//               <button
//                 onClick={scrollToTop}
//                 className="flex items-center gap-2 text-gray-400 hover:text-primary text-xs md:text-sm transition-colors"
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
// // src\components\Footer.js
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
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//             backgroundSize: '40px 40px',
//           }}
//         ></div>
//       </div>

//       <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          
//           {/* Company */}
//           <div className="lg:col-span-1 text-center md:text-left">
//             <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
//               <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-sm">N</span>
//               </div>
//               <span className="text-xl font-bold">Novotion</span>
//             </div>

//             <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
//               Empowering businesses across UK & USA markets with strategic recruitment solutions and IT career support services since 2021.
//             </p>

//             <div className="flex space-x-4 justify-center md:justify-start">
//               {['in', 'f', 't'].map((item, i) => (
//                 <div
//                   key={i}
//                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
//                   hover:bg-primary transition-colors cursor-pointer"
//                 >
//                   <span className="font-semibold text-sm">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* For Organizations */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">For Organizations</h4>
//             <ul className="space-y-3">
//               {[
//                 'Recruitment Process Outsourcing',
//                 'Offshore Recruitment Support',
//                 'Talent Sourcing & Headhunting',
//                 'Request RPO Consultation',
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* For IT Professionals */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">For IT Professionals</h4>
//             <ul className="space-y-3">
//               {[
//                 'Career Support Services',
//                 'Professional Marketing Services',
//                 'Contract Placement Support',
//                 'Schedule Consultation',
//               ].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">Resources</h4>
//             <ul className="space-y-3">
//               {['Blog & Insights', 'Testimonials', 'FAQ', 'Case Studies'].map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     href="#"
//                     className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
//                   >
//                     <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="text-center md:text-left">
//             <h4 className="font-semibold text-lg mb-6">Contact</h4>

//             <ul className="space-y-4">
//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <Mail className="h-5 w-5 text-primary mt-0.5" />
//                 <a href="mailto:hello@novotion.com" className="text-gray-400 hover:text-primary text-sm transition-colors">
//                   hello@novotion.com
//                 </a>
//               </li>

//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <Phone className="h-5 w-5 text-primary mt-0.5" />
//                 <div className="text-gray-400 text-sm">
//                   <div>USA: +1 (786) 652-3950</div>
//                   <div className="mt-1">UK: +44 (XXX) XXX-XXXX</div>
//                   <div className="mt-1">India: +91 (XXX) XXX-XXXX</div>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3 justify-center md:justify-start">
//                 <MapPin className="h-5 w-5 text-primary mt-0.5" />
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
            
//             <div className="text-gray-400 text-center md:text-left text-sm">
//               <p className="mb-1">Copyright © 2025 Novotion. All Rights Reserved.</p>
//               <p className="text-xs md:text-sm">Strategic Recruitment Solutions & IT Career Support Services</p>
//             </div>

//             <div className="flex gap-6 text-sm flex-wrap justify-center">
//               <Link href="/privacy" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/refund" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
//                 Cancellation & Refund
//               </Link>
//               <button
//                 onClick={scrollToTop}
//                 className="flex items-center gap-2 text-gray-400 hover:text-primary text-xs md:text-sm transition-colors"
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

// src\components\Footer.js
import Link from 'next/link';
import Image from 'next/image';
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          
          {/* Company */}
          <div className="lg:col-span-1 text-center md:text-left">
            <Link href="/" className="flex items-center group justify-center md:justify-start mb-6">
              <div className="relative">
                <div className="w-50 h-50 bg-transparent rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo/novotion.png"
                    alt="Novotion Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
              Empowering businesses across UK & USA markets with strategic recruitment solutions and IT career support services since 2021.
            </p>

            <div className="flex space-x-4 justify-center md:justify-start">
              {['in', 'f', 't'].map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center 
                  hover:bg-primary transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* For Organizations */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">For Organizations</h4>
            <ul className="space-y-3">
              {[
                'Recruitment Process Outsourcing',
                'Offshore Recruitment Support',
                'Talent Sourcing & Headhunting',
                'Request RPO Consultation',
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For IT Professionals */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">For IT Professionals</h4>
            <ul className="space-y-3">
              {[
                'Career Support Services',
                'Professional Marketing Services',
                'Contract Placement Support',
                'Schedule Consultation',
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Blog & Insights', 'Testimonials', 'FAQ', 'Case Studies'].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center group justify-center md:justify-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-6">Contact</h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:info@novotionservices.com" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  info@novotionservices.com
                </a>
              </li>

              <li className="flex items-start gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>+1 (786) 652-3950</div>
                </div>
              </li>

              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div className="font-medium mb-1">USA Office:</div>
                  <div>7345 W, Sand Lake RD, STE 210</div>
                  <div>Orlando, FL 32819</div>
                </div>
              </li>

              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div className="font-medium mb-1">India Office:</div>
                  <div>FOURTH FLOOR, STREEBO HOUSE</div>
                  <div>NR DAV SCHOOL, OFF S.G. HIGHWAY</div>
                  <div>DAV International School, MAKARBA</div>
                  <div>Ahmedabad District: Ahmedabad,</div>
                  <div>Gujarat 380051</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="text-gray-400 text-center md:text-left text-sm">
              <p className="mb-1">Copyright © 2025 Novotion. All Rights Reserved.</p>
              <p className="text-xs md:text-sm">Strategic Recruitment Solutions & IT Career Support Services</p>
              <div className="mt-2">
                <p className="text-xs text-gray-500">
                  Powered by{' '}
                  <a 
                    href="https://gohilinfotech.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors underline"
                  >
                    Gohil Infotech
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-6 text-sm flex-wrap justify-center">
              <Link href="/privacy" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-primary text-xs md:text-sm transition-colors">
                Cancellation & Refund
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-gray-400 hover:text-primary text-xs md:text-sm transition-colors"
              >
                Back to Top
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;