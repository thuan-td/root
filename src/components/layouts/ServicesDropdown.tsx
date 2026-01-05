/**
 * Services Dropdown Component
 * Dropdown menu showing available services
 */

'use client';

import Link from 'next/link';
import { ArrowRightRounded } from '@/components/icons';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  subMenu: {
    href: string;
    label: string;
    color: string;
    lineText: string;
    sublabel: string;
  }[];
}

export function ServicesDropdown({
  isOpen,
  onClose,
  subMenu,
}: ServicesDropdownProps) {
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
          {/* <h2 className="text-2xl font-bold mb-8 text-center">
            ルートの<span className="text-primary">3</span>つのサービス
          </h2> */}

          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subMenu.map(service => (
              <Link
                key={service.href}
                href={service.href}
                className="group cursor-pointer bg-white"
                onClick={onClose}
              >
                <div className="p-4">
                  <h3 className="font-black text-lg tracking-wide mb-5 relative w-fit">
                    {service.label}
                    <span
                      className={`absolute -bottom-2 left-0 right-0 p-0.5 text-[8px] leading-none text-white ${`bg-${service.color}`}`}
                    >
                      {service.lineText}
                    </span>
                  </h3>
                  <p className="flex items-center text-sm font-bold text-black group-hover:text-primary">
                    <ArrowRightRounded
                      className="inline-block"
                      width={16}
                      height={16}
                    />
                    &nbsp;
                    {service.sublabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
