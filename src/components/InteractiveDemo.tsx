'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  FaceSmileIcon,
  HeartIcon,
  AdjustmentsHorizontalIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

const mockChat = [
  {
    type: 'ai',
    message: "Hi there! I'm your friendly AI companion. How are you feeling today?",
    emotion: 'happy',
  },
  {
    type: 'user',
    message: "I'm feeling a bit nervous about school...",
    emotion: 'anxious',
  },
  {
    type: 'ai',
    message: "I understand how you feel. School can be challenging sometimes. Would you like to talk about what's making you nervous?",
    emotion: 'empathetic',
  },
];

const avatarCustomizations = [
  { name: 'Friendly', color: 'bg-blue-100 text-blue-600' },
  { name: 'Calm', color: 'bg-green-100 text-green-600' },
  { name: 'Playful', color: 'bg-purple-100 text-purple-600' },
  { name: 'Supportive', color: 'bg-rose-100 text-rose-600' },
];

const InteractiveDemo = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedCustomization, setSelectedCustomization] = useState('Friendly');

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Experience Our AI Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI creates a safe and engaging environment for children
          </p>
        </motion.div>

        {/* Device Toggle */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex rounded-full bg-gray-100 p-1"
          >
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeDevice === 'desktop'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Switch to desktop view"
            >
              <ComputerDesktopIcon className="h-5 w-5 mr-2" />
              Desktop
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeDevice === 'mobile'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              aria-label="Switch to mobile view"
            >
              <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
              Mobile
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`relative ${
              activeDevice === 'mobile' ? 'max-w-sm mx-auto' : ''
            }`}
          >
            <div className={`relative rounded-2xl bg-white shadow-lg overflow-hidden ${
              activeDevice === 'mobile' ? 'p-4' : 'p-6'
            }`}>
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <FaceSmileIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Companion</h3>
                    <p className="text-sm text-gray-500">Always here to help</p>
                  </div>
                </div>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Adjust settings"
                >
                  <AdjustmentsHorizontalIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {mockChat.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-2xl px-4 py-2 max-w-sm ${
                        message.type === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full rounded-full border-gray-200 py-3 pl-4 pr-12 text-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-400 hover:text-gray-600"
                  aria-label="Send message"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Customization Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Personality Customization
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {avatarCustomizations.map((custom) => (
                  <button
                    key={custom.name}
                    onClick={() => setSelectedCustomization(custom.name)}
                    className={`relative rounded-xl border-2 p-4 transition-all ${
                      selectedCustomization === custom.name
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                    aria-label={`Select ${custom.name} personality`}
                  >
                    <div className={`inline-flex p-2 rounded-lg ${custom.color} mb-2`}>
                      <HeartIcon className="h-5 w-5" />
                    </div>
                    <p className="font-medium text-gray-900">{custom.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3">
                {[
                  'Age-appropriate responses',
                  'Emotion recognition',
                  'Adaptive conversation flow',
                  'Safe content filtering',
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="h-4 w-4 text-indigo-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo; 