// // src/components/Header.js
// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Menu, X, ChevronDown, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isActive = (path) => pathname === path;

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About Us' },
//     { 
//       label: 'Services', 
//       children: [
//         { href: '/services/rpo', label: 'Recruitment Process Outsourcing' },
//         { href: '/services/career-support', label: 'Career Support Services' }
//       ]
//     },
//     { href: '/blog', label: 'Blog' },
//     { href: '/career', label: 'Career' },
//     { href: '/contact', label: 'Contact Us' },
//   ];

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white shadow-lg border-b border-gray-200/50 backdrop-blur-lg`}>
//       <nav className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div className="relative">
//               <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                 <span className="text-white font-bold text-lg">N</span>
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
//             </div>
//             <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform">Novotion</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <div key={item.label} className="relative group">
//                 {item.children ? (
//                   <>
//                     <button className="flex items-center text-sm font-medium transition-all duration-300 text-gray-700 hover:text-blue-600">
//                       {item.label} 
//                       <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
//                     </button>
//                     <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl p-3 space-y-1">
//                       {item.children.map((child) => (
//                         <Link
//                           key={child.href}
//                           href={child.href}
//                           className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 hover:translate-x-2"
//                           onClick={() => setIsOpen(false)}
//                         >
//                           {child.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`text-sm font-medium transition-all duration-300 relative ${
//                       isActive(item.href) 
//                         ? 'text-blue-600' 
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                   >
//                     {item.label}
//                     {isActive(item.href) && (
//                       <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                     )}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <div className="flex items-center space-x-2 text-sm text-gray-700">
//               <Phone className="h-4 w-4 text-blue-600" />
//               <span>+1 (786) 652-3950</span>
//             </div>
//             <Link href="/contact">
//               <Button size="sm" className="group bg-blue-600 text-white hover:bg-blue-700">
//                 Get Started
//                 <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? (
//               <X className="h-6 w-6 text-gray-700" />
//             ) : (
//               <Menu className="h-6 w-6 text-gray-700" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden py-6 space-y-4 border-t border-gray-200/50 bg-white animate-fade-in-up">
//             {navItems.map((item) => (
//               <div key={item.label}>
//                 {item.children ? (
//                   <>
//                     <button
//                       onClick={() => setServicesOpen(!servicesOpen)}
//                       className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
//                     >
//                       {item.label}
//                       <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
//                     </button>
//                     {servicesOpen && (
//                       <div className="pl-4 space-y-2 mt-2 animate-fade-in-up">
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.href}
//                             href={child.href}
//                             className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-2 duration-200"
//                             onClick={() => setIsOpen(false)}
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`block py-3 text-sm font-medium transition-colors duration-200 hover:translate-x-2 ${
//                       isActive(item.href) 
//                         ? 'text-blue-600' 
//                         : 'text-gray-700 hover:text-blue-600'
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//             ))}
            
//             {/* Mobile CTA Section */}
//             <div className="pt-6 border-t border-gray-200 space-y-4">
//               <div className="flex items-center space-x-2 text-sm text-gray-700 pb-2">
//                 <Phone className="h-4 w-4 text-blue-600" />
//                 <span>+1 (786) 652-3950</span>
//               </div>
//               <Link href="/contact" onClick={() => setIsOpen(false)}>
//                 <Button className="w-full group bg-blue-600 text-white hover:bg-blue-700">
//                   Get Started
//                   <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      label: 'Services', 
      children: [
        { href: '/services/rpo', label: 'Recruitment Process Outsourcing' },
        { href: '/services/career-support', label: 'Career Support Services' }
      ]
    },
    { href: '/blog', label: 'Blog' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white shadow-lg border-b border-gray-200/50 backdrop-blur-lg`}>
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm sm:text-lg">N</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gradient group-hover:scale-105 transition-transform">Novotion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button className="flex items-center text-sm font-medium transition-all duration-300 text-gray-700 hover:text-blue-600">
                      {item.label} 
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl p-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 hover:translate-x-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-300 relative ${
                      isActive(item.href) 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+1 (786) 652-3950</span>
            </div>
            <Link href="/contact">
              <Button size="sm" className="group bg-blue-600 text-white hover:bg-blue-700">
                Get Started
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-200/50 bg-white animate-fade-in-up">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2 mt-2 animate-fade-in-up">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors hover:translate-x-2 duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 text-sm font-medium transition-colors duration-200 hover:translate-x-2 ${
                      isActive(item.href) 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Section */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-700 pb-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+1 (786) 652-3950</span>
              </div>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full group bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;