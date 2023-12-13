import { PropsWithChildren } from "react";

import Title from "./Title";

type SectionProps = {
  id?: string;
  title: string;
  description: string;
};

export default function Section(props: PropsWithChildren<SectionProps>) {
  const { id, description, title, children } = props;

  return (
    <>
      {/* Content section */}
      <div>
        {/* Section heading */}
        <Title id={id || title} title={title} />

        {/* Section description  */}
        <p className="mt-1 text-gray-600 dark:text-zinc-400">{description}</p>

        {/* Section preview area */}
        <div className="mt-3">
          <div className="flex flex-col rounded-xl border p-6 shadow-sm dark:border-zinc-700 dark:bg-transparent">
            <div className="flex flex-wrap gap-2">
              {/* The preview stuff aka the child component hat get yeeted here */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
