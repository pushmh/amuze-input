import styles from "./bottom-group1.module.css";

const BottomGroup1 = () => {
  return (
    <footer className={styles.bottomGroup}>
      <div className={styles.rectangle} />
      <div className={styles.line} />
      <div className={styles.bottomGroupInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.optionsParent}>
              <div className={styles.options}>
                Legal Cookies Privacy Policy Accessibility Safety Contact Us
              </div>
              <div className={styles.expand}>Expand Your Preferences</div>
            </div>
            <div className={styles.feedback}>Feedback</div>
          </div>
          <div className={styles.companyName}>© Amuze 2024</div>
        </div>
      </div>
    </footer>
  );
};

export default BottomGroup1;
