'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ClockIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const comparisonData = [
  {
    category: 'Availability',
    traditional: 'Limited by office hours',
    ai: '24/7 instant access',
    icon: ClockIcon,
  },
  {
    category: 'Accessibility',
    traditional: 'Location dependent',
    ai: 'Available anywhere',
    icon: GlobeAltIcon,
  },
  {
    category: 'Cost',
    traditional: 'Higher per-session fees',
    ai: 'Affordable subscription',
    icon: CurrencyDollarIcon,
  },
  {
    category: 'Engagement',
    traditional: 'Weekly sessions',
    ai: 'Continuous support',
    icon: UserGroupIcon,
  },
];

const statistics = [
  {
    value: 94,
    label: 'User Satisfaction',
    description: 'of children report positive experience',
    icon: HeartIcon,
    color: 'text-rose-600',
  },
  {
    value: 89,
    label: 'Improvement Rate',
    description: 'show measurable progress within 4 weeks',
    icon: ChartBarIcon,
    color: 'text-blue-600',
  },
  {
    value: 99.9,
    label: 'Safety Score',
    description: 'privacy and security compliance',
    icon: ShieldCheckIcon,
    color: 'text-green-600',
  },
  {
    value: 78,
    label: 'Early Detection',
    description: 'of potential concerns identified early',
    icon: SparklesIcon,
    color: 'text-purple-600',
  },
];

const TherapeuticBenefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    if (inView) {
      statistics.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60; // Update every 33ms
        const increment = stat.value / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts(prev => prev.map((count, i) => (i === index ? current : count)));
        }, duration / steps);
      });
    }
  }, [inView]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            The Benefits of AI-Powered Support
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comparing traditional therapy with our innovative AI approach
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Traditional Column */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Therapy</h3>
              <ul className="space-y-6">
                {comparisonData.map((item) => (
                  <li key={item.category} className="flex items-start">
                    <item.icon className="h-6 w-6 text-gray-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{item.category}</p>
                      <p className="mt-1 text-sm text-gray-600">{item.traditional}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Benefits Column */}
            <div className="p-8 bg-gradient-to-b from-indigo-50 to-white">
              <h3 className="text-lg font-semibold text-indigo-600 mb-4">Key Differences</h3>
              <ul className="space-y-6">
                {comparisonData.map((item) => (
                  <li key={item.category} className="flex items-start">
                    <item.icon className="h-6 w-6 text-indigo-600 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-600">{item.category}</p>
                      <p className="mt-1 text-sm text-gray-900">Enhanced Flexibility</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Column */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Powered Support</h3>
              <ul className="space-y-6">
                {comparisonData.map((item) => (
                  <li key={item.category} className="flex items-start">
                    <item.icon className="h-6 w-6 text-green-500 mt-1" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-500">{item.category}</p>
                      <p className="mt-1 text-sm text-gray-600">{item.ai}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <div ref={ref} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-lg bg-gray-50 ${stat.color.replace('text-', 'bg-').replace('600', '100')} mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {Math.round(counts[index])}%
                </p>
                <h4 className="text-lg font-semibold text-gray-900">{stat.label}</h4>
                <p className="mt-1 text-sm text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Source Citation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-sm text-gray-500 text-center mt-8"
        >
          *Statistics based on internal user data and independent research studies
        </motion.p>
      </div>
    </section>
  );
};

export default TherapeuticBenefits; 