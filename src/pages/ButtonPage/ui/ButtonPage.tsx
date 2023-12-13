import { Button } from "../../../components/library/Button";
import Container from "../../../components/site/Container";
import Section from "../../../components/site/Section";

export default function ButtonPage() {
  return (
    <Container
      title="Button"
      description="A button is a common graphical user interface (GUI) widget that allows users to interact with a software application or website. When a user clicks or taps on a button, it triggers an action or performs a specific task, such as submitting a form, navigating to a different page, or executing a function in the underlying code."
    >
      <Section
        id="button-primary"
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
        id="button-secondary"
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
        id="button-tertiary"
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
        id="button-destructive"
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
        id="button-icon"
        title="Icon Buttons"
        description="Icon buttons are great for actions that require an icon, such as a back or forward button."
      >
        {["sm", "md", "lg", "xl"].map((size) =>
          ["primary", "secondary", "tertiary"].map((intent) => (
            <Button
              key={`${size}:${intent}`}
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
  );
}
