import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description=""
      >
        <Prose>
          <p>
            Hi! I&apos;m Lia and welcome to my blog. Here I scribble down my thoughts about...anything.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
