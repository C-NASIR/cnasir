import React from "react";
import * as styles from "./style.module.css";
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2> About </h2>
      <p className={styles.quote}>
        Twenty years from now you will be more disappointed by the things you
        didn’t do than by the ones you did do. So throw off the bowlines. Sail
        away from the safe harbor. Catch the trade winds in your sails. Explore.
        Dream. Discover. (Mark Twain)
      </p>
      <p className={styles.text}>
        I am a software engineer from Wisconsin. I love reading books, debating
        philosophical topics, getting deep into technical aspects of problems,
        and working with others to achieve collective goals.
      </p>
    </div>
  );
};

export default Contact;
