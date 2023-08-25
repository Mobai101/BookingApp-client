import React from "react";
import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <section className="blue_section">
      <div className="container">
        <div className={styles.signup_container}>
          <h1>Save time, save money!</h1>
          <h4>Sign up and we'll send the best deals to you</h4>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
