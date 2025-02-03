'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const SupportOverlay = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOnline] = useState(true); // In real app, this would be from a backend service

  return (
    <>
      {/* Crisis Hotline Ribbon */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-500 text-white py-2 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-sm sm:text-base">
            <PhoneIcon className="h-5 w-5" />
            <span className="font-medium">24/7 Crisis Support:</span>
            <a
              href="tel:1-800-273-8255"
              className="font-bold hover:underline"
            >
              1-800-273-8255
            </a>
            <span className="hidden sm:inline">- We're here to help</span>
          </div>
        </div>
      </div>

      {/* Live Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-indigo-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <UserCircleIcon className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-white font-medium">Support Chat</h3>
                      <p className="text-indigo-100 text-sm">
                        {isOnline ? 'Counselor available' : 'Leave a message'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-white hover:text-indigo-100"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Chat Content */}
              <div className="p-4 bg-gray-50 h-80">
                <div className="text-center text-gray-500 text-sm">
                  Chat with a counselor for immediate support.
                  All conversations are private and secure.
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button className="rounded-full bg-indigo-600 p-2 text-white hover:bg-indigo-700">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`rounded-full p-4 text-white shadow-lg ${
            isOnline ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <span className="sr-only">Open support chat</span>
        </motion.button>
      </div>
    </>
  );
};

export default SupportOverlay;