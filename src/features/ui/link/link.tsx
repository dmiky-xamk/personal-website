import styles from "./link.module.css";
import { Link as RouterLink } from "wouter";

interface Props {
  variant: "primary" | "secondary" | "tertiary";
  href: string;
  customClass?: string;
  blank?: boolean;
  routerLink?: boolean;
  children: React.ReactNode;
}

export default function Link({
  variant,
  href,
  customClass,
  blank,
  routerLink,
  children,
}: Props) {
  const linkStyles =
    variant === "primary"
      ? `${styles.link} ${styles.primary}`
      : variant === "secondary"
      ? `${styles.link} ${styles.secondary}`
      : `${styles.link} ${styles.tertiary}`;

  const blankAttributes = { target: "_blank", rel: "noopener, noreferrer" };

  return routerLink ? (
    <RouterLink href={href} className={`${linkStyles} ${customClass ?? ""}`}>
      {children}
    </RouterLink>
  ) : (
    <a
      href={href}
      className={`${linkStyles} ${customClass ?? ""}`}
      {...(blank && blankAttributes)}
    >
      {children}
    </a>
  );
}
