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
          <Image
            className={`${styles.image1} ${styles.pairImage}`}
            src="/dance.jpg"
            alt="game screenshot"
            width={1536}
            height={2048}
            priority
          />
          <div className={styles.firstPairContainer}>
            <div className={styles.pair}>
              <Image
                className={styles.pairImage}
                src="/ladyluisa.jpg"
                alt="game screenshot"
                width={1536}
                height={2048}
                priority
              />
              <div className={styles.pairText}>
                <p className={styles.paragraph}>
                  Hello.
                </p>
                <p className={styles.linedParagraph}>
                  We are a small game development company striving to create compelling, narrative driven, co-op sandbox games.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.secondPairContainer}>
            <div className={styles.pair}>
              <Image
                className={styles.pairImage}
                src="/iris.jpg"
                alt="game screenshot"
                width={1080}
                height={2040}
                priority
              />
              <div className={`${styles.pairText}`}>
                <p className={styles.linedParagraph}>
                  We create experiences that bring people closer together through collaborative play in rich worlds with deep characters and an emphasis on player agency and replayability.
                </p>
              </div>
            </div>
          </div>
          {/* <div className={styles.topRow}> */}
            
            {/* <div className={styles.pair}>
              <Image
                className={styles.pairImage}
                src="/ladyluisa.jpg"
                alt="game screenshot"
                width={1536}
                height={2048}
                priority
              />
              <div className={styles.pairText}>
                <p className={styles.paragraph}>
                  Hello.
                </p>
                <p className={styles.linedParagraph}>
                  We are a small game development company striving to create compelling, narrative driven, co-op sandbox games.
                </p>
              </div>
            </div> */}
          {/* </div> */}
          {/* <div className={styles.group}>
            <Image
              className={styles.groupImage}
              src="/iris.jpg"
              alt="game screenshot"
              width={1080}
              height={2040}
              priority
            />
            <div className={styles.groupText}>
              <p className={styles.linedParagraph}>
                We create experiences that bring people closer together through collaborative play in rich worlds with deep characters and an emphasis on player agency and replayability.
              </p>
            </div>
          </div> */}
          {/* <div className={styles.group}>
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
          /> */}
        </section>
        {/* <h2 hidden id="projects">Midnight Callers</h2>
        <Image
          className={styles.midnightCallersImage}
          src="/"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h2 id="team">Team</h2> */}
      </main>
    </div>
  );
}
