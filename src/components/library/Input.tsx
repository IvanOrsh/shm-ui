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
    VariantProps<typeof input> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <div>
      <input className={twMerge(input({ className }))} {...props} />
    </div>
  );
};
