import { clsx } from "clsx";

interface OptionCardProps {
  emoji?: string;
  title: string;
  subtitle?: string;
  detail?: string;
  badge?: string;
  selected?: boolean;
  onClick: () => void;
}

export default function OptionCard({
  emoji,
  title,
  subtitle,
  detail,
  badge,
  selected = false,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative w-full rounded-2xl border-2 p-4 text-left transition-all",
        selected
          ? "border-navy bg-navy/5 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-400"
      )}
    >
      {badge && (
        <span className="absolute top-3 right-3 rounded-full bg-gold/20 px-2 py-0.5 text-xs font-semibold text-gold-dark">
          {badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        {emoji && (
          <span className="text-2xl leading-none mt-0.5">{emoji}</span>
        )}
        <div>
          <p className="font-semibold text-navy">{title}</p>
          {subtitle && (
            <p className="mt-0.5 text-sm font-medium text-gray-600">{subtitle}</p>
          )}
          {detail && (
            <p className="mt-1 text-xs text-gray-400">{detail}</p>
          )}
        </div>
      </div>
    </button>
  );
}
