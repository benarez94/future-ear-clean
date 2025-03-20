
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Marie Dubois",
      avatar: "/images/testimonial-1.jpg",
      role: "Regular User",
      content: "I constantly had issues with earwax buildup and recurring ear infections. Since using VisioEar, I've been able to clean my ears effectively and safely. The camera allows me to see exactly what I'm doing - it's revolutionary!",
      rating: 5
    },
    {
      name: "Thomas Martin",
      avatar: "/images/testimonial-2.jpg",
      role: "Father",
      content: "My children often have ear problems, and it was difficult to see what was going on inside. VisioEar now allows us to monitor the condition of their ears and share images with our doctor during consultations. An essential tool!",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      avatar: "/images/testimonial-3.jpg",
      role: "Swimming Instructor",
      content: "As a professional swimmer, water trapped in my ears was a constant problem. VisioEar has allowed me to check and clean my ears after each training session. I recommend it to all my students!",
      rating: 4
    },
    {
      name: "Jean Dupont",
      avatar: "/images/testimonial-4.jpg",
      role: "ENT Physician",
      content: "As a healthcare professional, I recommend VisioEar to my patients who want to maintain good ear hygiene. The device allows for clear visualization and precise cleaning, which significantly reduces the risk of damaging the ear canal.",
      rating: 5
    },
    {
      name: "Émilie Bernard",
      avatar: "/images/testimonial-5.jpg",
      role: "Mother of Two",
      content: "My children hated cleaning their ears until I bought VisioEar. Now they find it fascinating to see inside their ears on my phone screen. An excellent way to teach them the importance of personal hygiene!",
      rating: 5
    },
    {
      name: "Lucas Moreau",
      avatar: "/images/testimonial-6.jpg",
      role: "Sound Engineer",
      content: "In my profession, having clean ears is essential. VisioEar helps me maintain excellent ear hygiene, which enhances my auditory perception. The camera quality is impressive and the app is very intuitive.",
      rating: 5
    }
  ];
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Handle swipe on mobile
  useEffect(() => {
    const element = carouselRef.current;
    if (!element || !isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        nextTestimonial();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        prevTestimonial();
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchmove', handleTouchMove);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Testimonials
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the experiences of people who have transformed their ear hygiene with VisioEar
          </p>
        </motion.div>

        {isMobile ? (
          <div className="mt-6">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="glass-card rounded-2xl overflow-hidden p-6 shadow-lg border border-white/60 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 italic mb-2">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="relative" ref={carouselRef}>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <motion.div
              className="relative z-10 glass-card rounded-3xl overflow-hidden p-8 md:p-12 shadow-xl border border-white/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute top-8 right-8 text-medical/20">
                <Quote className="h-24 w-24" />
              </div>
              
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="relative">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-2xl p-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8">
                        "{testimonials[activeIndex].content}"
                      </blockquote>
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold">{testimonials[activeIndex].name}</h4>
                        <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-1 flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                              index === activeIndex ? 'bg-medical' : 'bg-gray-300'
                            }`}
                            aria-label={`Voir le témoignage ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={prevTestimonial}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Témoignage précédent"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button 
                          onClick={nextTestimonial}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Témoignage suivant"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        <motion.div 
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { number: '10k+', label: 'Satisfied Customers' },
            { number: '97%', label: 'Satisfaction Rate' },
            { number: '50+', label: 'Countries Served' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 md:p-8 text-center border border-white/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-medical mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
