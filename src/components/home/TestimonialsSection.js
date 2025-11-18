// src/components/home/TestimonialsSection.js
'use client';
import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Phani Datta Pabisetty',
      role: 'QA Analyst at Ampup',
      content: '"Novotion\'s career support services didn\'t just help me land a job they transformed my entire approach to professional growth. Their interview preparation was exceptional. Within weeks, I had an offer from Ampup, and their post-placement support has been incredible."',
      rating: 5
    },
    {
      id: 2,
      name: 'Shajahan Shaik',
      role: 'Full Stack Developer at Amazon Audible',
      content: '"From the first resume optimization session to my final interview at Amazon Audible, Novotion was there. My consultant worked tirelessly with me, sharpening my skills and building my confidence. Their career coaching approach made all the difference."',
      rating: 5
    },
    {
      id: 3,
      name: 'Dixit Gupta Garlapati',
      role: 'DevOps Engineer at Meta',
      content: '"The Novotion team understands what top companies like Meta look for in talent acquisition. Their trainers are real industry experts who know how to position you for success through strategic interview preparation."',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!mounted) {
    return (
      <section className="min-h-[60vh] flex items-center bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-48 mx-auto mb-6"></div>
          <div className="h-12 bg-gray-300 rounded w-72 mx-auto mb-10"></div>
          <div className="max-w-2xl mx-auto">
            <div className="h-32 bg-gray-300 rounded-lg mb-6"></div>
            <div className="h-4 bg-gray-300 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] flex items-center bg-gray-50 relative py-12 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium mb-6 shadow-sm">
            Success Stories
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results. Real People.
            <span className="block text-primary">
              Real Impact.
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our support
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 relative">
            
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Quote className="h-4 w-4 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                {testimonials[currentTestimonial].content}
              </p>
            </div>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-primary font-medium">
                {testimonials[currentTestimonial].role}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm">
              Join thousands of professionals who have advanced their careers with Novotion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;