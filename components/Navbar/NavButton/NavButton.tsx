import Link from "next/link";
import styles from "./NavButton.module.sass";
import Image from "next/image";

export default function NavButton({
    icon,
    alt,
    name,
    href,
}: {
    name: string;
    icon: string;
    alt: string;
    href: string;
}) {

  return (
    <div className={styles.root}>
      <Image src={icon} alt={alt} />
      <a>{name}</a>
      <Link className={styles.navLink} href={href} />
    </div>
  );
}
