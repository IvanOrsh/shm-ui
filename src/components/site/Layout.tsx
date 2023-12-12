import { PropsWithChildren } from "react";

import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-800">
      <Navbar />

      {/* Main content area */}
      <main className="p-10 sm:px-16 lg:px-44">
        <div className="mx-auto max-w-3xl space-y-20">{children}</div>
      </main>
    </div>
  );
}
