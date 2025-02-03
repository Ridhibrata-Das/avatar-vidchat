'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Import the VideoChat component with no SSR
const VideoChat = dynamic(
  () => import('@/components/video-chat/VideoChat'),
  { ssr: false }
);

export default function VideoCallPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 pt-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">
            AI Assessment Session
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Have a supportive conversation with our AI companion
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <VideoChat />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>
            Your privacy is important to us. All conversations are private and secure.
            <br />
            You can end the session at any time by clicking the end call button.
          </p>
        </motion.div>
      </div>
    </main>
  );
} 