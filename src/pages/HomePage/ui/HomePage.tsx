import { RxBoxModel, RxButton, RxIdCard, RxInput } from "react-icons/rx";
import { Link } from "react-router-dom";

import { BlockLinkCard } from "../../../components/library/Card";
import Container from "../../../components/site/Container";

export default function HomePage() {
  return (
    <Container
      title="shm's Components"
      description="A collection of my customized components. Built with React and Tailwind CSS."
    >
      <div className="mt-8 grid gap-4 text-black dark:text-white sm:grid-cols-2 sm:gap-6">
        <BlockLinkCard
          CustomLinkComponent={Link}
          url="button"
          text="Button"
          widthLimit="full"
        >
          <RxButton className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          url="card"
          text="Card"
          widthLimit="full"
        >
          <RxIdCard className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          url="input"
          text="Input"
          widthLimit="full"
        >
          <RxInput className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          url="dialog"
          text="Dialog"
          widthLimit="full"
        >
          <RxBoxModel className="h-10 w-10" />
        </BlockLinkCard>
      </div>
    </Container>
  );
}
