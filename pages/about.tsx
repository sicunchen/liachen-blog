import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page title="About" description="">
        <Prose>
          <p>Ramblings about technical stuff.</p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
