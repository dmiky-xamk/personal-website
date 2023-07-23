import styles from "./projects-section.module.css";
import Section from "../ui/section/section";
import ProjectCard from "./project-cards/project-card";
import myRecipesWebImg from "../../assets/projects/my-recipes-web/card-image.jpg";
import myRecipesMobileImg from "../../assets/projects/my-recipes-flutter/card-image.jpg";

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard
          title="My Recipes - Web"
          description="A full stack web application for storing recipes, searching for them using the ingredients and managing a shopping list."
          href="/project/my-recipes-web"
          image={myRecipesWebImg}
          github="https://github.com/dmiky-xamk/MyRecipes"
        />
        <ProjectCard
          title="My Recipes - Mobile"
          description=" A continuation of the My Recipes web application, this time built using Flutter to create a mobile version."
          href="/project/my-recipes-mobile"
          image={myRecipesMobileImg}
          github="https://github.com/dmiky-xamk/my_recipes_flutter"
        />
      </div>
    </Section>
  );
}
