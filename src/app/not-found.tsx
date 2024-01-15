import styles from "./not-found.module.css";
import Link from "./ui/link/link";
import Main from "./ui/main/main";
import Navigation from "./ui/navigation/navigation";

export default function NotFound() {
  return (
    <>
      <Navigation logoOnly />
      <Main>
        <h1 className={styles.heading}>
          Oops - there seems to be nothing here
        </h1>
        <Link href="/" variant="primary">
          Go back home
        </Link>
      </Main>
    </>
  );
}
