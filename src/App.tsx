import Container from "./components/site/Container";
import Navbar from "./components/site/Navbar";
import Section from "./components/site/Section";

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

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
