interface ProgressStep {
  number: number;
  label: string;
}

interface RegisterProgressStepsProps {
  steps: ProgressStep[];
  currentStep: number;
}

export default function RegisterProgressSteps({
  steps,
  currentStep,
}: RegisterProgressStepsProps) {
  return (
    <div className="relative flex justify-center items-start mb-16 max-w-3xl mx-auto text-xs font-medium text-gray-500 dark:text-gray-400">
      <div className="absolute top-4 left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2 px-12"></div>

      {steps.map(step => (
        <div
          key={step.number}
          className="flex-1 flex flex-col items-center gap-2 group"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              step.number === currentStep
                ? 'bg-primary text-white shadow-md ring-4 ring-white dark:ring-background-dark'
                : 'bg-gray-300 dark:bg-gray-600 text-white'
            }`}
          >
            {step.number}
          </div>
          <span
            className={`text-center mt-1 ${
              step.number === currentStep ? 'font-bold text-primary' : ''
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
