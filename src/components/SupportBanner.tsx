'use client';

import { PhoneIcon } from '@heroicons/react/24/outline';

const SupportBanner = () => {
  return (
    <div className="bg-red-600 text-white py-1.5 text-sm font-medium">
      <div className="flex items-center justify-center gap-x-2">
        <PhoneIcon className="h-4 w-4" />
        <span>24/7 Crisis Support:</span>
        <a href="tel:1-800-273-8255" className="hover:underline">1-800-273-8255</a>
        <span className="mx-2">-</span>
        <span>We're here to help</span>
      </div>
    </div>
  );
};

export default SupportBanner; 