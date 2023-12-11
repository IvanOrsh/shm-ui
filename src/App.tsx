import Container from "./components/site/Container";
import Layout from "./components/site/Layout";
import Section from "./components/site/Section";

function App() {
  return (
    <Layout>
      <Container description="Container description" title="Container title">
        <Section description="Section description" title="Section title">
          <div>component 1</div>
          <div>component 2</div>
        </Section>

        <Section description="Section description" title="Section title">
          <div>component 1</div>
          <div>component 2</div>
        </Section>
      </Container>

      <Container description="Container description" title="Container title">
        <Section description="Section description" title="Section title">
          <div>component 1</div>
          <div>component 2</div>
        </Section>

        <Section description="Section description" title="Section title">
          <div>component 1</div>
          <div>component 2</div>
        </Section>
      </Container>
    </Layout>
  );
}

export default App;
