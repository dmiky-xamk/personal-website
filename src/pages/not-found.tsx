import styles from "./not-found.module.css";
import Main from "../features/ui/main/main";
import Navigation from "../features/ui/navigation/navigation";
import Link from "../features/ui/link/link";

export default function NotFound() {
  return (
    <>
      <Navigation logoOnly />
      <Main>
        <h1 className={styles.heading}>
          Oops - there seems to be nothing here
        </h1>
        <Link href="/" variant="primary" routerLink>
          Go back home
        </Link>
      </Main>
    </>
  );
}
