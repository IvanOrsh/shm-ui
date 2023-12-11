import { SiNextdotjs, SiVite } from "react-icons/si";

import { Button } from "./components/library/Button";
import { BlockLinkCard, ContentCard } from "./components/library/Card";
import { Input } from "./components/library/Input";
import Container from "./components/site/Container";
import Layout from "./components/site/Layout";
import Section from "./components/site/Section";

function App() {
  return (
    <Layout>
      {/* button */}
      <Container
        title="Button"
        description="A button is a common graphical user interface (GUI) widget that allows users to interact with a software application or website. When a user clicks or taps on a button, it triggers an action or performs a specific task, such as submitting a form, navigating to a different page, or executing a function in the underlying code."
      >
        <Section
          title="Primary"
          description="Primary actions should be obvious. Solid, high contrast background colors work great here."
        >
          {["sm", "md", "lg", "xl"].map((size) => (
            <Button
              key={size}
              intent="primary"
              size={size as "sm" | "md" | "lg" | "xl"}
            >
              Primary: {size}
            </Button>
          ))}
          <Button intent="primary" disabled>
            Primary: disabled
          </Button>
        </Section>

        <Section
          title="Secondary"
          description="Secondary actions actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
        >
          {["sm", "md", "lg", "xl"].map((size) => (
            <Button
              key={size}
              intent="secondary"
              size={size as "sm" | "md" | "lg" | "xl"}
            >
              Secondary: {size}
            </Button>
          ))}
          <Button intent="secondary" disabled>
            Secondary: disabled
          </Button>
        </Section>

        <Section
          title="Tertiary"
          description="Tertiary actions should be discoverable but unobtrusive. Styling these actions like links is usually the best approach"
        >
          {["sm", "md", "lg", "xl"].map((size) => (
            <Button
              key={size}
              intent="tertiary"
              size={size as "sm" | "md" | "lg" | "xl"}
            >
              Tertiary: {size}
            </Button>
          ))}
          <Button intent="tertiary" disabled>
            Tertiary: disabled
          </Button>
        </Section>

        <Section
          title="Destructive"
          description="Destructive actions typically result in the removal of an item, and may result in an undesirable consequence."
        >
          {["sm", "md", "lg", "xl"].map((size) => (
            <Button
              key={size}
              intent="destructive"
              size={size as "sm" | "md" | "lg" | "xl"}
            >
              Destructive: {size}
            </Button>
          ))}
          <Button intent="destructive" disabled>
            Destructive: disabled
          </Button>
        </Section>

        <Section
          title="Icon Buttons"
          description="Icon buttons are great for actions that require an icon, such as a back or forward button."
        >
          {["sm", "md", "lg", "xl"].map((size) =>
            ["primary", "secondary", "tertiary"].map((intent) => (
              <Button
                key={size}
                intent={intent as "primary" | "secondary" | "tertiary"}
                btnType="icon"
                size={size as "sm" | "md" | "lg" | "xl"}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7v14"
                  />
                </svg>
              </Button>
            ))
          )}
        </Section>
      </Container>

      {/* card */}
      <Container
        title="Card"
        description="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options."
      >
        <Section
          title="Simple"
          description="Simple cards display content and can provide a distinct link that can be selected."
        >
          {/* Simple card */}
          <ContentCard
            title="Card title"
            subtitle="card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{
              url: "#",
              text: "Card Link",
            }}
          ></ContentCard>
        </Section>

        <Section
          title="Simple with a header and footer"
          description="Add an optional header and/or footer within a card/"
        >
          {/* Simple card with header */}
          <ContentCard
            header="Featured"
            title="Card title"
            subtitle="card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{
              url: "#",
              text: "Card Link",
            }}
          ></ContentCard>

          {/* Simple card with footer */}
          <ContentCard
            footer="Last updated 5 mins ago"
            title="Card title"
            subtitle="card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content."
            link={{
              url: "#",
              text: "Card Link",
            }}
          ></ContentCard>
        </Section>

        <Section
          title="Block link"
          description="A simple card enhanced into a selectable block link"
        >
          {/* Vite card */}
          <BlockLinkCard url="https://vitejs.dev/" text="Vite">
            <SiVite className="h-10 w-10" />
          </BlockLinkCard>

          {/* NextJS card */}
          <BlockLinkCard url="https://nextjs.org/" text="NextJS">
            <SiNextdotjs className="h-10 w-10" />
          </BlockLinkCard>
        </Section>
      </Container>

      {/* Inputs */}
      <Container
        title="Inputs"
        description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with an manipulate content on a web page."
      >
        <Section title="Basic" description="Basic inputs with a placeholder.">
          {/* Basic input */}
          <Input type="text" placeholder="Basic input: start typing here" />

          {/* Disabled input */}
          <Input type="text" disabled placeholder="Disabled input" />
        </Section>

        <Section title="Label" description="Input with a label.">
          {/* Basic inputs */}
        </Section>

        <Section title="Description" description="Input with a description.">
          {/* Basic inputs */}
        </Section>
      </Container>
    </Layout>
  );
}

export default App;
