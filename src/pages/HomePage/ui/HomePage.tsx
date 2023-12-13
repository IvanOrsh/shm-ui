import { PropsWithChildren } from "react";
import Container from "../../../components/site/Container";

export default function HomePage(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Container
      title="shm's Components"
      description="A collection of my customized components. Built with React and Tailwind CSS."
    >
      {children}
    </Container>
  );
}
