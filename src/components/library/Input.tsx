import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const input = cva(
  [
    "block",
    "w-full",
    "rounded-md",
    "border-theme-200",
    "px-4",
    "py-3",
    "text-sm",
    "focus:border-theme-500",
    "focus:ring-theme-500",

    "dark:border-gray-700",
    "dark:bg-theme-900",

    "dark:text-theme-50",

    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {},
    defaultVariants: [],
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  label?: string;
  description?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  description,
  ...props
}) => {
  return (
    <div className="max-w-sm space-y-3">
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}
      <input className={twMerge(input({ className }))} {...props} />
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
