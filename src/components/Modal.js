import React from "react";

const styles = {
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    zIndex: 1,
    backgroundColor: "black",
    opacity: 0.7,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    zIndex: 2,
    backgroundColor: "white",
  },
  title: {
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
};

/**
 * Exo 1: Créer une modal qui prend en props
 *  => title, description, onClose, ...
 */
function Modal(props) {
  const { title, description, onClose, show } = props;

  return show ? (
    <>
      <div style={styles.backdrop} onClick={onClose} />
      <div style={styles.modal}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Modal;
