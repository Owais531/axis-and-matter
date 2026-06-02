import styles from "./CopyPopup.module.scss";

interface PopupProps {
  visible: boolean;
}

const CopyPopup: React.FC<PopupProps> = ({ visible }) => {
  return (
    <div className={`${styles.popup} ${visible ? styles.visible : ""}`}>
      Copied!
    </div>
  );
};

export default CopyPopup;
