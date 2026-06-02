"use client";

import Image from "next/image";
import { useState } from "react";
import CopyPopup from "../CopyPopup/CopyPopup";
import styles from "./ContactButton.module.scss";

interface ContactButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  copyIcon: any;
  text: string;
  link: string;
  alt: string;
  isEmail?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  icon,
  text,
  alt,
  isEmail,
  copyIcon,
}) => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setPopupVisible(true);
        setTimeout(() => {
          setPopupVisible(false);
        }, 600);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <>
      <a
        href={isEmail ? `mailto:${text}` : ``}
        className={`${styles.contact_btn}`}
        onClick={
          !isEmail
            ? (e) => {
                e.preventDefault();
              }
            : undefined
        }
      >
        <Image src={icon} alt={alt} className={`${styles.contact_btn_icon}`} />
        <div className="flex items-center">
          <h5 className={`${styles.contact_btn_text}`}>{text}</h5>
          <div className={styles.popup_container}>
            <Image
              className={styles.contact_btn_copy_icon}
              src={copyIcon}
              alt="copy"
              onClick={
                !isEmail && handleCopy
                  ? (e) => {
                      e.preventDefault();
                      handleCopy();
                    }
                  : undefined
              }
            />
            {!isEmail && <CopyPopup visible={popupVisible} />}
          </div>
        </div>
      </a>
    </>
  );
};

export default ContactButton;
