import styles from "./Navbar.module.sass";
import { navButtonsData } from "./Navbar.utils";
import NavButton from "./NavButton/NavButton";

export default function Navbar() {
  return (
    <div className={styles.root}>
      {navButtonsData.map((button) => (
        <NavButton
          key={button.name}
          name={button.name}
          icon={button.icon}
          alt={button.alt}
          href={button.href}
        />
      ))}
    </div>
  );
}
