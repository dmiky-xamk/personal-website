import styles from "./project-page-layout.module.css";
import Main from "../main/main";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Link from "../link/link";

interface Image {
  alt: string;
  mobile?: string;
  tablet?: string;
  desktop: string;
}

interface Links {
  sourceCode?: string;
  site?: string;
}

interface Info {
  stack: string[];
  links: Links;
}

interface Props {
  heading: string;
  headerText: string;
  info: Info;
  image: Image;
  disableShadow?: boolean;
  children: React.ReactNode;
}

export default function ProjectPageLayout({
  heading,
  headerText,
  info,
  image,
  disableShadow,
  children,
}: Props) {
  const stack = info.stack.map((item) => <li>{item}</li>);

  const siteUrl = info.links.site ? (
    <li>
      <Link href={info.links.site} variant="tertiary" blank>
        Live site
      </Link>
    </li>
  ) : (
    "-"
  );

  const sourceUrl = info.links.sourceCode ? (
    <li>
      <Link href={info.links.sourceCode} variant="tertiary" blank>
        Source code
      </Link>
    </li>
  ) : (
    "-"
  );

  return (
    <>
      <Navigation logoOnly />
      <Main>
        <article>
          <header className={styles.header}>
            <span className={styles.subheading}>Project Details</span>
            <h1 className={styles.heading}>{heading}</h1>
            <p>{headerText}</p>
            <div className={styles.info}>
              <ul aria-label="Stack">{stack}</ul>
              <ul aria-label="Links">
                {siteUrl}
                {sourceUrl}
              </ul>
            </div>
            <picture>
              {image?.mobile && (
                <source media="(max-width: 600px)" srcSet={image.mobile} />
              )}
              {image?.tablet && (
                <source media="(max-width: 900px)" srcSet={image.tablet} />
              )}
              <img
                className={`${styles.image} ${disableShadow || styles.shadow}`}
                src={image.desktop}
                alt={image.alt}
              />
            </picture>
          </header>
          {children}
        </article>
      </Main>
      <Footer />
    </>
  );
}
