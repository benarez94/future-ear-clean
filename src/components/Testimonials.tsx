
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    }
  ];
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="témoignages" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Ce que nos clients disent</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de personnes qui ont transformé leur hygiène auriculaire grâce à VisioEar
          </p>
        </motion.div>

        <div className="relative">
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
                  
                  <div className="flex space-x-2 justify-center md:justify-start">
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-8"
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
              className="glass-card rounded-2xl p-8 text-center border border-white/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-4xl font-bold text-medical mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
