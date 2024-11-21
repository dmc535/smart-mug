import React from 'react';
import { BeakerIcon, WifiIcon, CloudIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Smart Temperature Control',
    description: 'Advanced sensors maintain your perfect drinking temperature for hours',
    icon: BeakerIcon,
  },
  {
    name: 'Local Updates Display',
    description: 'Beautiful LCD screen shows weather, events, and community updates',
    icon: WifiIcon,
  },
  {
    name: 'Handcrafted Design',
    description: 'Premium wooden construction with elegant modern display integration',
    icon: CloudIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Premium Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Technology Meets Tradition
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary">
                  <div className="rounded-lg bg-wood p-2">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}