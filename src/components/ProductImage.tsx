import React from 'react';

export default function ProductImage() {
  return (
    <div className="relative mt-12 lg:mt-0">
      <div className="absolute -inset-x-20 top-0 bg-primary/10 opacity-50 h-[500px] rounded-[50%] blur-3xl" />
      <img
        src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM1c3R0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--af60a9ff354190b8f7d677be4ee889e2583bebad/smartmug.png"
        alt="Yokel Smart Mug"
        className="relative w-full max-w-lg rounded-lg shadow-xl ring-1 ring-gray-400/10 sm:w-[400px] md:w-[500px] mx-auto"
      />
    </div>
  );
}