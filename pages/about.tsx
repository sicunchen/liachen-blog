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
            Hi! I'm a front end developer working at the University of Michigan. I enjoy building delightful web interfaces and learning about web technologies. Here you can read about my learning journey and occasional film/music reviews.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
