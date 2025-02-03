'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChatBubbleLeftRightIcon,
  FaceSmileIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Personalized Support",
    description: "Our AI companion adapts to each child's unique needs, providing a tailored and understanding experience",
    icon: FaceSmileIcon,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: "Safe Space",
    description: "A thoughtfully designed environment where children can express themselves freely and comfortably",
    icon: HeartIcon,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: "Child-Friendly Design",
    description: "Simple, engaging interface created with young minds in mind, making every interaction natural and fun",
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: "Always Here",
    description: "Continuous support whenever needed, providing a reliable presence for emotional well-being",
    icon: SparklesIcon,
    color: 'bg-rose-100 text-rose-600',
  },
];

const processSteps = [
  'Friendly Chat',
  'Understanding You',
  'Growing Together',
  'Ongoing Support',
];

const ValueProposition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Why Choose Our Platform?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Empowering mental health support with cutting-edge AI technology
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
                <div className={`rounded-xl ${feature.color} p-3 inline-block`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Our Assessment Process
          </motion.h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2" />
            
            <div className="relative grid grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-medium">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-900 text-center">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition; 