import Link from "@/app/ui/link/link";
import Section from "@/app/ui/section/section";

export default function ContactSection() {
  return (
    <Section id="contact" style={{ textAlign: "center" }}>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me via email using the button below. I would
        be delighted to connect and discuss potential opportunities to
        contribute to your team and make a positive impact. Let's collaborate
        and create something great together!
      </p>
      <Link variant="primary" href="mailto:mikael@mikaelkyllonen.com">
        Send me an email
      </Link>
    </Section>
  );
}
