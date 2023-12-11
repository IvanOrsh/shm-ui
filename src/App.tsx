import { SiGithub, SiYoutube } from "react-icons/si";

import Section from "./components/site/Section";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="flex h-16 items-center px-10 sm:px-16 lg:px-44 ">
          <div className="mx-auto w-full max-w-3xl space-y-20">
            <div className="flex justify-between">
              <div className="flex flex-1 items-center justify-start">
                <a
                  href="/"
                  className="flex h-10 items-center justify-center text-lg font-bold text-gray-800"
                >
                  shm-ui
                </a>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <nav>
                  {/* socials */}
                  <ul className="flex items-center space-x-4">
                    <li className="h-6 w-6">
                      <a
                        href="https://www.youtube.com/"
                        className="block text-gray-800 hover:text-[#ff0000]"
                      >
                        <SiYoutube className="h-full w-full" />
                      </a>
                    </li>
                    <li className="h-6 w-6">
                      <a
                        href="https://github.com/IvanOrsh"
                        className="block text-gray-800 hover:text-[#4078c0]"
                      >
                        <SiGithub className="h-full w-full" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="p-10 sm:px-16 lg:px-44">
        <div className="mx-auto max-w-3xl space-y-20">
          {/* Content container */}
          <header className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Component name
            </h1>
            <p className="text-lg text-gray-800">Component description</p>
          </header>
          <div className="space-y-10 md:space-y-16">
            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>

            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>
          </div>

          {/* Content container */}
          <header className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Component name
            </h1>
            <p className="text-lg text-gray-800">Component description</p>
          </header>
          <div className="space-y-10 md:space-y-16">
            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>

            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
