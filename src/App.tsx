import styles from "./App.module.css";
import Navigation from "./features/ui/navigation/navigation";
import useToggle from "./hooks/useToggle";

export default function App() {
  const [isBlurred, toggleIsBlurred] = useToggle(false);

  return (
    <>
      <Navigation onMenuToggle={toggleIsBlurred} />
      <div
        style={{ scrollBehavior: "smooth" }}
        className={`${isBlurred ? styles.blur : ""}`}
      >
        <p style={{ color: "white", fontSize: "1.8rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquid atque cumque dignissimos eos ipsum, officia soluta vero.
          Cumque dolor dolore earum necessitatibus temporibus. Alias aperiam
          aspernatur corporis cum cupiditate doloremque earum eos eum facere
          ipsa iste maiores maxime minus molestiae nam neque odio officia
          pariatur quidem quod quos repellendus, saepe suscipit vel veritatis
          vero voluptatem. Alias aperiam beatae dolores eius error expedita
          fugit illum inventore, molestiae, mollitia sit vel. Debitis doloremque
          fugiat ipsa, nesciunt officiis quia velit veritatis voluptatibus! Amet
          consectetur error fuga fugit ipsum mollitia nulla quibusdam,
          reprehenderit. Alias aliquid aspernatur aut dignissimos distinctio
          ducimus maiores, minus neque non odit porro possimus quo quod quos rem
          repudiandae sequi sint voluptatem. Eligendi fugit ipsa quibusdam
          tempore. Ab animi aperiam atque autem blanditiis commodi debitis ea
          eius est eum excepturi, exercitationem illum impedit ipsam libero
          natus neque nulla odit officia omnis optio pariatur perferendis
          possimus provident quam quas quisquam quo rem repellat repudiandae sed
          sint soluta suscipit totam ut velit voluptatum? Dolorem molestias nam
          quaerat veritatis? Cupiditate distinctio dolorem excepturi expedita
          incidunt, iste libero nostrum obcaecati qui quia quisquam ratione sed
          tempore tenetur totam vero vitae voluptate. Accusamus aspernatur
          cumque earum eos, ipsum nesciunt porro, possimus quaerat, quas quidem
          quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium aliquid atque cumque dignissimos eos ipsum, officia soluta
          vero. Cumque dolor dolore earum necessitatibus temporibus. Alias
          aperiam aspernatur corporis cum cupiditate doloremque earum eos eum
          facere ipsa iste maiores maxime minus molestiae nam neque odio officia
          pariatur quidem quod quos repellendus, saepe suscipit vel veritatis
          vero voluptatem. Alias aperiam beatae dolores eius error expedita
          fugit illum inventore, molestiae, mollitia sit vel. Debitis doloremque
          fugiat ipsa, nesciunt officiis quia velit veritatis voluptatibus! Amet
          consectetur error fuga fugit ipsum mollitia nulla quibusdam,
          reprehenderit. Alias aliquid aspernatur aut dignissimos distinctio
          ducimus maiores, minus neque non odit porro possimus quo quod quos rem
          repudiandae sequi sint voluptatem. Eligendi fugit ipsa quibusdam
          tempore. Ab animi aperiam atque autem blanditiis commodi debitis ea
          eius est eum excepturi, exercitationem illum impedit ipsam libero
          natus neque nulla odit officia omnis optio pariatur perferendis
          possimus provident quam quas quisquam quo rem repellat repudiandae sed
          sint soluta suscipit totam ut velit voluptatum? Dolorem molestias nam
          quaerat veritatis? Cupiditate distinctio dolorem excepturi expedita
          incidunt, iste libero nostrum obcaecati qui quia quisquam ratione sed
          tempore tenetur totam vero vitae voluptate. Accusamus aspernatur
          cumque earum eos, ipsum nesciunt porro, possimus quaerat, quas quidem
          quisquam!
        </p>
        <p id="about" style={{ color: "white", fontSize: "1.8rem" }}>
          About me
        </p>
        <p id="projects" style={{ color: "white", fontSize: "1.8rem" }}>
          Projects
        </p>
        <p id="contact" style={{ color: "white", fontSize: "1.8rem" }}>
          Contact
        </p>
      </div>
    </>
  );
}
