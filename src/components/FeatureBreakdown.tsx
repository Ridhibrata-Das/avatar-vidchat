'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaceSmileIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  SparklesIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const aiFeatures = [
  {
    title: 'Facial Recognition',
    description: 'Real-time emotion detection through advanced facial expression analysis',
    icon: FaceSmileIcon,
  },
  {
    title: 'Sentiment Analysis',
    description: 'Natural language processing to understand emotional context in conversations',
    icon: ChartBarIcon,
  },
  {
    title: 'Pattern Detection',
    description: 'Identifying behavioral patterns and emotional triggers over time',
    icon: DocumentChartBarIcon,
  },
];

const FeatureBreakdown = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Advanced AI Capabilities
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our platform leverages cutting-edge artificial intelligence to provide comprehensive mental health support for children.
              </p>
            </motion.div>

            <motion.dl
              ref={ref}
              className="mt-10 space-y-10"
            >
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-semibold leading-6 text-gray-900">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right Column - Interactive Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Main Feature Display */}
              <div className="relative rounded-2xl bg-gradient-to-b from-indigo-50 to-white p-8 shadow-lg">
                <div className="absolute right-4 top-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <SparklesIcon className="h-6 w-6 text-indigo-600" />
                  </motion.div>
                </div>

                {/* Data Flow Visualization */}
                <div className="relative mt-6 rounded-xl bg-white p-6 shadow-sm">
                  <div className="space-y-6">
                    {/* Processing Steps */}
                    <motion.div
                      className="flex items-center justify-between"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="flex items-center space-x-4">
                        <ArrowPathIcon className="h-5 w-5 text-indigo-600" />
                        <span className="text-sm font-medium text-gray-600">Processing Data</span>
                      </div>
                      <div className="h-2 w-24 rounded-full bg-indigo-100">
                        <motion.div
                          className="h-2 rounded-full bg-indigo-600"
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>

                    {/* Security Indicator */}
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                      <span>End-to-end encrypted processing</span>
                    </div>

                    {/* Results Preview */}
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="text-sm font-semibold text-gray-900">Analysis Results</h4>
                      <div className="mt-2 space-y-2">
                        {['Emotion Detection', 'Behavioral Patterns', 'Engagement Metrics'].map((item) => (
                          <div key={item} className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">{item}</span>
                            <div className="h-1.5 w-24 rounded-full bg-gray-200">
                              <motion.div
                                className="h-1.5 rounded-full bg-indigo-600"
                                initial={{ width: '0%' }}
                                animate={{ width: '75%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 -left-4 -bottom-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 opacity-50 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBreakdown; 