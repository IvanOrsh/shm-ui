import { Input } from "../../../components/library/Input";
import Container from "../../../components/site/Container";
import Section from "../../../components/site/Section";

export default function InputPage() {
  return (
    <Container
      title="Inputs"
      description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with an manipulate content on a web page."
    >
      <Section
        id="input-basic"
        title="Basic"
        description="Basic inputs with a placeholder."
      >
        {/* Basic input */}
        <Input type="text" placeholder="Basic input: start typing here" />

        {/* Disabled input */}
        <Input type="text" disabled placeholder="Disabled input 🥺" />
      </Section>

      <Section id="input-label" title="Label" description="Input with a label.">
        {/* Basic input with label */}
        <Input type="email" label="Email" placeholder="you@site.com" />
      </Section>

      <Section
        id="input-description"
        title="Description"
        description="Input with a description."
      >
        {/* Basic input with description*/}
        <Input
          type="password"
          description="we'll totally never share your password, friend"
          placeholder="secret password"
        />
      </Section>
    </Container>
  );
}
