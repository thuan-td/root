'use client';

import type { ProfileStep } from '../types/profile.types';

interface StepIndicatorProps {
  currentStep: ProfileStep;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { number: 1 as ProfileStep, label: '会員情報の入力' },
    { number: 2 as ProfileStep, label: '入力内容の確認' },
    { number: 3 as ProfileStep, label: '変更の完了' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 px-4">
      {/* Container chính giữ các step */}
      <div className="relative flex items-start justify-between">
        {/* Thanh ngang giới hạn giữa Step 1 và Step cuối */}
        <div
          className="absolute top-5 bg-gray-300 h-[1px]"
          style={{
            left: `${100 / (steps.length * 2)}%`,
            right: `${100 / (steps.length * 2)}%`,
          }}
        ></div>

        {steps.map(step => {
          const isActive = currentStep === step.number;

          return (
            <div
              key={step.number}
              className="flex flex-col items-center flex-1"
            >
              {/* Vòng tròn số */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white z-10 transition-colors ${
                  isActive ? 'bg-[#3AB091]' : 'bg-[#C9CCCC]'
                }`}
              >
                {step.number}
              </div>

              {/* Nhãn văn bản */}
              <span
                className={`mt-3 text-[12px] sm:text-[13px] whitespace-nowrap ${
                  isActive ? 'text-gray-800 font-bold' : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
