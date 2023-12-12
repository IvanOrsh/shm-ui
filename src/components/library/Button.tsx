import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",

    "rounded-md",

    "focus:outline-none",
    "focus-visible:ring-4",
    "focus:ring-2",
    "focus:ring-offset-2",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-theme-600",
          "text-theme-50",

          "dark:bg-theme-800",

          "dark:hover:border-1",
          "dark:hover:border-theme-400",

          "hover:bg-theme-500",
          "dark:hover:bg-theme-900",
          "active:bg-theme-700",
          "focus-visible:bg-theme-600",

          "disabled:bg-theme-50",
          "disabled:bg-theme-200",
          "disabled:text-theme-400",

          "border",
          "border-transparent",
        ],

        secondary: [
          "bg-theme-base",
          "text-theme-600",

          "dark:bg-theme-900",
          "dark:text-theme-base",

          "border-2",
          "border-theme-400",

          "hover:bg-theme-100",
          "hover:border-theme-700",
          "dark:hover:bg-theme-600",
          "dark:hover:text-theme-50",
          "dark:hover:border-none",

          "active:bg-theme-200",

          "disabled:bg-theme-base",
          "disabled:border-theme-200",
          "disabled:text-theme-400",
        ],

        tertiary: [
          "bg-theme-base",
          "text-theme-600",

          "dark:bg-theme-900",
          "dark:text-theme-base",

          "hover:bg-theme-50",
          "dark:hover:text-theme-400",

          "active:bg-theme-100",

          "disabled:bg-theme-base",
          "disabled:border-theme-200",
          "disabled:text-theme-400",
        ],

        destructive: [
          "bg-red-500",
          "text-red-50",

          "dark:border-2",
          "dark:border-red-400",
          "dark:bg-theme-900",
          "dark:text-red-400",

          "hover:bg-red-600",

          "dark:hover:bg-red-500",
          "dark:hover:text-red-50",
          "dark:hover:border-none",

          "active:bg-red-700",

          "focus-visible:bg-red-500",

          "disabled:bg-red-400",
          "disabled:text-red-300",
        ],
      },
      size: {
        sm: ["text-sm", "py-1.5", "min-h-9", "px-3"],
        md: ["text-sm", "py-2", "min-h-10", "px-5"],
        lg: ["text-md", "py-2.5", "min-h-11", "px-5"],
        xl: ["text-md", "py-3", "min-h-12", "px-6"],
      },
      btnType: {
        button: "",
        icon: ["px-0", "rounded-full"],
      },
    },
    compoundVariants: [
      {
        btnType: "icon",
        size: "sm",
        class: "h-10 w-10",
      },
      {
        btnType: "icon",
        size: "md",
        class: "h-11 w-11",
      },
      {
        btnType: "icon",
        size: "lg",
        class: "h-12 w-12",
      },
      {
        btnType: "icon",
        size: "xl",
        class: "h-[52px] w-[52px]",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      btnType: "button",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  size,
  btnType,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(button({ intent, size, btnType, className }))}
      {...props}
    />
  );
};
