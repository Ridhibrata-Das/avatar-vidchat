'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const faqCategories = [
  {
    name: 'Getting Started',
    icon: QuestionMarkCircleIcon,
    questions: [
      {
        question: 'How does our support system work?',
        answer: 'Our AI companion creates a friendly, understanding environment where children can express their feelings and thoughts naturally.',
      },
      {
        question: 'Do parents need to be involved?',
        answer: 'Yes, we believe in family involvement. Parents will be part of the journey to ensure a supportive experience for their child.',
      },
      {
        question: 'Who is this designed for?',
        answer: 'Our platform is thoughtfully designed for children aged 8-17, with friendly interactions that adapt to different age groups.',
      },
    ],
  },
  {
    name: 'Privacy & Safety',
    icon: ShieldCheckIcon,
    questions: [
      {
        question: 'How do you protect conversations?',
        answer: 'We use strong security measures to keep all conversations private and safe. Only you and your family have access to your information.',
      },
      {
        question: 'Who can see the conversations?',
        answer: 'Only parents/guardians who are connected to the account can access the conversations and progress updates.',
      },
    ],
  },
  {
    name: 'Using the Platform',
    icon: ClockIcon,
    questions: [
      {
        question: 'How long are the conversations?',
        answer: 'Conversations typically last 15-20 minutes, but can be shorter or longer based on what feels comfortable.',
      },
      {
        question: 'How often should we use it?',
        answer: 'We suggest regular check-ins, but you can use the platform whenever your child feels they want someone to talk to.',
      },
    ],
  },
  {
    name: 'Help & Support',
    icon: UserGroupIcon,
    questions: [
      {
        question: 'What if we need immediate help?',
        answer: 'For immediate support, our crisis hotline is always available. In emergencies, please contact your local emergency services.',
      },
      {
        question: 'How can we get additional support?',
        answer: 'Our support team is here to help through chat. We can also guide you to local mental health resources when needed.',
      },
    ],
  },
];

const SupportResources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers and learn how we can support you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="px-6 py-4 flex items-center space-x-3 bg-gray-50">
                <category.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.name}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {category.questions.map((item) => (
                  <div
                    key={item.question}
                    className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                  >
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full text-left"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-base font-medium text-gray-900 pr-8">
                          {item.question}
                        </h4>
                        <ChevronDownIcon
                          className={`h-5 w-5 text-gray-500 transition-transform ${
                            expandedQuestions.includes(item.question)
                              ? 'transform rotate-180'
                              : ''
                          }`}
                        />
                      </div>
                    </button>
                    {expandedQuestions.includes(item.question) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 text-gray-600 text-sm"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportResources;