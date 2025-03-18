
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
      role: "Utilisatrice régulière",
      content: "J'avais constamment des problèmes d'accumulation de cérumen et des infections d'oreille récurrentes. Depuis que j'utilise VisioEar, je peux nettoyer mes oreilles efficacement et en toute sécurité. La caméra me permet de voir exactement ce que je fais, c'est révolutionnaire !",
      rating: 5
    },
    {
      name: "Thomas Martin",
      avatar: "/images/testimonial-2.jpg",
      role: "Père de famille",
      content: "Mes enfants ont souvent des problèmes d'oreilles et il était difficile de voir ce qui se passait à l'intérieur. VisioEar nous permet maintenant de surveiller l'état de leurs oreilles et de partager les images avec notre médecin lors des consultations. Un outil indispensable !",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      avatar: "/images/testimonial-3.jpg",
      role: "Professeur de natation",
      content: "En tant que nageuse professionnelle, l'eau retenue dans mes oreilles était un problème constant. VisioEar m'a permis de vérifier et nettoyer mes oreilles après chaque entraînement. Je le recommande à tous mes élèves !",
      rating: 4
    },
    {
      name: "Jean Dupont",
      avatar: "/images/testimonial-4.jpg",
      role: "Médecin ORL",
      content: "En tant que professionnel de la santé, je recommande VisioEar à mes patients qui souhaitent maintenir une bonne hygiène auriculaire. L'appareil permet une visualisation claire et un nettoyage précis, ce qui réduit considérablement les risques d'endommager le canal auditif.",
      rating: 5
    },
    {
      name: "Émilie Bernard",
      avatar: "/images/testimonial-5.jpg",
      role: "Mère de deux enfants",
      content: "Mes enfants détestaient nettoyer leurs oreilles jusqu'à ce que j'achète VisioEar. Maintenant, ils trouvent cela fascinant de voir l'intérieur de leurs oreilles sur l'écran de mon téléphone. Un excellent moyen de leur apprendre l'importance de l'hygiène personnelle !",
      rating: 5
    },
    {
      name: "Lucas Moreau",
      avatar: "/images/testimonial-6.jpg",
      role: "Ingénieur du son",
      content: "Dans mon métier, avoir des oreilles propres est essentiel. VisioEar m'aide à maintenir une excellente hygiène auriculaire, ce qui améliore ma perception auditive. La qualité de la caméra est impressionnante et l'application est très intuitive.",
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
    <section id="témoignages" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Témoignages
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold">Ce que nos clients disent</h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de personnes qui ont transformé leur hygiène auriculaire grâce à VisioEar
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
            { number: '10k+', label: 'Clients satisfaits' },
            { number: '97%', label: 'Taux de satisfaction' },
            { number: '50+', label: 'Pays desservis' }
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
