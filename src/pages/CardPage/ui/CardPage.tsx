import { SiNextdotjs, SiVite } from "react-icons/si";
import { BlockLinkCard, ContentCard } from "../../../components/library/Card";
import Container from "../../../components/site/Container";
import Section from "../../../components/site/Section";

export default function CardPage() {
  return (
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
        <BlockLinkCard url="https://nextjs.org/" text="NextJS" widthLimit="md">
          <SiNextdotjs className="h-10 w-10" />
        </BlockLinkCard>
      </Section>
    </Container>
  );
}
