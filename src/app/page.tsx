import Main from "./ui/main/main";
import Navigation from "./ui/navigation/navigation";
import AboutSection from "./features/about/about-section";
import ProjectsSection from "./features/projects/projects-section";
import InternshipSection from "./features/internship/internship-section";
import ContactSection from "./features/contact/contact-section";
import Header from "./features/header/header";

export default function Page() {
  return (
    <>
      <Navigation tint />
      <Header />
      <Main>
        <AboutSection />
        <ProjectsSection />
        <InternshipSection />
        <ContactSection />
      </Main>
    </>
  );
}
