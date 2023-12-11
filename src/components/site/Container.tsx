import { PropsWithChildren } from "react";

type ContainerProps = {
  title: string;
  description: string;
};

export default function Container(props: PropsWithChildren<ContainerProps>) {
  const { title, description, children } = props;

  return (
    <>
      {/* Content container */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          {title}
        </h1>
        <p className="text-lg text-gray-800">{description}</p>
      </header>
      <div className="space-y-10 md:space-y-16">{children}</div>
    </>
  );
}
