// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Mail, MapPin, Phone, Send, CheckCircle, Clock, Users, Globe } from 'lucide-react';
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

// // Custom Input Component
// const Input = ({ label, required, type = "text", placeholder, value, onChange, className = "" }) => (
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-700">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type}
//       required={required}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${className}`}
//     />
//   </div>
// );

// // Custom Textarea Component
// const Textarea = ({ label, required, placeholder, value, onChange, rows = 4, className = "" }) => (
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-700">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <textarea
//       required={required}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       rows={rows}
//       className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${className}`}
//     />
//   </div>
// );

// // Custom Select Component
// const Select = ({ label, required, value, onChange, options, placeholder, className = "" }) => (
//   <div className="space-y-2">
//     <label className="text-sm font-medium text-gray-700">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <select
//       value={value}
//       onChange={onChange}
//       required={required}
//       className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white ${className}`}
//     >
//       <option value="">{placeholder}</option>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   </div>
// );

// // Custom Checkbox Component
// const Checkbox = ({ checked, onChange, label, id }) => (
//   <div className="flex items-start gap-3">
//     <input
//       type="checkbox"
//       id={id}
//       checked={checked}
//       onChange={onChange}
//       className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//     />
//     <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">
//       {label}
//     </label>
//   </div>
// );

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     company: '',
//     userType: '',
//     market: '',
//     message: '',
//     agreedToTerms: false
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const userTypeOptions = [
//     { value: 'organization', label: 'An Organization seeking RPO services' },
//     { value: 'professional', label: 'An IT Professional seeking career support' },
//     { value: 'partner', label: 'A potential partner' },
//     { value: 'other', label: 'Other (General Inquiry)' }
//   ];

//   const marketOptions = [
//     { value: 'usa', label: 'United States' },
//     { value: 'uk', label: 'United Kingdom' },
//     { value: 'other', label: 'Other' }
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.agreedToTerms) {
//       alert('Please agree to the Privacy Policy and Terms of Service.');
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
    
//     // Reset form after success
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       company: '',
//       userType: '',
//       market: '',
//       message: '',
//       agreedToTerms: false
//     });

//     // Reset success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold">Let's Start the Conversation</h1>
//             <p className="text-xl text-blue-100">
//               Thank you for your interest in Novotion. We are built on strong partnerships, and every great partnership begins with a simple, clear conversation.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
//               <div className="flex items-center justify-center gap-3">
//                 <Clock className="h-8 w-8 text-blue-200" />
//                 <div className="text-left">
//                   <div className="text-2xl font-bold">24-48h</div>
//                   <div className="text-blue-200 text-sm">Response Time</div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-3">
//                 <Users className="h-8 w-8 text-blue-200" />
//                 <div className="text-left">
//                   <div className="text-2xl font-bold">3</div>
//                   <div className="text-blue-200 text-sm">Continents</div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center gap-3">
//                 <Globe className="h-8 w-8 text-blue-200" />
//                 <div className="text-left">
//                   <div className="text-2xl font-bold">2</div>
//                   <div className="text-blue-200 text-sm">Core Markets</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Paths */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the Right Path</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               To ensure your inquiry reaches the correct team without delay, please select the option that best describes you:
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 hover:scale-105">
//               <CardContent className="p-8 space-y-4">
//                 <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                   <Users className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">For Organizations (RPO Services)</h3>
//                 <p className="text-gray-600">
//                   Are you looking to optimize your talent acquisition, reduce hiring costs, or scale your team in the UK or USA? Connect with our RPO specialists to discuss your unique business needs.
//                 </p>
//                 <div className="pt-4 space-y-2">
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-5 w-5 text-blue-600" />
//                     <a href="mailto:rpo-solutions@novotion.com" className="text-blue-600 hover:underline font-medium">
//                       rpo-solutions@novotion.com
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 hover:scale-105">
//               <CardContent className="p-8 space-y-4">
//                 <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
//                   <Send className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">For IT Professionals (Career Support)</h3>
//                 <p className="text-gray-600">
//                   Are you a skilled IT professional in the USA market seeking expert marketing, placement support, and your next contract opportunity? Our Career Support team is ready to help you.
//                 </p>
//                 <div className="pt-4 space-y-2">
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-5 w-5 text-green-600" />
//                     <a href="mailto:career-support@novotion.com" className="text-green-600 hover:underline font-medium">
//                       career-support@novotion.com
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
//               <p className="text-lg text-gray-600">
//                 For the fastest response, please fill out the form below. This helps us direct your message to the right specialist.
//               </p>
//             </div>

//             {isSubmitted ? (
//               <Card className="border-green-200 bg-green-50">
//                 <CardContent className="p-8 text-center">
//                   <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
//                   <p className="text-green-700 mb-4">
//                     Thank you for contacting Novotion. We'll get back to you within 24-48 hours.
//                   </p>
//                   <Button 
//                     onClick={() => setIsSubmitted(false)}
//                     variant="outline" 
//                     className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
//                   >
//                     Send Another Message
//                   </Button>
//                 </CardContent>
//               </Card>
//             ) : (
//               <Card className="hover:shadow-lg transition-shadow">
//                 <CardContent className="p-8">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <Input
//                         label="Full Name"
//                         required
//                         value={formData.fullName}
//                         onChange={(e) => handleInputChange('fullName', e.target.value)}
//                         placeholder="John Doe"
//                       />
//                       <Input
//                         label="Work Email"
//                         required
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => handleInputChange('email', e.target.value)}
//                         placeholder="john@company.com"
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <Input
//                         label="Phone Number"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => handleInputChange('phone', e.target.value)}
//                         placeholder="+1 (555) 000-0000"
//                       />
//                       <Input
//                         label="Company Name"
//                         value={formData.company}
//                         onChange={(e) => handleInputChange('company', e.target.value)}
//                         placeholder="Your Company"
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <Select
//                         label="I am..."
//                         required
//                         value={formData.userType}
//                         onChange={(e) => handleInputChange('userType', e.target.value)}
//                         options={userTypeOptions}
//                         placeholder="Select one"
//                       />
//                       <Select
//                         label="Your Primary Market"
//                         value={formData.market}
//                         onChange={(e) => handleInputChange('market', e.target.value)}
//                         options={marketOptions}
//                         placeholder="Select one"
//                       />
//                     </div>

//                     <Textarea
//                       label="How can we help you?"
//                       required
//                       value={formData.message}
//                       onChange={(e) => handleInputChange('message', e.target.value)}
//                       placeholder="Tell us about your needs, challenges, or how we can assist you..."
//                       rows={6}
//                     />

//                     <Checkbox
//                       id="terms"
//                       checked={formData.agreedToTerms}
//                       onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
//                       label="I have read and agree to the Novotion Privacy Policy and Terms of Service."
//                     />

//                     <Button 
//                       type="submit" 
//                       size="lg" 
//                       className="w-full"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="mr-2 h-5 w-5" />
//                           Submit Message
//                         </>
//                       )}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Office Locations */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Offices</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We operate across multiple time zones to provide localized expertise and 24/7 support.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
//               <CardContent className="p-6 space-y-4">
//                 <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
//                   <MapPin className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">United States</h3>
//                 <div className="space-y-3 text-gray-600">
//                   <p className="font-medium">Orlando, FL</p>
//                   <div className="flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     <span>+1 (786) 652-3950</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     <span>hello@novotion.com</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
//               <CardContent className="p-6 space-y-4">
//                 <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
//                   <MapPin className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">United Kingdom</h3>
//                 <div className="space-y-3 text-gray-600">
//                   <p className="font-medium">Operations</p>
//                   <div className="flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     <span>+44 (XXX) XXX-XXXX</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     <span>hello@novotion.com</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
//               <CardContent className="p-6 space-y-4">
//                 <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
//                   <MapPin className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900">India</h3>
//                 <div className="space-y-3 text-gray-600">
//                   <p className="font-medium">Offshore Support Center</p>
//                   <p>Ahmedabad, Gujarat</p>
//                   <div className="flex items-center gap-2">
//                     <Phone className="h-4 w-4" />
//                     <span>+91 (XXX) XXX-XXXX</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     <span>hello@novotion.com</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone, Send, CheckCircle, Clock, Users, Globe } from 'lucide-react';
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

// Custom Input Component
const Input = ({ label, required, type = "text", placeholder, value, onChange, className = "" }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base ${className}`}
    />
  </div>
);

// Custom Textarea Component
const Textarea = ({ label, required, placeholder, value, onChange, rows = 4, className = "" }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base ${className}`}
    />
  </div>
);

// Custom Select Component
const Select = ({ label, required, value, onChange, options, placeholder, className = "" }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white text-sm sm:text-base ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Custom Checkbox Component
const Checkbox = ({ checked, onChange, label, id }) => (
  <div className="flex items-start gap-3">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    />
    <label htmlFor={id} className="text-sm text-gray-600 cursor-pointer">
      {label}
    </label>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    userType: '',
    market: '',
    message: '',
    agreedToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userTypeOptions = [
    { value: 'organization', label: 'An Organization seeking RPO services' },
    { value: 'professional', label: 'An IT Professional seeking career support' },
    { value: 'partner', label: 'A potential partner' },
    { value: 'other', label: 'Other (General Inquiry)' }
  ];

  const marketOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please agree to the Privacy Policy and Terms of Service.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      userType: '',
      market: '',
      message: '',
      agreedToTerms: false
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Let's Start the Conversation
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Thank you for your interest in Novotion. We are built on strong partnerships, and every great partnership begins with a simple, clear conversation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">24-48h</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Response Time</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">3</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Continents</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-200" />
                <div className="text-left">
                  <div className="text-xl sm:text-2xl font-bold">2</div>
                  <div className="text-blue-200 text-xs sm:text-sm">Core Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Paths */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Find the Right Path</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              To ensure your inquiry reaches the correct team without delay, please select the option that best describes you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 hover:scale-[1.02] sm:hover:scale-105">
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">For Organizations (RPO Services)</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Are you looking to optimize your talent acquisition, reduce hiring costs, or scale your team in the UK or USA? Connect with our RPO specialists to discuss your unique business needs.
                </p>
                <div className="pt-3 sm:pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    <a href="mailto:rpo-solutions@novotion.com" className="text-blue-600 hover:underline font-medium text-sm sm:text-base">
                      rpo-solutions@novotion.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 hover:scale-[1.02] sm:hover:scale-105">
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <Send className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">For IT Professionals (Career Support)</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Are you a skilled IT professional in the USA market seeking expert marketing, placement support, and your next contract opportunity? Our Career Support team is ready to help you.
                </p>
                <div className="pt-3 sm:pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    <a href="mailto:career-support@novotion.com" className="text-green-600 hover:underline font-medium text-sm sm:text-base">
                      career-support@novotion.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Send Us a Message</h2>
              <p className="text-base sm:text-lg text-gray-600">
                For the fastest response, please fill out the form below. This helps us direct your message to the right specialist.
              </p>
            </div>

            {isSubmitted ? (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 sm:p-8 text-center">
                  <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 text-sm sm:text-base mb-4">
                    Thank you for contacting Novotion. We'll get back to you within 24-48 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Input
                        label="Full Name"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="John Doe"
                      />
                      <Input
                        label="Work Email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Input
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                      />
                      <Input
                        label="Company Name"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <Select
                        label="I am..."
                        required
                        value={formData.userType}
                        onChange={(e) => handleInputChange('userType', e.target.value)}
                        options={userTypeOptions}
                        placeholder="Select one"
                      />
                      <Select
                        label="Your Primary Market"
                        value={formData.market}
                        onChange={(e) => handleInputChange('market', e.target.value)}
                        options={marketOptions}
                        placeholder="Select one"
                      />
                    </div>

                    <Textarea
                      label="How can we help you?"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your needs, challenges, or how we can assist you..."
                      rows={4}
                    />

                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                      label="I have read and agree to the Novotion Privacy Policy and Terms of Service."
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Submit Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Global Offices</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We operate across multiple time zones to provide localized expertise and 24/7 support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">United States</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-600">
                  <p className="font-medium text-sm sm:text-base">Orlando, FL</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">+1 (786) 652-3950</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">hello@novotion.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">United Kingdom</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-600">
                  <p className="font-medium text-sm sm:text-base">Operations</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">+44 (XXX) XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">hello@novotion.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">India</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-600">
                  <p className="font-medium text-sm sm:text-base">Offshore Support Center</p>
                  <p className="text-sm sm:text-base">Ahmedabad, Gujarat</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">+91 (XXX) XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-sm sm:text-base">hello@novotion.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;