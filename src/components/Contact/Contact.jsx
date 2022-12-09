import React from "react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import * as styles from "./style.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <ScrollReveal className={styles.fullWidth}>
        <h2> About </h2>
      </ScrollReveal>
      <ScrollReveal className={styles.fullWidth}>
        <p className={styles.quote}>
          Twenty years from now you will be more disappointed by the things you
          didn’t do than by the ones you did do. So throw off the bowlines. Sail
          away from the safe harbor. Catch the trade winds in your sails.
          Explore. Dream. Discover. (Mark Twain)
        </p>
      </ScrollReveal>
      <ScrollReveal className={styles.fullWidth}>
        <p className={styles.text}>
          I am a software engineer from Wisconsin. I love reading books,
          debating philosophical topics, getting deep into technical aspects of
          problems, and working with others to achieve collective goals.
        </p>
      </ScrollReveal>
      <ScrollReveal className={styles.fullWidth}>
        <p className={styles.notice}>
          I am currently looking for a job. If you would like to chat. Here are
          my socials. Reach Out.
        </p>
      </ScrollReveal>
      <ScrollReveal className={styles.fullWidth}>
        <div className={styles.socialContainer}>
          <a
            className={styles.social}
            href="https://twitter.com/CNASIR2_0"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className={styles.social}
            href="https://github.com/C-NASIR"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className={styles.social}
            href="https://www.linkedin.com/in/cnasir2/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
