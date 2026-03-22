import Image from "next/image";
import styles from "./page.module.css";
import StickyHeader from "./components/StickyHeader/StickyHeader";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <StickyHeader />
        <h2 hidden id="about">About</h2>
        <section className={styles.aboutSection}>
          <div className={styles.group}>
              <Image
                className={styles.groupImage}
                src="/next.svg"
                alt="game screenshot"
                width={100}
                height={20}
                priority
              />
              <div className={styles.groupText}>
                <p>
                  Hello
                </p>
                <p className={styles.linedParagraph}>
                  We are a small game development company striving to create compelling, narrative driven, co-op sandbox games.
                </p>
              </div>
          </div>
          <div className={styles.group}>
              <Image
                className={styles.groupImage}
                src="/next.svg"
                alt="game screenshot"
                width={100}
                height={20}
                priority
              />
              <div className={styles.groupText}>
                <p className={styles.linedParagraph}>
                  We create experiences that bring people closer together through collaborative play in rich worlds with deep characters and an emphasis on player agency and replayability.
                </p>
              </div>
          </div>
          <Image
            className={styles.groupImage}
            src="/next.svg"
            alt="game screenshot"
            width={100}
            height={20}
            priority
          />
        </section>
        <h2 id="projects">Midnight Callers</h2>
        <h2 id="team">Team</h2>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>To get started, edit the page.js file.</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
