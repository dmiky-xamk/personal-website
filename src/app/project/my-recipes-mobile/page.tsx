import ProjectPageLayout from "../project-page-layout";
import desktopImg from "@/../public/images/projects/my-recipes-flutter/header-tablet-desktop.png";
import mobileImg from "@/../public/images/projects/my-recipes-flutter/header-mobile.png";
import Section from "@/app/ui/section/section";

export default function Page() {
  return (
    <ProjectPageLayout
      heading="My Recipes - Mobile"
      headerText="While building the web application, it became clear that most of the usage came from mobile devices. I quickly gained interest towards mobile development and decided to build a mobile application for the service. The application is built with Flutter and communicates with the same backend as the web application."
      info={{
        stack: ["Flutter", ".NET", "PostgreSQL"],
        links: {
          sourceCode: "https://github.com/dmiky-xamk/my_recipes_flutter",
        },
      }}
      images={{
        alt: "Preview of the application",
        desktop: desktopImg,
        mobile: mobileImg,
      }}
      disableShadow
    >
      <Section>
        <h2>Introduction</h2>
        <p>
          I started out by thinking about the mobile application as a
          continuation of the web application. My goal was to maintain a similar
          design language and core features while leveraging Flutter's
          capabilities to provide a native-like feel. Additionally, I wanted to
          ensure that the mobile app communicated with the same backend as the
          web app, enabling users to access their data seamlessly across both
          platforms.
        </p>
      </Section>
      <Section>
        <h2>Choosing Flutter for Cross-platform Development</h2>
        <p>
          With no previous experience in mobile development, I started out by
          researching the different options for developing a mobile application.
          Ultimately, I decided to continue with cross-platform development as
          the application didn't require any of the advanced features that
          native development offered. Flutter emerged as the preferred framework
          due to its ease of use, maintainability and the developer experience
          it offered. I also wanted to challenge myself and expand my mindset to
          a different way of thinking from what I was used to with React.
        </p>
      </Section>
      <Section>
        <h2>Design</h2>
        <p>
          To maintain consistency with the web application's design, I adapted
          and expanded upon its visual elements. The mobile app's user interface
          featured a familiar yet refined look, allowing users to effortlessly
          switch between platforms while feeling at home. Additionally, I
          integrated custom features that enhanced the mobile app's
          functionality, creating a unique and engaging experience for users.
        </p>
      </Section>
      <Section>
        <h2>Things Learned</h2>
        <p>
          Developing with Flutter forced me to think about things differently in
          comparison to React. Building the user interface with the help of
          Flutter's expressive UI widgets was a delightful experience, and I was
          able to achieve a result that I was happy with.
        </p>
        <p>
          However, I encountered challenges in structuring the application and
          effectively managing state. To address these hurdles, I applied the
          repository design pattern for the architecture and used Riverpod for
          state management. I was able to achieve a more organized codebase and
          make it easier to delegate responsibilities among different
          components.
        </p>
        <p>
          Overall, developing a mobile application with Flutter was a great
          learning experience. I was able to expand my knowledge and gain a new
          perspective on how to approach development. Perhaps most importantly,
          I was able to build a mobile application that I was proud of.
        </p>
      </Section>
    </ProjectPageLayout>
  );
}
