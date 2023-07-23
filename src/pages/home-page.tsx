import AboutSection from "../features/about/about-section";
import ContactSection from "../features/contact/contact-section";
import Header from "../features/header/header";
import InternshipSection from "../features/internship/internship-section";
import ProjectsSection from "../features/projects/projects-section";
import Footer from "../features/ui/footer/footer";
import Link from "../features/ui/link/link";
import Main from "../features/ui/main/main";
import Navigation from "../features/ui/navigation/navigation";
import styles from "./home-page.module.css";

export default function HomePage() {
  return (
    <>
      <Link variant="primary" href="#header" customClass={styles.skip}>
        Skip to content
      </Link>
      <Navigation tint />
      <Header />
      <Main>
        <AboutSection />
        <ProjectsSection />
        <InternshipSection />
        <ContactSection />
      </Main>
      <Footer />
    </>
  );
}
