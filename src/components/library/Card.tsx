import { VariantProps, cva } from "class-variance-authority";
import {
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react";
import { LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const cardContainer = cva(
  [
    "rounded-xl",
    "border",
    "bg-white",
    "shadow-sm",
    "dark:border-gray-700",
    "dark:bg-theme-900",
    "dark:shadow-theme-700/[.7]",
  ],
  {
    variants: {
      widthLimit: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-full",
      },
    },
    defaultVariants: {
      widthLimit: "xs",
    },
  }
);

export interface CardContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContainer> {
  widthLimit?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}

export function CardContainer(props: CardContainerProps) {
  const { className, widthLimit, children, ...rest } = props;

  return (
    <div
      className={twMerge(cardContainer({ widthLimit, className }))}
      {...rest}
    >
      {children}
    </div>
  );
}

type ContentCardProps = {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  plaintext?: string;
  link?: {
    url: string;
    text: string;
  };
  widthLimit?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
};

export function ContentCard(props: PropsWithChildren<ContentCardProps>) {
  const {
    header,
    footer,
    title,
    subtitle,
    plaintext,
    link,
    widthLimit,
    children,
  } = props;

  return (
    <CardContainer widthLimit={widthLimit}>
      {header && (
        <header className="rounded-t-xl border-b bg-theme-100 px-4 py-3 dark:border-gray-700 dark:bg-theme-900 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{header}</p>
        </header>
      )}

      <article className="flex flex-col p-4 md:p-5">
        {title && (
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="mt-1 text-sm font-medium uppercase text-gray-500">
            {subtitle}
          </p>
        )}
        {plaintext && (
          <p className="mt-2 text-gray-800 dark:text-zinc-400">{plaintext}</p>
        )}
        {children}
        {link && (
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-theme-600 dark:text-emerald-400 dark:hover:text-emerald-600"
            href={link.url}
            target="_blank"
          >
            {link.text}
          </a>
        )}
      </article>

      {footer && (
        <footer className="rounded-b-xl border-t bg-theme-100 px-4 py-3 dark:border-gray-700 dark:bg-theme-900 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
            {footer}
          </p>
        </footer>
      )}
    </CardContainer>
  );
}

type BlockLinkCardProps = {
  url?: string;
  text?: string;
  widthLimit?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  CustomLinkComponent?:
    | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
    | React.ComponentType<React.HTMLAttributes<HTMLAnchorElement>>;
  customLinkProps?: object;
};

export function BlockLinkCard(props: PropsWithChildren<BlockLinkCardProps>) {
  const {
    url,
    text,
    widthLimit,
    CustomLinkComponent,
    customLinkProps,
    children,
  } = props;

  const linkClasses: string = "flex flex-col items-center p-6 sm:p-10";

  const linkContent = (
    <>
      {children}
      {text && <p className="mt-2 font-medium">{text}</p>}
    </>
  );

  return (
    <CardContainer
      widthLimit={widthLimit}
      className="min-w-[240px] text-gray-800 transition-colors hover:bg-theme-200/50 dark:text-white dark:hover:bg-theme-600"
    >
      {CustomLinkComponent ? (
        <CustomLinkComponent
          to={url ? url : "#"}
          className={linkClasses}
          {...customLinkProps}
        >
          {linkContent}
        </CustomLinkComponent>
      ) : (
        <a
          className={linkClasses}
          href={url ? url : "#"}
          target="_blank"
          {...(customLinkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {linkContent}
        </a>
      )}
    </CardContainer>
  );
}
