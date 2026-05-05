interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = totalSteps <= 1 ? 100 : (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full">
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-white transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1.5 text-right text-xs text-white/50">
        Step {currentStep + 1} of {totalSteps}
      </p>
    </div>
  );
}
