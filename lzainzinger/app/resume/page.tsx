import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Highlight } from "@/components/ui/highlight";
import { Paragraph } from "@/components/ui/paragraph";
import { WorkHistory } from "@/components/ui/workhistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}