/**
 * Guide Dropdown Component
 * Dropdown menu for usage guides
 */

'use client';

import Link from 'next/link';
import { ArrowRightRounded } from '../icons';

interface GuideDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  subMenu: { href: string; label: string }[];
}

export function GuideDropdown({
  isOpen,
  onClose,
  subMenu,
}: GuideDropdownProps) {
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
          {/* <h2 className="text-2xl font-bold mb-8 text-center">ご利用ガイド</h2> */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subMenu.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="group cursor-pointer transition-all rounded-lg py-10 bg-white"
                onClick={onClose}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <p className="flex items-center text-sm font-bold text-black group-hover:text-primary">
                    <ArrowRightRounded
                      className="inline-block"
                      width={16}
                      height={16}
                    />
                    &nbsp;
                    {item.label}
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
