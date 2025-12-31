/**
 * Services Dropdown Component
 * Dropdown menu showing available services
 */

'use client';

import { Warehouse, Car, ParkingCircle } from 'lucide-react';
import Image from 'next/image';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    id: 'storage',
    icon: <Warehouse className="w-8 h-8" />,
    title: 'トランクルーム',
    description: '24時間365日利用可能な屋内型収納スペース',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    link: '/storage',
  },
  {
    id: 'garage',
    icon: <Car className="w-8 h-8" />,
    title: 'レンタルガレージ',
    description: 'バイク・車の保管に最適なガレージスペース',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    link: '/services/garage',
  },
  {
    id: 'parking',
    icon: <ParkingCircle className="w-8 h-8" />,
    title: '月極駐車場',
    description: '安心安全な月極駐車場サービス',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
    link: '/services/parking',
  },
];

export function ServicesDropdown({ isOpen, onClose }: ServicesDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dropdown Content */}
      <div className="absolute left-0 right-0 top-full bg-white shadow-2xl z-50 border-t-4 border-primary">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="container py-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            ルートの<span className="text-primary">3</span>つのサービス
          </h2>

          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map(service => (
              <a
                key={service.id}
                href={service.link}
                className="group cursor-pointer hover:shadow-xl transition-all rounded-lg overflow-hidden bg-white border"
                onClick={onClose}
              >
                <div className="relative h-40">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
