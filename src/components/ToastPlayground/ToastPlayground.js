import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import ToastVariantRadioButton from "../ToastVariantRadioButton/ToastVariantRadioButton";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");

  const [message, setMessage] = React.useState("")

  function handleSubmit() {
    window.alert(JSON.stringify({variant, message}));
  }
  return (
      <div className={styles.wrapper}>
          <header>
              <img
                  alt="Cute toast mascot"
                  src="/toast.png"
              />
              <h1>Toast Playground</h1>
          </header>

          <form
              className={styles.controlsWrapper}
              onSubmit={(event) => {
                  event.preventDefault();
                  handleSubmit();
              }}
          >
              <div className={styles.row}>
                  <label
                      htmlFor="message"
                      className={styles.label}
                      style={{ alignSelf: "baseline" }}
                  >
                      Message
                  </label>
                  <div className={styles.inputWrapper}>
                      <textarea
                          id="message"
                          className={styles.messageInput}
                          value={message}
                          onChange={(event) => {
                              setMessage(event.target.value);
                          }}
                      />
                  </div>
              </div>

              <fieldset className={styles.row}>
                  <div className={styles.label}>Variant</div>
                  <div
                      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  >
                      {VARIANT_OPTIONS.map((option) => (
                          <ToastVariantRadioButton
                              key={option}
                              value={option}
                              checked={variant === option}
                              onChange={(event) => {
                                  setVariant(event.target.value);
                              }}
                          />
                      ))}
                  </div>
              </fieldset>

              <div className={styles.row}>
                  <div className={styles.label} />
                  <div
                      className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                  >
                      <Button onSubmit={handleSubmit}>Pop Toast!</Button>
                  </div>
              </div>
          </form>
      </div>
  );
}

export default ToastPlayground;
