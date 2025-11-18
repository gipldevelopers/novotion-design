// import Link from 'next/link';
// import { Calendar, Clock } from 'lucide-react';
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

// const Blog = () => {
//   const posts = [
//     {
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights'
//     },
//     {
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips'
//     },
//     {
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy'
//     },
//     {
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips'
//     },
//     {
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships for growing organizations.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy'
//     },
//     {
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development'
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-b from-gray-50 to-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold">Blog & Insights</h1>
//             <p className="text-lg text-gray-600">
//               Expert perspectives on recruitment, career development, and talent acquisition strategies
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Blog Posts */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow hover:scale-105 transition-transform">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
//                     {post.category}
//                   </div>
//                   <h3 className="text-xl font-bold hover:text-blue-600 transition-colors">
//                     <Link href="#" className="hover:no-underline">
//                       {post.title}
//                     </Link>
//                   </h3>
//                   <p className="text-gray-600 line-clamp-3">
//                     {post.excerpt}
//                   </p>
//                   <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="h-4 w-4" />
//                       {post.date}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Clock className="h-4 w-4" />
//                       {post.readTime}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold mb-4">More Insights Coming Soon</h3>
//               <p className="text-gray-600 mb-6">
//                 Stay tuned for more expert insights on recruitment strategies, career development, 
//                 and the latest trends in talent acquisition.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Link 
//                   href="/services/rpo" 
//                   className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Explore RPO Services
//                 </Link>
//                 <Link 
//                   href="/services/career-support" 
//                   className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
//                 >
//                   Career Support
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   Filter,
//   ChevronRight,
//   BookOpen,
//   TrendingUp,
//   Users,
//   Zap,
//   Star,
//   Eye
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <div 
//     className={`rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm text-card-foreground shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-100 ${className}`}
//     style={{ 
//       animationDelay: `${delay}ms`,
//       animation: 'fadeInUp 0.6s ease-out forwards'
//     }}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('All');
  
//   const categories = ['All', 'Recruitment Insights', 'Career Tips', 'RPO Strategy', 'Career Development', 'Industry Trends'];

//   const posts = [
//     {
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing and what it means for your organization.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       image: '/api/placeholder/400/250',
//       views: '1.2K',
//       featured: true
//     },
//     {
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market and secure their dream opportunities.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       image: '/api/placeholder/400/250',
//       views: '2.4K',
//       featured: true
//     },
//     {
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities to build world-class teams efficiently.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       image: '/api/placeholder/400/250',
//       views: '1.8K'
//     },
//     {
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector, from negotiation to long-term success.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       image: '/api/placeholder/400/250',
//       views: '3.1K',
//       featured: true
//     },
//     {
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships for growing organizations across multiple industries.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       image: '/api/placeholder/400/250',
//       views: '1.5K'
//     },
//     {
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry to attract better opportunities.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       image: '/api/placeholder/400/250',
//       views: '2.2K'
//     },
//     {
//       title: 'The Rise of AI in Talent Acquisition: What You Need to Know',
//       excerpt: 'Exploring how artificial intelligence is transforming recruitment processes and what it means for both employers and job seekers.',
//       date: 'February 10, 2025',
//       readTime: '7 min read',
//       category: 'Industry Trends',
//       image: '/api/placeholder/400/250',
//       views: '1.9K'
//     },
//     {
//       title: 'Remote Work Revolution: Building Distributed Teams That Thrive',
//       excerpt: 'Best practices for creating and managing high-performing remote teams in the post-pandemic work environment.',
//       date: 'February 5, 2025',
//       readTime: '6 min read',
//       category: 'Industry Trends',
//       image: '/api/placeholder/400/250',
//       views: '2.7K'
//     }
//   ];

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts 
//     : posts.filter(post => post.category === activeCategory);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-fadeInUp');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       <Header />

//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
//           <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 text-center space-y-8">
//           <div className={`transform transition-all duration-1000 ${
//             isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//           }`}>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
//               <BookOpen className="h-4 w-4 text-yellow-400" />
//               <span className="text-white/90 text-sm font-medium">
//                 Expert Insights & Industry Trends
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Blog & 
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Insights
//               </span>
//             </h1>
            
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               Expert perspectives on recruitment, career development, and talent acquisition strategies that drive success in today's competitive market.
//             </p>

//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mt-8">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="Search insights and articles..."
//                   className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-12 animate-on-scroll">
//               <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
//                 <Star className="h-4 w-4 text-yellow-400 fill-current" />
//                 Featured Insights
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Trending & Must-Read Articles
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card key={index} delay={index * 200} className="group hover:shadow-2xl border-blue-100">
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Post Image */}
//                     <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
//                       <div className="absolute inset-0 bg-black/20"></div>
//                       <div className="absolute top-4 left-4">
//                         <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                           {post.category}
//                         </span>
//                       </div>
//                       {post.featured && (
//                         <div className="absolute top-4 right-4">
//                           <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                         </div>
//                       )}
//                     </div>

//                     {/* Post Content */}
//                     <div className="p-8 space-y-4">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
//                         <Link href="#" className="hover:no-underline">
//                           {post.title}
//                         </Link>
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed">
//                         {post.excerpt}
//                       </p>

//                       {/* Meta Information */}
//                       <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                         <div className="flex items-center gap-4 text-sm text-gray-500">
//                           <div className="flex items-center gap-1">
//                             <Calendar className="h-4 w-4" />
//                             {post.date}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Clock className="h-4 w-4" />
//                             {post.readTime}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Eye className="h-4 w-4" />
//                             {post.views}
//                           </div>
//                         </div>
//                         <Link href="#">
//                           <Button variant="ghost" className="group/btn text-blue-600 hover:text-blue-700 p-0">
//                             Read More
//                             <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Blog Posts with Filter */}
//       <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           {/* Filter Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 max-w-6xl mx-auto">
//             <div className="animate-on-scroll">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 Latest Insights
//               </h2>
//               <p className="text-gray-600 max-w-2xl">
//                 Explore our collection of articles, guides, and thought leadership pieces on recruitment, career development, and talent strategy.
//               </p>
//             </div>

//             {/* Category Filter */}
//             <div className="flex flex-wrap gap-2 animate-on-scroll">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeCategory === category
//                       ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
//                       : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Blog Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {filteredPosts.map((post, index) => (
//               <Card key={index} delay={index * 100} className="group hover:shadow-xl border-transparent hover:border-blue-100">
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className="relative h-40 bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
//                     <div className="absolute inset-0 bg-black/10"></div>
//                     <div className="absolute top-3 left-3">
//                       <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
//                         {post.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Post Content */}
//                   <div className="p-6 space-y-4">
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
//                       <Link href="#" className="hover:no-underline">
//                         {post.title}
//                       </Link>
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Meta Information */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <div className="flex items-center gap-3 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           {post.date.split(' ').slice(0, 2).join(' ')}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           {post.readTime}
//                         </div>
//                       </div>
//                       <Link href="#">
//                         <Button variant="ghost" size="sm" className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto">
//                           Read
//                           <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Load More */}
//           <div className="text-center mt-12 animate-on-scroll">
//             <Button 
//               size="lg" 
//               variant="outline"
//               className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//             >
//               Load More Articles
//               <ArrowRight className="h-4 w-4 ml-2" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
//               <Zap className="h-4 w-4 text-yellow-400" />
//               <span className="text-white/90 text-sm font-medium">
//                 Stay Updated
//               </span>
//             </div>
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Get the Latest Insights Delivered to Your Inbox
//             </h2>
//             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//               Join thousands of professionals who receive our expert insights on recruitment, career development, and industry trends.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="flex-1 px-4 py-3 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               />
//               <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold">
//                 Subscribe
//               </Button>
//             </div>
            
//             <p className="text-blue-200 text-sm mt-4">
//               No spam. Unsubscribe at any time.
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
      
//       {/* Global Styles for Animations */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }
        
//         .animate-fadeInUp {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   Filter,
//   ChevronRight,
//   BookOpen,
//   TrendingUp,
//   Users,
//   Zap,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   MousePointerClick
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { motion, AnimatePresence } from 'framer-motion';

// // Enhanced Card components with Framer Motion
// const Card = ({ children, className = "", delay = 0, ...props }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.6, delay: delay * 0.1 }}
//     whileHover={{ y: -5, transition: { duration: 0.3 } }}
//     className={`rounded-3xl border border-gray-100/80 bg-white/70 backdrop-blur-xl text-card-foreground shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-blue-100/50 ${className}`}
//     {...props}
//   >
//     {children}
//   </motion.div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
  
//   const categories = [
//     { name: 'All', icon: Globe, count: 28 },
//     { name: 'Recruitment Insights', icon: Target, count: 8 },
//     { name: 'Career Tips', icon: Rocket, count: 6 },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5 },
//     { name: 'Career Development', icon: TrendingUp, count: 4 },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5 }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing and what it means for your organization.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       image: '/api/placeholder/400/250',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market and secure their dream opportunities.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       image: '/api/placeholder/400/250',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities to build world-class teams efficiently.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       image: '/api/placeholder/400/250',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector, from negotiation to long-term success.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       image: '/api/placeholder/400/250',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships for growing organizations across multiple industries.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       image: '/api/placeholder/400/250',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry to attract better opportunities.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       image: '/api/placeholder/400/250',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist',
//         avatar: '/api/placeholder/40/40'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           />
//           <motion.div
//             className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               opacity: [0.4, 0.2, 0.4],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1
//             }}
//           />
          
//           {/* Grid Pattern Overlay */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//         </div>

//         <div className="relative container mx-auto px-4 text-center space-y-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-8"
//           >
//             {/* Enhanced Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 mb-8 shadow-2xl"
//             >
//               <div className="flex items-center gap-2">
//                 <Sparkles className="h-5 w-5 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-semibold tracking-wide">
//                   Expert Insights & Industry Trends
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-2">
//                 <Rocket className="h-4 w-4 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Updated Daily
//                 </span>
//               </div>
//             </motion.div>

//             {/* Main Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
//             >
//               <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
//                 Novotion
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Insights
//               </span>
//             </motion.h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed font-light"
//             >
//               Where recruitment innovation meets career transformation. Expert perspectives that drive success in today's dynamic talent landscape.
//             </motion.p>

//             {/* Enhanced Search Bar */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="max-w-2xl mx-auto mt-12"
//             >
//               <div className="relative group">
//                 <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-blue-200 h-5 w-5 transition-all duration-300 group-focus-within:text-cyan-400" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-3 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-lg shadow-2xl"
//                 />
//                 <motion.div
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <MousePointerClick className="h-4 w-4 text-cyan-400/70" />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//               className="flex justify-center gap-8 pt-8"
//             >
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-blue-200/80 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-white/60 text-sm font-medium">Explore Insights</span>
//             <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Featured Posts Carousel */}
//       {featuredPosts.length > 0 && (
//         <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mb-16"
//             >
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-2xl mb-6 shadow-lg">
//                 <Star className="h-5 w-5 text-yellow-300 fill-current" />
//                 <span className="font-semibold tracking-wide">Editor's Picks</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insights</span>
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
//             >
//               {featuredPosts.map((post, index) => (
//                 <motion.div
//                   key={post.id}
//                   variants={itemVariants}
//                   className="group"
//                 >
//                   <Card className="hover:shadow-3xl border-blue-100/50 bg-gradient-to-br from-white to-blue-50/50">
//                     <CardContent className="p-0 overflow-hidden">
//                       {/* Enhanced Post Image */}
//                       <div className="relative h-64 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                         <div className="absolute top-6 left-6">
//                           <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
//                             {post.category}
//                           </span>
//                         </div>
                        
//                         {/* Interactive Actions */}
//                         <div className="absolute top-6 right-6 flex gap-2">
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => toggleSavePost(post.id)}
//                             className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//                           >
//                             {savedPosts.has(post.id) ? (
//                               <BookmarkCheck className="h-4 w-4 text-blue-600" />
//                             ) : (
//                               <Bookmark className="h-4 w-4 text-gray-600" />
//                             )}
//                           </motion.button>
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//                           >
//                             <Share2 className="h-4 w-4 text-gray-600" />
//                           </motion.button>
//                         </div>

//                         {/* Author Info */}
//                         <div className="absolute bottom-6 left-6 flex items-center gap-3">
//                           <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
//                           <div>
//                             <div className="text-white font-semibold text-sm">{post.author.name}</div>
//                             <div className="text-white/70 text-xs">{post.author.role}</div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Enhanced Post Content */}
//                       <div className="p-8 space-y-6">
//                         <div>
//                           <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight mb-3">
//                             <Link href="#" className="hover:no-underline">
//                               {post.title}
//                             </Link>
//                           </h3>
//                           <p className="text-gray-600 leading-relaxed text-lg">
//                             {post.excerpt}
//                           </p>
//                         </div>

//                         {/* Enhanced Meta Information */}
//                         <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                           <div className="flex items-center gap-6 text-sm text-gray-500">
//                             <div className="flex items-center gap-2">
//                               <Calendar className="h-4 w-4" />
//                               <span>{post.date}</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Clock className="h-4 w-4" />
//                               <span>{post.readTime}</span>
//                             </div>
//                             <div className="flex items-center gap-4">
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => toggleLikePost(post.id)}
//                                 className={`flex items-center gap-1 transition-colors ${
//                                   likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
//                                 }`}
//                               >
//                                 <ThumbsUp className="h-4 w-4" />
//                                 <span>{post.likes}</span>
//                               </motion.button>
//                               <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
//                                 <MessageCircle className="h-4 w-4" />
//                                 <span>{post.comments}</span>
//                               </button>
//                             </div>
//                           </div>
//                           <Link href="#">
//                             <motion.div
//                               whileHover={{ x: 5 }}
//                               transition={{ type: "spring", stiffness: 400 }}
//                             >
//                               <Button className="group/btn bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                                 Read Insight
//                                 <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
//                               </Button>
//                             </motion.div>
//                           </Link>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Blog Posts with Filter */}
//       <section className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4">
//           {/* Enhanced Filter Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 max-w-7xl mx-auto"
//           >
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Articles</span>
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Enhanced Category Filter */}
//             <div className="flex flex-wrap gap-3">
//               {categories.map((category) => {
//                 const IconComponent = category.icon;
//                 return (
//                   <motion.button
//                     key={category.name}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => setActiveCategory(category.name)}
//                     className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm ${
//                       activeCategory === category.name
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
//                         : 'bg-white/80 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200/50 hover:border-blue-200'
//                     }`}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     {category.name}
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       activeCategory === category.name 
//                         ? 'bg-white/20 text-white' 
//                         : 'bg-gray-100 text-gray-500'
//                     }`}>
//                       {category.count}
//                     </span>
//                   </motion.button>
//                 );
//               })}
//             </div>
//           </motion.div>

//           {/* Enhanced Blog Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
//           >
//             <AnimatePresence>
//               {filteredPosts.map((post, index) => (
//                 <motion.div
//                   key={post.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <Card className="group hover:shadow-2xl border-transparent hover:border-blue-100/50 bg-white/60 backdrop-blur-sm">
//                     <CardContent className="p-0 overflow-hidden">
//                       {/* Post Image */}
//                       <div className="relative h-48 bg-gradient-to-br from-blue-400 to-cyan-400 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                         <div className="absolute top-4 left-4">
//                           <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg">
//                             {post.category}
//                           </span>
//                         </div>
                        
//                         {/* Quick Actions */}
//                         <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-1">
//                           <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             onClick={() => toggleSavePost(post.id)}
//                             className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-md"
//                           >
//                             {savedPosts.has(post.id) ? (
//                               <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                             ) : (
//                               <Bookmark className="h-3 w-3 text-gray-600" />
//                             )}
//                           </motion.button>
//                         </div>
//                       </div>

//                       {/* Post Content */}
//                       <div className="p-6 space-y-4">
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
//                           <Link href="#" className="hover:no-underline">
//                             {post.title}
//                           </Link>
//                         </h3>
//                         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                           {post.excerpt}
//                         </p>

//                         {/* Enhanced Meta Information */}
//                         <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                           <div className="flex items-center gap-4 text-xs text-gray-500">
//                             <div className="flex items-center gap-1">
//                               <Calendar className="h-3 w-3" />
//                               {post.date.split(' ').slice(0, 2).join(' ')}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Clock className="h-3 w-3" />
//                               {post.readTime}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Eye className="h-3 w-3" />
//                               {post.views}
//                             </div>
//                           </div>
//                           <Link href="#">
//                             <motion.div
//                               whileHover={{ x: 2 }}
//                               transition={{ type: "spring", stiffness: 400 }}
//                             >
//                               <Button variant="ghost" size="sm" className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
//                                 Read
//                                 <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                               </Button>
//                             </motion.div>
//                           </Link>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>

//           {/* Enhanced Load More */}
//           {filteredPosts.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="text-center mt-16"
//             >
//               <Button 
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Newsletter CTA */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white text-center max-w-5xl mx-auto relative overflow-hidden"
//           >
//             {/* Background Elements */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 mb-8 shadow-2xl"
//               >
//                 <Zap className="h-5 w-5 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-semibold tracking-wide">
//                   Stay Ahead of the Curve
//                 </span>
//               </motion.div>
              
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-bold mb-6"
//               >
//                 Transform Your <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Career Journey</span>
//               </motion.h2>
              
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
//               >
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </motion.p>
              
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
//               >
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-cyan-400 shadow-lg text-lg"
//                 />
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg whitespace-nowrap">
//                     Get Insights
//                   </Button>
//                 </motion.div>
//               </motion.div>
              
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="text-blue-200 text-sm mt-6"
//               >
//                 No spam. Unsubscribe anytime. Professional content only.
//               </motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   ChevronRight,
//   BookOpen,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   Users,
//   TrendingUp,
//   Zap
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div 
//     className={`blog-card rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(6);
  
//   const observerRef = useRef(null);

//   const categories = [
//     { name: 'All', icon: Globe, count: 28, color: 'blue' },
//     { name: 'Recruitment Insights', icon: Target, count: 8, color: 'purple' },
//     { name: 'Career Tips', icon: Rocket, count: 6, color: 'green' },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5, color: 'orange' },
//     { name: 'Career Development', icon: TrendingUp, count: 4, color: 'pink' },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5, color: 'cyan' }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 7,
//       title: 'The Rise of AI in Talent Acquisition: What You Need to Know',
//       excerpt: 'Exploring how artificial intelligence is transforming recruitment processes.',
//       date: 'February 10, 2025',
//       readTime: '7 min read',
//       category: 'Industry Trends',
//       views: '1.9K',
//       likes: 92,
//       comments: 11,
//       author: {
//         name: 'Rachel Green',
//         role: 'AI Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 8,
//       title: 'Remote Work Revolution: Building Distributed Teams That Thrive',
//       excerpt: 'Best practices for creating and managing high-performing remote teams.',
//       date: 'February 5, 2025',
//       readTime: '6 min read',
//       category: 'Industry Trends',
//       views: '2.7K',
//       likes: 178,
//       comments: 25,
//       author: {
//         name: 'James Wilson',
//         role: 'Remote Work Expert',
//         avatar: '/api/placeholder/40/40'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   const displayedPosts = filteredPosts.slice(0, visiblePosts);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '-50px' }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, [filteredPosts]);

//   const loadMore = () => {
//     setVisiblePosts(prev => prev + 6);
//   };

//   const getCategoryColor = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     return category?.color || 'blue';
//   };

//   const getGradientClass = (color) => {
//     const gradients = {
//       blue: 'from-blue-500 to-cyan-500',
//       purple: 'from-purple-500 to-pink-500',
//       green: 'from-green-500 to-emerald-500',
//       orange: 'from-orange-500 to-amber-500',
//       pink: 'from-pink-500 to-rose-500',
//       cyan: 'from-cyan-500 to-blue-500'
//     };
//     return gradients[color] || gradients.blue;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-20">
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 text-center space-y-8">
//           <div className="animate-on-scroll space-y-8">
//             {/* Enhanced Badge */}
//             <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 mb-8 shadow-2xl">
//               <div className="flex items-center gap-2">
//                 <Sparkles className="h-5 w-5 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-semibold tracking-wide">
//                   Expert Insights & Industry Trends
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-2">
//                 <Rocket className="h-4 w-4 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Updated Daily
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Novotion
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Insights
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light">
//               Where recruitment innovation meets career transformation. Expert perspectives that drive success in today's dynamic talent landscape.
//             </p>

//             {/* Enhanced Search Bar */}
//             <div className="max-w-2xl mx-auto mt-12">
//               <div className="relative group">
//                 <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-blue-200 h-5 w-5 transition-all duration-300 group-focus-within:text-cyan-400" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-3 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-lg shadow-2xl"
//                 />
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
//                   <Zap className="h-4 w-4 text-cyan-400/70" />
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-8 pt-8">
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
//                   <div className="text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-blue-200/80 text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="flex flex-col items-center gap-2">
//             <span className="text-white/60 text-sm font-medium">Explore Insights</span>
//             <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//               <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16 animate-on-scroll">
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-2xl mb-6 shadow-lg">
//                 <Star className="h-5 w-5 text-yellow-300 fill-current" />
//                 <span className="font-semibold tracking-wide">Editor's Picks</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insights</span>
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card key={post.id} className={`animate-on-scroll hover:shadow-3xl border-blue-100/50 bg-gradient-to-br from-white to-blue-50/50`} style={{ animationDelay: `${index * 200}ms` }}>
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Enhanced Post Image */}
//                     <div className={`relative h-64 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                       <div className="absolute top-6 left-6">
//                         <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
//                           {post.category}
//                         </span>
//                       </div>
                      
//                       {/* Interactive Actions */}
//                       <div className="absolute top-6 right-6 flex gap-2">
//                         <button
//                           onClick={() => toggleSavePost(post.id)}
//                           className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//                         >
//                           {savedPosts.has(post.id) ? (
//                             <BookmarkCheck className="h-4 w-4 text-blue-600" />
//                           ) : (
//                             <Bookmark className="h-4 w-4 text-gray-600" />
//                           )}
//                         </button>
//                         <button className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
//                           <Share2 className="h-4 w-4 text-gray-600" />
//                         </button>
//                       </div>

//                       {/* Author Info */}
//                       <div className="absolute bottom-6 left-6 flex items-center gap-3">
//                         <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
//                         <div>
//                           <div className="text-white font-semibold text-sm">{post.author.name}</div>
//                           <div className="text-white/70 text-xs">{post.author.role}</div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Enhanced Post Content */}
//                     <div className="p-8 space-y-6">
//                       <div>
//                         <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 leading-tight mb-3">
//                           <Link href="#" className="hover:no-underline">
//                             {post.title}
//                           </Link>
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed text-lg">
//                           {post.excerpt}
//                         </p>
//                       </div>

//                       {/* Enhanced Meta Information */}
//                       <div className="flex items-center justify-between pt-6 border-t border-gray-100">
//                         <div className="flex items-center gap-6 text-sm text-gray-500">
//                           <div className="flex items-center gap-2">
//                             <Calendar className="h-4 w-4" />
//                             <span>{post.date}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Clock className="h-4 w-4" />
//                             <span>{post.readTime}</span>
//                           </div>
//                           <div className="flex items-center gap-4">
//                             <button
//                               onClick={() => toggleLikePost(post.id)}
//                               className={`flex items-center gap-1 transition-colors hover:scale-105 ${
//                                 likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
//                               }`}
//                             >
//                               <ThumbsUp className="h-4 w-4" />
//                               <span>{post.likes}</span>
//                             </button>
//                             <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors hover:scale-105">
//                               <MessageCircle className="h-4 w-4" />
//                               <span>{post.comments}</span>
//                             </button>
//                           </div>
//                         </div>
//                         <Link href="#">
//                           <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//                             Read Insight
//                             <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Blog Posts with Filter */}
//       <section className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4">
//           {/* Enhanced Filter Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 max-w-7xl mx-auto animate-on-scroll">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Articles</span>
//               </h2>
//               <p className="text-gray-600 text-lg max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Enhanced Category Filter */}
//             <div className="flex flex-wrap gap-3">
//               {categories.map((category, index) => {
//                 const IconComponent = category.icon;
//                 return (
//                   <button
//                     key={category.name}
//                     onClick={() => setActiveCategory(category.name)}
//                     className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105 ${
//                       activeCategory === category.name
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
//                         : 'bg-white/80 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200/50 hover:border-blue-200'
//                     } animate-on-scroll`}
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     <IconComponent className="h-4 w-4" />
//                     {category.name}
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       activeCategory === category.name 
//                         ? 'bg-white/20 text-white' 
//                         : 'bg-gray-100 text-gray-500'
//                     }`}>
//                       {category.count}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Enhanced Blog Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {displayedPosts.map((post, index) => (
//               <Card key={post.id} className={`animate-on-scroll group hover:shadow-2xl border-transparent hover:border-blue-100/50 bg-white/60 backdrop-blur-sm`} style={{ animationDelay: `${index * 100}ms` }}>
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className={`relative h-48 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg">
//                         {post.category}
//                       </span>
//                     </div>
                    
//                     {/* Quick Actions */}
//                     <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-1">
//                       <button
//                         onClick={() => toggleSavePost(post.id)}
//                         className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-md hover:scale-110 transition-transform"
//                       >
//                         {savedPosts.has(post.id) ? (
//                           <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                         ) : (
//                           <Bookmark className="h-3 w-3 text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Post Content */}
//                   <div className="p-6 space-y-4">
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
//                       <Link href="#" className="hover:no-underline">
//                         {post.title}
//                       </Link>
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Enhanced Meta Information */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <div className="flex items-center gap-4 text-xs text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           {post.date.split(' ').slice(0, 2).join(' ')}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           {post.readTime}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           {post.views}
//                         </div>
//                       </div>
//                       <Link href="#">
//                         <Button variant="ghost" size="sm" className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform">
//                           Read
//                           <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Enhanced Load More */}
//           {filteredPosts.length > visiblePosts && (
//             <div className="text-center mt-16 animate-on-scroll">
//               <Button 
//                 onClick={loadMore}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Newsletter CTA */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-12 text-white text-center max-w-5xl mx-auto relative overflow-hidden animate-on-scroll">
//             {/* Background Elements */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 mb-8 shadow-2xl">
//                 <Zap className="h-5 w-5 text-yellow-400" />
//                 <span className="text-white/90 text-sm font-semibold tracking-wide">
//                   Stay Ahead of the Curve
//                 </span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Transform Your <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Career Journey</span>
//               </h2>
              
//               <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-6 py-4 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-cyan-400 shadow-lg text-lg"
//                 />
//                 <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg whitespace-nowrap">
//                   Get Insights
//                 </Button>
//               </div>
              
//               <p className="text-blue-200 text-sm mt-6">
//                 No spam. Unsubscribe anytime. Professional content only.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Enhanced Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .blog-card:hover {
//           transform: translateY(-8px);
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Smooth scrolling */
//         html {
//           scroll-behavior: smooth;
//         }

//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 8px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #f1f5f9;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 4px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   ChevronRight,
//   BookOpen,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   Users,
//   TrendingUp,
//   Zap,
//   Menu,
//   X
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div 
//     className={`blog-card rounded-2xl md:rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 md:p-6 lg:p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(6);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   const observerRef = useRef(null);

//   const categories = [
//     { name: 'All', icon: Globe, count: 28, color: 'blue' },
//     { name: 'Recruitment Insights', icon: Target, count: 8, color: 'purple' },
//     { name: 'Career Tips', icon: Rocket, count: 6, color: 'green' },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5, color: 'orange' },
//     { name: 'Career Development', icon: TrendingUp, count: 4, color: 'pink' },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5, color: 'cyan' }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 7,
//       title: 'The Rise of AI in Talent Acquisition: What You Need to Know',
//       excerpt: 'Exploring how artificial intelligence is transforming recruitment processes.',
//       date: 'February 10, 2025',
//       readTime: '7 min read',
//       category: 'Industry Trends',
//       views: '1.9K',
//       likes: 92,
//       comments: 11,
//       author: {
//         name: 'Rachel Green',
//         role: 'AI Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 8,
//       title: 'Remote Work Revolution: Building Distributed Teams That Thrive',
//       excerpt: 'Best practices for creating and managing high-performing remote teams.',
//       date: 'February 5, 2025',
//       readTime: '6 min read',
//       category: 'Industry Trends',
//       views: '2.7K',
//       likes: 178,
//       comments: 25,
//       author: {
//         name: 'James Wilson',
//         role: 'Remote Work Expert',
//         avatar: '/api/placeholder/40/40'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   const displayedPosts = filteredPosts.slice(0, visiblePosts);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '-50px' }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, [filteredPosts]);

//   const loadMore = () => {
//     setVisiblePosts(prev => prev + 6);
//   };

//   const getCategoryColor = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     return category?.color || 'blue';
//   };

//   const getGradientClass = (color) => {
//     const gradients = {
//       blue: 'from-blue-500 to-cyan-500',
//       purple: 'from-purple-500 to-pink-500',
//       green: 'from-green-500 to-emerald-500',
//       orange: 'from-orange-500 to-amber-500',
//       pink: 'from-pink-500 to-rose-500',
//       cyan: 'from-cyan-500 to-blue-500'
//     };
//     return gradients[color] || gradients.blue;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section - Mobile First */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-16 md:pt-20">
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-6 md:space-y-8">
//           <div className="animate-on-scroll space-y-6 md:space-y-8">
//             {/* Enhanced Badge */}
//             <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-4 mb-6 md:mb-8 shadow-2xl">
//               <div className="flex items-center gap-1 md:gap-2">
//                 <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
//                 <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">
//                   Expert Insights
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-1 md:gap-2">
//                 <Rocket className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Updated Daily
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Novotion
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//                 Insights
//               </span>
//             </h1>
            
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
//               Where recruitment innovation meets career transformation. Expert perspectives that drive success in today's dynamic talent landscape.
//             </p>

//             {/* Enhanced Search Bar */}
//             <div className="max-w-2xl mx-auto mt-8 md:mt-12 px-4">
//               <div className="relative group">
//                 <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-blue-200 h-4 w-4 md:h-5 md:w-5 transition-all duration-300 group-focus-within:text-cyan-400" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-12 md:pl-16 pr-6 py-3 md:py-4 lg:py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 md:focus:ring-3 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-sm md:text-base lg:text-lg shadow-2xl"
//                 />
//                 <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2">
//                   <Zap className="h-3 w-3 md:h-4 md:w-4 text-cyan-400/70" />
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8">
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
//                   <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-blue-200/80 text-xs md:text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         {/* <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="flex flex-col items-center gap-1 md:gap-2">
//             <span className="text-white/60 text-xs md:text-sm font-medium">Explore Insights</span>
//             <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
//               <div className="w-1 h-2 md:h-3 bg-white/60 rounded-full mt-2"></div>
//             </div>
//           </div>
//         </div> */}
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
//           <div className="container mx-auto px-4 sm:px-6">
//             <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-on-scroll">
//               <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg">
//                 <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 fill-current" />
//                 <span className="font-semibold tracking-wide text-sm md:text-base">Editor's Picks</span>
//               </div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//                 Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insights</span>
//               </h2>
//               <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card key={post.id} className={`animate-on-scroll hover:shadow-xl md:hover:shadow-3xl border-blue-100/50 bg-gradient-to-br from-white to-blue-50/50`} style={{ animationDelay: `${index * 200}ms` }}>
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Enhanced Post Image */}
//                     <div className={`relative h-48 md:h-56 lg:h-64 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                       <div className="absolute top-4 md:top-6 left-4 md:left-6">
//                         <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold shadow-lg">
//                           {post.category}
//                         </span>
//                       </div>
                      
//                       {/* Interactive Actions */}
//                       <div className="absolute top-4 md:top-6 right-4 md:right-6 flex gap-1 md:gap-2">
//                         <button
//                           onClick={() => toggleSavePost(post.id)}
//                           className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
//                         >
//                           {savedPosts.has(post.id) ? (
//                             <BookmarkCheck className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
//                           ) : (
//                             <Bookmark className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
//                           )}
//                         </button>
//                         <button className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
//                           <Share2 className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
//                         </button>
//                       </div>

//                       {/* Author Info */}
//                       <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center gap-2 md:gap-3">
//                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"></div>
//                         <div>
//                           <div className="text-white font-semibold text-xs md:text-sm">{post.author.name}</div>
//                           <div className="text-white/70 text-xs">{post.author.role}</div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Enhanced Post Content */}
//                     <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
//                       <div>
//                         <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 leading-tight mb-2 md:mb-3 line-clamp-2">
//                           <Link href="#" className="hover:no-underline">
//                             {post.title}
//                           </Link>
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg line-clamp-3">
//                           {post.excerpt}
//                         </p>
//                       </div>

//                       {/* Enhanced Meta Information */}
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
//                         <div className="flex items-center gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm text-gray-500 flex-wrap">
//                           <div className="flex items-center gap-1 md:gap-2">
//                             <Calendar className="h-3 w-3 md:h-4 md:w-4" />
//                             <span className="whitespace-nowrap">{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                           </div>
//                           <div className="flex items-center gap-1 md:gap-2">
//                             <Clock className="h-3 w-3 md:h-4 md:w-4" />
//                             <span>{post.readTime}</span>
//                           </div>
//                           <div className="flex items-center gap-2 md:gap-4">
//                             <button
//                               onClick={() => toggleLikePost(post.id)}
//                               className={`flex items-center gap-1 transition-colors hover:scale-105 ${
//                                 likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
//                               }`}
//                             >
//                               <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
//                               <span>{post.likes}</span>
//                             </button>
//                             <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors hover:scale-105">
//                               <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
//                               <span>{post.comments}</span>
//                             </button>
//                           </div>
//                         </div>
//                         <Link href="#" className="mt-2 sm:mt-0">
//                           <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
//                             Read Insight
//                             <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Enhanced Blog Posts with Filter */}
//       <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6">
//           {/* Enhanced Filter Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-16 max-w-7xl mx-auto animate-on-scroll">
//             <div className="w-full lg:w-auto">
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//                 Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Articles</span>
//               </h2>
//               <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden w-full">
//               <Button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 variant="outline"
//                 className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl px-4 py-3"
//               >
//                 <span className="flex items-center gap-2">
//                   <Menu className="h-4 w-4" />
//                   Filter Categories
//                 </span>
//                 <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
//               </Button>
//             </div>

//             {/* Enhanced Category Filter */}
//             <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {categories.map((category, index) => {
//                   const IconComponent = category.icon;
//                   return (
//                     <button
//                       key={category.name}
//                       onClick={() => {
//                         setActiveCategory(category.name);
//                         setIsFilterOpen(false);
//                       }}
//                       className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105 ${
//                         activeCategory === category.name
//                           ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
//                           : 'bg-white/80 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200/50 hover:border-blue-200'
//                       } animate-on-scroll`}
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                       <span className="hidden sm:inline">{category.name}</span>
//                       <span className="sm:hidden">{category.name.split(' ')[0]}</span>
//                       <span className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs ${
//                         activeCategory === category.name 
//                           ? 'bg-white/20 text-white' 
//                           : 'bg-gray-100 text-gray-500'
//                       }`}>
//                         {category.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Blog Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {displayedPosts.map((post, index) => (
//               <Card key={post.id} className={`animate-on-scroll group hover:shadow-xl border-transparent hover:border-blue-100/50 bg-white/60 backdrop-blur-sm`} style={{ animationDelay: `${index * 100}ms` }}>
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className={`relative h-40 md:h-48 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                     <div className="absolute top-3 md:top-4 left-3 md:left-4">
//                       <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl text-xs font-semibold shadow-lg">
//                         {post.category}
//                       </span>
//                     </div>
                    
//                     {/* Quick Actions */}
//                     <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-1">
//                       <button
//                         onClick={() => toggleSavePost(post.id)}
//                         className="bg-white/90 backdrop-blur-sm p-1 md:p-1.5 rounded-lg shadow-md hover:scale-110 transition-transform"
//                       >
//                         {savedPosts.has(post.id) ? (
//                           <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                         ) : (
//                           <Bookmark className="h-3 w-3 text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Post Content */}
//                   <div className="p-4 md:p-6 space-y-3 md:space-y-4">
//                     <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2">
//                       <Link href="#" className="hover:no-underline">
//                         {post.title}
//                       </Link>
//                     </h3>
//                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Enhanced Meta Information */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-100">
//                       <div className="flex items-center gap-2 md:gap-3 lg:gap-4 text-xs text-gray-500 flex-wrap">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           <span className="whitespace-nowrap">{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           <span>{post.readTime}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           <span>{post.views}</span>
//                         </div>
//                       </div>
//                       <Link href="#" className="mt-1 sm:mt-0">
//                         <Button variant="ghost" size="sm" className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform text-xs md:text-sm">
//                           Read
//                           <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Enhanced Load More */}
//           {filteredPosts.length > visiblePosts && (
//             <div className="text-center mt-8 md:mt-12 lg:mt-16 animate-on-scroll">
//               <Button 
//                 onClick={loadMore}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base lg:text-lg"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Enhanced Newsletter CTA */}
//       <section className="py-12 md:py-16 lg:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">
//           <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white text-center max-w-5xl mx-auto relative overflow-hidden animate-on-scroll">
//             {/* Background Elements */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="absolute top-6 md:top-10 left-6 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
//             </div>
            
//             <div className="relative z-10">
//               <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-4 mb-6 md:mb-8 shadow-2xl">
//                 <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
//                 <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">
//                   Stay Ahead of the Curve
//                 </span>
//               </div>
              
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
//                 Transform Your <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">Career Journey</span>
//               </h2>
              
//               <p className="text-blue-100 text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 md:focus:ring-3 focus:ring-cyan-400 shadow-lg text-sm md:text-base"
//                 />
//                 <Button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base whitespace-nowrap">
//                   Get Insights
//                 </Button>
//               </div>
              
//               <p className="text-blue-200 text-xs md:text-sm mt-4 md:mt-6">
//                 No spam. Unsubscribe anytime. Professional content only.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Enhanced Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse-slow {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .blog-card:hover {
//           transform: translateY(-4px);
//         }

//         @media (min-width: 768px) {
//           .blog-card:hover {
//             transform: translateY(-8px);
//           }
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
        
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         /* Smooth scrolling */
//         html {
//           scroll-behavior: smooth;
//         }

//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 6px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #f1f5f9;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 3px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: #94a3b8;
//         }

//         @media (min-width: 768px) {
//           ::-webkit-scrollbar {
//             width: 8px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   ChevronRight,
//   BookOpen,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   Users,
//   TrendingUp,
//   Zap,
//   Menu,
//   X
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div 
//     className={`blog-card rounded-2xl md:rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 md:p-6 lg:p-8 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(6);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   const observerRef = useRef(null);

//   const categories = [
//     { name: 'All', icon: Globe, count: 28, color: 'blue' },
//     { name: 'Recruitment Insights', icon: Target, count: 8, color: 'purple' },
//     { name: 'Career Tips', icon: Rocket, count: 6, color: 'green' },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5, color: 'orange' },
//     { name: 'Career Development', icon: TrendingUp, count: 4, color: 'pink' },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5, color: 'cyan' }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 7,
//       title: 'The Rise of AI in Talent Acquisition: What You Need to Know',
//       excerpt: 'Exploring how artificial intelligence is transforming recruitment processes.',
//       date: 'February 10, 2025',
//       readTime: '7 min read',
//       category: 'Industry Trends',
//       views: '1.9K',
//       likes: 92,
//       comments: 11,
//       author: {
//         name: 'Rachel Green',
//         role: 'AI Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 8,
//       title: 'Remote Work Revolution: Building Distributed Teams That Thrive',
//       excerpt: 'Best practices for creating and managing high-performing remote teams.',
//       date: 'February 5, 2025',
//       readTime: '6 min read',
//       category: 'Industry Trends',
//       views: '2.7K',
//       likes: 178,
//       comments: 25,
//       author: {
//         name: 'James Wilson',
//         role: 'Remote Work Expert',
//         avatar: '/api/placeholder/40/40'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   const displayedPosts = filteredPosts.slice(0, visiblePosts);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '-50px' }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, [filteredPosts]);

//   const loadMore = () => {
//     setVisiblePosts(prev => prev + 6);
//   };

//   const getCategoryColor = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     return category?.color || 'blue';
//   };

//   const getGradientClass = (color) => {
//     const gradients = {
//       blue: 'from-blue-500 to-cyan-500',
//       purple: 'from-purple-500 to-pink-500',
//       green: 'from-green-500 to-emerald-500',
//       orange: 'from-orange-500 to-amber-500',
//       pink: 'from-pink-500 to-rose-500',
//       cyan: 'from-cyan-500 to-blue-500'
//     };
//     return gradients[color] || gradients.blue;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-16 md:pt-20">
        
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-6 md:space-y-8">
//           <div className="animate-on-scroll space-y-6 md:space-y-8">
            
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-4 mb-6 md:mb-8 shadow-2xl">
//               <div className="flex items-center gap-1 md:gap-2">
//                 <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
//                 <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">
//                   Expert Insights
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-1 md:gap-2">
//                 <Rocket className="h-3 w-3 md:h-4 md:w-4 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Updated Daily
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Novotion
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//                 Insights
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-light px-4">
//               Where recruitment innovation meets career transformation.  
//               Expert perspectives that drive success in today's dynamic talent landscape.
//             </p>

//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mt-8 md:mt-12 px-4">
//               <div className="relative group">
//                 <Search className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-blue-200 h-4 w-4 md:h-5 md:w-5 group-focus-within:text-cyan-400 transition-all" />
                
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-12 md:pl-16 pr-6 py-3 md:py-4 lg:py-5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl md:rounded-2xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-sm md:text-base lg:text-lg shadow-2xl"
//                 />

//                 <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2">
//                   <Zap className="h-3 w-3 md:h-4 md:w-4 text-cyan-400/70" />
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 pt-6 md:pt-8">
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
//                   <div className="text-lg md:text-xl lg:text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-blue-200/80 text-xs md:text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
//           <div className="container mx-auto px-4 sm:px-6">

//             <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-on-scroll">
              
//               <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg">
//                 <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
//                 <span className="font-semibold text-sm md:text-base">Editor's Picks</span>
//               </div>

//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//                 Featured <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Insights</span>
//               </h2>

//               <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card 
//                   key={post.id} 
//                   className={`animate-on-scroll border-blue-100/50 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl`}
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Post Image */}
//                     <div className={`relative h-48 md:h-56 lg:h-64 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

//                       <div className="absolute top-4 md:top-6 left-4 md:left-6">
//                         <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-semibold shadow-lg">
//                           {post.category}
//                         </span>
//                       </div>

//                       {/* Actions */}
//                       <div className="absolute top-4 md:top-6 right-4 md:right-6 flex gap-1 md:gap-2">
//                         <button
//                           onClick={() => toggleSavePost(post.id)}
//                           className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-lg shadow-lg hover:scale-110 transition-transform"
//                         >
//                           {savedPosts.has(post.id) ? (
//                             <BookmarkCheck className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
//                           ) : (
//                             <Bookmark className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
//                           )}
//                         </button>
//                         <button className="bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-lg shadow-lg hover:scale-110 transition-transform">
//                           <Share2 className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
//                         </button>
//                       </div>

//                       {/* Author */}
//                       <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center gap-2 md:gap-3">
//                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm"></div>
//                         <div>
//                           <div className="text-white font-semibold text-xs md:text-sm">
//                             {post.author.name}
//                           </div>
//                           <div className="text-white/70 text-xs">
//                             {post.author.role}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content Block */}
//                     <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
//                       <div>
//                         <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight mb-2 md:mb-3 line-clamp-2">
//                           <Link href="#">
//                             {post.title}
//                           </Link>
//                         </h3>

//                         <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-3">
//                           {post.excerpt}
//                         </p>
//                       </div>

//                       {/* Footer Meta */}
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-100">
                        
//                         {/* Left Meta */}
//                         <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 flex-wrap">
//                           <div className="flex items-center gap-1 md:gap-2">
//                             <Calendar className="h-3 w-3 md:h-4 md:w-4" />
//                             <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                           </div>

//                           <div className="flex items-center gap-1 md:gap-2">
//                             <Clock className="h-3 w-3 md:h-4 md:w-4" />
//                             <span>{post.readTime}</span>
//                           </div>

//                           <div className="flex items-center gap-2 md:gap-4">
//                             <button
//                               onClick={() => toggleLikePost(post.id)}
//                               className={`flex items-center gap-1 hover:scale-105 transition-colors ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
//                             >
//                               <ThumbsUp className="h-3 w-3 md:h-4 md:w-4" />
//                               <span>{post.likes}</span>
//                             </button>

//                             <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 hover:scale-105 transition-all">
//                               <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
//                               <span>{post.comments}</span>
//                             </button>
//                           </div>
//                         </div>

//                         {/* Right CTA */}
//                         <Link href="#">
//                           <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm md:text-base">
//                             Read Insight
//                             <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>

//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* POSTS WITH FILTER */}
//       <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6">

//           {/* Section Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 mb-8 lg:mb-16 max-w-7xl mx-auto animate-on-scroll">
            
//             {/* Title */}
//             <div>
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
//                 Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Articles</span>
//               </h2>

//               <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden w-full">
//               <Button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 variant="outline"
//                 className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-3"
//               >
//                 <span className="flex items-center gap-2">
//                   <Menu className="h-4 w-4" />
//                   Filter Categories
//                 </span>
//                 <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
//               </Button>
//             </div>

//             {/* Categories */}
//             <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {categories.map((category, index) => {
//                   const IconComponent = category.icon;

//                   return (
//                     <button
//                       key={category.name}
//                       onClick={() => {
//                         setActiveCategory(category.name);
//                         setIsFilterOpen(false);
//                       }}
//                       className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-3 rounded-xl font-semibold text-xs md:text-sm backdrop-blur-sm hover:scale-105 transition-all 
//                       ${activeCategory === category.name
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
//                         : 'bg-white/80 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200'} 
//                       animate-on-scroll`}
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <IconComponent className="h-3 w-3 md:h-4 md:w-4" />
//                       <span className="hidden sm:inline">{category.name}</span>
//                       <span className="sm:hidden">{category.name.split(' ')[0]}</span>
//                       <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeCategory === category.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
//                         {category.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Posts Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
//             {displayedPosts.map((post, index) => (
//               <Card 
//                 key={post.id} 
//                 className={`animate-on-scroll group hover:shadow-xl border-transparent hover:border-blue-100/50 bg-white/60 backdrop-blur-sm`} 
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className={`relative h-40 md:h-48 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

//                     <div className="absolute top-3 md:top-4 left-3 md:left-4">
//                       <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-xs font-semibold shadow-lg">
//                         {post.category}
//                       </span>
//                     </div>

//                     {/* Save Button */}
//                     <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-all flex gap-1">
//                       <button
//                         onClick={() => toggleSavePost(post.id)}
//                         className="bg-white/90 backdrop-blur-sm p-1 md:p-1.5 rounded-lg shadow-md hover:scale-110 transition-transform"
//                       >
//                         {savedPosts.has(post.id) ? (
//                           <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                         ) : (
//                           <Bookmark className="h-3 w-3 text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Blog Content Box */}
//                   <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    
//                     {/* Title */}
//                     <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
//                       <Link href="#">
//                         {post.title}
//                       </Link>
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Meta Info */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-100">
                      
//                       {/* Left Meta */}
//                       <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 flex-wrap">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                         </div>

//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           <span>{post.readTime}</span>
//                         </div>

//                         <div className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           <span>{post.views}</span>
//                         </div>
//                       </div>

//                       {/* Read CTA */}
//                       <Link href="#">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform text-xs md:text-sm"
//                         >
//                           Read
//                           <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Load More Button */}
//           {filteredPosts.length > visiblePosts && (
//             <div className="text-center mt-8 md:mt-12 lg:mt-16 animate-on-scroll">
//               <Button
//                 onClick={loadMore}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm md:text-base lg:text-lg"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-1 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-12 md:py-16 lg:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">

//           <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white text-center max-w-5xl mx-auto relative overflow-hidden animate-on-scroll">
            
//             {/* Background Elements */}
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
//             </div>

//             {/* Foreground Content */}
//             <div className="relative z-10">

//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 md:px-6 md:py-4 mb-6 md:mb-8 shadow-2xl">
//                 <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
//                 <span className="text-white/90 text-xs md:text-sm font-semibold tracking-wide">
//                   Stay Ahead of the Curve
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
//                 Transform Your  
//                 <span className="bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
//                   {" "}Career Journey
//                 </span>
//               </h2>

//               {/* Description */}
//               <p className="text-blue-100 text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </p>

//               {/* Email Input + CTA */}
//               <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-4 py-3 md:px-6 md:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 md:focus:ring-3 focus:ring-cyan-400 shadow-lg text-sm md:text-base"
//                 />

//                 <Button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm md:text-base whitespace-nowrap">
//                   Get Insights
//                 </Button>
//               </div>

//               <p className="text-blue-200 text-xs md:text-sm mt-4 md:mt-6">
//                 No spam. Unsubscribe anytime. Professional content only.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card:hover {
//           transform: translateY(-4px);
//         }

//         @media (min-width: 768px) {
//           .blog-card:hover {
//             transform: translateY(-8px);
//           }
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   ChevronRight,
//   BookOpen,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   Users,
//   TrendingUp,
//   Zap,
//   Menu,
//   X
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div 
//     className={`blog-card rounded-lg sm:rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(6);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   const observerRef = useRef(null);

//   const categories = [
//     { name: 'All', icon: Globe, count: 28, color: 'blue' },
//     { name: 'Recruitment Insights', icon: Target, count: 8, color: 'purple' },
//     { name: 'Career Tips', icon: Rocket, count: 6, color: 'green' },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5, color: 'orange' },
//     { name: 'Career Development', icon: TrendingUp, count: 4, color: 'pink' },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5, color: 'cyan' }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 7,
//       title: 'The Rise of AI in Talent Acquisition: What You Need to Know',
//       excerpt: 'Exploring how artificial intelligence is transforming recruitment processes.',
//       date: 'February 10, 2025',
//       readTime: '7 min read',
//       category: 'Industry Trends',
//       views: '1.9K',
//       likes: 92,
//       comments: 11,
//       author: {
//         name: 'Rachel Green',
//         role: 'AI Specialist',
//         avatar: '/api/placeholder/40/40'
//       }
//     },
//     {
//       id: 8,
//       title: 'Remote Work Revolution: Building Distributed Teams That Thrive',
//       excerpt: 'Best practices for creating and managing high-performing remote teams.',
//       date: 'February 5, 2025',
//       readTime: '6 min read',
//       category: 'Industry Trends',
//       views: '2.7K',
//       likes: 178,
//       comments: 25,
//       author: {
//         name: 'James Wilson',
//         role: 'Remote Work Expert',
//         avatar: '/api/placeholder/40/40'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   const displayedPosts = filteredPosts.slice(0, visiblePosts);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '-50px' }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, [filteredPosts]);

//   const loadMore = () => {
//     setVisiblePosts(prev => prev + 6);
//   };

//   const getCategoryColor = (categoryName) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     return category?.color || 'blue';
//   };

//   const getGradientClass = (color) => {
//     const gradients = {
//       blue: 'from-blue-500 to-cyan-500',
//       purple: 'from-purple-500 to-pink-500',
//       green: 'from-green-500 to-emerald-500',
//       orange: 'from-orange-500 to-amber-500',
//       pink: 'from-pink-500 to-rose-500',
//       cyan: 'from-cyan-500 to-blue-500'
//     };
//     return gradients[color] || gradients.blue;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       <Header />

//       {/* Enhanced Hero Section - Consistent with Other Pages */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 pt-16 md:pt-20">
        
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
//           <div className="space-y-4 sm:space-y-6">
            
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 mb-4 sm:mb-6 shadow-2xl">
//               <div className="flex items-center gap-1">
//                 <Sparkles className="h-4 w-4 text-yellow-400" />
//                 <span className="text-white/90 text-xs font-semibold tracking-wide">
//                   Expert Insights
//                 </span>
//               </div>
//               <div className="w-1 h-1 bg-white/40 rounded-full"></div>
//               <div className="flex items-center gap-1">
//                 <Rocket className="h-3 w-3 text-cyan-400" />
//                 <span className="text-white/70 text-xs">
//                   Updated Daily
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
//               <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
//                 Novotion Insights
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
//               Where recruitment innovation meets career transformation.  
//               Expert perspectives that drive success in today's dynamic talent landscape.
//             </p>

//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mt-8 px-4">
//               <div className="relative group">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200 h-4 w-4 group-focus-within:text-cyan-400 transition-all" />
                
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-12 pr-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 text-sm shadow-2xl"
//                 />

//                 <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                   <Zap className="h-3 w-3 text-cyan-400/70" />
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-4 pt-6">
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
//                   <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-blue-200/80 text-xs">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
//           <div className="container mx-auto px-4 sm:px-6">

//             <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              
//               <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-xl mb-4 sm:mb-6 shadow-lg">
//                 <Star className="h-4 w-4 text-yellow-300" />
//                 <span className="font-semibold text-sm">Editor's Picks</span>
//               </div>

//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
//                 Featured Insights
//               </h2>

//               <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card 
//                   key={post.id} 
//                   className={`animate-on-scroll border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg`}
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Post Image */}
//                     <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

//                       <div className="absolute top-4 left-4">
//                         <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
//                           {post.category}
//                         </span>
//                       </div>

//                       {/* Actions */}
//                       <div className="absolute top-4 right-4 flex gap-1">
//                         <button
//                           onClick={() => toggleSavePost(post.id)}
//                           className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-lg hover:scale-110 transition-transform"
//                         >
//                           {savedPosts.has(post.id) ? (
//                             <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                           ) : (
//                             <Bookmark className="h-3 w-3 text-gray-600" />
//                           )}
//                         </button>
//                         <button className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-lg hover:scale-110 transition-transform">
//                           <Share2 className="h-3 w-3 text-gray-600" />
//                         </button>
//                       </div>

//                       {/* Author */}
//                       <div className="absolute bottom-4 left-4 flex items-center gap-2">
//                         <div className="w-8 h-8 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm"></div>
//                         <div>
//                           <div className="text-white font-semibold text-xs">
//                             {post.author.name}
//                           </div>
//                           <div className="text-white/70 text-xs">
//                             {post.author.role}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content Block */}
//                     <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
//                       <div>
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight mb-2 line-clamp-2">
//                           <Link href="#">
//                             {post.title}
//                           </Link>
//                         </h3>

//                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
//                           {post.excerpt}
//                         </p>
//                       </div>

//                       {/* Footer Meta */}
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                        
//                         {/* Left Meta */}
//                         <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
//                           <div className="flex items-center gap-1">
//                             <Calendar className="h-3 w-3" />
//                             <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                           </div>

//                           <div className="flex items-center gap-1">
//                             <Clock className="h-3 w-3" />
//                             <span>{post.readTime}</span>
//                           </div>

//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={() => toggleLikePost(post.id)}
//                               className={`flex items-center gap-1 hover:scale-105 transition-colors ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
//                             >
//                               <ThumbsUp className="h-3 w-3" />
//                               <span>{post.likes}</span>
//                             </button>

//                             <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 hover:scale-105 transition-all">
//                               <MessageCircle className="h-3 w-3" />
//                               <span>{post.comments}</span>
//                             </button>
//                           </div>
//                         </div>

//                         {/* Right CTA */}
//                         <Link href="#">
//                           <Button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm">
//                             Read Insight
//                             <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>

//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* POSTS WITH FILTER */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/50">
//         <div className="container mx-auto px-4 sm:px-6">

//           {/* Section Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 lg:mb-12 max-w-7xl mx-auto animate-on-scroll">
            
//             {/* Title */}
//             <div>
//               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
//                 Latest Articles
//               </h2>

//               <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden w-full">
//               <Button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 variant="outline"
//                 className="w-full flex items-center justify-between bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3"
//               >
//                 <span className="flex items-center gap-2">
//                   <Menu className="h-4 w-4" />
//                   Filter Categories
//                 </span>
//                 <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
//               </Button>
//             </div>

//             {/* Categories */}
//             <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category, index) => {
//                   const IconComponent = category.icon;

//                   return (
//                     <button
//                       key={category.name}
//                       onClick={() => {
//                         setActiveCategory(category.name);
//                         setIsFilterOpen(false);
//                       }}
//                       className={`flex items-center gap-1 px-3 py-2 rounded-lg font-semibold text-xs backdrop-blur-sm hover:scale-105 transition-all 
//                       ${activeCategory === category.name
//                         ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
//                         : 'bg-white/80 text-gray-600 hover:bg-white hover:text-blue-600 border border-gray-200'} 
//                       animate-on-scroll`}
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <IconComponent className="h-3 w-3" />
//                       <span className="hidden sm:inline">{category.name}</span>
//                       <span className="sm:hidden">{category.name.split(' ')[0]}</span>
//                       <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeCategory === category.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
//                         {category.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Posts Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
//             {displayedPosts.map((post, index) => (
//               <Card 
//                 key={post.id} 
//                 className={`animate-on-scroll group hover:shadow-lg border-l-4 border-l-blue-600 bg-white/60 backdrop-blur-sm`} 
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className={`relative h-40 bg-gradient-to-br ${getGradientClass(getCategoryColor(post.category))} overflow-hidden`}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

//                     <div className="absolute top-3 left-3">
//                       <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-xs font-semibold shadow-lg">
//                         {post.category}
//                       </span>
//                     </div>

//                     {/* Save Button */}
//                     <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all flex gap-1">
//                       <button
//                         onClick={() => toggleSavePost(post.id)}
//                         className="bg-white/90 backdrop-blur-sm p-1 rounded-lg shadow-md hover:scale-110 transition-transform"
//                       >
//                         {savedPosts.has(post.id) ? (
//                           <BookmarkCheck className="h-3 w-3 text-blue-600" />
//                         ) : (
//                           <Bookmark className="h-3 w-3 text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Blog Content Box */}
//                   <div className="p-4 space-y-3">
                    
//                     {/* Title */}
//                     <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
//                       <Link href="#">
//                         {post.title}
//                       </Link>
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Meta Info */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-gray-100">
                      
//                       {/* Left Meta */}
//                       <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                         </div>

//                         <div className="flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           <span>{post.readTime}</span>
//                         </div>

//                         <div className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           <span>{post.views}</span>
//                         </div>
//                       </div>

//                       {/* Read CTA */}
//                       <Link href="#">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform text-xs"
//                         >
//                           Read
//                           <ChevronRight className="h-3 w-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Load More Button */}
//           {filteredPosts.length > visiblePosts && (
//             <div className="text-center mt-8 sm:mt-12 animate-on-scroll">
//               <Button
//                 onClick={loadMore}
//                 size="lg"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">

//           <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-xl p-6 sm:p-8 text-white text-center max-w-5xl mx-auto relative overflow-hidden animate-on-scroll">
            
//             {/* Background Elements */}
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl"></div>
//             </div>

//             {/* Foreground Content */}
//             <div className="relative z-10">

//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-4 py-2 mb-6 shadow-2xl">
//                 <Zap className="h-4 w-4 text-yellow-400" />
//                 <span className="text-white/90 text-xs font-semibold tracking-wide">
//                   Stay Ahead of the Curve
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
//                 Transform Your Career Journey
//               </h2>

//               {/* Description */}
//               <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </p>

//               {/* Email Input + CTA */}
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg text-sm"
//                 />

//                 <Button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-sm whitespace-nowrap">
//                   Get Insights
//                 </Button>
//               </div>

//               <p className="text-blue-200 text-xs mt-4">
//                 No spam. Unsubscribe anytime. Professional content only.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }

//         .animate-pulse-slow {
//           animation: pulse-slow 4s infinite;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card:hover {
//           transform: translateY(-4px);
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Blog;

// // src/app/blog/page.js
// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   Clock, 
//   ArrowRight,
//   Search,
//   ChevronRight,
//   BookOpen,
//   Star,
//   Eye,
//   Share2,
//   Bookmark,
//   BookmarkCheck,
//   ThumbsUp,
//   MessageCircle,
//   Sparkles,
//   Rocket,
//   Target,
//   BarChart3,
//   Lightbulb,
//   Globe,
//   Users,
//   TrendingUp,
//   Zap,
//   Menu
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// // Enhanced Card components
// const Card = ({ children, className = "", ...props }) => (
//   <div 
//     className={`blog-card rounded-lg sm:rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
//     {...props}
//   >
//     {children}
//   </div>
// );

// const CardContent = ({ children, className = "", ...props }) => (
//   <div className={`p-4 sm:p-6 ${className}`} {...props}>
//     {children}
//   </div>
// );

// // Accordion Component
// const Accordion = ({ items }) => {
//   const [openItem, setOpenItem] = useState(null);

//   return (
//     <div className="space-y-3 sm:space-y-4">
//       {items.map((item, index) => (
//         <div key={index} className="border rounded-lg overflow-hidden">
//           <button
//             onClick={() => setOpenItem(openItem === index ? null : index)}
//             className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800 hover:text-primary transition-colors flex justify-between items-center text-sm sm:text-base"
//           >
//             {item.question}
//             <svg className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           {openItem === index && (
//             <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base animate-fadeIn">
//               {item.answer}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [savedPosts, setSavedPosts] = useState(new Set());
//   const [likedPosts, setLikedPosts] = useState(new Set());
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [visiblePosts, setVisiblePosts] = useState(6);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
  
//   const observerRef = useRef(null);

//   const categories = [
//     { name: 'All', icon: Globe, count: 28 },
//     { name: 'Recruitment Insights', icon: Target, count: 8 },
//     { name: 'Career Tips', icon: Rocket, count: 6 },
//     { name: 'RPO Strategy', icon: BarChart3, count: 5 },
//     { name: 'Career Development', icon: TrendingUp, count: 4 },
//     { name: 'Industry Trends', icon: Lightbulb, count: 5 }
//   ];

//   const posts = [
//     {
//       id: 1,
//       title: 'The Future of RPO: Trends Shaping Recruitment in 2025',
//       excerpt: 'Discover how emerging technologies and changing workforce dynamics are revolutionizing recruitment process outsourcing.',
//       date: 'March 15, 2025',
//       readTime: '5 min read',
//       category: 'Recruitment Insights',
//       views: '1.2K',
//       likes: 89,
//       comments: 12,
//       featured: true,
//       author: {
//         name: 'Sarah Chen',
//         role: 'Head of RPO Strategy'
//       }
//     },
//     {
//       id: 2,
//       title: 'How to Optimize Your IT Resume for Contract Roles',
//       excerpt: 'Essential tips and strategies for IT professionals looking to stand out in the competitive U.S. contract market.',
//       date: 'March 10, 2025',
//       readTime: '7 min read',
//       category: 'Career Tips',
//       views: '2.4K',
//       likes: 156,
//       comments: 23,
//       featured: true,
//       author: {
//         name: 'Mike Rodriguez',
//         role: 'Career Advisor'
//       }
//     },
//     {
//       id: 3,
//       title: 'Why Organizations Are Choosing Offshore Recruitment Support',
//       excerpt: 'Learn about the strategic advantages of combining local expertise with global talent sourcing capabilities.',
//       date: 'March 5, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.8K',
//       likes: 67,
//       comments: 8,
//       author: {
//         name: 'Emily Watson',
//         role: 'Global Talent Director'
//       }
//     },
//     {
//       id: 4,
//       title: 'Navigating the U.S. IT Contract Market: A Comprehensive Guide',
//       excerpt: 'Everything you need to know about securing contract roles in the competitive U.S. technology sector.',
//       date: 'February 28, 2025',
//       readTime: '8 min read',
//       category: 'Career Tips',
//       views: '3.1K',
//       likes: 234,
//       comments: 31,
//       featured: true,
//       author: {
//         name: 'David Kim',
//         role: 'Market Specialist'
//       }
//     },
//     {
//       id: 5,
//       title: 'The ROI of Recruitment Process Outsourcing: A Data-Driven Analysis',
//       excerpt: 'Quantifying the financial and operational benefits of strategic RPO partnerships.',
//       date: 'February 22, 2025',
//       readTime: '6 min read',
//       category: 'RPO Strategy',
//       views: '1.5K',
//       likes: 78,
//       comments: 14,
//       author: {
//         name: 'Lisa Thompson',
//         role: 'Data Analyst'
//       }
//     },
//     {
//       id: 6,
//       title: 'Building a Personal Brand for IT Professionals',
//       excerpt: 'How to establish yourself as a thought leader and increase your visibility in the tech industry.',
//       date: 'February 15, 2025',
//       readTime: '5 min read',
//       category: 'Career Development',
//       views: '2.2K',
//       likes: 145,
//       comments: 19,
//       author: {
//         name: 'Alex Turner',
//         role: 'Brand Strategist'
//       }
//     }
//   ];

//   // Interactive functions
//   const toggleSavePost = (postId) => {
//     setSavedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const toggleLikePost = (postId) => {
//     setLikedPosts(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(postId)) {
//         newSet.delete(postId);
//       } else {
//         newSet.add(postId);
//       }
//       return newSet;
//     });
//   };

//   const featuredPosts = posts.filter(post => post.featured);
//   const filteredPosts = activeCategory === 'All' 
//     ? posts.filter(post => 
//         post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     : posts.filter(post => 
//         post.category === activeCategory &&
//         (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
//       );

//   const displayedPosts = filteredPosts.slice(0, visiblePosts);

//   // Scroll effect for header
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-in');
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '-50px' }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observerRef.current.observe(el));

//     return () => observerRef.current?.disconnect();
//   }, [filteredPosts]);

//   const loadMore = () => {
//     setVisiblePosts(prev => prev + 6);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Hero Section - Consistent with Other Pages */}
//       <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary text-white pt-16 md:pt-20">
        
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
//         </div>

//         <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
//           <div className="space-y-4 sm:space-y-6">
            
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
//               <div className="flex items-center gap-1">
//                 <Sparkles className="h-4 w-4 text-secondary" />
//                 <span className="text-white/90 text-xs font-medium">
//                   Expert Insights
//                 </span>
//               </div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Novotion Insights
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
//               Where recruitment innovation meets career transformation.  
//               Expert perspectives that drive success in today's dynamic talent landscape.
//             </p>

//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mt-8 px-4">
//               <div className="relative group">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4 group-focus-within:text-secondary transition-all" />
                
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search insights, trends, and career advice..."
//                   className="w-full pl-12 pr-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-sm"
//                 />
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="flex justify-center gap-6 pt-6">
//               {[
//                 { number: '500+', label: 'Articles' },
//                 { number: '50K+', label: 'Readers' },
//                 { number: '95%', label: 'Engagement' }
//               ].map((stat, index) => (
//                 <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
//                   <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
//                   <div className="text-white/70 text-xs">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       {featuredPosts.length > 0 && (
//         <section className="py-12 sm:py-16 md:py-20 bg-white">
//           <div className="container mx-auto px-4 sm:px-6">

//             <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              
//               <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4 sm:mb-6">
//                 <Star className="h-4 w-4 text-secondary" />
//                 <span className="font-semibold text-sm">Editor's Picks</span>
//               </div>

//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//                 Featured Insights
//               </h2>

//               <p className="text-gray-600 text-base max-w-2xl mx-auto">
//                 Curated content showcasing the latest trends and expert analysis in recruitment and career development.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
//               {featuredPosts.map((post, index) => (
//                 <Card 
//                   key={post.id} 
//                   className={`animate-on-scroll border-l-4 border-l-primary hover-lift`}
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <CardContent className="p-0 overflow-hidden">
//                     {/* Post Image */}
//                     <div className="relative h-48 sm:h-56 bg-primary overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

//                       <div className="absolute top-4 left-4">
//                         <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold">
//                           {post.category}
//                         </span>
//                       </div>

//                       {/* Actions */}
//                       <div className="absolute top-4 right-4 flex gap-2">
//                         <button
//                           onClick={() => toggleSavePost(post.id)}
//                           className="bg-white/90 p-2 rounded-lg hover:scale-110 transition-transform"
//                         >
//                           {savedPosts.has(post.id) ? (
//                             <BookmarkCheck className="h-4 w-4 text-primary" />
//                           ) : (
//                             <Bookmark className="h-4 w-4 text-gray-600" />
//                           )}
//                         </button>
//                         <button className="bg-white/90 p-2 rounded-lg hover:scale-110 transition-transform">
//                           <Share2 className="h-4 w-4 text-gray-600" />
//                         </button>
//                       </div>

//                       {/* Author */}
//                       <div className="absolute bottom-4 left-4 flex items-center gap-2">
//                         <div className="w-8 h-8 bg-white/20 rounded-full border border-white/30"></div>
//                         <div>
//                           <div className="text-white font-semibold text-sm">
//                             {post.author.name}
//                           </div>
//                           <div className="text-white/70 text-xs">
//                             {post.author.role}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Content Block */}
//                     <div className="p-6 space-y-4">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors leading-tight mb-2 line-clamp-2">
//                           <Link href="#">
//                             {post.title}
//                           </Link>
//                         </h3>

//                         <p className="text-gray-600 leading-relaxed line-clamp-3">
//                           {post.excerpt}
//                         </p>
//                       </div>

//                       {/* Footer Meta */}
//                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                        
//                         {/* Left Meta */}
//                         <div className="flex items-center gap-4 text-sm text-gray-500">
//                           <div className="flex items-center gap-1">
//                             <Calendar className="h-4 w-4" />
//                             <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                           </div>

//                           <div className="flex items-center gap-1">
//                             <Clock className="h-4 w-4" />
//                             <span>{post.readTime}</span>
//                           </div>

//                           <div className="flex items-center gap-2">
//                             <button
//                               onClick={() => toggleLikePost(post.id)}
//                               className={`flex items-center gap-1 hover:scale-105 transition-colors ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
//                             >
//                               <ThumbsUp className="h-4 w-4" />
//                               <span>{post.likes}</span>
//                             </button>

//                             <button className="flex items-center gap-1 text-gray-500 hover:text-primary hover:scale-105 transition-all">
//                               <MessageCircle className="h-4 w-4" />
//                               <span>{post.comments}</span>
//                             </button>
//                           </div>
//                         </div>

//                         {/* Right CTA */}
//                         <Link href="#">
//                           <Button className="group btn-primary px-4 py-2 rounded-lg text-sm">
//                             Read Insight
//                             <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
//                           </Button>
//                         </Link>

//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* POSTS WITH FILTER */}
//       <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6">

//           {/* Section Header */}
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 lg:mb-12 max-w-7xl mx-auto animate-on-scroll">
            
//             {/* Title */}
//             <div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
//                 Latest Articles
//               </h2>

//               <p className="text-gray-600 max-w-2xl">
//                 Dive into our comprehensive collection of insights, guides, and thought leadership pieces.
//               </p>
//             </div>

//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden w-full">
//               <Button
//                 onClick={() => setIsFilterOpen(!isFilterOpen)}
//                 variant="outline"
//                 className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3"
//               >
//                 <span className="flex items-center gap-2">
//                   <Menu className="h-4 w-4" />
//                   Filter Categories
//                 </span>
//                 <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
//               </Button>
//             </div>

//             {/* Categories */}
//             <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category, index) => {
//                   const IconComponent = category.icon;

//                   return (
//                     <button
//                       key={category.name}
//                       onClick={() => {
//                         setActiveCategory(category.name);
//                         setIsFilterOpen(false);
//                       }}
//                       className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all 
//                       ${activeCategory === category.name
//                         ? 'btn-primary text-white'
//                         : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary border border-gray-200'} 
//                       animate-on-scroll`}
//                       style={{ animationDelay: `${index * 100}ms` }}
//                     >
//                       <IconComponent className="h-4 w-4" />
//                       <span>{category.name}</span>
//                       <span className={`px-2 py-1 rounded-full text-xs ${activeCategory === category.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
//                         {category.count}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Posts Grid */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {displayedPosts.map((post, index) => (
//               <Card 
//                 key={post.id} 
//                 className={`animate-on-scroll group hover-lift border-l-4 border-l-primary`} 
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardContent className="p-0 overflow-hidden">
//                   {/* Post Image */}
//                   <div className="relative h-40 bg-primary overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

//                     <div className="absolute top-3 left-3">
//                       <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold">
//                         {post.category}
//                       </span>
//                     </div>

//                     {/* Save Button */}
//                     <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all">
//                       <button
//                         onClick={() => toggleSavePost(post.id)}
//                         className="bg-white/90 p-2 rounded-lg shadow-md hover:scale-110 transition-transform"
//                       >
//                         {savedPosts.has(post.id) ? (
//                           <BookmarkCheck className="h-4 w-4 text-primary" />
//                         ) : (
//                           <Bookmark className="h-4 w-4 text-gray-600" />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   {/* Blog Content Box */}
//                   <div className="p-6 space-y-4">
                    
//                     {/* Title */}
//                     <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
//                       <Link href="#">
//                         {post.title}
//                       </Link>
//                     </h3>

//                     {/* Excerpt */}
//                     <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     {/* Meta Info */}
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                      
//                       {/* Left Meta */}
//                       <div className="flex items-center gap-3 text-sm text-gray-500">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="h-4 w-4" />
//                           <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
//                         </div>

//                         <div className="flex items-center gap-1">
//                           <Clock className="h-4 w-4" />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>

//                       {/* Read CTA */}
//                       <Link href="#">
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="group/btn text-primary hover:text-primary-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform text-sm"
//                         >
//                           Read
//                           <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Load More Button */}
//           {filteredPosts.length > visiblePosts && (
//             <div className="text-center mt-12 animate-on-scroll">
//               <Button
//                 onClick={loadMore}
//                 size="lg"
//                 className="btn-primary px-8 py-3 rounded-lg font-semibold text-sm"
//               >
//                 Load More Insights
//                 <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-12 sm:py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4 sm:px-6">

//           <div className="bg-primary rounded-xl p-8 text-white text-center max-w-4xl mx-auto relative overflow-hidden animate-on-scroll">
            
//             {/* Background Elements */}
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
//             </div>

//             {/* Foreground Content */}
//             <div className="relative z-10">

//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
//                 <Zap className="h-4 w-4 text-secondary" />
//                 <span className="text-white/90 text-sm font-semibold">
//                   Stay Ahead of the Curve
//                 </span>
//               </div>

//               {/* Heading */}
//               <h2 className="text-2xl sm:text-3xl font-bold mb-4">
//                 Transform Your Career Journey
//               </h2>

//               {/* Description */}
//               <p className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
//                 Join 50,000+ professionals who receive our expert insights on recruitment trends, career development, and industry innovations.
//               </p>

//               {/* Email Input + CTA */}
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//                 <input
//                   type="email"
//                   placeholder="Enter your professional email"
//                   className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm text-sm"
//                 />

//                 <Button className="btn-secondary px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap">
//                   Get Insights
//                 </Button>
//               </div>

//               <p className="text-white/60 text-xs mt-4">
//                 No spam. Unsubscribe anytime. Professional content only.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-fadeIn {
//           animation: fadeInUp 0.4s ease-out forwards;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: all 0.6s ease-out;
//         }

//         .animate-on-scroll.animate-in {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .blog-card:hover {
//           transform: translateY(-4px);
//         }

//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Blog;

// src/app/blog/page.js
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Search,
  ChevronRight,
  BookOpen,
  Star,
  Eye,
  Share2,
  Bookmark,
  BookmarkCheck,
  ThumbsUp,
  MessageCircle,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Lightbulb,
  Globe,
  Users,
  TrendingUp,
  Zap,
  Menu,
  Building,
  User,
  TrendingUp as TrendingUpIcon,
  Briefcase,
  FileText,
  Linkedin,
  Award,
  Users as UsersIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Enhanced Card components
const Card = ({ children, className = "", ...props }) => (
  <div 
    className={`blog-card rounded-lg sm:rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    {...props}
  >
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
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-gray-800 hover:text-primary transition-colors flex justify-between items-center text-sm sm:text-base"
          >
            {item.question}
            <svg className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedPosts, setSavedPosts] = useState(new Set());
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const observerRef = useRef(null);

  const categories = [
    { name: 'All', icon: Globe, count: 32 },
    { name: 'For Organizations', icon: Building, count: 15 },
    { name: 'For Professionals', icon: User, count: 12 },
    { name: 'Industry Insights', icon: TrendingUpIcon, count: 5 }
  ];

  const subCategories = {
    'For Organizations': [
      { name: 'RPO Best Practices', icon: Briefcase },
      { name: 'Talent Acquisition Strategy', icon: Target },
      { name: 'Cost Optimization in Recruitment', icon: BarChart3 },
      { name: 'Employer Branding for Hiring', icon: Award },
      { name: 'Recruitment Technology', icon: Zap }
    ],
    'For Professionals': [
      { name: 'Career Development & Growth', icon: TrendingUp },
      { name: 'Interview Tips & Techniques', icon: UsersIcon },
      { name: 'Resume & LinkedIn Optimization', icon: FileText },
      { name: 'U.S. IT Market Trends', icon: Rocket },
      { name: 'Contract Negotiation Strategies', icon: Briefcase }
    ],
    'Industry Insights': [
      { name: 'Recruitment Trends', icon: TrendingUpIcon },
      { name: 'Talent Acquisition Market Analysis', icon: BarChart3 },
      { name: 'Workforce Dynamics', icon: Users },
      { name: 'Technology & Innovation in Hiring', icon: Lightbulb }
    ]
  };

  const posts = [
    {
      id: 1,
      title: 'The Future of RPO: Emerging Technologies & Workforce Dynamics',
      excerpt: 'Discover how emerging technologies like AI and automation are revolutionizing recruitment process outsourcing and talent acquisition strategies.',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'For Organizations',
      subCategory: 'RPO Best Practices',
      views: '1.2K',
      likes: 89,
      comments: 12,
      featured: true,
      author: {
        name: 'Sarah Chen',
        role: 'Head of RPO Strategy'
      }
    },
    {
      id: 2,
      title: 'Stand Out in the U.S. IT Market: Essential Tips for Contract Professionals',
      excerpt: 'Essential tips and career strategies for IT professionals looking to differentiate themselves and land high-value contracts through effective career support in the competitive U.S. IT market.',
      date: 'March 10, 2025',
      readTime: '7 min read',
      category: 'For Professionals',
      subCategory: 'U.S. IT Market Trends',
      views: '2.4K',
      likes: 156,
      comments: 23,
      featured: true,
      author: {
        name: 'Mike Rodriguez',
        role: 'Career Advisor'
      }
    },
    {
      id: 3,
      title: 'The Power of Global Talent Sourcing: Local Expertise Meets Global Reach',
      excerpt: 'Learn about the strategic advantages of combining local recruitment expertise with global talent acquisition capabilities for faster, better hiring through RPO services.',
      date: 'March 5, 2025',
      readTime: '6 min read',
      category: 'For Organizations',
      subCategory: 'Talent Acquisition Strategy',
      views: '1.8K',
      likes: 67,
      comments: 8,
      featured: true,
      author: {
        name: 'Emily Watson',
        role: 'Global Talent Director'
      }
    },
    {
      id: 4,
      title: 'RPO Best Practices: Optimizing Your Talent Acquisition Pipeline',
      excerpt: 'Learn how to streamline your recruitment process and improve hiring outcomes with proven RPO strategies and methodologies.',
      date: 'February 28, 2025',
      readTime: '8 min read',
      category: 'For Organizations',
      subCategory: 'RPO Best Practices',
      views: '3.1K',
      likes: 234,
      comments: 31,
      author: {
        name: 'David Kim',
        role: 'RPO Specialist'
      }
    },
    {
      id: 5,
      title: 'Mastering Contract Negotiation: Strategies for IT Professionals',
      excerpt: 'Essential negotiation tactics and strategies for IT contractors to secure better rates and contract terms in the competitive U.S. market.',
      date: 'February 22, 2025',
      readTime: '6 min read',
      category: 'For Professionals',
      subCategory: 'Contract Negotiation Strategies',
      views: '1.5K',
      likes: 78,
      comments: 14,
      author: {
        name: 'Lisa Thompson',
        role: 'Career Coach'
      }
    },
    {
      id: 6,
      title: 'AI in Recruitment: Transforming Talent Acquisition',
      excerpt: 'How artificial intelligence is revolutionizing the recruitment landscape and what it means for both organizations and job seekers.',
      date: 'February 15, 2025',
      readTime: '5 min read',
      category: 'Industry Insights',
      subCategory: 'Technology & Innovation in Hiring',
      views: '2.2K',
      likes: 145,
      comments: 19,
      author: {
        name: 'Alex Turner',
        role: 'Technology Analyst'
      }
    },
    {
      id: 7,
      title: 'Building a Powerful Employer Brand for Talent Attraction',
      excerpt: 'Strategies for creating an employer brand that attracts top talent and reduces time-to-hire in competitive markets.',
      date: 'February 10, 2025',
      readTime: '4 min read',
      category: 'For Organizations',
      subCategory: 'Employer Branding for Hiring',
      views: '1.9K',
      likes: 98,
      comments: 11,
      author: {
        name: 'Rachel Green',
        role: 'Employer Brand Strategist'
      }
    },
    {
      id: 8,
      title: 'LinkedIn Optimization for IT Professionals',
      excerpt: 'Complete guide to optimizing your LinkedIn profile to attract recruiters and land your next contract role in the U.S. market.',
      date: 'February 5, 2025',
      readTime: '5 min read',
      category: 'For Professionals',
      subCategory: 'Resume & LinkedIn Optimization',
      views: '2.7K',
      likes: 167,
      comments: 22,
      author: {
        name: 'James Wilson',
        role: 'Digital Presence Expert'
      }
    }
  ];

  // Interactive functions
  const toggleSavePost = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleLikePost = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const featuredPosts = posts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'All' 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.subCategory.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts.filter(post => 
        post.category === activeCategory &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
         post.subCategory.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, [filteredPosts]);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary text-white pt-16 md:pt-20">
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
          <div className="space-y-4 sm:space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
              <div className="flex items-center gap-1">
                {/* <Sparkles className="h-4 w-4 text-secondary" /> */}
                <span className="text-white/90 text-xs font-medium">
                  Expert Insights
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Novotion Insights
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4">
              Where recruitment innovation meets career transformation. Expert perspectives on talent acquisition that drive success in today's dynamic hiring landscape.
            </p>

            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto mt-8 px-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4 group-focus-within:text-secondary transition-all" />
                
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search insights, trends, and career advice..."
                  className="w-full pl-12 pr-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all duration-300 text-sm"
                />
              </div>
            </div> */}

            {/* Quick Stats */}
            <div className="flex justify-center gap-6 pt-6">
              {[
                { number: '32+', label: 'Articles' },
                { number: '50K+', label: 'Readers' },
                { number: '95%', label: 'Engagement' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="font-semibold text-sm">Welcome to Our Blog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
              Your Go-To Resource for Recruitment & Career Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to the Novotion blog - your comprehensive resource for insights, strategies, and thought leadership in recruitment and career development.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're a hiring manager looking to optimize your talent acquisition strategy through RPO services or an IT professional navigating the U.S. contract market with our career support, we've got you covered.
            </p>
            <p className="text-gray-600 font-semibold mt-6">
              Stay ahead. Stay informed. Stay inspired in recruitment and career growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">

            <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              
              <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full mb-4 sm:mb-6">
                {/* <Star className="h-4 w-4 text-secondary" /> */}
                <span className="font-semibold text-sm">Featured Articles</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Must-Read Insights
              </h2>

              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                Discover our most impactful articles on RPO services, career support, and talent acquisition innovation.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {featuredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className={`animate-on-scroll border-l-4 border-l-primary hover-lift`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0 overflow-hidden">
                    {/* Post Image */}
                    <div className="relative h-48 bg-primary overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold">
                          {post.subCategory}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={() => toggleSavePost(post.id)}
                          className="bg-white/90 p-2 rounded-lg hover:scale-110 transition-transform"
                        >
                          {savedPosts.has(post.id) ? (
                            <BookmarkCheck className="h-4 w-4 text-primary" />
                          ) : (
                            <Bookmark className="h-4 w-4 text-gray-600" />
                          )}
                        </button>
                        <button className="bg-white/90 p-2 rounded-lg hover:scale-110 transition-transform">
                          <Share2 className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>

                      {/* Author */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full border border-white/30"></div>
                        <div>
                          <div className="text-white font-semibold text-sm">
                            {post.author.name}
                          </div>
                          <div className="text-white/70 text-xs">
                            {post.author.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Block */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 hover:text-primary transition-colors leading-tight mb-2 line-clamp-2">
                          <Link href="#">
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Footer Meta */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                        
                        {/* Left Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Right CTA */}
                        <Link href="#">
                          <Button className="group btn-primary px-4 py-2 rounded-lg text-sm">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Explore by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive into specialized content tailored for organizations, professionals, and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(subCategories).map(([category, subCats], categoryIndex) => (
              <div key={category} className="animate-on-scroll" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <Card className="h-full hover-lift border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {category === 'For Organizations' && <Building className="h-6 w-6 text-primary" />}
                        {category === 'For Professionals' && <User className="h-6 w-6 text-primary" />}
                        {category === 'Industry Insights' && <TrendingUpIcon className="h-6 w-6 text-primary" />}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {subCats.map((subCat, index) => {
                        const IconComponent = subCat.icon;
                        return (
                          <div key={subCat.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                            <IconComponent className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                            <span className="text-gray-700 group-hover:text-primary transition-colors">{subCat.name}</span>
                            <ChevronRight className="h-4 w-4 text-gray-300 ml-auto group-hover:text-primary transition-colors" />
                          </div>
                        );
                      })}
                    </div>

                    <Button 
                      onClick={() => setActiveCategory(category)}
                      variant="ghost" 
                      className="w-full mt-6 text-primary hover:text-primary-700 hover:bg-primary/5"
                    >
                      View All {category} Articles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8 lg:mb-12 max-w-7xl mx-auto animate-on-scroll">
            
            {/* Title */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                All Articles
              </h2>

              <p className="text-gray-600 max-w-2xl">
                Comprehensive collection of insights, guides, and thought leadership pieces covering recruitment, career support, and talent acquisition.
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="lg:hidden w-full">
              <Button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                variant="outline"
                className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3"
              >
                <span className="flex items-center gap-2">
                  <Menu className="h-4 w-4" />
                  Filter Categories
                </span>
                <ChevronRight className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
              </Button>
            </div>

            {/* Categories */}
            <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;

                  return (
                    <button
                      key={category.name}
                      onClick={() => {
                        setActiveCategory(category.name);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all 
                      ${activeCategory === category.name
                        ? 'btn-primary text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary border border-gray-200'} 
                      animate-on-scroll`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{category.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${activeCategory === category.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {displayedPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className={`animate-on-scroll group hover-lift border-l-4 border-l-primary`} 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0 overflow-hidden">
                  {/* Post Image */}
                  <div className="relative h-40 bg-primary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-xs font-semibold">
                        {post.subCategory}
                      </span>
                    </div>

                    {/* Save Button */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all">
                      <button
                        onClick={() => toggleSavePost(post.id)}
                        className="bg-white/90 p-2 rounded-lg shadow-md hover:scale-110 transition-transform"
                      >
                        {savedPosts.has(post.id) ? (
                          <BookmarkCheck className="h-4 w-4 text-primary" />
                        ) : (
                          <Bookmark className="h-4 w-4 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Blog Content Box */}
                  <div className="p-6 space-y-4">
                    
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      <Link href="#">
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                      
                      {/* Left Meta */}
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date.split(' ').slice(0, 2).join(' ')}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Read CTA */}
                      <Link href="#">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="group/btn text-primary hover:text-primary-700 p-0 h-auto font-semibold hover:translate-x-1 transition-transform text-sm"
                        >
                          Read More
                          <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {filteredPosts.length > visiblePosts && (
            <div className="text-center mt-12 animate-on-scroll">
              <Button
                onClick={loadMore}
                size="lg"
                className="btn-primary px-8 py-3 rounded-lg font-semibold text-sm"
              >
                Load More Articles
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="bg-primary rounded-xl p-8 text-white text-center max-w-4xl mx-auto relative overflow-hidden animate-on-scroll">
            
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                {/* <Zap className="h-4 w-4 text-secondary" /> */}
                <span className="text-white/90 text-sm font-semibold">
                  Never Miss an Insight
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Join 50,000+ Professionals
              </h2>

              {/* Description */}
              <p className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                Receive our expert insights on recruitment trends, career development, and talent acquisition innovations.
              </p>

              {/* Email Input + CTA */}
              {/* <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm text-sm"
                />

                <Button className="btn-secondary px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div> */}

                {/* Email Input + CTA */}
  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Enter your professional email"
      className={`flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground 
                 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary 
                 shadow-sm text-sm`}
    />

    <Button
      variant="secondary"
      className="px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap"
    >
      Subscribe Now
    </Button>
  </div>

              <p className="text-white/60 text-xs mt-4">
                No spam. Unsubscribe anytime. Professional recruitment and career content only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Suggestion CTA */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <Card className="border border-primary/20 bg-white/50 backdrop-blur-sm">
              <CardContent className="py-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  {/* <Lightbulb className="h-4 w-4" /> */}
                  <span className="font-semibold text-sm">Share Your Ideas</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                  Have a Topic You'd Like Us to Cover?
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  We're always looking for fresh perspectives on recruitment, RPO services, and career support. Let us know what you'd like to learn more about.
                </p>
                <Link href="/contact#contact-form">
                <Button className="btn-primary px-8 py-3 rounded-lg font-semibold text-sm">
                  Suggest a Topic
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeInUp 0.4s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .blog-card:hover {
          transform: translateY(-4px);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </div>
  );
};

export default Blog;