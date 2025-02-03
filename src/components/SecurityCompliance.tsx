'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  UserGroupIcon,
  HeartIcon,
  KeyIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const securityFeatures = [
  {
    name: 'Privacy Focused',
    description: 'We prioritize protecting your information',
    icon: ShieldCheckIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Safe Environment',
    description: 'Creating a secure space for open conversations',
    icon: HeartIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Family First',
    description: 'Designed with children and parents in mind',
    icon: UserGroupIcon,
    color: 'bg-purple-500',
  },
];

const parentalFeatures = [
  {
    title: 'Conversation History',
    description: 'Review past interactions and progress',
  },
  {
    title: 'Growth Insights',
    description: 'Understanding your child\'s journey',
  },
  {
    title: 'Family Settings',
    description: 'Customize the experience for your family',
  },
  {
    title: 'Privacy Options',
    description: 'Control how information is stored',
  },
];

const SecurityCompliance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Your Trust Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to creating a safe and supportive environment
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} bg-opacity-10 mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Privacy Details */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <LockClosedIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Our Commitment to Privacy</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <KeyIcon className="h-6 w-6 text-gray-400 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Secure Communication</h4>
                <p className="text-gray-600 mt-1">Your conversations are kept private and protected</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <EyeIcon className="h-6 w-6 text-gray-400 mt-1" />
              <div>
                <h4 className="font-medium text-gray-900">Thoughtful Design</h4>
                <p className="text-gray-600 mt-1">Built with privacy and safety in mind</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Family Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Family-Centered Features
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Supporting your family's mental health journey together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parentalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance; 