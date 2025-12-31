/**
 * Guide Dropdown Component
 * Dropdown menu for usage guides
 */

'use client';

import { FileText, HelpCircle, ClipboardCheck, CreditCard } from 'lucide-react';

interface GuideDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const guideItems = [
  {
    id: 'usage',
    icon: <FileText className="w-6 h-6" />,
    title: 'ご利用ガイド',
    description: 'トランクルームの使い方について',
    link: '/guide/usage',
  },
  {
    id: 'contract',
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'ご契約の流れ',
    description: '申し込みから契約完了まで',
    link: '/contract-flow',
  },
  {
    id: 'payment',
    icon: <CreditCard className="w-6 h-6" />,
    title: 'お支払い方法',
    description: '利用可能なお支払い方法',
    link: '/guide/payment',
  },
  {
    id: 'faq',
    icon: <HelpCircle className="w-6 h-6" />,
    title: 'よくあるご質問',
    description: 'お客様からよくいただく質問',
    link: '/faq',
  },
];

export function GuideDropdown({ isOpen, onClose }: GuideDropdownProps) {
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
          <h2 className="text-2xl font-bold mb-8 text-center">ご利用ガイド</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {guideItems.map(item => (
              <a
                key={item.id}
                href={item.link}
                className="group cursor-pointer hover:shadow-lg transition-all rounded-lg p-6 bg-white border hover:border-primary"
                onClick={onClose}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
