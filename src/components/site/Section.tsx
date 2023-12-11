import { Children, PropsWithChildren } from "react";

type SectionProps = {
  title: string;
  description: string;
};

export default function Section(props: PropsWithChildren<SectionProps>) {
  const { description, title, children } = props;

  return (
    <>
      {/* Content section */}
      <div>
        {/* Section heading */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        {/* Section description  */}
        <p className="mt-1 text-gray-600">{description}</p>

        {/* Section preview area */}
        <div className="mt-3">
          <div className="flex flex-col rounded-xl border p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {/* The preview stuff aka the child component hat get yeeted here */}
              {Children.map(children, (child, index) => {
                return (
                  <div className="bg-blue-500/50 p-3" key={index}>
                    {child}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
