import styles from "./section.module.css";

interface Props {
  id?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function Section({ children, id, style }: Props) {
  return (
    <section className={styles.section} id={id} style={style}>
      {children}
    </section>
  );
}
