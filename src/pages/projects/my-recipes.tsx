import ProjectPageLayout from "../../features/ui/layout/project-page-layout";
import Section from "../../features/ui/section/section";
import styles from "./my-recipes.module.css";
import wireframe from "../../assets/projects/my-recipes-web/wireframe.jpg";

export default function MyRecipes() {
  return (
    <ProjectPageLayout
      heading="My Recipes - Web"
      headerText="This personal project is a full-stack web application that allows users to manage and organize their favorite recipes. The application also features a recipe search functionality based on the ingredients that users have available. Developed with React and .NET, this project serves as a learning experience for implementing good practices and technologies in web development."
      info={{
        stack: [".NET", "React", "PostgreSQL"],
        links: {
          site: "https://my-recipes-etwl.onrender.com/",
          sourceCode: "https://github.com/dmiky-xamk/MyRecipes",
        },
      }}
      image={{
        alt: "Preview of the application's user interface",
        desktop: "/src/assets/projects/my-recipes-web/header-desktop.jpg",
        tablet: "/src/assets/projects/my-recipes-web/header-tablet.jpg",
        mobile: "/src/assets/projects/my-recipes-web/header-mobile.jpg",
      }}
    >
      <Section>
        <h2>Initial Thoughts</h2>
        <p>
          One important lesson I learned from previous projects is the value of
          careful planning and design before diving into code. To improve my
          skills, I took the opportunity to learn Figma and used it to plan and
          design the user interface for this project.
        </p>
        <p>
          Another key aspect before diving into code was determining the
          required data models upfront. I found that starting from the database
          and working my way up felt the most intuitive approach for me.
        </p>
        <figure className={styles.figure}>
          <img src={wireframe} alt="Early wireframe of the application" />
          <figcaption>Early wireframe of the application</figcaption>
        </figure>
      </Section>
      <Section>
        <h2>Stack</h2>
        <p>
          Selecting the appropriate technologies was relatively straightforward
          for me. Given the need for a reactive user interface and my previous
          experience with React, it was a natural choice. I also recognized the
          need for a backend to handle key things such as authentication and
          interaction with the database.
        </p>
        <p>
          For the backend, I opted for .NET due to my familiarity with it and my
          desire to expand my knowledge further. As for the database, I
          initially chose to use SQLite for testing purposes, but as I explored
          potential hosting options, I discovered that PostgreSQL was the most
          commonly used database. As a result, I set up a local PostgreSQL
          database for testing to ensure a smooth transition in the future.
        </p>
      </Section>
      <Section>
        <h2>Workflow</h2>
        <p>
          During the development I took upon a challenge to improve my workflow
          from previous projects. I wanted to implement a more structured
          approach to development, so I took advantage of the project management
          tools in Azure DevOps. I created work items and Git branches for each
          feature and bug fix to help me stay organized and focused on the task
          at hand.
        </p>
      </Section>
      <Section>
        <h2>Lessons Learned</h2>
        <p>
          As my first full-stack project, I gained valuable insights into the
          entire process of developing a full-stack application, from project
          planning to deployment on a server. I could talk all day about the
          things I learned, but I'll focus on the ones that struck me the most.
        </p>
        <p>
          Initially, I encountered some challenges in defining the project's
          architecture. I started with a multi-project solution using clean
          architecture but eventually realized that it introduced unnecessary
          complexity given the project's size. I opted for a more vertical
          architecture approach, organizing the application by its features.
          This approach felt more intuitive and made code navigation easier.
        </p>
        <p>
          Something that I'm really glad to have picked up is testing. I had
          trouble figuring out what and how to test at first, but after some
          research and practice I started to figure it out. For the backend, I
          implemented integration tests that run the application in memory and
          test the endpoints, just like a client would. For the frontend, I
          developed tests for form validation and submission, as they are
          critical components of the application.
        </p>
        <p>
          Deploying a full-stack application presented its own set of
          challenges. While finding a hosting solution for a static React
          application was straightforward, hosting the backend required more
          consideration. Ultimately, I chose Heroku, which offers a student plan
          and a PostgreSQL database. I also set up a CI/CD pipeline using Azure
          DevOps to automate testing and deployment.
        </p>
      </Section>
    </ProjectPageLayout>
  );
}
