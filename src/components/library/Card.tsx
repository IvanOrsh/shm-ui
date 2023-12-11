import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const cardContainer = cva(["rounded-xl", "border", "bg-white", "shadow-sm"], {
  variants: {},
  defaultVariants: {},
});

export interface CardContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContainer> {}

export function CardContainer(props: CardContainerProps) {
  const { className, children, ...rest } = props;

  return (
    <div className="w-full max-w-xs" {...rest}>
      <div className={twMerge(cardContainer({ className }))}>{children}</div>
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
};

export function ContentCard(props: PropsWithChildren<ContentCardProps>) {
  const { header, footer, title, subtitle, plaintext, link, children } = props;

  return (
    <CardContainer>
      {header && (
        // eslint-disable-next-line tailwindcss/classnames-order
        <header className="bg-theme-100 rounded-t-xl border-b px-4 py-3 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500 ">{header}</p>
        </header>
      )}

      <article className="flex flex-col p-4 md:p-5">
        {title && <h3 className="text-lg font-bold text-gray-800">{title}</h3>}
        {subtitle && (
          <p className="mt-1 text-sm font-medium uppercase text-gray-500">
            {subtitle}
          </p>
        )}
        {plaintext && <p className="mt-2 text-gray-800">{plaintext}</p>}
        {children}
        {link && (
          <a
            // eslint-disable-next-line tailwindcss/classnames-order
            className="text-theme-500 hover:text-theme-600 mt-5 inline-flex items-center gap-2 text-sm font-medium"
            href={link.url}
            target="_blank"
          >
            {link.text}
          </a>
        )}
      </article>

      {footer && (
        // eslint-disable-next-line tailwindcss/classnames-order
        <footer className="bg-theme-100 rounded-b-xl border-t px-4 py-3 md:px-5 md:py-4">
          <p className="mt-1 text-sm text-gray-500">{footer}</p>
        </footer>
      )}
    </CardContainer>
  );
}

type BlockLinkCardProps = {
  url?: string;
  text?: string;
};

export function BlockLinkCard(props: PropsWithChildren<BlockLinkCardProps>) {
  const { url, text, children } = props;

  return (
    // eslint-disable-next-line tailwindcss/classnames-order
    <CardContainer className="hover:bg-theme-200/50 text-gray-800 transition-colors">
      <a
        className="flex flex-col items-center p-6 sm:p-10"
        href={url ? url : "#"}
        target="_blank"
      >
        {children}
        {text && <p className="mt-2 font-medium">{text}</p>}
      </a>
    </CardContainer>
  );
}
