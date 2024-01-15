import styles from "./project-page-layout.module.css";
import Main from "@/app/ui/main/main";
import Navigation from "@/app/ui/navigation/navigation";
import Link from "@/app/ui/link/link";
import Image, { StaticImageData } from "next/image";
import { Source } from "./source";

interface Image {
  alt: string;
  mobile?: StaticImageData;
  tablet?: StaticImageData;
  desktop: StaticImageData;
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
  images: Image;
  disableShadow?: boolean;
  children: React.ReactNode;
}

export default function ProjectPageLayout({
  heading,
  headerText,
  info,
  images,
  disableShadow,
  children,
}: Props) {
  const stack = info.stack.map((item) => <li key={item}>{item}</li>);

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
        <article className={styles.article}>
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
              {images?.mobile && (
                <Source media="(max-width: 600px)" src={images.mobile.src} />
              )}
              {images?.tablet && (
                <Source media="(max-width: 900px)" src={images.tablet.src} />
              )}
              <Image
                className={`${styles.image} ${disableShadow || styles.shadow}`}
                src={images.desktop}
                alt={images.alt}
                priority
              />
            </picture>
          </header>
          {children}
        </article>
      </Main>
    </>
  );
}
