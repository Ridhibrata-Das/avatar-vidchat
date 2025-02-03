'use client';

import { motion } from 'framer-motion';
import {
  UserIcon,
  FingerPrintIcon,
  VideoCameraIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'User Onboarding',
    description: 'Quick age verification and guardian consent process',
    icon: UserIcon,
    details: [
      'Age-appropriate verification',
      'Parental consent form',
      'Account creation',
    ],
  },
  {
    title: 'Device Setup',
    description: 'Secure access to necessary device features',
    icon: FingerPrintIcon,
    details: [
      'Camera permissions',
      'Microphone access',
      'Connection test',
    ],
  },
  {
    title: 'Session Recording',
    description: 'Privacy-focused interaction recording',
    icon: VideoCameraIcon,
    details: [
      'Encrypted recording',
      'Data protection',
      'Secure storage',
    ],
  },
  {
    title: 'Results & Insights',
    description: 'Comprehensive assessment delivery',
    icon: ChartBarIcon,
    details: [
      'Detailed analysis',
      'Progress tracking',
      'Recommendations',
    ],
  },
];

const requirements = [
  {
    title: 'Privacy Compliance',
    description: 'HIPAA and COPPA compliant data handling',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Documentation',
    description: 'Clear consent and privacy documentation',
    icon: DocumentTextIcon,
  },
  {
    title: 'Time Commitment',
    description: '15-20 minute initial assessment',
    icon: ClockIcon,
  },
  {
    title: 'Progress Tracking',
    description: 'Continuous monitoring and updates',
    icon: ClipboardDocumentCheckIcon,
  },
];

const AssessmentFlow = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Simple Assessment Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined, secure, and child-friendly assessment experience
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-indigo-600">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  {/* Step Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + detailIndex * 0.1 }}
                        className="text-sm text-gray-500"
                      >
                        • {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Assessment Requirements
          </h3>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="relative group"
              >
                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="inline-flex p-3 rounded-lg bg-indigo-50 mb-4">
                    <req.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{req.title}</h4>
                  <p className="text-sm text-gray-600">{req.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Start Assessment Process
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentFlow; 