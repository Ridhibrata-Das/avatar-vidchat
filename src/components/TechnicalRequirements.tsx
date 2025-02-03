'use client';

import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  TrashIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const browserSupport = [
  {
    name: 'Chrome',
    version: 'Recent versions',
    status: 'full',
  },
  {
    name: 'Firefox',
    version: 'Recent versions',
    status: 'full',
  },
  {
    name: 'Safari',
    version: 'Recent versions',
    status: 'full',
  },
  {
    name: 'Edge',
    version: 'Recent versions',
    status: 'full',
  },
  {
    name: 'Other browsers',
    version: 'May vary',
    status: 'limited',
  },
];

const accessibilityFeatures = [
  'Easy-to-read text',
  'Simple navigation',
  'Clear color contrast',
  'Voice support',
  'Adjustable text size',
  'Helpful labels',
  'Easy keyboard use',
  'Image descriptions',
];

const dataUsagePoints = [
  {
    title: 'Information Care',
    description: 'We only collect information that helps us support you better.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Safe Storage',
    description: 'Your information is stored securely and protected.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Privacy First',
    description: 'We keep your information only as long as needed.',
    icon: UserGroupIcon,
  },
  {
    title: 'Your Control',
    description: 'You can request to remove your information anytime.',
    icon: TrashIcon,
  },
];

const TechnicalRequirements = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Using Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about getting started
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Browser Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <ComputerDesktopIcon className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Supported Browsers</h3>
            </div>

            <div className="space-y-4">
              {browserSupport.map((browser) => (
                <div
                  key={browser.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900">{browser.name}</span>
                    <span className="text-sm text-gray-500">{browser.version}</span>
                  </div>
                  {browser.status === 'full' ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  ) : (
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>* We recommend using an up-to-date browser for the best experience</p>
            </div>
          </motion.div>

          {/* Easy Access */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <DevicePhoneMobileIcon className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Easy Access</h3>
            </div>

            <div className="space-y-4">
              {accessibilityFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <p className="text-sm text-indigo-700">
                Designed to be easy for everyone to use
              </p>
            </div>
          </motion.div>

          {/* Data Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-900">Data Care</h3>
            </div>

            <div className="space-y-6">
              {dataUsagePoints.map((point) => (
                <div key={point.title} className="flex items-start space-x-3">
                  <point.icon className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">{point.title}</h4>
                    <p className="mt-1 text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-6">
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                Learn More About Your Privacy →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Need help getting started?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              We're here to help
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalRequirements; 