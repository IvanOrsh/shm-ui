import { SiGithub, SiYoutube } from "react-icons/si";

import Container from "./components/site/Container";
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
          <Container
            description="Container description"
            title="Container title"
          >
            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>

            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>
          </Container>

          <Container
            description="Container description"
            title="Container title"
          >
            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>

            <Section description="Section description" title="Section title">
              <div>component 1</div>
              <div>component 2</div>
            </Section>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
