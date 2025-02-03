'use client';

import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';
import { HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block text-indigo-600">AI-Powered</span>
              Child Mental Health Support
              <span className="block text-indigo-600">Available 24/7</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Empowering children's mental well-being through safe, engaging, and personalized AI-driven assessments and support - all in a secure, child-friendly environment.
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <a href="/video-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Free Assessment
                </motion.button>
              </a>
              
              <div className="flex items-center text-sm text-gray-500">
                <HeartIcon className="h-5 w-5 text-rose-500 mr-2" />
                Made with Care
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl bg-gray-900/5 p-2"
          >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-xl bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100">
                {/* Placeholder for video/avatar preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full bg-white/90 p-4 text-indigo-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white"
                  >
                    <PlayIcon className="h-12 w-12" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-4 flex justify-center space-x-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm shadow-md"
              >
                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                <span className="font-medium text-gray-900">Safe Environment</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2 rounded-full bg-white px-4 py-2 text-sm shadow-md"
              >
                <HeartIcon className="h-5 w-5 text-rose-500" />
                <span className="font-medium text-gray-900">Compassionate Support</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 