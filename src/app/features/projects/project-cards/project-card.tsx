import Image, { StaticImageData } from "next/image";
import styles from "./project-card.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  description: string;
  href: string;
  title: string;
  image: StaticImageData;
  github: string;
}

export default function ProjectCard({
  description,
  href,
  title,
  image,
  github,
}: Props) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt="Preview of the application"
      />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>{title}</h3>
          <Link
            className={styles.icon}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project's GitHub page"
          >
            <FaGithub size="24" aria-hidden="true" />
          </Link>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.action} href={href}>
          Project info
        </Link>
        <FaArrowRight aria-hidden="true" />
      </div>
    </div>
  );
}
