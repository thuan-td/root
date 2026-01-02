/**
 * Contract Flow Section Component
 *
 * Displays the contract process steps
 */

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContractStep } from '../types';

interface ContractFlowSectionProps {
  steps: ContractStep[];
}

export function ContractFlowSection({ steps }: ContractFlowSectionProps) {
  return (
    <section className="bg-red-50 dark:bg-gray-800 p-6 md:p-10 rounded-xl">
      <h2 className="text-xl font-bold mb-8 text-center md:text-left">
        ご契約の流れ
      </h2>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative">
        {steps.map((step, index) => (
          <>
            <div
              key={step.id}
              className="flex flex-col items-center text-center relative z-10 w-full md:w-auto"
            >
              {/* Step Badge */}
              {step.hasStepLabel && (
                <Badge className="bg-white dark:bg-gray-700 border border-red-200 text-red-500 rounded-full px-4 py-1 text-xs font-bold mb-3 shadow-sm">
                  ステップ {step.stepNumber.toString().padStart(2, '0')}
                </Badge>
              )}
              {!step.hasStepLabel && <div className="h-6 mb-3" />}

              {/* Icon */}
              <div className="w-20 h-20 bg-orange-50 dark:bg-gray-600 rounded-full flex items-center justify-center text-3xl text-orange-600 dark:text-orange-300 mb-2 shadow-sm">
                <i className={`fa-solid fa-${step.icon}`} />
              </div>

              {/* Title */}
              <div className="font-bold text-sm whitespace-pre-line">
                {step.title}
              </div>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="hidden md:block text-primary text-2xl pt-10">
                <i className="fa-solid fa-chevron-right" />
              </div>
            )}
          </>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-8 text-center">
        <Button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-lg transition text-sm">
          詳細はこちらから <i className="fa-solid fa-circle-arrow-right ml-1" />
        </Button>
      </div>
    </section>
  );
}
