import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Highlight } from "@/components/ui/highlight";
import { Paragraph } from "@/components/ui/paragraph";
import { WorkHistory } from "@/components/ui/workhistory";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "lzainzinger - Resume",
  description: "Resume of Lukas Zainzinger",
};

export default function Home() {
  return (
    <Container>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className=" mt-4">
      I am a <Highlight>DevOps Engineer</Highlight> mainly working on developing data engineeringapplications for data transfer between data platforms. 
      Furthermore working on Cloud Infrastructure and Solutions.
      <br />
      <br />
      At the moment I am also studying <Highlight>Digital Business</Highlight> as a Bachelors Degree at FH Wien der WKW.

      </Paragraph>
      <WorkHistory />
    </Container>
  );
}